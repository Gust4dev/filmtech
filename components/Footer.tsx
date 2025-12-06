import React from 'react';
import { MapPin, Phone, Clock, Youtube, Instagram, Code, GraduationCap } from 'lucide-react';
import { INSTAGRAM_URL, YOUTUBE_URL, TIKTOK_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0a0a0a] relative z-50 overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-black brand-font text-white mb-6 uppercase tracking-widest">
              <span className="text-red-600">F</span>ilmTech Luxury
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Estética automotiva de alta performance.<br/>
              Cuidamos do seu patrimônio com a paixão e a precisão que ele merece.
              <br/><br/>
              <span className="text-stone-500 text-xs uppercase tracking-wider font-bold">Materiais de certificação internacional.</span>
            </p>
            <div className="flex gap-4">
               {/* Instagram */}
               <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
                 <Instagram size={20} />
               </a>
               
               {/* YouTube */}
               <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
                 <Youtube size={20} />
               </a>

               {/* TikTok */}
               <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                 </svg>
               </a>
            </div>
          </div>

          {/* Contact & Hours Column (4 cols) - Reduced to 4 to give space to Map */}
          <div className="lg:col-span-4 lg:pl-16 lg:border-l lg:border-neutral-800">
            <div className="mb-12">
              <h3 className="text-white font-bold mb-6">
                CONTATO
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                  <span>R. S-1, qd 139 - lt 21 - St. Bela Vista<br/>Goiânia - GO, 74823-310</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-white font-medium">(62) 9242-5852</span>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-red-600 shrink-0" />
                  <a 
                    href="https://filmtechexperience.com.br/filmtech-luxury-experience/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-white font-medium text-sm hover:text-red-600 transition-colors"
                  >
                    FilmTech Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Clock className="text-red-600" size={18} /> HORÁRIOS
              </h3>
              <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm">
                 <div className="text-gray-500">Segunda</div>
                 <div className="text-white font-medium">08:00 - 18:00</div>

                 <div className="text-gray-500">Terça</div>
                 <div className="text-white font-medium">08:00 - 18:00</div>

                 <div className="text-gray-500">Quarta</div>
                 <div className="text-white font-medium">08:00 - 18:00</div>

                 <div className="text-gray-500">Quinta</div>
                 <div className="text-white font-medium">08:00 - 18:00</div>

                 <div className="text-gray-500">Sexta</div>
                 <div className="text-white font-medium">08:00 - 18:00</div>

                 <div className="text-gray-500">Sábado</div>
                 <div className="text-white font-medium">09:00 - 12:00</div>

                 <div className="text-gray-500">Domingo</div>
                 <div className="text-neutral-700 font-bold uppercase text-xs pt-0.5">Fechado</div>
              </div>
            </div>
          </div>

          {/* Map Column (5 cols) - Expanded and Cropped */}
          <div className="lg:col-span-5 h-full min-h-[350px] relative rounded-2xl overflow-hidden group lg:border-l lg:border-neutral-800 lg:ml-8">
             {/* Wrapper to crop iframe edges - Aggressive crop to hide Google UI */}
            <div className="absolute inset-[-25%] w-[150%] h-[150%]">
              <iframe 
                src="https://maps.google.com/maps?q=R.%20S-1,%20qd%20139%20-%20lt%2021%20-%20St.%20Bela%20Vista,%20Goi%C3%A2nia%20-%20GO&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
            
            {/* Overlay Link */}
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=FilmTech+Luxury+R.+S-1,+qd+139+-+lt+21+-+St.+Bela+Vista,+Goiânia+-+GO,+74823-310"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:bg-black/10 transition-colors flex flex-col justify-end items-center pb-8 pointer-events-auto"
            >
              <div className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg transform group-hover:scale-110 transition-transform flex items-center gap-2">
                <MapPin size={16} />
                Como chegar?
              </div>
            </a>
          </div>

        </div>

        <div id="footer-copyright" className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} FilmTech Luxury. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a 
              href="https://wa.me/5561998031185?text=Olá! gostaria de fazer um orçamento!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <Code size={16} className="text-red-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Desenvolvido por <span className="text-neutral-200 group-hover:text-red-500 transition-colors">Gusta</span></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};