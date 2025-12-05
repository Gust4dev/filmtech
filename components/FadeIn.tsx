import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'left': return '-translate-x-10';
      case 'right': return 'translate-x-10';
      default: return '';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className}
        ${isVisible ? 'opacity-100 transform-none' : `opacity-0 ${getDirectionClass()}`}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};