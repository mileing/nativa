import React, { useState } from 'react';
import { ShoppingBag, Menu, X, PhoneCall } from 'lucide-react';
import { NativaLogo } from './NativaLogo.tsx';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onOpenCart,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Redes sociales', href: '#redes-sociales' },
    { label: 'Portafolio', href: '#portafolio' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#285943]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark */}
        <a href="#inicio" className="shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#285943]">
          <NativaLogo variant="dark" showTagline={false} />
        </a>

        {/* Zone 2: 4-5 single-line nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#1A382A]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#285943] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#6F9E73] decoration-2 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Shopping Cart */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de compras"
            className="relative p-2.5 rounded-full text-[#285943] hover:bg-[#F3EBDD] transition-colors cursor-pointer border border-[#285943]/15"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C97852] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA from Prompt: ME QUIERO REGISTRAR */}
          <button
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] active:scale-[0.98] transition-all rounded-sm shadow-xs cursor-pointer whitespace-nowrap shrink-0"
          >
            ME QUIERO REGISTRAR
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden p-2 text-[#285943] hover:bg-[#F3EBDD] rounded-sm transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#285943]/15 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#1A382A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#285943]/5 hover:text-[#285943] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#285943] hover:bg-[#1E4332] rounded-sm transition-colors"
              >
                ME QUIERO REGISTRAR
              </button>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-semibold tracking-wider text-[#285943] border border-[#285943] rounded-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Contactar Asesor
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
