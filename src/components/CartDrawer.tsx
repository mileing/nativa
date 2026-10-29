import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem, Product } from '../types.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onDirectCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onDirectCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.15); // 15% Launch discount
  const isFreeShipping = subtotal >= 60000;
  const shippingCost = isFreeShipping || subtotal === 0 ? 0 : 9500;
  const total = subtotal - discount + shippingCost;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const itemList = items
      .map((item) => `• ${item.quantity}x ${item.product.name} ($${(item.product.price * item.quantity).toLocaleString('es-CO')} COP)`)
      .join('\n');
    const message = `🌿 ¡Hola NATIVA! Quiero realizar la compra de los siguientes productos de su nueva línea:\n\n${itemList}\n\nSubtotal: $${subtotal.toLocaleString('es-CO')} COP\nDescuento Lanzamiento (15%): -$${discount.toLocaleString('es-CO')} COP\nEnvío: ${isFreeShipping ? 'GRATIS' : `$${shippingCost.toLocaleString('es-CO')} COP`}\nTotal a pagar: $${total.toLocaleString('es-CO')} COP\n\n¿Me indican los medios de pago para coordinar la entrega? Gracias.`;
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#285943]/20 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 bg-[#FAF7F2] border-b border-[#285943]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#285943]" />
              <h3 className="text-base font-extrabold text-[#1A382A]">
                Tu Carrito de Cosecha
              </h3>
              <span className="text-xs bg-[#285943]/10 text-[#285943] font-bold px-2 py-0.5 rounded-full font-mono tabular-nums">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Cerrar carrito"
              className="p-1.5 text-[#1A382A]/60 hover:text-[#1A382A] rounded-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#285943]/10 text-[#285943]/40 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-[#1A382A] mb-1">Tu carrito está vacío</h4>
                <p className="text-xs text-[#1A382A]/60 max-w-xs mx-auto mb-6">
                  Descubre los productos artesanales de nuestra nueva línea y comienza a transformar tus mañanas.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#285943] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#1E4332] transition-colors cursor-pointer"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#285943]/10 flex gap-3.5 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded-md border border-[#285943]/10 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-[#1A382A] truncate">
                      {item.product.name}
                    </h5>
                    <span className="text-[11px] text-[#6F9E73] font-medium block mb-1.5">
                      ${item.product.price.toLocaleString('es-CO')} COP
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#285943]/20 rounded-xs bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#1A382A] hover:bg-[#FAF7F2] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold font-mono tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#1A382A] hover:bg-[#FAF7F2] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-xs text-red-500 hover:text-red-700 p-1 transition-colors cursor-pointer ml-auto"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-[#FAF7F2] border-t border-[#285943]/15 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#1A382A]/75">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">${subtotal.toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between text-[#C97852] font-semibold">
                  <span>Descuento de Lanzamiento (15%)</span>
                  <span className="font-mono tabular-nums">-${discount.toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between text-[#1A382A]/75">
                  <span>Envío</span>
                  <span className="font-mono tabular-nums">
                    {isFreeShipping ? (
                      <strong className="text-[#6F9E73]">GRATIS</strong>
                    ) : (
                      `$${shippingCost.toLocaleString('es-CO')} COP`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#285943]/10 flex justify-between text-base font-extrabold text-[#1A382A]">
                  <span>Total</span>
                  <span className="font-mono tabular-nums text-lg text-[#285943]">
                    ${total.toLocaleString('es-CO')} COP
                  </span>
                </div>
              </div>

              {/* Direct & WhatsApp Checkout CTAs */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={onDirectCheckout}
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.99] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>FINALIZAR PEDIDO DIRECTO</span>
                  <ArrowRight className="w-4 h-4 text-[#C97852]" />
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>COMPRAR POR WHATSAPP</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#1A382A]/60 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6F9E73]" />
                <span>Garantía de frescura artesanal y pago contra entrega</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
