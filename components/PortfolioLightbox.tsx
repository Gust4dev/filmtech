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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white">
          <h3 className="text-xl font-bold">{album.title}</h3>
          <p className="text-sm text-stone-400 brand-font flex items-center gap-2">
            <ImageIcon size={14} />
            {currentIndex + 1} / {album.images.length}
          </p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative flex-1 w-full flex items-center justify-center p-4 md:p-12 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-8 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all transform hover:scale-110 z-40 hidden md:block border border-white/10 hover:border-red-600"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Click on Left side for prev, Right side for next (Invisible overlay) - DESKTOP ONLY */}
            <div className="absolute inset-y-0 left-0 w-1/2 cursor-w-resize z-20 hidden md:block" onClick={handlePrev} />
            <div className="absolute inset-y-0 right-0 w-1/2 cursor-e-resize z-20 hidden md:block" onClick={handleNext} />
            
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img 
                key={currentIndex}
                src={album.images[currentIndex]} 
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                alt={`${album.title} - View ${currentIndex + 1}`}
                className="max-h-full max-w-full object-contain rounded-sm shadow-2xl select-none absolute"
              />
            </AnimatePresence>
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-8 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white transition-all transform hover:scale-110 z-40 hidden md:block border border-white/10 hover:border-red-600"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Thumbnails Strip */}
      <div className="w-full h-auto bg-stone-900/90 border-t border-white/10 p-4 flex items-center justify-center z-50 overflow-x-auto">
        <div className="flex gap-3 px-4 min-w-min mx-auto">
            {album.images.map((img, idx) => (
            <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`flex-shrink-0 relative w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
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
