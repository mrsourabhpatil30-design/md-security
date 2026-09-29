import React, { useState } from 'react';
import { Shield, Building, Award, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onQuoteClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onQuoteClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card with Operation Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
              <img
                src="/src/assets/images/indian_security_parade_briefing_1790692955639.jpg"
                alt="Squad of Indian security guards in uniform assembled for morning briefing and inspection"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-600/20 border border-orange-500/30 rounded-lg text-orange-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">M.D. Security Manpower</h4>
                    <p className="text-xs text-slate-300">
                      Operating from Lodhivali, Khalapur · Raigad, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-xl max-w-xs">
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                Corporate Objective
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                Safeguarding Businesses, Investments, Assets & Employees.
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Company Profile Information */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="text-xs font-semibold uppercase tracking-wider text-orange-500 mb-2">
              About M.D. Security
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-6">
              Enterprise-Wide Solutions in Trusted Security & Manpower
            </h2>

            {/* Profile Text */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">M.D. Security</strong> is an organisation offering
                enterprise-wide solutions in the field of trusted security services. The company profile
                states that the organisation was founded in the year 2022 and was built on the extensive
                experience of its founders, including more than a decade of experience in providing
                security professionals for diverse business applications and establishments.
              </p>

              <p>
                We provide professionally trained, legally verified, and reliable security personnel
                including <span className="text-white font-medium">Security Guards</span>,{' '}
                <span className="text-white font-medium">Armed Security</span>,{' '}
                <span className="text-white font-medium">Lady Security Guards</span>,{' '}
                <span className="text-white font-medium">Bouncers</span>, and{' '}
                <span className="text-white font-medium">Security Supervisors</span>.
              </p>

              {/* What We Safeguard Grid */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Company-Stated Safeguard Objectives:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Businesses', desc: 'Continuous operational safety and perimeter integrity' },
                    { label: 'Investments', desc: 'Protecting capital assets and commercial property' },
                    { label: 'Physical Assets', desc: 'Raw material inventory, plant equipment & tools' },
                    { label: 'Employees & Staff', desc: 'Safe workplace environment for staff & visitors' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80"
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Section */}
              {isExpanded && (
                <div className="pt-4 space-y-3 text-sm text-slate-300 border-t border-slate-800 animate-in fade-in duration-200">
                  <p>
                    From our headquarters at Lodhivali in Khalapur taluka (Raigad district), we actively
                    serve manufacturing units in MIDC Patalganga, industrial hubs in Khopoli, chemical
                    plants in Rasayani, corporate offices across Mumbai, and commercial developments in Pune.
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    Note: Information presented is based on the company-provided profile and official
                    brochure documentation.
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <span>{isExpanded ? 'Show Less' : 'Read More About Us'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow transition-colors"
              >
                Discuss Your Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
