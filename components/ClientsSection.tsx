import React, { useState } from 'react';
import { Building, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { IMPORTANT_CLIENTS, ClientItem } from '../data/companyData';

export const ClientsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Infrastructure' | 'Industrial' | 'Corporate' | 'Residential' | 'Hospitality'>('All');

  const filteredClients = filter === 'All'
    ? IMPORTANT_CLIENTS
    : IMPORTANT_CLIENTS.filter(c => c.category === filter);

  return (
    <section id="clients" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
            Trusted Partnerships
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Our Important Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Organizations and establishments documented in the supplied M.D. Security company profile
            across Maharashtra industrial clusters, Mumbai, Pune, and Raigad.
          </p>

          {/* Interactive Filter Segmented Control */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-900 rounded-xl max-w-2xl mx-auto border border-slate-800">
            {(['All', 'Industrial', 'Infrastructure', 'Corporate', 'Residential', 'Hospitality'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === cat
                    ? 'bg-orange-600 text-white shadow'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Grid on Desktop, 3 on Tablet, 2 on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredClients.map((client, idx) => (
            <div
              key={client.id}
              className="bg-slate-900/90 rounded-xl p-5 border border-slate-800/80 hover:border-orange-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-orange-950/20"
            >
              <div>
                {/* Visual Insignia / Monogram Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-orange-500/30 flex items-center justify-center transition-colors">
                    <span className="font-display font-extrabold text-sm text-slate-400 group-hover:text-orange-400 transition-colors">
                      {client.shortName.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-400">
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* Client Full Name */}
                <h4 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-2 mb-2 leading-snug">
                  {client.name}
                </h4>

                {/* Location Marker */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="truncate">{client.location}</span>
                </div>
              </div>

              {/* Category & Verified Note */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="text-slate-400 font-medium">{client.category}</span>
                {client.isHousekeepingClient && (
                  <span className="text-[10px] text-orange-400 font-medium">
                    Housekeeping & Security
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Client Profile Verification */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Listed based on official M.D. Security profile documentation. Logos and trademarks belong to
          their respective organizations.
        </div>
      </div>
    </section>
  );
};
