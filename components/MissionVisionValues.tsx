import React from 'react';
import { Target, Compass, ShieldCheck, CheckCheck, Award, HeartHandshake, FileCheck, Flame } from 'lucide-react';
import { MISSION_STATEMENT, VISION_STATEMENT, CORE_VALUES } from '../data/companyData';

export const MissionVisionValues: React.FC = () => {
  const valueIcons: Record<string, React.ReactNode> = {
    'Trust & Integrity': <ShieldCheck className="w-5 h-5 text-orange-500" />,
    'Legal Verification': <FileCheck className="w-5 h-5 text-orange-500" />,
    'Regular Training': <Award className="w-5 h-5 text-orange-500" />,
    'Structured Supervision': <CheckCheck className="w-5 h-5 text-orange-500" />,
    'Client-Centric Commitment': <HeartHandshake className="w-5 h-5 text-orange-500" />,
    'Safety & Protection': <Flame className="w-5 h-5 text-orange-500" />
  };

  return (
    <section className="py-20 bg-slate-950 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Mission Card */}
          <div className="relative bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
                  Company Purpose
                </span>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
            </div>

            <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-orange-500">
              "{MISSION_STATEMENT.text}"
            </blockquote>

            <p className="mt-4 text-xs text-slate-400">
              Providing bespoke, risk-mitigated protection protocols customized specifically to each
              client’s facility, personnel, and premises.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
                  Long-Term Horizon
                </span>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
            </div>

            <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-orange-500">
              "{VISION_STATEMENT.text}"
            </blockquote>

            <p className="mt-4 text-xs text-slate-400">
              Building enduring trust through dependable manpower deployment, proactive field supervision,
              and uncompromising service standards across Maharashtra.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
              Foundational Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our Core Values
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              The principles emphasized in the company profile guiding every guard, supervisor, and operational posting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-slate-900/60 p-6 rounded-xl border border-slate-800/90 hover:border-orange-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-2.5 bg-slate-800 w-fit rounded-lg mb-4 group-hover:scale-105 transition-transform">
                  {valueIcons[val.title] || <ShieldCheck className="w-5 h-5 text-orange-500" />}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
