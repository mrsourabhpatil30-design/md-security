import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onQuoteClick: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* 1. Slim Top Contact Bar (Desktop/Tablet) */}
      <div
        className={`bg-slate-950 text-slate-300 text-xs border-b border-slate-800 transition-all duration-200 ${
          isScrolled ? 'max-h-0 opacity-0 overflow-hidden py-0 border-transparent' : 'max-h-12 py-2 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Location info */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300 truncate">
            <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span className="truncate">
              {COMPANY_INFO.address.area}, Raigad - {COMPANY_INFO.address.pincode}, Maharashtra
            </span>
          </div>

          {/* Contact numbers and Email */}
          <div className="flex items-center flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <a
                href={`tel:+91${COMPANY_INFO.primaryPhone}`}
                className="hover:text-white transition-colors tracking-wide"
              >
                +91 {COMPANY_INFO.primaryPhone}
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={`tel:+91${COMPANY_INFO.secondaryPhone}`}
                className="hover:text-white transition-colors tracking-wide"
              >
                {COMPANY_INFO.secondaryPhone}
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <a
                href={`mailto:${COMPANY_INFO.primaryEmail}`}
                className="hover:text-white transition-colors lowercase"
              >
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-2.5'
            : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Shield */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <BrandLogo variant="white" showTagline={!isScrolled} />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-orange-500'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+91${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:+91${COMPANY_INFO.primaryPhone}`}
              className="p-2 text-white bg-slate-800 rounded-lg"
              aria-label="Call M.D. Security"
            >
              <Phone className="w-4 h-4 text-orange-500" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-orange-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-base font-medium text-slate-200 hover:text-orange-500 border-b border-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full py-2.5 px-4 text-center font-semibold text-sm text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow"
            >
              Request a Quote
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <a
                href={`tel:+91${COMPANY_INFO.primaryPhone}`}
                className="flex items-center gap-1.5 text-orange-400 font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 {COMPANY_INFO.primaryPhone}</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  'Hello M.D. Security, I would like to enquire about your security services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
