import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SecurityProfessionals } from './components/SecurityProfessionals';
import { IndustriesSection } from './components/IndustriesSection';
import { HousekeepingSection } from './components/HousekeepingSection';
import { ClientLogoWall } from './components/ClientLogoWall';
import { GallerySection } from './components/GallerySection';
import { MissionVisionValues } from './components/MissionVisionValues';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { CompanyDataDrawer } from './components/CompanyDataDrawer';
import { Sliders } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedService, setPreselectedService] = useState('');
  const [isDataDrawerOpen, setIsDataDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check current section in viewport
      const sections = ['home', 'about', 'services', 'industries', 'housekeeping', 'clients', 'gallery', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-600 z-[60] origin-left transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 1 & 2. Top Bar & Sticky Navigation */}
      <Header onQuoteClick={() => handleQuoteClick()} activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero onQuoteClick={() => handleQuoteClick()} />

        {/* 4. Trust/Value Statement Strip */}
        <section className="bg-slate-900 border-y border-slate-800 py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs sm:text-sm text-slate-300">
            <div>
              <span className="text-white font-bold">M.D. Security</span> · Trusted Manpower & Housekeeping Solutions from Lodhivali, Khalapur (Raigad)
            </div>
            <div className="flex items-center gap-6 text-xs text-orange-400 font-semibold">
              <span>✓ Legally Verified Manpower</span>
              <span>✓ Regular Field Drills</span>
              <span>✓ Active Supervision</span>
            </div>
          </div>
        </section>

        {/* 5. About M.D. Security */}
        <AboutSection onQuoteClick={() => handleQuoteClick()} />

        {/* 6. Security Services */}
        <ServicesSection onQuoteClick={handleQuoteClick} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Security Professionals */}
        <SecurityProfessionals />

        {/* 9. Industries Served */}
        <IndustriesSection onQuoteClick={() => handleQuoteClick()} />

        {/* 10. Housekeeping Services */}
        <HousekeepingSection onQuoteClick={handleQuoteClick} />

        {/* 11. Important Clients (Exact Brochure Client Logo Wall) */}
        <ClientLogoWall />

        {/* 12. Gallery */}
        <GallerySection />

        {/* 13. Mission & Vision */}
        <MissionVisionValues />

        {/* 14. Location & Profile Details */}
        <LocationSection />

        {/* 15. Contact / Enquiry */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA onQuoteClick={() => handleQuoteClick()} />

      {/* Discreet Profile Data Info Button */}
      <button
        onClick={() => setIsDataDrawerOpen(true)}
        className="fixed bottom-20 left-4 z-40 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 shadow-lg text-[11px] font-medium transition-all backdrop-blur-sm"
        title="View Centralized Company Profile Data Structure"
      >
        <Sliders className="w-3.5 h-3.5 text-orange-500" />
        <span>Data Guide</span>
      </button>

      {/* Company Data Drawer */}
      <CompanyDataDrawer
        isOpen={isDataDrawerOpen}
        onClose={() => setIsDataDrawerOpen(false)}
      />
    </div>
  );
}
