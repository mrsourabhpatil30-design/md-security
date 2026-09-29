import React from 'react';
import { Sparkles, CheckCircle2, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { HOUSEKEEPING_DATA } from '../data/companyData';

interface HousekeepingSectionProps {
  onQuoteClick: (serviceName?: string) => void;
}

export const HousekeepingSection: React.FC<HousekeepingSectionProps> = ({ onQuoteClick }) => {
  return (
    <section id="housekeeping" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Service Division</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            {HOUSEKEEPING_DATA.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {HOUSEKEEPING_DATA.description}
          </p>
        </div>

        {/* Featured Visual and Mission / Vision Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src="/src/assets/images/indian_housekeeping_facility_staff_1790692972764.jpg"
              alt="Indian housekeeping team staff maintaining corporate facility cleanliness in Maharashtra"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Immaculate Hygiene
              </span>
              <p className="text-xs text-slate-200 mt-1">
                Equipped with modern cleaning techniques, eco-friendly agents, and mechanised scrubbers.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
                  Housekeeping Mission
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed italic">
                  "{HOUSEKEEPING_DATA.mission}"
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
                  Housekeeping Vision
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed italic">
                  "{HOUSEKEEPING_DATA.vision}"
                </p>
              </div>
            </div>

            {/* Core Service Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HOUSEKEEPING_DATA.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
                >
                  <div className="flex items-center gap-2 text-white font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-slate-400 pl-6 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onQuoteClick('Housekeeping Services')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow transition-colors"
              >
                <span>Book Housekeeping Manpower</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Selected Housekeeping Clients Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">
                Selected Housekeeping Clients
              </h3>
              <p className="text-xs text-slate-400">
                Clients listed in the supplied company profile for facility & housekeeping services
              </p>
            </div>
            <span className="text-xs text-orange-400 font-medium">
              Profile-Documented Organizations
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {HOUSEKEEPING_DATA.selectedClients.map((client) => (
              <div
                key={client}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-orange-500/40 transition-colors flex items-center gap-3"
              >
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-orange-500 shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
