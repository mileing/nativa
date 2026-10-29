import React, { useState } from 'react';
import { Sparkles, Clock, Check, Coffee, Eye, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../types.ts';

interface FeaturedProductProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  product,
  onOpenDetail,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'beneficios' | 'ingredientes' | 'preparacion'>('beneficios');

  return (
    <section id="destacado" className="py-24 bg-[#F3EBDD]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Creación Insignia de la Nueva Línea</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A382A] tracking-tight">
            El Producto Destacado
          </h2>
          <p className="mt-3 text-base text-[#1A382A]/70">
            Una formulación botánica maestra diseñada para transformar tus mañanas.
          </p>
        </div>

        {/* Feature Presentation Box */}
        <div className="bg-white rounded-2xl border border-[#285943]/15 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Star Product Image */}
            <div className="lg:col-span-6 relative bg-[#FAF7F2] p-8 sm:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-4/3 rounded-xl overflow-hidden shadow-md group">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#285943] text-white text-[11px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  {product.badge || 'Producto Destacado'}
                </div>
              </div>
            </div>

            {/* Right: Detailed Information & Conversion */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs text-[#6F9E73] font-semibold uppercase tracking-wider mb-2">
                  <span>{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.weight}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-[#1A382A] mb-3">
                  {product.name}
                </h3>

                {/* Emotional quote from PDF */}
                <p className="font-serif-quote italic text-lg sm:text-xl text-[#285943] mb-6">
                  “Una mezcla natural para comenzar el día con energía y bienestar.”
                </p>

                <p className="text-sm sm:text-base text-[#1A382A]/80 leading-relaxed mb-6">
                  {product.detailedDescription}
                </p>

                {/* Interactive Feature Tabs */}
                <div className="flex items-center gap-2 border-b border-[#285943]/15 pb-2 mb-6">
                  <button
                    onClick={() => setActiveTab('beneficios')}
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer ${
                      activeTab === 'beneficios'
                        ? 'text-[#285943] border-b-2 border-[#285943] font-extrabold'
                        : 'text-[#1A382A]/50 hover:text-[#1A382A]'
                    }`}
                  >
                    Beneficios
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredientes')}
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer ${
                      activeTab === 'ingredientes'
                        ? 'text-[#285943] border-b-2 border-[#285943] font-extrabold'
                        : 'text-[#1A382A]/50 hover:text-[#1A382A]'
                    }`}
                  >
                    Ingredientes
                  </button>
                  <button
                    onClick={() => setActiveTab('preparacion')}
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer ${
                      activeTab === 'preparacion'
                        ? 'text-[#285943] border-b-2 border-[#285943] font-extrabold'
                        : 'text-[#1A382A]/50 hover:text-[#1A382A]'
                    }`}
                  >
                    Ritual
                  </button>
                </div>

                {/* Tab Contents */}
                {activeTab === 'beneficios' && (
                  <ul className="space-y-2 mb-8">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A382A]">
                        <Check className="w-4 h-4 text-[#6F9E73] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'ingredientes' && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="bg-[#FAF7F2] border border-[#285943]/15 text-[#285943] text-xs px-3 py-1.5 rounded-sm font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                )}

                {activeTab === 'preparacion' && (
                  <div className="bg-[#FAF7F2] p-4 rounded-lg border border-[#285943]/10 mb-8 text-xs sm:text-sm text-[#1A382A]/85 flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-[#C97852] shrink-0" />
                    <div>
                      <span className="font-bold block text-[#1A382A]">Tiempo de infusión: 4–5 minutos a 90°C</span>
                      <span>Coloca una cucharadita (2g) en agua caliente. Deja reposar tapado y disfruta de su aroma cítrico y floral.</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Price & Action Row */}
              <div className="pt-6 border-t border-[#285943]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1A382A] tabular-nums font-mono">
                      ${product.price.toLocaleString('es-CO')} COP
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-[#1A382A]/50 line-through tabular-nums font-mono">
                        ${product.originalPrice.toLocaleString('es-CO')}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#6F9E73] font-semibold block">
                    Precio especial de lanzamiento
                  </span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {/* CTA requested in the PDF: DESCUBRIR TÉ VITAL */}
                  <button
                    onClick={() => onOpenDetail(product)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#285943] bg-[#FAF7F2] hover:bg-[#F3EBDD] border border-[#285943]/30 rounded-sm transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>DESCUBRIR TÉ VITAL</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.98] rounded-sm transition-all shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C97852]" />
                    <span>AÑADIR</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
