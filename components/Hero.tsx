import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PHONE_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma avaliação.`, '_blank');
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/hero-bg.JPG" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover object-center"
        />
        {/* White gradient overlay for text readability - essential for black text on dark image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-30% to-transparent sm:w-[70%]"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <FadeIn direction="right" delay={200}>
            <div className="inline-block px-3 py-1 mb-6 border border-red-600/30 bg-white/80 backdrop-blur-sm rounded-full">
              <span className="text-red-600 text-xs font-bold tracking-[0.2em] uppercase">FilmTech Luxury</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={400}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-normal brand-font text-dark-lead uppercase tracking-widest">
              CUSTOMIZAÇÃO AUTOMOTIVA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">DE ALTO PADRÃO</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <p className="text-xl text-stone-600 mb-10 max-w-xl leading-relaxed font-bold uppercase tracking-wider">
              Especialistas em proteger e transformar veículos exclusivos.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openWhatsApp}
                className="group relative px-8 py-4 bg-red-600 text-white font-bold text-sm tracking-wider uppercase overflow-hidden hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 border-2 border-stone-900 text-stone-900 font-bold text-sm tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Ver Resultados
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-400 cursor-pointer" onClick={scrollToServices}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};