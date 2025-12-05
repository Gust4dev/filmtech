import React from 'react';
import { PORTFOLIO } from '../constants';
import { Instagram } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white brand-font italic">RESULTADOS <span className="text-red-600">FILMTECH</span></h2>
            <p className="text-gray-400 mt-2">Siga nosso trabalho diariamente.</p>
          </FadeIn>
          
          <FadeIn direction="left">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 border border-neutral-700 rounded-full text-white text-sm font-bold hover:bg-neutral-800 hover:border-white transition-colors flex items-center gap-2"
            >
              <Instagram size={18} /> @velocita_estetica
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO.map((item, index) => (
            <FadeIn key={item.id} delay={index * 50}>
              <a 
                href={item.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <Instagram className="text-red-600 mb-2 w-8 h-8" />
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <span className="text-gray-300 text-xs mt-2 uppercase tracking-widest">Ver no Instagram</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};