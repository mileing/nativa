import React from 'react';
import { Calendar, Clock, MapPin, Gift, Users, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_SERVICES } from '../types.ts';

interface EventServicesProps {
  onOpenRegister: () => void;
  onOpenServiceModal: (serviceTitle: string, actionType: string) => void;
}

export const EventServices: React.FC<EventServicesProps> = ({
  onOpenRegister,
  onOpenServiceModal,
}) => {
  const scheduleItems = [
    {
      time: '09:30 AM',
      title: 'Bienvenida & Degustación de Té Vital',
      speaker: 'Equipo de Botánica NATIVA',
      desc: 'Recepción sensorial con infusión caliente y bocados de granola recién horneada.',
    },
    {
      time: '10:15 AM',
      title: 'Masterclass: El poder de las hierbas andinas',
      speaker: 'Dra. Elena Gómez · Etnobotánica invitada',
      desc: 'Aprende a reconocer plantas medicinales, ciclos de infusión y beneficios para la salud digestiva.',
    },
    {
      time: '11:30 AM',
      title: 'Taller de Maridaje con Mieles de Bosque',
      speaker: 'Camilo Varela · Maestro Apicultor',
      desc: 'Cata guiada de mieles crudas y creación de tu propia mezcla de aromáticas personalizada.',
    },
    {
      time: '12:30 PM',
      title: 'Presentación Oficial & Entrega de Kits',
      speaker: 'Fundadores de NATIVA',
      desc: 'Obsequio del Kit de Bienvenida para los primeros 100 registrados y brindis botánico.',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Event Marquee Block */}
        <div className="bg-[#285943] text-white rounded-2xl p-8 sm:p-12 lg:p-16 mb-20 shadow-xl relative overflow-hidden">
          {/* Subtle decorative botanical pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6F9E73]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F3EBDD] bg-[#1A382A]/70 px-3.5 py-1.5 rounded-sm mb-6 border border-[#6F9E73]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C97852]" />
                <span>Evento Oficial de Lanzamiento de Marca</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-[#FFFFFF] text-balance">
                El Despertar de lo Natural
              </h2>

              <p className="font-serif-quote italic text-xl text-[#F3EBDD] mb-6">
                “Una mañana dedicada a reconectar con la sabiduría de la tierra.”
              </p>

              <p className="text-sm sm:text-base text-white/85 mb-8 max-w-xl leading-relaxed">
                Acompáñanos en vivo en Bogotá o mediante transmisión interactiva en alta definición. Descubre el origen de cada ingrediente, comparte con botánicos y recibe el Kit Exclusivo de Bienvenida.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs text-[#F3EBDD]">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#C97852] shrink-0" />
                  <span>Sábado 15 de Noviembre</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C97852] shrink-0" />
                  <span>Bogotá & Streaming HD</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-[#C97852] shrink-0" />
                  <span>Kit de Regalo incluido</span>
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#285943] bg-[#F3EBDD] hover:bg-white active:scale-[0.98] rounded-sm transition-all shadow-md cursor-pointer group"
              >
                <span>ME QUIERO REGISTRAR</span>
                <ArrowRight className="w-4 h-4 text-[#C97852] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right: Agenda timeline */}
            <div className="lg:col-span-5 bg-[#1A382A]/80 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-[#6F9E73]/30">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#C97852] mb-6 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Cronograma del Evento</span>
              </h3>

              <div className="space-y-6">
                {scheduleItems.map((item) => (
                  <div key={item.time} className="flex gap-4">
                    <span className="text-xs font-mono font-bold text-[#6F9E73] tabular-nums shrink-0 pt-0.5">
                      {item.time}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#F3EBDD]/70 mb-1">{item.speaker}</p>
                      <p className="text-xs text-white/75">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Brand Services & Experiences Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97852] block mb-2">
              Nuestros Servicios & Experiencias
            </span>
            <h3 className="text-3xl font-extrabold text-[#1A382A] tracking-tight">
              Acompañamos tu Estilo de Vida Natural
            </h3>
            <p className="mt-2 text-sm text-[#1A382A]/75">
              Más que productos de despensa, ofrecemos espacios de aprendizaje y salud consciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND_SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="bg-white p-8 rounded-xl border border-[#285943]/15 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-[#6F9E73]"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C97852] block mb-2">
                    {serv.tag}
                  </span>
                  <h4 className="text-xl font-bold text-[#1A382A] mb-3">
                    {serv.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A382A]/80 leading-relaxed mb-4">
                    {serv.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#285943]/10 flex items-center justify-between">
                  <span className="text-xs text-[#6F9E73] font-medium">
                    {serv.duration}
                  </span>
                  <button
                    onClick={() => onOpenServiceModal(serv.title, serv.action)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#285943] hover:text-white bg-[#FAF7F2] hover:bg-[#285943] border border-[#285943]/20 rounded-sm transition-colors cursor-pointer"
                  >
                    {serv.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
