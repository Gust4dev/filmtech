import React from 'react';
import { FadeIn } from './FadeIn';

export const AuthorityStrip: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-16 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          <FadeIn>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 brand-font uppercase tracking-tighter">
                +500
              </h3>
              <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest">
                Projetos Entregues
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 brand-font uppercase tracking-tighter">
                +2.500<span className="text-2xl align-top">m</span>
              </h3>
              <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest">
                de PPF Aplicado
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 brand-font uppercase tracking-tighter">
                100%
              </h3>
              <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest">
                Clientes Satisfeitos
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
