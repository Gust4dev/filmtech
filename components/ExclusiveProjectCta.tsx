import React from 'react';
import { FadeIn } from './FadeIn';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const ExclusiveProjectCta: React.FC = () => {
  return (
    <section className="bg-nardo border-t-4 border-red-600 py-20">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-lead mb-6 brand-font uppercase tracking-widest">
            Projetos exclusivos
          </h2>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Criamos projetos sob medida para o seu veículo, do design à execução.
          </p>
          
          <div className="flex justify-center">
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Gostaria de um projeto exclusivo`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-green-700 transition-all rounded shadow-lg hover:shadow-green-600/20"
            >
              <MessageCircle size={20} />
              Falar com Especialista
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
