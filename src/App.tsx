/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Benefits } from './components/Benefits.tsx';
import { FeaturedProduct } from './components/FeaturedProduct.tsx';
import { ProductCatalog } from './components/ProductCatalog.tsx';
import { EventServices } from './components/EventServices.tsx';
import { BrandStory } from './components/BrandStory.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { RegistrationModal } from './components/RegistrationModal.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { ServiceModal } from './components/ServiceModal.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { NATIVA_PRODUCTS, Product, CartItem } from './types.ts';

export default function App() {
  // Modal states
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [serviceModal, setServiceModal] = useState<{
    isOpen: boolean;
    title: string;
    actionType: string;
  }>({
    isOpen: false,
    title: '',
    actionType: 'AGENDAR',
  });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: NATIVA_PRODUCTS[0], quantity: 1 } // Té Vital in cart by default for nice first impression
  ]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById('productos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenServiceModal = (title: string, actionType: string) => {
    setServiceModal({
      isOpen: true,
      title,
      actionType,
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A382A] flex flex-col font-sans-display selection:bg-[#6F9E73]/30 selection:text-[#285943]">
      {/* Top Banner with Launch Countdown */}
      <TopBanner onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Navigation with Top Bar Contract */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenRegister={() => setIsRegisterOpen(true)}
          onScrollToCatalog={handleScrollToCatalog}
        />

        {/* 2. Key Pillars & Benefits */}
        <Benefits />

        {/* 3. Featured Star Product (Té Vital) */}
        <FeaturedProduct
          product={NATIVA_PRODUCTS[0]}
          onOpenDetail={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Complete Product Catalog */}
        <ProductCatalog
          products={NATIVA_PRODUCTS}
          onOpenDetail={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Launch Event & Brand Services */}
        <EventServices
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenServiceModal={handleOpenServiceModal}
        />

        {/* 6. Brand Story & Philosophy */}
        <BrandStory />

        {/* 7. Testimonials & Community Proof */}
        <Testimonials />

        {/* 8. Final Conversion CTA Block */}
        <FinalCTA
          onOpenRegister={() => setIsRegisterOpen(true)}
          onScrollToCatalog={handleScrollToCatalog}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* Interactive Modals & Drawers */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onDirectCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <ServiceModal
        isOpen={serviceModal.isOpen}
        onClose={() =>
          setServiceModal((prev) => ({ ...prev, isOpen: false }))
        }
        serviceTitle={serviceModal.title}
        actionType={serviceModal.actionType}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => setCartItems([])}
      />
    </div>
  );
}
