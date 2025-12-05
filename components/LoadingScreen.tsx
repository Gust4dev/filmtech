import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-8 relative">
        <h1 className="text-5xl font-black tracking-tighter brand-font italic text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
          FilmTech Luxury
        </h1>
        <div className="absolute -bottom-2 right-0 w-12 h-1 bg-red-600 skew-x-12"></div>
      </div>
      
      <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-xs text-neutral-500 font-mono tracking-widest">
        CARREGANDO SISTEMA... {Math.round(progress)}%
      </p>
    </div>
  );
};