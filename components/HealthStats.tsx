import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { HEALTH_STATS } from '../constants';
import { FadeIn } from './FadeIn';
import { ShieldAlert } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-red-600 p-3 rounded shadow-xl">
        <p className="text-white font-bold mb-1">{label}</p>
        <p className="text-red-400 text-sm">
          {payload[0].value.toLocaleString()} {payload[0].payload.unit}
        </p>
      </div>
    );
  }
  return null;
};

export const HealthStats: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-red-500 mb-4">
              <ShieldAlert size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">Saúde & Bem-Estar</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 brand-font">O PERIGO INVISÍVEL</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Seu carro pode estar contaminado. O sistema de ar-condicionado e os estofados acumulam microrganismos nocivos à saúde respiratória da sua família.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <FadeIn direction="left" className="h-[400px] w-full bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
             <h3 className="text-xl font-bold text-white mb-6 text-center">Contaminação Média (Ar Condicionado Sujo)</h3>
             <ResponsiveContainer width="100%" height="85%">
                <BarChart data={HEALTH_STATS} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#fff', fontSize: 14, fontWeight: 500 }} 
                    width={80}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={40}>
                    {HEALTH_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={100} direction="right">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 text-red-500 font-bold text-xl">1</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Alergias e Doenças Respiratórias</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">O acúmulo de fungos e bactérias nos dutos de ventilação é uma das principais causas de rinite, asma e irritações oculares em motoristas e passageiros.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} direction="right">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 text-red-500 font-bold text-xl">2</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">A Solução: Oxi-Sanitização</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Nossa tecnologia de ozônio elimina 99,9% dos vírus e bactérias, alcançando lugares onde a limpeza convencional não chega. Essencial para quem transporta crianças ou pets.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="right">
              <button 
                onClick={() => window.open(`https://wa.me/5511999999999?text=Quero saber mais sobre a higienização de ar condicionado`, '_blank')}
                className="mt-4 text-red-500 font-bold uppercase text-sm tracking-wider hover:text-red-400 flex items-center gap-2 group"
              >
                Solicitar Higienização <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};