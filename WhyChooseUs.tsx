import React from 'react';
import { ShieldCheck, UserCheck, RefreshCw, FileText, CheckCircle, Sliders } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      title: 'Efficient & Duly Verified Guards',
      desc: 'All security personnel pass comprehensive background checks, residence verification, and identity audits before assignment.'
    },
    {
      icon: <FileText className="w-5 h-5 text-orange-500" />,
      title: 'Legal Identity & Compliance',
      desc: 'Strict adherence to labor regulations, statutory documentation, and formal employment records for total client peace of mind.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-orange-500" />,
      title: 'Regular Training & Drill Refreshers',
      desc: 'Continuous on-site training covering fire emergencies, visitor entry protocols, material movement registers, and defensive postures.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-orange-500" />,
      title: 'Structured Supervision & Accountability',
      desc: 'Designated field officers conduct unannounced day and night surprise visits, maintaining shift reports and instant replacement readiness.'
    },
    {
      icon: <Sliders className="w-5 h-5 text-orange-500" />,
      title: 'Tailored Security Solutions',
      desc: 'We do not impose one-size-fits-all templates; our staffing is calculated based on your layout, vulnerability points, and operating shifts.'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-orange-500" />,
      title: 'Unwavering Commitment to Safety',
      desc: 'Founded on over a decade of leadership experience, our sole objective is safeguarding your enterprise, investments, and personnel.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
            Proven Industry Advantages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Why Choose M.D. Security?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Delivering disciplined, accountable, and legally verified security manpower for manufacturing,
            commercial, and residential establishments throughout Raigad, Mumbai, and Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => (
            <div
              key={pt.title}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-900 w-fit rounded-xl border border-slate-800 mb-4">
                  {pt.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
