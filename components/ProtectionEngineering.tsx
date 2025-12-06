import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { RefreshCw, Droplets, Sun, ArrowRight, ShieldCheck, X } from 'lucide-react';

export const ProtectionEngineering: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Lado Esquerdo: Vídeo Loop (Altura Ajustada ao Conteúdo) */}
            <FadeIn className="h-full">
              <div className="relative group h-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full bg-black transform transition-transform duration-700 hover:scale-[1.01]">
                  <video 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/assets/videos/protection-loop.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Degradê sutil na base */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                  {/* Selo Flutuante */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest shadow-xl uppercase z-10">
                    Aplicação Técnica Certificada
                  </div>
                </div>
                
                {/* Elemento Decorativo de Fundo */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-gray-300/50 rounded-2xl"></div>
              </div>
            </FadeIn>

            {/* Lado Direito: Explicação FilmTech Standard */}
            <div className="space-y-12 flex flex-col justify-center py-4">
              <FadeIn delay={200}>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-dark-lead mb-6 brand-font leading-tight">
                    TECNOLOGIA DE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900">PROTEÇÃO INVISÍVEL</span>
                  </h2>
                  <p className="text-xl text-stone-600 font-light leading-relaxed">
                    "Não aplicamos apenas uma película. Esculpimos uma segunda pele no seu veículo."
                  </p>
                </div>
              </FadeIn>

              {/* Destaque Visual - Padrão FilmTech (Com Lightbox Trigger) */}
              <FadeIn delay={300}>
                  <div 
                    onClick={() => setIsLightboxOpen(true)}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition-all duration-300 cursor-zoom-in"
                  >
                      <div className="w-full sm:w-40 h-40 shrink-0 rounded-xl overflow-hidden shadow-md relative">
                          <img 
                              src="/images/portfolio/porsche/ppf%20porta.JPG" 
                              alt="Detalhe de Acabamento FilmTech" 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-dark-lead text-xs font-bold px-3 py-1 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                ZOOM
                              </span>
                          </div>
                      </div>
                      <div>
                          {/* Typography fix: F is glued to ilmTech */}
                          <h4 className="font-black text-dark-lead text-lg uppercase tracking-wide mb-2 flex items-center gap-2">
                             <ShieldCheck size={20} className="text-red-700" />
                             <span>Padrão <span className="text-red-700">F</span>ilmTech</span>
                          </h4>
                          <p className="text-sm text-stone-500 leading-relaxed mb-3">
                              Acabamento invisível nas entradas de portas. Sem cortes na lataria, sem emendas aparentes.
                          </p>
                          <span className="text-xs font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                              Proteção Integral
                          </span>
                      </div>
                  </div>
              </FadeIn>

              {/* Lista de Diferenciais - Estilo Box / Manchete */}
              <div className="grid grid-cols-1 gap-8">
                
                {/* 1. Auto-regeneração */}
                <FadeIn delay={400}>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      <RefreshCw size={28} className="text-red-700 animate-pulse-slow" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-gray-900 tracking-wide mb-2">
                         Auto-Regeneração
                      </h3>
                      <p className="text-base text-stone-600 leading-relaxed">
                        A tecnologia de memória elástica permite que riscos superficiais desapareçam instantaneamente com o calor do sol ou do motor.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* 2. Hidrofobia */}
                <FadeIn delay={500}>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Droplets size={28} className="text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-gray-900 tracking-wide mb-2">
                        Ultra-Hidrofobia
                      </h3>
                      <p className="text-base text-stone-600 leading-relaxed">
                        Efeito Lótus: superfície de baixa tensão que repele água e óleos, mantendo o veículo limpo por muito mais tempo.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* 3. Proteção UV */}
                <FadeIn delay={600}>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Sun size={28} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-gray-900 tracking-wide mb-2">
                        Zero Amarelamento
                      </h3>
                      <p className="text-base text-stone-600 leading-relaxed">
                        Adesivo de grau óptico resistente a raios UV. Garantia de transparência cristalina que preserva a cor original.
                      </p>
                    </div>
                  </div>
                </FadeIn>

              </div>

              {/* Botão CTA */}
              <FadeIn delay={700} className="pt-4">
                <a 
                  href="https://www.instagram.com/filmtech_luxury/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-dark-lead text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all duration-300 rounded-lg group shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Ver Vídeo Completo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Simples */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300 p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <img 
            src="/images/portfolio/porsche/ppf%20porta.JPG" 
            alt="Padrão FilmTech Expandido" 
            className="w-full h-full max-w-7xl max-h-[90vh] object-contain rounded-md shadow-2xl animate-in zoom-in-95 duration-300 select-none"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};
