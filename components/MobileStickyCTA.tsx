import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileStickyCTAProps {
  onQuoteClick: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
    'Hello M.D. Security, I would like to enquire about your security services.'
  )}`;

  return (
    <nav
      aria-label="Mobile quick contact actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call */}
        <a
          href={`tel:+91${COMPANY_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-[11px] font-semibold active:bg-slate-800"
        >
          <Phone className="w-3.5 h-3.5 text-orange-500 mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold active:bg-emerald-900/50"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire */}
        <button
          onClick={onQuoteClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-orange-600 text-white text-[11px] font-bold shadow active:bg-orange-500"
        >
          <FileText className="w-3.5 h-3.5 mb-0.5" />
          <span>Enquire</span>
        </button>
      </div>
    </nav>
  );
};
