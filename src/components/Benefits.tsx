import React from 'react';
import { Leaf, Sparkles, HeartPulse, MapPin } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Leaf,
      title: '100% Natural',
      tagline: 'Pureza Botánica',
      description: 'Sin químicos, saborizantes artificiales ni conservantes. Solo hierbas recolectadas a mano en su punto óptimo de frescura.',
      accent: 'border-[#6F9E73]/30',
      iconBg: 'bg-[#6F9E73]/15 text-[#285943]',
    },
    {
      icon: Sparkles,
      title: 'Elaboración Artesanal',
      tagline: 'Hecho con Paciencia',
      description: 'Pequeños lotes tostados y empacados artesanalmente en Colombia para preservar al máximo los aceites esenciales y nutrientes.',
      accent: 'border-[#C97852]/30',
      iconBg: 'bg-[#C97852]/15 text-[#C97852]',
    },
    {
      icon: HeartPulse,
      title: 'Saludable & Consciente',
      tagline: 'Bienestar Holístico',
      description: 'Fórmulas concebidas para transformar tu día con calma, energía limpia sostenida y digestión liviana sin alterar tu ritmo biológico.',
      accent: 'border-[#285943]/30',
      iconBg: 'bg-[#285943]/10 text-[#285943]',
    },
    {
      icon: MapPin,
      title: 'Origen Local',
      tagline: 'De la Montaña a tu Mesa',
      description: 'Comercio justo directo con familias campesinas y apicultores de la cordillera andina que cuidan el bosque nativo.',
      accent: 'border-[#6F9E73]/30',
      iconBg: 'bg-[#6F9E73]/15 text-[#285943]',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white border-y border-[#285943]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-2">
            Nuestros Cuatro Pilares
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A382A] tracking-tight mb-4">
            Por qué lo natural transforma tu día
          </h2>
          <p className="font-serif-quote italic text-lg sm:text-xl text-[#285943] max-w-2xl mx-auto">
            “No creemos en soluciones mágicas, sino en la fuerza serena de la tierra bien cuidada.”
          </p>
        </div>

        {/* 4 Pillars Grid with Generous Whitespace & Hover Micro-Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-[#FAF7F2] p-8 rounded-xl border ${item.accent} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.iconBg} transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#1A382A]/40 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C97852] block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A382A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1A382A]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#285943]/10 flex items-center text-xs font-semibold text-[#285943]">
                  <span>Compromiso NATIVA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
