import React from 'react';
import { NativaLogo } from './NativaLogo.tsx';
import { Instagram, MessageCircle, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#1A382A] text-[#F3EBDD] pt-16 pb-12 border-t border-[#6F9E73]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F3EBDD]/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <NativaLogo variant="white" showTagline={true} className="mb-4" />
            <p className="font-serif-quote italic text-sm text-[#F3EBDD]/90 max-w-sm mb-6 leading-relaxed">
              “Lo natural también puede transformar tu día.”
            </p>
            <p className="text-xs text-[#F3EBDD]/70 max-w-sm leading-relaxed mb-6">
              Empresa colombiana dedicada a la elaboración y comercialización artesanal de infusiones de páramo, miel cruda de montaña y alimentos para un bienestar diario consciente.
            </p>

            <div id="redes-sociales" className="flex items-center gap-3 scroll-mt-24">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de NATIVA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6F9E73] transition-colors flex items-center justify-center text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de NATIVA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors flex items-center justify-center text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@nativa.com.co"
                aria-label="Email de NATIVA"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C97852] transition-colors flex items-center justify-center text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C97852] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F3EBDD]/80">
              <li>
                <a href="#redes-sociales" className="hover:text-white transition-colors">Redes sociales</a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-white transition-colors">Portafolio</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C97852] mb-4">
              Atención & Origen
            </h4>
            <div className="space-y-3 text-xs text-[#F3EBDD]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#6F9E73] shrink-0 mt-0.5" />
                <span>Bogotá D.C. · Envíos a todo el territorio nacional</span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#6F9E73] shrink-0 mt-0.5" />
                <span>WhatsApp: +57 (300) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#6F9E73] shrink-0 mt-0.5" />
                <span>pedidos@nativa.com.co</span>
              </div>
              <p className="text-[11px] text-[#F3EBDD]/60 pt-2">
                Horario: Lunes a Sábado de 8:00 AM a 6:00 PM
              </p>
            </div>
          </div>

          {/* Brand Commitment */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C97852] mb-4">
              Sello Artesanal
            </h4>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-[#F3EBDD]/80 space-y-2">
              <span className="font-bold text-white block">Hecho a mano en Colombia</span>
              <p className="text-[11px] leading-relaxed text-[#F3EBDD]/70">
                Empaques biodegradables y tarros de vidrio reutilizables. Promovemos el consumo responsable y la economía circular.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EBDD]/60">
          <p>© {new Date().getFullYear()} NATIVA. Todos los derechos reservados. Marca registrada.</p>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#C97852] fill-current" />
            <span>para el bienestar y la tierra colombiana.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
