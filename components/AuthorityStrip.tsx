import React, { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { Car, ShieldCheck, Star } from 'lucide-react';

const Counter = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    const increment = value / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h3 className="text-5xl md:text-7xl font-black text-neutral-900 mb-2 brand-font uppercase tracking-tighter">
      {count}{suffix}
    </h3>
  );
};

export const AuthorityStrip: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-concrete border-t border-gray-100">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <FadeIn>
            <div className="flex flex-col items-center group">
              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <Car className="w-16 h-16 text-neutral-900 stroke-[1]" style={{ shapeRendering: 'geometricPrecision' }} />
              </div>
              <Counter value={3000} suffix="+" />
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-[0.3em] border-t border-neutral-900/20 pt-4 mt-2">
                Clientes Atendidos
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-col items-center group relative">
              {/* Optional Dividers for Desktop */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent"></div>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent"></div>

              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <ShieldCheck className="w-16 h-16 text-neutral-900 stroke-[1]" style={{ shapeRendering: 'geometricPrecision' }} />
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-neutral-900 mb-2 brand-font uppercase tracking-tighter">
                +2.5K
              </h3>
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-[0.3em] border-t border-neutral-900/20 pt-4 mt-2">
                de PPF Aplicado
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col items-center group">
              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-[4rem] leading-none text-neutral-900">★</span>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl md:text-7xl font-black text-neutral-900 mb-2 brand-font uppercase tracking-tighter">
                  4.6
                </h3>
                <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map((_, i) => (
                     <span key={i} className="text-neutral-900 text-sm leading-none">★</span>
                   ))}
                </div>
              </div>
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-[0.3em] border-t border-neutral-900/20 pt-4 mt-2">
                Avaliação no Google
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
