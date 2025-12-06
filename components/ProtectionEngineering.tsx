import React from 'react';
import { FadeIn } from './FadeIn';
import { Shield, Droplets, Sun } from 'lucide-react';

export const ProtectionEngineering: React.FC = () => {
  return (
    <section className="py-24 bg-concrete relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-bold text-dark-lead mb-4 brand-font uppercase tracking-widest">ENGENHARIA DE PROTEÇÃO</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto font-medium">
              Tecnologia de ponta aplicada para preservar e valorizar o seu patrimônio.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <FadeIn delay={100}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-lead mb-3 uppercase tracking-wider brand-font">Auto-Regeneração</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Riscos superficiais desaparecem com o calor do motor ou do sol.
              </p>
            </div>
          </FadeIn>

          {/* Feature 2 */}
          <FadeIn delay={200}>
             <div className="flex flex-col items-center text-center p-6 border-l border-r border-gray-200">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-lead mb-3 uppercase tracking-wider brand-font">Hidrofobia</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Repelência a líquidos que facilita a limpeza e evita manchas.
              </p>
            </div>
          </FadeIn>

          {/* Feature 3 */}
          <FadeIn delay={300}>
             <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-lead mb-3 uppercase tracking-wider brand-font">Rejeição de Calor</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Nossas películas bloqueiam até 98% dos raios infravermelhos.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
