import { ServiceItem, PortfolioItem, HealthStat } from './types';

export const BRAND_NAME = "FilmTech Luxury";
export const PHONE_NUMBER = "5511999999999"; // Example number
export const INSTAGRAM_URL = "https://www.instagram.com/filmtech_luxury/";

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Lavagem Técnica',
    description: 'Processo minucioso que remove sujeiras profundas sem agredir a pintura, utilizando produtos de pH neutro e técnicas de dois baldes.',
    iconName: 'Droplets'
  },
  {
    id: '2',
    title: 'Higienização Interna',
    description: 'Limpeza detalhada de estofados, teto, carpetes e painéis, eliminando ácaros, fungos e odores desagradáveis.',
    iconName: 'Sparkles'
  },
  {
    id: '3',
    title: 'Vitrificação',
    description: 'Proteção cerâmica de alta dureza para pintura, plásticos e bancos, garantindo brilho intenso e repelência à água por até 3 anos.',
    iconName: 'ShieldCheck'
  },
  {
    id: '4',
    title: 'Polimento Técnico',
    description: 'Correção de verniz para remoção de riscos superficiais, hologramas e oxidação, devolvendo a profundidade de cor original.',
    iconName: 'Zap'
  },
  {
    id: '5',
    title: 'Oxi-Sanitização',
    description: 'Uso de ozônio para esterilização completa do interior e sistema de ar-condicionado, matando 99.9% dos microrganismos.',
    iconName: 'Wind'
  },
  {
    id: '6',
    title: 'Detalhe de Motor',
    description: 'Limpeza segura e proteção dos componentes do motor, evitando ressecamento de borrachas e plásticos.',
    iconName: 'Settings'
  }
];

export const HEALTH_STATS: HealthStat[] = [
  { name: 'Fungos', count: 2500, unit: 'colônias/m³', color: '#ef4444' },
  { name: 'Bactérias', count: 4000, unit: 'colônias/m³', color: '#dc2626' },
  { name: 'Ácaros', count: 1500, unit: 'unidades/g', color: '#b91c1c' },
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: '1', 
    images: [
      '/images/portfolio/porsche/gt3 (1).JPG',
      '/images/portfolio/porsche/gt3 (2).JPG',
      '/images/portfolio/porsche/gt3 (3).JPG',
      '/images/portfolio/porsche/gt3 (4).JPG',
      '/images/portfolio/porsche/gt3 (5).JPG',
    ], 
    title: 'Porsche GT3 - Vitrificação', 
    instagramLink: '#' 
  },
  { 
    id: '2', 
    images: [
      '/images/portfolio/mustang/mustang-polimento.JPG',
      '/images/portfolio/mustang/mustang-polimento2.JPG',
      '/images/portfolio/mustang/mustang-polimento3.JPG',
      '/images/portfolio/mustang/mustang-polimento4.JPG',
      '/images/portfolio/mustang/mustang-polimento5.JPG',
    ], 
    title: 'Mustang GT - Polimento', 
    instagramLink: '#' 
  },
  { 
    id: '3', 
    images: [
      '/images/portfolio/bmw/bmw (1).JPG',
      '/images/portfolio/bmw/bmw (2).JPG',
      '/images/portfolio/bmw/bmw (3).JPG',
      '/images/portfolio/bmw/bmw (4).JPG',
      '/images/portfolio/bmw/bmw (5).JPG',
    ], 
    title: 'BMW - Higienização', 
    instagramLink: '#' 
  },
  { 
    id: '4', 
    images: [
      '/images/portfolio/gli/gli (1).JPG',
      '/images/portfolio/gli/gli (2).JPG',
      '/images/portfolio/gli/gli (3).JPG',
    ], 
    title: 'VW Jetta GLI - Full Detail', 
    instagramLink: '#' 
  },
  { 
    id: '5', 
    images: [
      '/images/portfolio/bmw2/bmw2 (1).JPG',
      '/images/portfolio/bmw2/bmw2 (2).JPG',
      '/images/portfolio/bmw2/bmw2 (3).JPG',
      '/images/portfolio/bmw2/bmw2 (4).JPG',
    ], 
    title: 'BMW Série 3 - Interior', 
    instagramLink: '#' 
  },
];