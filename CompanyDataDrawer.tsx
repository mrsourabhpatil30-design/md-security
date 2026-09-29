import React, { useState } from 'react';
import { Sliders, X, Check, Copy, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CompanyDataDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdatePhones?: (phone1: string, phone2: string) => void;
}

export const CompanyDataDrawer: React.FC<CompanyDataDrawerProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-slate-950 text-white h-full overflow-y-auto border-l border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-orange-500" />
              <h3 className="text-base font-bold text-white">
                Company Data & Profile Settings
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 text-xs">
            <div className="p-3.5 rounded-xl bg-orange-950/30 border border-orange-500/30 text-slate-300 space-y-1">
              <div className="font-bold text-orange-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Centralized Data Architecture</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                All company information (phone numbers, emails, addresses, clients, services) is maintained
                cleanly in <code className="text-orange-300">src/data/companyData.ts</code> for zero-friction editing.
              </p>
            </div>

            {/* Quick Record Inspection */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                Active Contact Credentials
              </h4>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Primary Phone</span>
                  <span className="font-mono text-white text-xs">+91 {COMPANY_INFO.primaryPhone}</span>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.primaryPhone, 'p1')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] flex items-center gap-1"
                >
                  {copiedKey === 'p1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'p1' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Secondary Phone</span>
                  <span className="font-mono text-white text-xs">+91 {COMPANY_INFO.secondaryPhone}</span>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.secondaryPhone, 'p2')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] flex items-center gap-1"
                >
                  {copiedKey === 'p2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'p2' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="truncate mr-2">
                  <span className="text-[10px] text-slate-500 block uppercase">Official Email</span>
                  <span className="font-mono text-white text-xs truncate block">{COMPANY_INFO.primaryEmail}</span>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.primaryEmail, 'em')}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] flex items-center gap-1 shrink-0"
                >
                  {copiedKey === 'em' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'em' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                Registered Headquarters
              </h4>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-relaxed">
                {COMPANY_INFO.address.fullFormatted}
              </div>
            </div>

            {/* Registration Placeholder Note */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                Statutory Registration Placeholder
              </h4>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs">
                <code>{COMPANY_INFO.regNumber}</code>
                <p className="mt-1.5 text-[11px] text-slate-500">
                  Unverified registrations or ISO certifications are never fabricated, adhering to truthful corporate reporting standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
