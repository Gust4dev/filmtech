import { ServiceItem, PortfolioItem } from './types';

export const BRAND_NAME = "FilmTech Luxury";
export const PHONE_NUMBER = "5562982204604";
export const INSTAGRAM_URL = "https://www.instagram.com/filmtech_luxury/";
export const TIKTOK_URL = "https://www.tiktok.com/@gustavofilmtech?_r=1&_t=ZS-91MdmSHOued";
export const YOUTUBE_URL = "https://www.youtube.com/@filmtechprobrasil";

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
    title: 'Porsche GT3 RS - Envelopamento', 
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
    title: 'Mustang GT - PPF FULL IMMORTAL', 
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
    title: 'BMW - PPF Frontal + Vitrificação', 
    instagramLink: '#' 
  },
  { 
    id: '4', 
    images: [
      '/images/portfolio/gli/gli (1).JPG',
      '/images/portfolio/gli/gli (2).JPG',
      '/images/portfolio/gli/gli (3).JPG',
    ], 
    title: 'VW Jetta GLI - PPF', 
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
    title: 'BMW 320i M sport - PPF FULL/Película', 
    instagramLink: '#' 
  },
  { 
    id: '6', 
    images: [
      '/images/portfolio/bmw3/bmw3 (1).JPG',
      '/images/portfolio/bmw3/bmw3 (2).JPG',
      '/images/portfolio/bmw3/bmw3 (3).JPG',
      '/images/portfolio/bmw3/bmw3 (4).JPG',
      '/images/portfolio/bmw3/bmw3 (5).JPG',
    ], 
    title: 'BMW X3 30 - PPF FULL + Película nano cerâmica', 
    instagramLink: '#' 
  },
  { 
    id: '7', 
    images: [
      '/images/portfolio/byd/byd (1).JPG',
      '/images/portfolio/byd/byd (2).JPG',
      '/images/portfolio/byd/byd (3).JPG',
      '/images/portfolio/byd/byd (4).JPG',
      '/images/portfolio/byd/byd (5).JPG',
      '/images/portfolio/byd/byd (6).JPG',
    ], 
    title: 'BYD Song Plus - Chrome delete', 
    instagramLink: '#' 
  },
];
