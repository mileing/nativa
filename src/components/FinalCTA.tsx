import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenRegister: () => void;
  onScrollToCatalog: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenRegister,
  onScrollToCatalog,
}) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#285943] text-white rounded-3xl p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background botanical blur */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#6F9E73]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#C97852]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F3EBDD] bg-[#1A382A]/80 px-4 py-1.5 rounded-sm mb-6 border border-[#6F9E73]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#C97852]" />
              <span>Únete al Gran Lanzamiento</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#FFFFFF] text-balance">
              NATIVA
            </h2>

            <p className="font-serif-quote italic text-2xl sm:text-3xl text-[#F3EBDD] mb-6 leading-relaxed text-balance">
              “Lo natural también puede transformar tu día”
            </p>

            <p className="text-base sm:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              No dejes tus mañanas al azar. Regístrate en nuestro lanzamiento oficial y recibe acceso prioritario a la primera cosecha, 20% de descuento de bienvenida y tu invitación al taller botánico.
            </p>

            {/* CTAs requested: [ME QUIERO REGISTRAR] and [COMPRAR] */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#285943] bg-[#F3EBDD] hover:bg-white active:scale-[0.98] transition-all rounded-sm shadow-lg cursor-pointer group"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-4 h-4 text-[#C97852] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-[#F3EBDD] bg-transparent hover:bg-white/10 active:scale-[0.98] transition-all rounded-sm border-2 border-[#F3EBDD]/60 cursor-pointer"
              >
                COMPRAR
              </button>
            </div>

            {/* Urgency & guarantee trust note */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F3EBDD]/80 pt-6 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6F9E73]" />
                Cupos limitados a 100 personas para kit físico
              </span>
              <span aria-hidden="true">·</span>
              <a
                href="https://wa.me/573001234567?text=Hola%20NATIVA,%20tengo%20dudas%20sobre%20el%20evento%20y%20los%20productos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#F3EBDD] hover:text-white underline underline-offset-4 decoration-[#6F9E73]"
              >
                <MessageCircle className="w-4 h-4 text-[#6F9E73]" />
                ¿Preguntas? Chatea con nuestro equipo
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
