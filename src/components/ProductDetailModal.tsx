import React from 'react';
import { X, Check, ShoppingBag, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { Product } from '../types.ts';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = `🌿 ¡Hola NATIVA! Quiero información detallada y solicitar "${product.name}" ($${product.price.toLocaleString('es-CO')} COP). ¿Me ayudan con mi pedido?`;
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#285943]/20 relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 p-2 text-[#1A382A]/60 hover:text-[#1A382A] rounded-full hover:bg-[#FAF7F2] transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-4/3 md:aspect-auto bg-[#FAF7F2] p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl shadow-xs"
            />
            {product.badge && (
              <span className="absolute top-8 left-8 bg-[#285943] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#6F9E73] font-semibold uppercase tracking-wider mb-1">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>{product.weight}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1A382A] mb-2">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-extrabold text-[#285943] font-mono tabular-nums">
                  ${product.price.toLocaleString('es-CO')} COP
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#1A382A]/40 line-through font-mono tabular-nums">
                    ${product.originalPrice.toLocaleString('es-CO')}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#1A382A]/80 leading-relaxed mb-6">
                {product.detailedDescription}
              </p>

              {/* Ingredients */}
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A382A] block mb-2">
                  Ingredientes Botánicos
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-xs bg-[#FAF7F2] border border-[#285943]/15 text-[#285943] px-2.5 py-1 rounded-xs font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits list */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A382A] block mb-2">
                  Beneficios Clave
                </span>
                <ul className="space-y-1.5 text-xs text-[#1A382A]">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6F9E73] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.brewTime && (
                <div className="flex items-center gap-2 p-2.5 bg-[#F3EBDD]/60 rounded-md text-xs text-[#285943] mb-6 font-medium">
                  <Clock className="w-4 h-4 text-[#C97852] shrink-0" />
                  <span>Preparación recomendada: {product.brewTime}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-4 border-t border-[#285943]/10">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.99] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-[#C97852]" />
                <span>Añadir a mi Pedido</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#285943] hover:bg-[#FAF7F2] border border-[#285943]/20 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Pedir directo por WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
