import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', id: 'servicos' },
    { name: 'Resultados', id: 'portfolio' },
    { name: 'Contato', id: 'footer' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="flex items-center">
          <img src="/images/logos/logo.png" alt="FilmTech Luxury" className="h-12 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${isScrolled ? 'text-stone-800 hover:text-red-600' : 'text-stone-800 hover:text-red-600'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma avaliação.`, '_blank')}
            className="px-5 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            Agendar
          </button>
        </div>

        <button className={`md:hidden ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X style={{ shapeRendering: 'geometricPrecision' }} /> : <Menu style={{ shapeRendering: 'geometricPrecision' }} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.id)}
              className="text-left text-sm font-medium text-stone-800 hover:text-red-600 uppercase tracking-wider py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};