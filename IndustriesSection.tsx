import React from 'react';
import {
  Factory,
  Building2,
  HardHat,
  Home,
  Store,
  GraduationCap,
  Compass,
  FlaskConical,
  Check
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';

interface IndustriesSectionProps {
  onQuoteClick: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onQuoteClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-6 h-6 text-orange-500" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-orange-500" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-orange-500" />;
      case 'Home':
        return <Home className="w-6 h-6 text-orange-500" />;
      case 'Store':
        return <Store className="w-6 h-6 text-orange-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-orange-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-orange-500" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-orange-500" />;
      default:
        return <Factory className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
            Sector-Specific Protection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tailoring security protocols and guard deployments to the specific operational realities of
            industrial plants, corporate tech parks, residential societies, and construction sites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.title}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-slate-950 w-fit rounded-xl border border-slate-800 mb-4 group-hover:bg-orange-500/10 transition-colors">
                  {getIcon(ind.icon)}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-1">
                  {ind.title}
                </h3>
                <div className="text-[11px] font-medium text-orange-500/90 mb-3">
                  {ind.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80">
                <button
                  onClick={onQuoteClick}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Request Sector Proposal</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
