import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioLightboxProps {
  isOpen: boolean;
  album: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({ isOpen, album, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device (touch only or small screen) to enable/disable drag
  useEffect(() => {
    const checkMobile = () => {
      // Coarse pointer usually creates touch events, or max-width for styling
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Constants for drag physics
  // Lower threshold for easier swiping
  const swipeConfidenceThreshold = 300; 
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Reset index when album opens
  useEffect(() => {
    if (isOpen && album) {
      setCurrentIndex(0);
      setDirection(0);
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = ''; // Unlock scroll
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, album]);

  const handleNext = useCallback(() => {
    if (!album) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % album.images.length);
  }, [album]);

  const handlePrev = useCallback(() => {
    if (!album) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
  }, [album]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !album) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 0 : (direction > 0 ? 1000 : -1000), 
      opacity: 0,
      scale: 1, // Removed scale effect for performance
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
      scale: 1, // Removed scale effect for performance
    })
  };

  return (
    // Performance: Removed backdrop-blur-md which kills mobile GPU
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="text-white pointer-events-auto">
          <h3 className="text-xl font-bold">{album.title}</h3>
          <p className="text-sm text-stone-400 brand-font flex items-center gap-2">
            <ImageIcon size={14} />
            {currentIndex + 1} / {album.images.length}
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
        
        {/* Desktop Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-8 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all transform hover:scale-110 z-40 hidden md:block border border-white/10 hover:border-red-600"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
            
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                // Drag Logic
                drag="x" // Enable drag on all devices for easier testing
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1} // 1:1 Movement (No resistance)
                dragMomentum={false} // Stop immediately on release (no sliding)
                onDragEnd={(e, { offset, velocity }) => {
                  // Simple distance check: 50px threshold
                  // This is much more forgiving than velocity-based checks
                  if (offset.x < -50) {
                    handleNext();
                  } else if (offset.x > 50) {
                    handlePrev();
                  }
                }}
                // Mobile Tap: Left 30% / Right 30%
                onTap={(event, info) => {
                   // Keep tap logic for mobile convenience, but drag works everywhere now
                   const screenWidth = window.innerWidth;
                   const x = info.point.x;
                   
                   if (x < screenWidth * 0.3) {
                      handlePrev();
                   } else if (x > screenWidth * 0.7) {
                      handleNext();
                   }
                }}
                // Performance: will-change-transform
                className="absolute inset-0 flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing touch-none will-change-transform"
              >
                  <img 
                    src={album.images[currentIndex]} 
                    alt={`${album.title} - View ${currentIndex + 1}`}
                    className="max-h-full max-w-full object-contain shadow-2xl select-none pointer-events-none" 
                  />
              </motion.div>
            </AnimatePresence>
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-8 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all transform hover:scale-110 z-40 hidden md:block border border-white/10 hover:border-red-600"
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
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`flex-shrink-0 relative w-16 h-12 md:w-24 md:h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                idx === currentIndex 
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
