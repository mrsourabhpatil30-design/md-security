import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
    'Hello M.D. Security, I would like to enquire about your security services.'
  )}`;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Background Photography with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/indian_security_guards_hero_1790692918464.jpg"
          alt="Disciplined Indian security guards in uniform deployed at industrial facility gate in Maharashtra"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-95"
          onError={(e) => {
            // graceful fallback styling
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Measured Scrim for WCAG AA compliance (text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle Trust Line */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>M.D. Security Services · Raigad & Maharashtra</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-5 [text-wrap:balance]">
            Security That Protects What Matters
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            Professional security manpower and housekeeping solutions for businesses, industrial
            facilities, commercial premises, and residential environments across Maharashtra.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-lg shadow-orange-950/50 hover:shadow-orange-600/30 transition-all active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:+91${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Now</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Marks (Clean unboxed text separators, no pill clutter) */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>
                <strong>Founded in 2022</strong> · Decade+ Leadership
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <span>
                <strong>Legally Verified</strong> Security Guards
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>
                <strong>Structured Supervision</strong> & Field Audits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
