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
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/hero-bg.JPG" 
          alt="Luxury Car Detail" 
          className="w-full h-[85%] object-cover object-[25%_center] blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black from-[15%] via-black/20 via-[40%] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <FadeIn direction="right" delay={200}>
            <div className="inline-block px-3 py-1 mb-6 border border-red-600/30 bg-red-600/10 rounded-full">
              <span className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase">Estética Automotiva Premium</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={400}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight brand-font italic">
              PERFEIÇÃO EM <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">CADA DETALHE</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Elevamos o padrão do seu veículo com técnicas avançadas de detalhamento e produtos de classe mundial. Sua máquina merece o melhor tratamento.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openWhatsApp}
                className="group relative px-8 py-4 bg-red-600 text-white font-bold text-sm tracking-wider uppercase overflow-hidden hover:bg-red-700 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-wider uppercase hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                Ver Resultados
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer" onClick={scrollToServices}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};