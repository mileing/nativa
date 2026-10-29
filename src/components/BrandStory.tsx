import React from 'react';
import { SunMedium, Heart, Sprout, Compass } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="historia" className="py-24 bg-white border-t border-[#285943]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF7F2] aspect-4/5 relative">
              <img
                src="/src/assets/images/nativa_hero_botanical_1792677714429.jpg"
                alt="Elaboración artesanal de productos NATIVA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3EBDD] block">
                  Filosofía del Origen
                </span>
                <p className="font-serif-quote italic text-lg leading-snug">
                  “Cuidamos cada brote, cada gota de miel y cada hora de tostión.”
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#F3EBDD] p-5 rounded-xl border border-[#285943]/15 shadow-lg hidden sm:block max-w-[200px]">
              <span className="text-2xl font-extrabold text-[#285943] font-mono block">100%</span>
              <span className="text-xs font-semibold text-[#1A382A]">Hecho a mano en Colombia por familias recolectoras</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-2">
              Nuestra Historia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A382A] tracking-tight mb-6">
              Nacimos para pausar la prisa y devolverle pureza a tu día
            </h2>

            {/* Emotional highlighted phrase in Lora */}
            <div className="p-6 bg-[#FAF7F2] rounded-xl border-l-0 border border-[#285943]/15 mb-6">
              <p className="font-serif-quote italic text-lg sm:text-xl text-[#285943] leading-relaxed">
                “En NATIVA entendimos que la salud no se fabrica en un laboratorio industrial; brota del respeto a los ciclos de la tierra y del calor humano de quienes la trabajan con amor.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#1A382A]/80 leading-relaxed mb-6">
              Comenzamos en una pequeña cocina artesanal compartiendo nuestras primeras mezclas de hierbas secadas al sol con amigos y vecinos. Hoy colaboramos directamente con más de 18 familias campesinas y apicultores guardianes de los páramos colombianos.
            </p>

            <p className="text-sm sm:text-base text-[#1A382A]/80 leading-relaxed mb-8">
              Cada lote de Té Vital, cada tarro de Miel de Montaña y cada bolsa de Granola es cosechado, tostado y envasado en su lugar de origen, garantizando un comercio justo y un producto con vida propia.
            </p>

            {/* 3 Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#285943]/10">
              <div className="flex items-start gap-3">
                <SunMedium className="w-5 h-5 text-[#C97852] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A382A]">Secado al Sol</h4>
                  <p className="text-xs text-[#1A382A]/70">Preservación natural de aceites botánicos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#6F9E73] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A382A]">Comercio Justo</h4>
                  <p className="text-xs text-[#1A382A]/70">Retribución digna al productor local.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sprout className="w-5 h-5 text-[#285943] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A382A]">Agroecológico</h4>
                  <p className="text-xs text-[#1A382A]/70">Sin agroquímicos ni transgénicos.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
