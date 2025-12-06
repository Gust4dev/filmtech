import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { Instagram } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioLightbox } from './PortfolioLightbox';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleCardClick = (item: PortfolioItem) => {
    setSelectedAlbum(item);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedAlbum(null), 300); // Wait for fade out
  };

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-dark-lead brand-font uppercase tracking-widest">
              RESULTADOS <span className="text-red-600">FILMTECH</span>
            </h2>
            <p className="text-stone-600 mt-2">
              Nossa galeria de projetos e transformações exclusivas.
            </p>
          </FadeIn>
          
          <FadeIn direction="left">
            <a 
              href="https://www.instagram.com/filmtech_luxury/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 border-2 border-stone-200 rounded-full text-dark-lead text-sm font-bold hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all flex items-center gap-2"
            >
              <Instagram size={18} /> @filmtech_luxury
            </a>
          </FadeIn>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 max-w-7xl mx-auto">
          {PORTFOLIO.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <PortfolioCard 
                item={item} 
                index={index} 
                onClick={handleCardClick}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox */}
      <PortfolioLightbox 
        isOpen={isLightboxOpen}
        album={selectedAlbum}
        onClose={handleCloseLightbox}
      />
    </section>
  );
};