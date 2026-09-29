import React, { useState } from 'react';
import { MapPin, Building, Navigation, Download, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const LocationSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadProfile = () => {
    // Generate clean text-based profile summary or trigger print preview
    const profileSummary = `
========================================
M.D. SECURITY - COMPANY PROFILE SUMMARY
"Trusted. Everyday. Everywhere."
========================================

Head Office Address:
${COMPANY_INFO.address.fullFormatted}

Contact Numbers:
+91 ${COMPANY_INFO.primaryPhone}
+91 ${COMPANY_INFO.secondaryPhone}

Emails:
${COMPANY_INFO.primaryEmail}
${COMPANY_INFO.corporateEmail}

Website:
https://${COMPANY_INFO.website}

Founded: ${COMPANY_INFO.foundedYear}
Experience: ${COMPANY_INFO.founderExperience}

Primary Services:
1. Security Guard Services (Industrial, Commercial, Residential)
2. Armed Security / Armed Guards
3. Lady Security Guards
4. Bouncer & Crowd Control Services
5. Security Supervisors & Site Officers
6. Turnkey Security Manpower Solutions
7. Dedicated Housekeeping & Facility Services

Key Operating Regions:
- Khalapur & Lodhivali Industrial Area
- MIDC Patalganga & MIDC Rasayani
- Khopoli Industrial Belt
- Panvel & Navi Mumbai Corridor
- Pune & Pimpri-Chinchwad Region
- Mumbai Metropolitan Region

========================================
Printed from M.D. Security Digital Profile
    `;

    const blob = new Blob([profileSummary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MD-Security-Company-Profile-Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Location Card & Operating Belt */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-orange-500">
                Strategic Base & Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
                Where We Operate
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Headquartered at Lodhivali in Khalapur taluka (Raigad district), our supervisory officers
                and guard forces are strategically positioned along the prime Mumbai-Pune industrial belt.
              </p>
            </div>

            {/* Address Details Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Registered & Operational Headquarters
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    <strong>Shivam Prajapati Complex</strong>,<br />
                    Building No. 2 A, Flat 102,<br />
                    Lodhivali, Taluka - Khalapur,<br />
                    District - Raigad, Maharashtra - 410206.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <a href={`tel:+91${COMPANY_INFO.primaryPhone}`} className="hover:text-white">
                    +91 {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-white truncate">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Coverage Zones */}
            <div className="space-y-2">
              <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                Active Industrial & Commercial Deployment Zones:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {COMPANY_INFO.operationalCoverage.map((zone) => (
                  <div
                    key={zone}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="truncate">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Company Profile Card with Digital Brochure */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-500" />
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Official Company Documentation
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  ESTD. {COMPANY_INFO.foundedYear}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                M.D. Security Digital Company Profile
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Our comprehensive company profile details our manpower qualification matrix, standard
                operating procedures (SOP), field supervisor checklist, verified client rosters, and
                service commitment.
              </p>

              {/* Profile Highlights List */}
              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400">Establishment Year</span>
                  <span className="font-semibold text-white">2022</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400">Leadership Experience</span>
                  <span className="font-semibold text-white">10+ Years in Security Manpower</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400">Company Registration</span>
                  <span className="font-mono text-slate-400 text-[11px]">
                    {COMPANY_INFO.regNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400">Website</span>
                  <span className="font-semibold text-orange-400">{COMPANY_INFO.website}</span>
                </div>
              </div>

              {/* Download Action */}
              <div className="space-y-3">
                <button
                  onClick={handleDownloadProfile}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-950/40 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Company Profile Summary</span>
                </button>

                {downloadSuccess && (
                  <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs text-center animate-in fade-in duration-200">
                    Profile summary downloaded successfully!
                  </div>
                )}

                <p className="text-[11px] text-slate-500 text-center">
                  Official M.D. Security documentation for client vendor registration and RFP submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
