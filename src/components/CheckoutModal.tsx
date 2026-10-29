import React, { useState } from 'react';
import { X, CheckCircle, Package, MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types.ts';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Bogotá');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'contraentrega' | 'nequi' | 'tarjeta'>('contraentrega');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.15);
  const isFreeShipping = subtotal >= 60000;
  const shippingCost = isFreeShipping || subtotal === 0 ? 0 : 9500;
  const total = subtotal - discount + shippingCost;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !phone) return;
    const num = `NAT-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(num);
    setStep('success');
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#285943]/20 relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 p-2 text-[#1A382A]/60 hover:text-[#1A382A] rounded-full hover:bg-[#FAF7F2] transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-1">
              Despacho Seguro Colombia
            </span>
            <h3 className="text-2xl font-extrabold text-[#1A382A] mb-1">
              Finalizar Pedido
            </h3>
            <p className="text-xs text-[#1A382A]/70 mb-6">
              Total a pagar:{' '}
              <strong className="text-[#285943] font-mono text-sm">
                ${total.toLocaleString('es-CO')} COP
              </strong>
            </p>

            <form onSubmit={handleCompleteOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Nombre de quien recibe *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nombre y apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bogotá, Medellín, etc."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Dirección de Entrega Completa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Calle / Carrera, Número, Apto / Casa, Barrio"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Método de Pago Preferido *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('contraentrega')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                      paymentMethod === 'contraentrega'
                        ? 'border-[#285943] bg-[#285943]/10 text-[#285943] font-bold'
                        : 'border-[#285943]/15 text-[#1A382A]/70'
                    }`}
                  >
                    <span className="text-xs block">Contra Entrega</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nequi')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                      paymentMethod === 'nequi'
                        ? 'border-[#285943] bg-[#285943]/10 text-[#285943] font-bold'
                        : 'border-[#285943]/15 text-[#1A382A]/70'
                    }`}
                  >
                    <span className="text-xs block">Nequi / Dale</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tarjeta')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                      paymentMethod === 'tarjeta'
                        ? 'border-[#285943] bg-[#285943]/10 text-[#285943] font-bold'
                        : 'border-[#285943]/15 text-[#1A382A]/70'
                    }`}
                  >
                    <span className="text-xs block">Tarjeta Déb/Créd</span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.99] rounded-sm transition-all shadow-md cursor-pointer"
                >
                  CONFIRMAR ORDEN (${total.toLocaleString('es-CO')} COP)
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#1A382A]/60 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6F9E73]" />
                  <span>Empaque ecológico en caja reciclada con sello térmico</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-[#6F9E73]/20 text-[#285943] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-1">
              ¡Pedido Confirmado!
            </span>
            <h3 className="text-2xl font-extrabold text-[#1A382A] mb-2">
              Gracias por apoyar lo natural
            </h3>
            <p className="text-xs sm:text-sm text-[#1A382A]/80 mb-6">
              Tu orden ha sido registrada con el código{' '}
              <strong className="font-mono text-[#285943]">{orderNumber}</strong>. Enviaremos tus productos a {address}, {city}. Te notificaremos por WhatsApp a {phone} cuando el mensajero salga en ruta.
            </p>

            <button
              onClick={onClose}
              className="py-3 px-8 bg-[#285943] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#1E4332] transition-colors cursor-pointer"
            >
              Volver a la Tienda
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
