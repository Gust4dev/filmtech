import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="text-2xl font-black brand-font italic tracking-tighter text-white">
          FilmTech Luxury
          <span className="text-red-600">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => window.open(`https://wa.me/5511999999999`, '_blank')}
            className="px-5 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-red-700 transition-colors"
          >
            Agendar
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.id)}
              className="text-left text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider py-2"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};