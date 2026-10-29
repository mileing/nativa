import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onScrollToCatalog }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 lg:py-24 overflow-hidden bg-[#FAF7F2]">
      {/* Background organic botanical ambient glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#6F9E73]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#F3EBDD] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Message & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Launching Badge - Clean editorial text without static candy pills */}
            <div className="flex items-center gap-2.5 text-xs text-[#285943] font-semibold tracking-wider uppercase mb-5">
              <span className="inline-flex items-center gap-1.5 text-[#C97852] font-bold">
                <Sparkles className="w-4 h-4" />
                Evento Oficial de Lanzamiento
              </span>
              <span aria-hidden="true" className="text-[#6F9E73]">·</span>
              <span className="text-[#285943]/80">Edición Botánica Colombia</span>
            </div>

            {/* Main Headline requested: [NATIVA] */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1A382A] leading-tight mb-4 text-balance">
              NATIVA
            </h1>

            {/* Subtitle requested: [Lo natural también puede transformar tu día] */}
            <p className="font-serif-quote italic text-2xl sm:text-3xl text-[#285943] font-normal leading-relaxed mb-6 text-balance">
              “Lo natural también puede transformar tu día”
            </p>

            {/* Body explanatory paragraph */}
            <p className="text-base sm:text-lg text-[#1A382A]/80 font-normal leading-relaxed max-w-2xl mb-8">
              Descubre nuestra nueva línea de infusiones botánicas, miel pura de alta montaña y granolas tostadas artesanalmente. Creados en pequeños lotes con ingredientes agroecológicos colombianos para devolverle el ritmo consciente a tus mañanas.
            </p>

            {/* CTAs requested by user: [ME QUIERO REGISTRAR] and [COMPRAR] */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wider uppercase text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.98] transition-all rounded-sm shadow-md cursor-pointer whitespace-nowrap group"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C97852]" />
              </button>

              <button
                onClick={onScrollToCatalog}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase text-[#285943] bg-transparent hover:bg-[#F3EBDD]/70 active:scale-[0.98] transition-all rounded-sm border-2 border-[#285943] cursor-pointer whitespace-nowrap"
              >
                COMPRAR
              </button>
            </div>

            {/* Adjacency Trust Strip */}
            <div className="pt-6 border-t border-[#285943]/15 grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6F9E73] shrink-0" />
                <span className="text-xs text-[#1A382A]/80 font-medium">100% Ingredientes Naturales</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#6F9E73] shrink-0" />
                <span className="text-xs text-[#1A382A]/80 font-medium">Cosecha Artesanal Local</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6F9E73] shrink-0" />
                <span className="text-xs text-[#1A382A]/80 font-medium">Sin Preservantes ni Químicos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Fidelity Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 group">
              <img
                src="/src/assets/images/nativa_hero_botanical_1792677714429.jpg"
                alt="Ritual matutino con infusión herbal Nativa, miel pura y hierbas aromáticas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Measured Scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#F3EBDD] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C97852] block">
                    Kit de Lanzamiento
                  </span>
                  <span className="text-sm font-bold text-[#1A382A]">
                    Ritual Despertar Nativa
                  </span>
                  <span className="text-xs text-[#1A382A]/70 block mt-0.5">
                    Té Vital + Miel de Montaña + Granola
                  </span>
                </div>
                <button
                  onClick={onScrollToCatalog}
                  className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] rounded-md transition-colors cursor-pointer shrink-0"
                >
                  Ver Pack
                </button>
              </div>
            </div>

            {/* Floating Editorial Stamp */}
            <div className="absolute -top-4 -left-4 bg-[#F3EBDD] border border-[#285943]/20 text-[#285943] px-3.5 py-2 rounded-lg shadow-md hidden sm:block">
              <span className="text-[11px] font-semibold uppercase tracking-wider block">Producción Colombia</span>
              <span className="font-serif-quote italic text-sm font-bold">Lotes Pequeños & Vivos</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
