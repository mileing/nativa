import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = '🌿 ¡Hola NATIVA! Vengo de su página web y quiero hacer una consulta sobre los productos naturales.';
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip hint */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1A382A] text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-[#285943]/15 pointer-events-auto animate-in fade-in slide-in-from-right-3 duration-300">
          <span>¿Dudas sobre tu pedido? ¡Escríbenos!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar sugerencia"
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        aria-label="Chatear por WhatsApp con NATIVA"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-108 active:scale-95 pointer-events-auto cursor-pointer relative group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">WhatsApp NATIVA</span>
      </button>
    </div>
  );
};
