import React from 'react';
import { UserCheck, Shield, Clock, Award, CheckCircle2 } from 'lucide-react';
import { SECURITY_PROFESSIONALS_CRITERIA } from '../data/companyData';

export const SecurityProfessionals: React.FC = () => {
  const criteriaIcons = [
    <UserCheck className="w-5 h-5 text-orange-500" />,
    <Shield className="w-5 h-5 text-orange-500" />,
    <Clock className="w-5 h-5 text-orange-500" />,
    <Award className="w-5 h-5 text-orange-500" />,
    <CheckCircle2 className="w-5 h-5 text-orange-500" />
  ];

  return (
    <section className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Header left */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
              Personnel Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
              Our Security Professionals
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              M.D. Security deploys disciplined, vetted, and alert manpower who represent the first line of
              defense for your business. Every deployed guard adheres to strict grooming, post discipline,
              and standard operational protocols.
            </p>
          </div>

          {/* Right: Key note from company profile */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Company Manpower Guarantee
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              "We take strict measures to ensure every security professional deployed to your premises
              is legally cleared, thoroughly trained in incident reporting, and physically capable of
              protecting people and properties."
            </p>
          </div>
        </div>

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {SECURITY_PROFESSIONALS_CRITERIA.map((crit, idx) => (
            <div
              key={crit.title}
              className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 bg-slate-950 w-fit rounded-lg mb-4 border border-slate-800">
                  {criteriaIcons[idx]}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {crit.title}
                </h3>
                <div className="text-[11px] font-medium text-orange-400 mb-2">
                  {crit.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {crit.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Standard</span>
                <span className="font-mono text-slate-400">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Visual Asset Feature Card */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 h-72 sm:h-80">
              <img
src="/indian_guard_industrial_gate_1790692932721.jpg"
                alt="Indian security guard inspecting vehicle and register at industrial gate in Maharashtra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
            <div className="md:col-span-5 p-6 sm:p-8">
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                Active Site Operations
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">
                Vigilant Gate & Material Control
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Gate registers, weighbridge entries, and employee access are logged diligently. Supervisors
                conduct random checks across shifts to maintain complete vigilance.
              </p>
              <div className="text-xs text-slate-400 border-l-2 border-orange-500 pl-3">
                Deployment across Lodhivali, Khalapur, MIDC Patalganga, Khopoli & Raigad region.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
