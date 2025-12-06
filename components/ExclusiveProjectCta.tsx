import React from 'react';
import { FadeIn } from './FadeIn';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const ExclusiveProjectCta: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-20 border-t border-neutral-900">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 brand-font uppercase tracking-widest">
            PROJETO EXCLUSIVO
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Não achou o que procurava? Criamos projetos sob medida para o seu veículo, do design à execução.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/5511999999999?text=Gostaria de um projeto exclusivo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-green-700 transition-all rounded shadow-lg hover:shadow-green-600/20"
            >
              <MessageCircle size={20} />
              Falar com Especialista
            </a>
            
            <a 
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded"
            >
              Ver Projetos Realizados <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
