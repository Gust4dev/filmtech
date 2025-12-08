import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Layers } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  onClick: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index, onClick }) => {
  const [active, setActive] = useState(2); // Start in the middle-ish
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const count = item.images.length;
  // Slower rotation as requested (5s)
  const rotationInterval = 3000; 

  const startRotation = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, rotationInterval);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Stagger start prevents all carousels moving at once
    const delay = setTimeout(() => {
      startRotation();
    }, index * 800);

    return () => {
      clearTimeout(delay);
      stopRotation();
    };
  }, [index, count]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    stopRotation();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startRotation();
  };

  // 3D Logic adapted from User's reference
  const getStyle = (i: number) => {
    // Calculate distance with wrap-around logic for infinite-feel carousel
    // Note: The reference code didn't wrap, but for a continuously rotating carousel we need to handle indices carefully.
    // However, the reference simple logic: i < active, i > active. 
    // To keep it simple and stable like the reference:
    
    // We treat 'active' as the focal point.
    // We need to render ALL images, but positioned relative to 'active'.
    
    const offset = i - active;
    const absOffset = Math.abs(offset);
    
    // Config values based on "landscape" and "bem maior" needs
    const X_SPACING = 60; // Space between items
    const SCALE_STEP = 0.2; // How much it shrinks per step
    const ROTATION = 1; // Degree of rotation (reference had 1deg, seems subtle)
    
    let style: React.CSSProperties = {
       transition: 'all 0.8s ease-in-out',
       position: 'absolute',
       width: '70%', // "deixe a foto um pouco menor" relative to container
       height: '90%', // Keep aspect
       left: '15%', // Center it (100% - 70%) / 2
       top: '5%',
       borderRadius: '12px',
       overflow: 'hidden',
       boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    };

    if (i === active) {
      return {
        ...style,
        transform: 'none',
        zIndex: 20,
        filter: 'none',
        opacity: 1,
        border: '2px solid #dc2626', // Red border for active
      };
    } else if (i > active) {
      // Right side
      const stt = offset;
      return {
        ...style,
        transform: `translateX(${X_SPACING * stt}px) scale(${1 - SCALE_STEP * stt}) perspective(500px) rotateY(-${ROTATION}deg)`,
        zIndex: 10 - stt,
        filter: 'blur(3px)',
        opacity: stt > 2 ? 0 : 0.6,
        pointerEvents: 'none', // Only active is clickable
      };
    } else {
      // Left side
      const stt = Math.abs(offset);
      return {
        ...style,
        transform: `translateX(${-X_SPACING * stt}px) scale(${1 - SCALE_STEP * stt}) perspective(500px) rotateY(${ROTATION}deg)`,
        zIndex: 10 - stt,
        filter: 'blur(3px)',
        opacity: stt > 2 ? 0 : 0.6,
        pointerEvents: 'none',
      };
    }
  };

  // We need to handle the array wrap-around effectively for the render loop.
  // The simple reference logic fails if we just map index 0..length when active is last.
  // To simulate infinite carousel visually without complex math, we can just render the items centered around active.
  // Actually, let's stick to the user's exact logic which was a linear slider. 
  // "active = active + 1 < items.length ? active + 1 : active" -> Reference stops at end.
  // But for a portfolio we want loop. 
  // Let's implement a "Infinite View" by mapping a shifted window of indices? 
  // EASIER WAY: Just loop active index 0 -> length-1. 
  // And in getStyle, handle the wrap logic? 
  // The reference logic: `i - active`. If active is 0, and i is 4 (last), distance is 4 (far right).
  // Ideally previous of 0 is 4. 
  // Let's enhance the logic to find shortest distance in a circle.
  
  const getCircularStyle = (i: number) => {
    let distance = i - active;
    
    // Adjust for shortest path wrap-around
    if (distance > count / 2) distance -= count;
    if (distance < -count / 2) distance += count;

    const absDist = Math.abs(distance);
    const sign = Math.sign(distance); // 1 for right, -1 for left

    // If it's too far, hide it to prevent visual glitches AND save performance
    // VISUAL UPDATE: Only show 3 items (Active, Left, Right) regardless of total count
    if (absDist > 1) {
       return { display: 'none' };
    }

    const stt = absDist;
    // User requested: "vai levemente para a esquerda... ficando branca... bordas vermelhas"
    // Apply transforms
    const translateX = sign * (120 * stt); // 120px spacing
    const scale = 1 - (0.2 * stt);
    const rotateY = sign * -5; // Negative rotate for right, Positive for left (inwards)
    // REMOVED COMPLEX BLUR -> Major performance killer on large images
    const zIndex = 20 - stt;
    // Requested: "ultimo com menos opacidade" - significantly reduced from 0.6 to 0.3
    const opacity = stt === 0 ? 1 : 0.3;
    
    return {
       position: 'absolute' as const,
       // Performance Optimization: hint browser to promote to layer
       willChange: 'transform, opacity',
       backfaceVisibility: 'hidden', 
       transition: 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)',
       width: '80%', // Slightly smaller as requested
       height: '100%',
       left: '10%', // Center (100-80)/2
       top: 0,
       borderRadius: '16px',
       overflow: 'hidden',
       // Simplified shadow
       boxShadow: stt === 0 ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : 'none',
       transform: `translateX(${translateX}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
       zIndex: zIndex,
       // Removed blur(), only using brightness and opacity for depth
       filter: stt === 0 ? 'none' : `brightness(0.5)`,
       opacity: opacity,
       border: stt === 0 ? '2px solid #dc2626' : '1px solid rgba(255,255,255,0.1)',
       backgroundColor: '#1c1917', // stone-900 background for card
    };
  };

  return (
    <div 
      className="group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(item)}
    >
      {/* Title & Info outside the carousel to stay stable */}
      <div className="mb-4 flex flex-col items-center">
         <h3 className="text-xl font-bold text-dark-lead uppercase tracking-wider text-center h-[5.5rem] flex items-center justify-center px-4 leading-tight">{item.title}</h3>
         <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-widest">
            <Layers size={12} style={{ shapeRendering: 'geometricPrecision' }} />
            <span>{count} Imagens</span>
         </div>
      </div>

      {/* 3D Carousel Container - Aspect Video for Landscape */}
      <div className="relative w-full aspect-video perspective-1000 flex items-center justify-center">
        {item.images.map((img, i) => {
          // Circular distance logic
          let distance = i - active;
          if (distance > count / 2) distance -= count;
          if (distance < -count / 2) distance += count;
          const absDist = Math.abs(distance);
          
          // Virtualization: Don't render if too far
          // VISUAL UPDATE: Only show 3 items (Active, Left, Right)
          if (absDist > 1) return null;

          return (
            <div
              key={i}
              style={getCircularStyle(i)}
              className="flex items-center justify-center bg-stone-900"
            >
              <img 
                 src={img} 
                 alt="" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-full object-cover"
              />
              
              {/* Overlay for Active Item Hover */}
              {i === active && (
                 <>
                    <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}>
                       <div className="bg-red-600/90 text-white p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 size={24} style={{ shapeRendering: 'geometricPrecision' }} />
                       </div>
                    </div>
                    <div className={`absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
                       {i + 1} / {count}
                    </div>
                 </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
