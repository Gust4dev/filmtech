import React from 'react';
import { FadeIn } from './FadeIn';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Luiz M",
    role: "Mitsubishi Eclipse",
    text: "Gustavo e sua equipe são perfeitos na execução do serviço! Meu Eclipse ficou tão perfeito que ninguém conseguiu perceber que foi instalado o PPF. Parabéns Filmtech.",
    rating: 5
  },
  {
    name: "Kleber Vecchione",
    role: "Toyota Hilux",
    text: "Levei a Hilux zero km direto para FilmTech e coloquei PPF em tudo. O resultado foi incrível! Gustavo é o melhor no assunto! Confiança, honestidade e qualidade definem.",
    rating: 5
  },
  {
    name: "Zeca Rassi",
    role: "Cliente",
    text: "Local confiável p/ deixar seu carro. Serviço diferenciado e com muita qualidade. Atendimento personalizado. Recomendo.",
    rating: 5
  }
];

export const GoogleReviews: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-6">
               <span className="text-yellow-500 text-lg leading-none">★</span>
               <span className="text-sm font-bold text-gray-700">Google Reviews</span>
            </div>
            <h2 className="text-4xl font-black text-neutral-900 mb-4 brand-font uppercase tracking-widest">
              O Que Dizem Nossos Clientes
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <FadeIn key={index} delay={index * 100}>
                <div className="bg-gray-50 p-8 rounded-2xl relative group hover:shadow-lg transition-shadow duration-300">
                    <span className="absolute top-8 right-8 text-6xl text-gray-200 group-hover:text-red-600/20 transition-colors font-serif leading-none">
                    ❝
                    </span>
                    
                    <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg leading-none">★</span>
                    ))}
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                    "{review.text}"
                    </p>

                    <div className="mt-auto border-t border-gray-200 pt-6">
                    <p className="font-bold text-neutral-900">{review.name}</p>
                    <p className="text-xs text-red-600 font-bold uppercase tracking-wider mt-1">{review.role}</p>
                    </div>
                </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-neutral-500 text-sm font-bold uppercase tracking-wider mb-6">
              Já é nosso cliente?
            </p>
            <a 
                href="https://www.google.com/search?q=Filmtech&ie=UTF-8#lrd=0x935ef1b7d16614d7:0xcf34d9754dbc1c2f,3,,,," 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/20"
            >
                Faça uma avaliação nossa!
            </a>
        </div>

      </div>
    </section>
  );
};
