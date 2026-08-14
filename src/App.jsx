import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Chatbot from './components/Chatbot';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import FloatingOrderBtn from './components/FloatingOrderBtn';

function AppContent() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenOrderModal = (pkgName = '') => {
    setSelectedPackage(pkgName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedPackage('');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white transition-colors duration-300 overflow-x-hidden relative">
      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenOrderModal={handleOpenOrderModal} />
        <About onOpenOrderModal={handleOpenOrderModal} />
        <Skills />
        <Projects onOpenOrderModal={handleOpenOrderModal} />
        <Services onOpenOrderModal={handleOpenOrderModal} />
        <Reviews />
        <Team />
        <Contact onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* Floating Interactive Help & Support AI Chatbot */}
      <Chatbot onOpenOrderModal={handleOpenOrderModal} />

      {/* Instant Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        initialPackage={selectedPackage}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
