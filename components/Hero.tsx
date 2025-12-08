import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PHONE_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de um orçamento.`, '_blank');
  };

  return (
    <section className="relative h-auto md:h-screen flex items-center overflow-hidden bg-white md:pb-0">
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src="/images/hero/hero_bg_mobile.JPG" 
          alt="Luxury Car Detail Mobile" 
          className="w-full h-full object-cover object-center block md:hidden"
        />
        
        {/* Desktop Background */}
        <img 
          src="/images/hero/hero-bg.JPG" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover object-center hidden md:block"
        />
        
        {/* White gradient overlay for text readability - essential for black text on dark image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 via-50% sm:from-white sm:via-white/90 sm:via-30% to-transparent sm:w-[70%]"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/40 sm:from-white to-transparent"></div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
        <div className="max-w-[60%] sm:max-w-4xl">
          <FadeIn direction="right" delay={200}>
            <div className="inline-block px-3 py-1 mb-4 sm:mb-6 border border-red-600/30 bg-white/80 backdrop-blur-sm rounded-full">
              <span className="text-red-600 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">FilmTech Luxury</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={400}>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight brand-font text-dark-lead uppercase tracking-widest">
              CUSTOMIZAÇÃO AUTOMOTIVA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">DE ALTO PADRÃO</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <p className="text-xs sm:text-xl text-stone-600 mb-6 sm:mb-10 max-w-full sm:max-w-xl leading-relaxed font-bold uppercase tracking-wider">
              Especialistas em proteger e transformar veículos exclusivos.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={openWhatsApp}
                className="group relative px-5 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase overflow-hidden hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
                className="px-5 py-3 sm:px-8 sm:py-4 border-2 border-stone-900 text-stone-900 font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Ver Resultados
              </button>
            </div>
          </FadeIn>
          
        </div>
        
        {/* Mobile Arrow: Static position for tight spacing, full width centering */}
        <div className="md:hidden mt-8 mb-8 w-full animate-bounce text-stone-400 cursor-pointer flex justify-center" onClick={scrollToServices}>
            <ChevronDown size={28} />
        </div>
      </div>

      {/* Desktop Arrow: Absolute bottom */}
      <div className="hidden md:block absolute bottom-4 left-0 right-0 mx-auto w-fit animate-bounce text-stone-400 cursor-pointer" onClick={scrollToServices}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};