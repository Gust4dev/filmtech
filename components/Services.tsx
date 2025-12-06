import React from 'react';
import { SERVICES } from '../constants';
import { Droplets, Sparkles, ShieldCheck, Zap, Wind, Settings, Sun } from 'lucide-react';
import { FadeIn } from './FadeIn';

const iconMap: Record<string, React.ReactNode> = {
  'Droplets': <Droplets size={24} />,
  'Sparkles': <Sparkles size={24} />,
  'ShieldCheck': <ShieldCheck size={24} />,
  'Zap': <Zap size={24} />,
  'Wind': <Wind size={24} />,
  'Settings': <Settings size={24} />
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-concrete overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl font-bold text-dark-lead mb-4 brand-font uppercase tracking-widest">Coleção de Serviços</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </FadeIn>
        </div>

        {/* SERVICE COLLECTION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* --- ROW 1: CARRO-CHEFES (Highlights) --- */}

          {/* Card 1: PPF */}
          <FadeIn direction="right">
            <div className="relative h-[500px] group overflow-hidden rounded-sm cursor-pointer">
              <img 
                src="/images/portfolio/mustang/mustang-polimento4.JPG" 
                alt="PPF Protection" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-black brand-font uppercase tracking-widest mb-3">PPF - Proteção Invisível</h3>
                <p className="text-sm font-medium text-gray-300 mb-6 max-w-sm leading-relaxed">
                  A única defesa real contra detritos de estrada. Filme regenerativo que mantém a pintura original impecável.
                </p>
                <button className="px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg">
                  Solicitar Cotação
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Envelopamento */}
          <FadeIn direction="left">
            <div className="relative h-[500px] group overflow-hidden rounded-sm cursor-pointer">
              <img 
                src="/images/portfolio/porsche/Envelopamento.png" 
                alt="Envelopamento Premium" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-black brand-font uppercase tracking-widest mb-3">Envelopamento Premium</h3>
                <p className="text-sm font-medium text-gray-300 mb-6 max-w-sm leading-relaxed">
                  Transformação total de cor. Acabamentos exclusivos (Satin, Matte, Gloss) que valorizam o design do carro.
                </p>
                <button className="px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg">
                  Ver Cores
                </button>
              </div>
            </div>
          </FadeIn>


          {/* --- ROW 2: DETALHES TÉCNICOS (Grey Cards) --- */}

          {/* Card 3: Películas Térmicas */}
          <FadeIn delay={200}>
            <div className="h-[350px] group p-10 bg-nardo border-t-4 border-red-600 hover:bg-white transition-colors duration-500 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck size={120} className="text-stone-400"/>
               </div>
               
               <div className="relative z-10">
                  <div className="text-red-600 mb-6">
                    <Sun size={40} />
                  </div>
                  <h3 className="text-2xl font-black brand-font uppercase tracking-widest text-dark-lead mb-4">Películas Térmicas</h3>
                  <p className="text-stone-600 text-sm font-medium leading-relaxed max-w-sm">
                    Tecnologia de nano-cerâmica que bloqueia o calor e protege o interior contra raios UV. Conforto térmico superior.
                  </p>
               </div>
            </div>
          </FadeIn>

           {/* Card 4: Chrome Delete */}
           <FadeIn delay={300}>
            <div className="h-[350px] group p-10 bg-nardo border-t-4 border-red-600 hover:bg-white transition-colors duration-500 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Settings size={120} className="text-stone-400"/>
               </div>
               
               <div className="relative z-10">
                  <div className="text-red-600 mb-6">
                    <Settings size={40} />
                  </div>
                  <h3 className="text-2xl font-black brand-font uppercase tracking-widest text-dark-lead mb-4">Chrome Delete & Detalhes</h3>
                  <p className="text-stone-600 text-sm font-medium leading-relaxed max-w-sm">
                     Personalização esportiva. Eliminação de cromados, pintura de pinças e rodas para um visual agressivo e único.
                  </p>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};