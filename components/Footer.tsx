import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="white" showTagline={true} />
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm pt-2">
              Enterprise-wide solutions in the field of trusted security services and facility
              housekeeping. Protecting businesses, investments, assets, and personnel across Maharashtra.
            </p>
            <div className="pt-2 text-slate-500 text-[11px]">
              Operating Base: Lodhivali, Khalapur, Raigad - 410206
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-orange-400 transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-orange-400 transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Security Guards
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Armed Security
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Lady Security Guards
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Bouncer Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Security Supervision
                </a>
              </li>
              <li>
                <a href="#housekeeping" className="hover:text-orange-400 transition-colors">
                  Housekeeping Services
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Address
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <div>
                  <a href={`tel:+91${COMPANY_INFO.primaryPhone}`} className="hover:text-white block">
                    +91 {COMPANY_INFO.primaryPhone}
                  </a>
                  <a href={`tel:+91${COMPANY_INFO.secondaryPhone}`} className="hover:text-white block">
                    +91 {COMPANY_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <div className="truncate">
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-white block truncate">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.corporateEmail}`} className="hover:text-white block truncate">
                    {COMPANY_INFO.corporateEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 text-[11px] leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Shivam Prajapati Complex, Building No. 2 A, 102, Lodhivali, Khalapur, Raigad - 410206, Maharashtra.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} M.D. Security. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Website: {COMPANY_INFO.website}</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
