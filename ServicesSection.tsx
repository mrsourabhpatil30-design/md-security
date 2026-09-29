import React, { useState } from 'react';
import { ShieldCheck, Lock, UserCheck, Users, Award, Briefcase, ArrowRight, Check } from 'lucide-react';
import { SECURITY_SERVICES, ServiceItem } from '../data/companyData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onQuoteClick: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onQuoteClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-orange-500" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-orange-500" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-orange-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-orange-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-orange-500" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-orange-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
            Dedicated Security Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-4">
            Our Security Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tailored, disciplined, and legally verified security manpower explicitly configured for
            manufacturing plants, commercial offices, residential communities, and special events.
          </p>
        </div>

        {/* Services Grid (6 Core Services from Profile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECURITY_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-950 rounded-2xl p-7 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-orange-950/20"
            >
              <div>
                {/* Header with icon and index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Points Checklist */}
                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-900 text-xs text-slate-400">
                  {service.keyPoints.slice(0, 3).map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Learn More
                </button>

                <button
                  onClick={() => onQuoteClick(service.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-orange-600 rounded-lg transition-all"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onQuoteClick={(title) => onQuoteClick(title)}
      />
    </section>
  );
};
