import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

interface TopBannerProps {
  onOpenRegister: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenRegister }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Anuncio del evento de lanzamiento" className="bg-[#285943] text-[#F3EBDD] text-xs font-medium px-4 py-2.5 relative z-50 border-b border-[#285943]/20 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-[#F3EBDD] font-semibold tracking-wide uppercase text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-[#C97852]" />
            Evento de Lanzamiento
          </span>
          <span className="text-[#F3EBDD]/60 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#F3EBDD]/90">
            15 de Noviembre • Bogotá & Streaming Virtual • Primeros 100 inscritos reciben Kit de Bienvenida
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          {/* Tabular countdown numbers */}
          <div className="hidden md:flex items-center gap-1 text-[11px] font-mono tabular-nums text-[#F3EBDD]/90 bg-[#1A382A]/50 px-2.5 py-1 rounded-sm border border-[#6F9E73]/30">
            <span>{String(timeLeft.days).padStart(2, '0')}d</span>
            <span>:</span>
            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
            <span>:</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
            <span>:</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>

          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1 text-[#F3EBDD] hover:text-white underline underline-offset-4 decoration-[#C97852] font-semibold transition-colors cursor-pointer text-[11px]"
          >
            <span>Reservar cupo</span>
            <ArrowRight className="w-3 h-3 text-[#C97852]" />
          </button>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Cerrar aviso"
            className="text-[#F3EBDD]/70 hover:text-white transition-colors p-0.5 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
