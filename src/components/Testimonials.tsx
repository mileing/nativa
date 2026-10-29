import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../types.ts';

export const Testimonials: React.FC = () => {
  return (
    <section id="me-gusta" className="py-24 bg-[#FAF7F2] border-t border-[#285943]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-2">
            Voces de Nuestra Comunidad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A382A] tracking-tight">
            Historias que florecen cada mañana
          </h2>
          <p className="mt-3 text-base text-[#1A382A]/75">
            Testimonios de quienes ya integraron las bondades de NATIVA en sus hábitos cotidianos.
          </p>
        </div>

        {/* 3 Attributable Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-[#285943]/15 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#6F9E73]/20 absolute top-6 right-6" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#C97852]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote in Lora font */}
                <p className="font-serif-quote italic text-sm sm:text-base text-[#1A382A] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#285943]/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-[#1A382A]">{item.author}</h4>
                    {item.verified && (
                      <span title="Comprador verificado" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-[#6F9E73]" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#1A382A]/60">{item.role} · {item.city}</p>
                </div>

                <span className="text-[11px] font-semibold text-[#285943] bg-[#FAF7F2] px-2.5 py-1 rounded-sm border border-[#285943]/10">
                  {item.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Metric adjacency strip */}
        <div className="mt-14 pt-8 border-t border-[#285943]/15 flex flex-wrap items-center justify-center gap-8 text-center text-xs text-[#1A382A]/80">
          <div>
            <span className="font-extrabold text-lg text-[#285943] font-mono tabular-nums block">+2,400</span>
            <span>Tarros y mezclas entregadas</span>
          </div>
          <div className="h-8 w-px bg-[#285943]/15 hidden sm:block" />
          <div>
            <span className="font-extrabold text-lg text-[#285943] font-mono tabular-nums block">4.9 / 5.0</span>
            <span>Calificación promedio de satisfacción</span>
          </div>
          <div className="h-8 w-px bg-[#285943]/15 hidden sm:block" />
          <div>
            <span className="font-extrabold text-lg text-[#285943] font-mono tabular-nums block">18 Familias</span>
            <span>Campesinas beneficiadas con comercio directo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
