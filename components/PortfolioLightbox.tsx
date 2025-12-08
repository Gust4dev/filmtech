import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioLightboxProps {
  isOpen: boolean;
  album: PortfolioItem | null;
  onClose: () => void;
}

// Helper to wrap index safely
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({ isOpen, album, onClose }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // We only run this reset when the album changes or opens
  useEffect(() => {
    if (isOpen) {
      setPage([0, 0]);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, album]);

  const imageIndex = wrap(0, album?.images.length || 0, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') paginate(1);
    if (e.key === 'ArrowLeft') paginate(-1);
  };

  // Attach global key listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, isOpen]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1, 
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1,
    })
  };

  if (!isOpen || !album) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="text-white pointer-events-auto">
          <h3 className="text-xl font-bold">{album.title}</h3>
          <p className="text-sm text-stone-400 brand-font flex items-center gap-2">
            <ImageIcon size={14} />
            {imageIndex + 1} / {album.images.length}
          </p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors pointer-events-auto"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
        
        {/* Desktop Click Navigation Zones (Invisible) */}
        {!isMobile && (
          <>
            <div 
              className="absolute left-0 top-0 bottom-0 w-1/2 z-30 cursor-pointer"
              onClick={() => paginate(-1)}
              title="Previous"
            ></div>
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/2 z-30 cursor-pointer" 
              onClick={() => paginate(1)}
              title="Next"
            ></div>
          </>
        )}

        {/* Desktop Navigation Arrows (Visual Only now, acts as overlay on zones) */}
        <button 
          onClick={(e) => { e.stopPropagation(); paginate(-1); }}
          className="absolute left-8 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all transform hover:scale-110 z-40 hidden md:block border border-white/10 hover:border-red-600 pointer-events-auto"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page} // Key is page, ensures animation triggers always
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                // Drag Logic: DISABLED on Desktop
                drag={isMobile ? "x" : false} 
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                dragMomentum={false}
                onDragEnd={(e, { offset, velocity }) => {
                   if (!isMobile) return;
                   const swipe = offset.x;
                   const swipeVelocity = velocity.x;

                   // 1. Priority: Distance (Long Swipes) - Always trust the visual drag
                   if (swipe < -50) {
                     paginate(1);
                   } else if (swipe > 50) {
                     paginate(-1);
                   } 
                   // 2. Secondary: Velocity (Short Flicks) - Only if distance wasn't enough
                   else if (swipeVelocity < -500) {
                     paginate(1);
                   } else if (swipeVelocity > 500) {
                     paginate(-1);
                   }
                }}
                className="absolute inset-0 flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing touch-none will-change-transform z-20 pointer-events-auto"
              >
                  <img 
                    src={album.images[imageIndex]} 
                    alt={`${album.title} - View ${imageIndex + 1}`}
                    className="max-h-full max-w-full object-contain shadow-2xl select-none pointer-events-none" 
                  />
              </motion.div>
            </AnimatePresence>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); paginate(1); }}
          className="absolute right-8 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all transform hover:scale-110 z-40 hidden md:block border border-white/10 hover:border-red-600 pointer-events-auto"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Thumbnails Strip */}
      <div className="w-full h-auto bg-stone-900 border-t border-white/10 p-4 flex items-center justify-center z-50 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex gap-3 px-4 min-w-min mx-auto">
            {album.images.map((img, idx) => (
            <button
                key={idx}
                onClick={() => {
                   // Calculate direction based on current page vs target index
                   // Simplistic approach: if target > current index, go right
                   // But since we use 'page' (which can be infinite), we should just setPage directly?
                   // Problem with paginate is it relies on being relative.
                   // Ideally we find the closest page number that matches this index.
                   // But for simplicity in this artifact, we reset page to the target index if it's within range, 
                   // or we just calculate the difference.
                   const diff = idx - imageIndex; 
                   // We add diff to page.
                   setPage([page + diff, diff > 0 ? 1 : -1]);
                }}
                className={`flex-shrink-0 relative w-16 h-12 md:w-24 md:h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                idx === imageIndex 
                    ? 'border-red-600 scale-110 opacity-100 ring-2 ring-red-600/50 z-10' 
                    : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'
                }`}
            >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
            </button>
            ))}
        </div>
      </div>

    </div>
  );
};
