import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);


  const afterImage = "/images/comparison/after.JPG";
  const beforeImage = "/images/comparison/before.JPG";

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="pt-0 pb-24 bg-concrete relative">
      {/* Connector Gradient: Bridges Hero Image -> White */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none"></div>
      
      {/* Top Gradient Fade: White -> Grey (Bg) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/3 space-y-6">
            <FadeIn direction="right">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-lead brand-font uppercase tracking-widest leading-normal">
                O PROCESSO 
                <span className="whitespace-nowrap inline-flex items-baseline ml-2">
                  <img 
                    src="/images/logos/F_logo_nobg.png" 
                    alt="F" 
                    className="inline-block"
                    style={{ 
                      height: '0.74em', 
                      width: 'auto', 
                      marginRight: '3px',
                      transform: 'translateY(1px)', // Fine-tune baseline visual
                      clipPath: 'inset(0 0 0.4x 0)' // Trims 1px from the bottom
                    }} 
                  />
                  ILMTECH
                </span>
              </h2>
              <div className="w-20 h-1 bg-red-600"></div>
              <p className="text-stone-600">
                Cada veículo é tratado como um projeto único. Desmonte técnico, limpeza cirúrgica e aplicação perfeita.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-stone-500 mt-4 uppercase">
                <span>Preparação e Desmontagem Técnica</span>
                <div className="flex-1 h-px bg-stone-300"></div>
                <span className="text-red-600">Resultado Final Impecável</span>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-2/3 relative group">
            <FadeIn delay={200}>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-800">

                {/* After Image (Background) */}
                <img 
                  src={afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ 
                    objectPosition: '90% 52%',
                    transform: 'scale(1.2)' 
                  }}
                  loading="lazy"
                  decoding="async"
                />

                {/* Before Image (Foreground - Clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ 
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  }}
                >
                  <img 
                    src={beforeImage} 
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      objectPosition: '50% 50%',
                      transform: 'scale(1.0)' // Default was 100%
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-sepia-[.5]"></div>
                </div>


                <div 
                  className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="15 18 9 12 15 6"></polyline>
                      <polyline points="9 18 3 12 9 6" opacity="0"></polyline>
                      <path d="M4 12h16" stroke="transparent"></path> 
                    </svg>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
                
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-xs font-bold text-white rounded">ANTES</div>
                <div className="absolute bottom-4 right-4 bg-red-600/90 px-3 py-1 text-xs font-bold text-white rounded">DEPOIS</div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};