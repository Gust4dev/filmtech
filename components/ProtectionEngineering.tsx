import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ShieldCheck, Medal } from 'lucide-react';

export const ProtectionEngineering: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
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

              {/* Destaque Visual - Logo FilmTech (Sem Zoom) */}
              <FadeIn delay={300}>
                  <div 
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition-all duration-300"
                  >
                      <div className="w-full sm:w-40 h-40 shrink-0 rounded-xl overflow-hidden shadow-sm relative p-4 bg-gray-50 flex items-center justify-center">
                          <img 
                              src="/images/logos/logo.png" 
                              alt="Logo FilmTech" 
                              className="w-full h-full object-contain"
                          />
                      </div>
                      <div>
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

              {/* Lista de Diferenciais - PPF Tiers */}
              <div className="grid grid-cols-1 gap-8">
                
                {/* 1. CarPro Immortal */}
                <FadeIn delay={400}>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-16 h-16 bg-yellow-50 border border-yellow-100 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow-100/50 transition-colors">
                      <Medal size={32} className="text-yellow-600 fill-yellow-400 animate-pulse-slow" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-gray-900 tracking-wide mb-2">
                         CarPro - Immortal
                      </h3>
                      <p className="text-base text-stone-600 leading-relaxed">
                        200 micras / 10 anos de garantia / Auto-regenerativo.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* 2. Quad */}
                <FadeIn delay={500}>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Medal size={32} className="text-gray-500 fill-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-gray-900 tracking-wide mb-2">
                        Quad-film
                      </h3>
                      <p className="text-base text-stone-600 leading-relaxed">
                         185 micras / Homologado pela Lamborghini / 7 anos de garantia / Auto-regenerativo.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* 3. BASF */}
                <FadeIn delay={600}>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Medal size={32} className="text-orange-700 fill-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase text-gray-900 tracking-wide mb-2">
                        Basf - film
                      </h3>
                      <p className="text-base text-stone-600 leading-relaxed">
                         165 micras / 5 anos de garantia / Regenerativo.
                      </p>
                    </div>
                  </div>
                </FadeIn>

              </div>



            </div>
          </div>
        </div>
      </section>
    </>
  );
};
