import React from 'react';
import { BROCHURE_CLIENT_MOTTO } from '../data/companyData';

interface ClientEntry {
  id: string;
  name: string;
  subtext?: string;
  location: string;
  renderLogo: () => React.ReactNode;
}

export const ClientLogoWall: React.FC = () => {
  const clients: ClientEntry[] = [
    // 1. B. G. Shirke Contraction Technology
    {
      id: 'shirke',
      name: 'B. G. Shirke Contraction Technology',
      subtext: 'B. G. SHIRKE CONTRACTION TECHNOLOGY',
      location: 'MIDC Patalganga',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-baseline font-black tracking-tight text-xl sm:text-2xl text-[#E05315]">
            <span>SHIRKE</span>
            <span className="text-[10px] ml-0.5 font-bold">®</span>
          </div>
        </div>
      )
    },
    // 2. J. Kumar Infraproject
    {
      id: 'jkumar',
      name: 'J. Kumar Infraproject',
      subtext: 'J. KUMAR INFRAPROJECT',
      location: 'Mumbai',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <div className="px-3.5 py-1.5 rounded-full bg-[#1B365D] text-white flex items-center justify-center shadow-sm">
            <span className="font-extrabold tracking-wider text-xs sm:text-sm uppercase font-sans">
              J.KUMAR
            </span>
          </div>
        </div>
      )
    },
    // 3. Geo Consult Associates
    {
      id: 'geoconsult',
      name: 'Geo Consult Associates',
      subtext: 'GEO ASSOCIATE',
      location: 'Pune',
      renderLogo: () => (
        <div className="flex items-center justify-center gap-2">
          {/* Golden Grid Globe with Loop */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
              <circle cx="18" cy="18" r="14" stroke="#D97706" strokeWidth="1.8" fill="#FEF3C7" />
              <ellipse cx="18" cy="18" rx="8" ry="14" stroke="#D97706" strokeWidth="1.2" />
              <line x1="4" y1="18" x2="32" y2="18" stroke="#D97706" strokeWidth="1.2" />
              <path d="M6,10 Q18,28 30,10" stroke="#EA580C" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-bold text-[#1E3A8A] text-xs">GeoConsult</span>
            <span className="text-[7.5px] font-semibold text-[#854D0E] tracking-widest uppercase">ASSOCIATES</span>
          </div>
        </div>
      )
    },
    // 4. Balaji Formalin Pvt. Ltd.
    {
      id: 'balaji',
      name: 'Balaji Formalin Pvt. Ltd.',
      subtext: 'BALAJI FORMALIN',
      location: 'MIDC Rasayani',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-black text-xl tracking-wide text-[#C2410C]">
              BALAJI
            </span>
            <div className="flex gap-0.5">
              <span className="w-0.5 h-4 bg-[#C2410C]" />
              <span className="w-0.5 h-4 bg-[#C2410C]" />
              <span className="w-0.5 h-4 bg-[#C2410C]" />
            </div>
          </div>
          <span className="text-[7px] font-bold tracking-widest text-[#9A3412] uppercase mt-0.5">
            FORMALIN PVT. LTD.
          </span>
        </div>
      )
    },
    // 5. Arihant Arshiya
    {
      id: 'arihant',
      name: 'Arihant Arshiya',
      subtext: 'ARIHANT SOCIETY',
      location: 'Khopoli',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center font-serif font-bold text-base text-[#451A03] tracking-widest uppercase">
            <span>ARI</span>
            <span className="relative inline-flex flex-col items-center">
              {/* Stylized temple shikhar on H */}
              <span className="text-[#EA580C] text-[8px] -mb-1">▲</span>
              <span>HĀNT</span>
            </span>
          </div>
          <span className="font-serif font-semibold text-[10px] text-[#78350F] tracking-widest uppercase mt-0.5">
            ARSHIYA
          </span>
        </div>
      )
    },
    // 6. Qualizens Pharma Pvt. Ltd.
    {
      id: 'qualizens',
      name: 'Qualizens Pharma Pvt. Ltd.',
      subtext: 'QUALIZENS PHARMA PVT LTD,',
      location: 'Khopoli',
      renderLogo: () => (
        <div className="flex items-center justify-center gap-2">
          {/* Curled Green Ribbon P/Q symbol */}
          <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
            <path
              d="M14 34V12C14 7.5 19 4 24 5C28.5 6 31 10.5 30 15C29 19.5 24 22 17 22"
              stroke="#15803D"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 22C24 22 28 19 28 14C28 9.5 24 8 20 8"
              stroke="#84CC16"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-bold text-xs text-slate-800 tracking-tight">Qualizens</span>
            <span className="text-[7.5px] font-semibold text-slate-500 uppercase tracking-widest">Pharma</span>
          </div>
        </div>
      )
    },
    // 7. Arkose Industries
    {
      id: 'arkose',
      name: 'Arkose Industries',
      subtext: 'ARKOSE INDUSTRIES',
      location: 'Khopoli',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <span className="font-sans font-black italic text-xl sm:text-2xl text-[#B91C1C] tracking-tight">
            Arkose
          </span>
        </div>
      )
    },
    // 8. Adithi Hotel
    {
      id: 'adithi',
      name: 'Adithi Hotel',
      subtext: 'ADITHI HOTEL',
      location: 'Pune',
      renderLogo: () => (
        <div className="flex items-center justify-center text-center">
          <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 tracking-widest uppercase">
            ADITHI HOTEL
          </span>
        </div>
      )
    },
    // 9. Roots 9 Kitchen & Bar
    {
      id: 'roots9',
      name: 'Roots 9 Kitchen & Bar',
      subtext: 'ROOT 9 - PUNE',
      location: 'Pune',
      renderLogo: () => (
        <div className="flex items-center justify-center gap-2">
          {/* Circular Seal Medallion with Steam Curls */}
          <div className="w-8 h-8 rounded-full bg-[#44403C] flex items-center justify-center text-white shrink-0 shadow-inner">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M8 18C8 14 12 12 12 8C12 5 10 4 10 3" strokeLinecap="round" />
              <path d="M14 18C14 15 16 13 16 10C16 7 14 5 14 3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif font-black text-xs text-slate-900 tracking-wider">ROOTS 9</span>
            <span className="text-[7.5px] font-semibold text-slate-600 tracking-widest uppercase mt-0.5">KITCHEN &amp; BAR</span>
          </div>
        </div>
      )
    },
    // 10. Nineteen Grand West Pvt. Ltd.
    {
      id: 'nineteen',
      name: 'Nineteen Grand West Pvt. Ltd.',
      subtext: 'NINETEEN GRAND WEST PVT. LTD.',
      location: 'Pune Pimpri Chinchwad',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center">
          {/* Concentric Geometric Pyramid / Triangle */}
          <svg viewBox="0 0 40 36" className="w-8 h-7" fill="none">
            <polygon points="20,4 36,32 4,32" stroke="#92400E" strokeWidth="2" />
            <polygon points="20,13 30,30 10,30" stroke="#B45309" strokeWidth="1.5" />
            <polygon points="20,21 25,29 15,29" stroke="#D97706" strokeWidth="1.2" />
          </svg>
          <span className="text-[7.5px] font-bold text-slate-700 tracking-wider uppercase mt-1">
            19 GRAND WEST
          </span>
        </div>
      )
    },
    // 11. AAI Charitable & Educational Trust
    {
      id: 'aai',
      name: 'AAI Charitable & Educational Trust',
      subtext: 'AAI CHARITABLE & EDUCATIONAL TRUST',
      location: 'Pune',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center">
          {/* Solid Orange Oval with Marathi text 'आई' */}
          <div className="px-3.5 py-1 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-sm">
            <span className="font-bold text-base tracking-wide leading-none font-sans">
              आई
            </span>
          </div>
          <span className="text-[7.5px] font-serif font-semibold text-slate-700 tracking-widest mt-0.5">
            Charitable Trust
          </span>
        </div>
      )
    },
    // 12. MTDC Resors
    {
      id: 'mtdc',
      name: 'MTDC Resors',
      subtext: 'MTDC RESORS',
      location: 'Malshej',
      renderLogo: () => (
        <div className="flex items-center justify-center text-center">
          <span className="font-sans font-black text-xs sm:text-sm text-slate-900 tracking-wider uppercase">
            MTDC RESORS
          </span>
        </div>
      )
    },
    // 13. H.K. Enterprises
    {
      id: 'hk',
      name: 'H.K. Enterprises',
      subtext: 'H. K. ENTERPRISES',
      location: 'Thane',
      renderLogo: () => (
        <div className="flex items-center justify-center gap-2">
          {/* Geometric Interlocking H and K blocks */}
          <div className="flex items-center">
            <div className="w-5 h-6 bg-[#EA580C] text-white flex items-center justify-center font-black text-xs">
              H
            </div>
            <div className="w-5 h-6 bg-[#94A3B8] text-white flex items-center justify-center font-black text-xs">
              K
            </div>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif font-bold text-xs text-[#EA580C]">HK</span>
            <span className="text-[6.5px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">GROUP OF COMPANIES</span>
          </div>
        </div>
      )
    },
    // 14. RIO Moduler
    {
      id: 'rio',
      name: 'RIO Moduler',
      subtext: 'RIO MODULER',
      location: 'Khopoli MIDC',
      renderLogo: () => (
        <div className="flex items-center justify-center text-center">
          <span className="font-sans font-bold text-xs sm:text-sm text-slate-600 tracking-widest uppercase">
            RIO MODULER
          </span>
        </div>
      )
    },
    // 15. Rubaru Real Estate
    {
      id: 'rubaru',
      name: 'Rubaru Real Estate',
      subtext: 'HIRANANDANI RUBARU',
      location: 'Panvel',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="font-sans font-black text-base text-[#0F172A] tracking-wider uppercase">
            RUBARU
          </span>
          <div className="w-full flex items-center gap-1 mt-0.5">
            <span className="h-[1px] bg-[#EA580C] flex-grow" />
            <span className="text-[6.5px] font-bold text-[#EA580C] tracking-widest uppercase">REAL ESTATE</span>
            <span className="h-[1px] bg-[#EA580C] flex-grow" />
          </div>
        </div>
      )
    },
    // 16. A G Mercantiles
    {
      id: 'ag',
      name: 'A G Mercantiles',
      subtext: 'A G MERCANTILES',
      location: 'Mumbai',
      renderLogo: () => (
        <div className="flex items-center justify-center text-center">
          <span className="font-sans font-black text-xs sm:text-sm text-slate-900 tracking-wider uppercase">
            A G MERCANTILES
          </span>
        </div>
      )
    },
    // 17. Shivam Prajapati Complex
    {
      id: 'shivam',
      name: 'Shivam Prajapati Complex',
      subtext: 'SHIVAM PRAJAPATI COMPLEX',
      location: 'Lodhivali',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center">
          {/* Multi-colored blooming lotus symbol */}
          <svg viewBox="0 0 44 26" className="w-9 h-6" fill="none">
            {/* Center yellow petal */}
            <path d="M22,3 C20,9 20,18 22,22 C24,18 24,9 22,3 Z" fill="#EAB308" />
            {/* Left orange petal */}
            <path d="M20,6 C16,11 15,18 19,22 C19,17 19,11 20,6 Z" fill="#EA580C" />
            {/* Right orange petal */}
            <path d="M24,6 C28,11 29,18 25,22 C25,17 25,11 24,6 Z" fill="#EA580C" />
            {/* Left magenta petal */}
            <path d="M16,11 C11,15 11,20 16,23 C16,19 16,14 16,11 Z" fill="#D946EF" />
            {/* Right magenta petal */}
            <path d="M28,11 C33,15 33,20 28,23 C28,19 28,14 28,11 Z" fill="#D946EF" />
            {/* Left cyan/blue petal */}
            <path d="M12,16 C7,19 8,23 14,24 C13,21 13,18 12,16 Z" fill="#0EA5E9" />
            {/* Right cyan/blue petal */}
            <path d="M32,16 C37,19 36,23 30,24 C31,21 31,18 32,16 Z" fill="#0EA5E9" />
            {/* Bottom green base */}
            <path d="M12,24 Q22,27 32,24" stroke="#10B981" strokeWidth="1.5" />
          </svg>
          <span className="text-[7px] font-bold text-slate-800 tracking-wider uppercase mt-0.5">
            SHIVAM COMPLEX
          </span>
        </div>
      )
    }
  ];

  return (
    <section id="clients" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Brochure Quote Banner */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Brochure Client Quote Banner */}
          <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 mb-4 shadow-md">
            <div className="px-4 py-1.5 rounded-full bg-slate-950 text-orange-400 text-xs font-bold tracking-wide">
              OUR IMPORTANT CLIENT
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4">
            Trusted by Businesses Across Maharashtra
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 italic max-w-2xl mx-auto leading-relaxed border-l-2 border-orange-500 pl-3">
            "{BROCHURE_CLIENT_MOTTO}"
          </p>

          <p className="text-xs text-slate-400 mt-3">
            Client organisations and industrial partners as documented on the official M.D. Security brochure profile.
          </p>
        </div>

        {/* 17 Exact Client Logos Grid (Client Logo Wall) */}
        {/* White / Very light background for the logo containers, equal sizing, exact colors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="group bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500/80 transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[170px]"
            >
              {/* Logo Area (Visual Focus) */}
              <div className="w-full flex-grow flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-105">
                {client.renderLogo()}
              </div>

              {/* Subtext and Location underneath in smaller, disciplined text */}
              <div className="w-full pt-3 border-t border-slate-100 flex flex-col items-center">
                <span className="text-[11px] font-bold text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
                  {client.subtext || client.name}
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {client.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Verification Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Displayed strictly according to the M.D. Security official company brochure profile.
          All company trademarks and names belong to their respective corporate entities.
        </div>
      </div>
    </section>
  );
};
