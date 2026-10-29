import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Calendar, MapPin, QrCode, Download, Share2 } from 'lucide-react';
import { RegistrationFormData } from '../types.ts';
import { NativaLogo } from './NativaLogo.tsx';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    attendanceMode: 'presencial',
    city: 'Bogotá',
    notes: '',
  });

  const [registrationCode, setRegistrationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    
    // Generate unique confirmation pass number
    const code = `NAT-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegistrationCode(code);
    setSubmitted(true);
  };

  const handleShareWhatsApp = () => {
    const text = `¡Me acabo de registrar al Evento de Lanzamiento de NATIVA! Código de acceso: ${registrationCode}. Más info en nativa.com`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#285943]/20 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-4 right-4 p-2 text-[#1A382A]/60 hover:text-[#1A382A] rounded-full hover:bg-[#FAF7F2] transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-1">
                Lanzamiento Oficial
              </span>
              <h3 className="text-2xl font-extrabold text-[#1A382A]">
                Registro al Evento NATIVA
              </h3>
              <p className="text-xs sm:text-sm text-[#1A382A]/75 mt-1">
                Asegura tu cupo para el 15 de Noviembre y recibe tu Kit de Bienvenida de cortesía.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Milena Hernández"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: +57 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Modalidad de Asistencia *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendanceMode: 'presencial' })}
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      formData.attendanceMode === 'presencial'
                        ? 'border-[#285943] bg-[#285943]/5 text-[#285943]'
                        : 'border-[#285943]/15 text-[#1A382A]/70 hover:border-[#285943]/40'
                    }`}
                  >
                    <span className="font-bold text-xs block mb-0.5">Presencial (Bogotá)</span>
                    <span className="text-[11px] block text-[#1A382A]/60">Incluye cata sensorial</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendanceMode: 'virtual' })}
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      formData.attendanceMode === 'virtual'
                        ? 'border-[#285943] bg-[#285943]/5 text-[#285943]'
                        : 'border-[#285943]/15 text-[#1A382A]/70 hover:border-[#285943]/40'
                    }`}
                  >
                    <span className="font-bold text-xs block mb-0.5">Virtual (Streaming)</span>
                    <span className="text-[11px] block text-[#1A382A]/60">Transmisión en vivo HD</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Ciudad de Residencia
                </label>
                <input
                  type="text"
                  placeholder="Ej: Bogotá, Medellín, Cali, Barranquilla..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.99] rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C97852]" />
                  <span>CONFIRMAR MI REGISTRO</span>
                </button>
                <p className="text-[11px] text-[#1A382A]/60 text-center mt-2.5">
                  Tus datos están protegidos. Sin spam. Te enviaremos el enlace de acceso y detalles de ubicación.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-6 sm:p-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-[#6F9E73]/20 text-[#285943] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-1">
              ¡Cupo Confirmado!
            </span>
            <h3 className="text-2xl font-extrabold text-[#1A382A] mb-2">
              Bienvenido al Despertar de lo Natural
            </h3>
            <p className="text-xs sm:text-sm text-[#1A382A]/75 mb-6 max-w-sm mx-auto">
              Hemos reservado tu lugar para el lanzamiento oficial de NATIVA. Te enviamos la confirmación a <strong className="text-[#285943]">{formData.email}</strong>.
            </p>

            {/* Simulated Digital VIP Pass */}
            <div className="bg-[#285943] text-white p-6 rounded-xl border border-[#6F9E73]/30 text-left mb-6 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                <NativaLogo variant="white" showTagline={false} />
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#C97852] px-2 py-0.5 rounded-xs font-bold">
                  PASE VIP
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <span className="text-[10px] text-white/60 block uppercase">Titular</span>
                  <span className="font-bold text-white block truncate">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 block uppercase">Modalidad</span>
                  <span className="font-bold text-[#F3EBDD] block capitalize">{formData.attendanceMode}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 block uppercase">Fecha</span>
                  <span className="font-semibold text-white block">15 Nov 2026 · 09:30 AM</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 block uppercase">Código de Ingreso</span>
                  <span className="font-mono font-bold text-[#C97852] block tabular-nums">{registrationCode}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#F3EBDD]/80">
                <div className="flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#6F9E73]" />
                  <span>Presenta este pase en el acceso</span>
                </div>
                <span className="font-semibold">Kit Asignado</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleShareWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir en WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#285943] bg-[#FAF7F2] hover:bg-[#F3EBDD] border border-[#285943]/20 rounded-sm transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
