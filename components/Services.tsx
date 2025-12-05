import React from 'react';
import { SERVICES } from '../constants';
import { Droplets, Sparkles, ShieldCheck, Zap, Wind, Settings } from 'lucide-react';
import { FadeIn } from './FadeIn';

const iconMap: Record<string, React.ReactNode> = {
  'Droplets': <Droplets size={32} />,
  'Sparkles': <Sparkles size={32} />,
  'ShieldCheck': <ShieldCheck size={32} />,
  'Zap': <Zap size={32} />,
  'Wind': <Wind size={32} />,
  'Settings': <Settings size={32} />
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-4 brand-font italic">NOSSOS SERVIÇOS</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>
                
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.iconName]}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <a 
                  href={`https://wa.me/5511999999999?text=Gostaria de saber mais sobre ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-500 transition-colors"
                >
                  Agendar este serviço
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};