import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, MessageSquare } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  actionType: string;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  actionType,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setSubmitted(true);
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
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 p-2 text-[#1A382A]/60 hover:text-[#1A382A] rounded-full hover:bg-[#FAF7F2] transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-1">
                {actionType === 'AGENDAR' ? 'Agendamiento Personalizado' : 'Solicitud de Información'}
              </span>
              <h3 className="text-2xl font-extrabold text-[#1A382A]">
                {serviceTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#1A382A]/75 mt-1">
                Completa tus datos y nos comunicaremos en menos de 24 horas para coordinar la sesión.
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
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Fecha Preferida (Opcional)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A382A] mb-1.5">
                  Mensaje o Consulta Especial
                </label>
                <textarea
                  rows={3}
                  placeholder="¿Algún objetivo de salud específico o pregunta que quieras hacernos?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#285943]/20 rounded-md text-sm text-[#1A382A] focus:outline-hidden focus:ring-2 focus:ring-[#285943]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.99] rounded-sm transition-all shadow-md cursor-pointer"
                >
                  {actionType === 'AGENDAR' ? 'CONFIRMAR AGENDAMIENTO' : 'ENVIAR SOLICITUD'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-[#6F9E73]/20 text-[#285943] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A382A] mb-2">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-xs sm:text-sm text-[#1A382A]/80 mb-6">
              Gracias, <strong>{name}</strong>. Un especialista del equipo NATIVA te escribirá por WhatsApp a <strong>{phone}</strong> para confirmar los detalles de tu experiencia.
            </p>
            <button
              onClick={onClose}
              className="py-2.5 px-6 bg-[#285943] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#1E4332] transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
