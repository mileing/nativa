import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, MessageCircle } from 'lucide-react';
import { Product } from '../types.ts';

interface ProductCatalogProps {
  products: Product[];
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onOpenDetail,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Productos' },
    { id: 'Infusiones', label: 'Infusiones Botánicas' },
    { id: 'Despensa', label: 'Granolas & Snacks' },
    { id: 'Mieles', label: 'Mieles Crudas' },
    { id: 'Packs', label: 'Packs de Lanzamiento' },
  ];

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const generateWhatsAppLink = (product: Product) => {
    const text = `¡Hola NATIVA! Me interesa adquirir "${product.name}" ($${product.price.toLocaleString('es-CO')} COP) del nuevo lanzamiento. ¿Tienen disponibilidad inmediata para envío?`;
    return `https://wa.me/573001234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="portafolio" className="py-24 bg-white scroll-mt-16">
      <div id="productos" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-2">
              Nuestra Nueva Línea
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A382A] tracking-tight">
              Catálogo de Cosecha Artesanal
            </h2>
            <p className="mt-3 text-base text-[#1A382A]/75">
              Productos elaborados a mano con ingredientes vivos de la cordillera colombiana. Selecciona un producto para conocer su origen o realizar tu pedido.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF7F2] rounded-lg border border-[#285943]/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#285943] text-white shadow-xs'
                    : 'text-[#1A382A]/70 hover:text-[#285943] hover:bg-[#F3EBDD]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Auto Layout Feel & Hover States */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F2] rounded-xl border border-[#285943]/15 overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#285943]/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Product Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#285943] text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                    {product.badge}
                  </div>
                )}

                {/* Quick Hover Overlay for Fast Inspection */}
                <div className="absolute inset-0 bg-[#1A382A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                  <button
                    onClick={() => onOpenDetail(product)}
                    className="p-2.5 bg-white text-[#285943] rounded-full shadow-md hover:bg-[#F3EBDD] transition-transform hover:scale-110 cursor-pointer"
                    title="Ver detalles e ingredientes"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={generateWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#25D366] text-white rounded-full shadow-md hover:bg-[#20ba59] transition-transform hover:scale-110 cursor-pointer"
                    title="Pedir directo por WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6F9E73] font-semibold uppercase tracking-wider mb-1.5">
                    <span>{product.category}</span>
                    <span className="text-[#1A382A]/50 lowercase">{product.weight}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A382A] group-hover:text-[#285943] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1A382A]/75 line-clamp-2 mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-[#285943]/10">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-lg sm:text-xl font-extrabold text-[#1A382A] font-mono tabular-nums">
                      ${product.price.toLocaleString('es-CO')} <span className="text-xs font-normal text-[#1A382A]/60">COP</span>
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#1A382A]/40 line-through font-mono tabular-nums">
                        ${product.originalPrice.toLocaleString('es-CO')}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenDetail(product)}
                      className="py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#285943] bg-white hover:bg-[#F3EBDD] border border-[#285943]/25 rounded-sm transition-colors text-center cursor-pointer"
                    >
                      Ver Ficha
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.98] rounded-sm transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#C97852]" />
                      <span>Comprar</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Free Shipping & Direct WhatsApp Purchase Strip */}
        <div className="mt-14 p-6 bg-[#FAF7F2] rounded-xl border border-[#285943]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6F9E73]/20 text-[#285943] flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A382A]">¿Prefieres hacer tu pedido conversado por chat?</h4>
              <p className="text-xs text-[#1A382A]/75">Atendemos de forma cercana en WhatsApp para asesorarte con tu combinación ideal.</p>
            </div>
          </div>
          <a
            href="https://wa.me/573001234567?text=Hola%20NATIVA,%20quiero%20hacer%20un%20pedido%20de%20la%20nueva%20l%C3%ADnea%20natural."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#285943] hover:bg-[#1E4332] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#6F9E73]" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
