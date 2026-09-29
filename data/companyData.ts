export interface ClientItem {
  id: string;
  name: string;
  brochureSubtext?: string;
  location: string;
  category: 'Industrial' | 'Infrastructure' | 'Corporate' | 'Residential' | 'Hospitality' | 'Commercial';
  shortName: string;
  isHousekeepingClient?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  idealFor: string[];
  icon: string;
}

export interface HousekeepingService {
  title: string;
  description: string;
  points: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Security Team' | 'Industrial Security' | 'Security Operations' | 'Lady Security' | 'Housekeeping';
  imageUrl: string;
  caption: string;
  locationTag: string;
}

export const COMPANY_INFO = {
  name: 'M.D. SECURITY',
  legalName: 'M.D. Security Services',
  tagline: 'Trusted. Everyday. Everywhere.',
  foundedYear: '2022',
  founderExperience: 'More than a decade of experience in providing security professionals',
  regNumber: '[COMPANY REGISTRATION NUMBER - TO BE PROVIDED]',
  
  // Contact details directly from brochure
  primaryPhone: '8208033816',
  secondaryPhone: '9130596888',
  displayPhones: ['+91 82080 33816', '+91 91305 96888'],
  
  primaryEmail: 'manojdhumal107@gmail.com',
  brochurePrintedEmail: 'manojdhumal107@gamil.com',
  corporateEmail: 'manojdhumal@mdsecurity.in',
  website: 'www.mdsecurity.in',
  
  // Registered & Operating Address directly from brochure
  address: {
    complex: 'Shivam Prajapati Complex',
    building: 'Building No. 2 A, Flat 102',
    area: 'Lodhivali, Khalapur',
    district: 'Raigad',
    state: 'Maharashtra',
    pincode: '410206',
    fullFormatted: 'Shivam Prajapati Complex, Building No. 2 A, 102, Lodhivali, Khalapur, Raigad - 410206, Maharashtra',
    shortLocation: 'Lodhivali, Khalapur, Raigad, Maharashtra - 410206'
  },
  
  operationalCoverage: [
    'Khalapur & Lodhivali Industrial Belt',
    'MIDC Patalganga Industrial Area',
    'Khopoli Industrial Zone',
    'MIDC Rasayani & Mohopada',
    'Panvel & Navi Mumbai Corridor',
    'Pune & Pimpri-Chinchwad Region',
    'Thane & Mumbai Metropolitan Region'
  ]
};

export const MISSION_STATEMENT = {
  text: 'We aim at safeguarding the interests, integrity and identity of our clients from all the probable risks by offering bespoke security solutions.',
  highlight: 'Safeguarding interests, integrity and identity with tailored security solutions.'
};

export const VISION_STATEMENT = {
  text: 'We envision to become the most trusted and preferred choice of clients for all kinds of security services that are unmatched and reliable.',
  highlight: 'The most trusted and preferred security partner in Maharashtra.'
};

export const BROCHURE_CLIENT_MOTTO =
  'To gain the trust and confidence of the clients so as to maintain a healthy long term never ending relationship.';

export const CORE_VALUES = [
  {
    title: 'Trust & Integrity',
    description: 'We safeguard client premises and assets with complete honesty, loyalty, and strict adherence to duty.'
  },
  {
    title: 'Legal Verification',
    description: 'Every guard and supervisor undergoes thorough background checks and identity validation prior to deployment.'
  },
  {
    title: 'Regular Training',
    description: 'Continuous drills, emergency fire safety procedures, visitor management, and alertness refreshers.'
  },
  {
    title: 'Structured Supervision',
    description: 'Dedicated field officer inspections, shift reports, and transparent accountability on every site.'
  },
  {
    title: 'Client-Centric Commitment',
    description: 'Long-term partnership built on customized manpower sizing, quick replacements, and prompt response.'
  },
  {
    title: 'Safety & Protection',
    description: 'Uncompromising vigilance protecting personnel, valuable machinery, inventory, and business continuity.'
  }
];

export const SECURITY_PROFESSIONALS_CRITERIA = [
  {
    title: 'Self-Motivated',
    subtitle: 'High personal discipline',
    description: 'Personnel who take pride in active vigilance, professional posture, and proactive duty performance.'
  },
  {
    title: 'Legally Verified',
    subtitle: 'Thorough background checks',
    description: 'Complete documentation, identity authentication, and police verification procedures before posting.'
  },
  {
    title: 'Reliable & Punctual',
    subtitle: 'Dependable site coverage',
    description: 'Strict 100% post-attendance discipline with prompt relief and backup manpower arrangements.'
  },
  {
    title: 'Regularly Trained',
    subtitle: 'Continuous professional drills',
    description: 'Trained in gate registry, vehicle frisking, perimeter patrolling, fire equipment handling, and crisis protocols.'
  },
  {
    title: 'Professionally Qualified',
    subtitle: 'Certified security readiness',
    description: 'Experienced guards equipped with smart communication skills, grooming standards, and emergency preparedness.'
  }
];

export const SECURITY_SERVICES: ServiceItem[] = [
  {
    id: 'security-guards',
    title: 'Security Guard Services',
    tagline: 'Vigilant, disciplined manpower for industrial and corporate gates',
    description: 'Our primary security guard force provides round-the-clock physical protection, visitor logging, access restriction, material gate-pass verification, and perimeter patrolling.',
    keyPoints: [
      'Access control & visitor management',
      'Material in/out gate register maintenance',
      'Perimeter surveillance & hourly patrolling',
      'Emergency response & incident reporting'
    ],
    idealFor: ['Manufacturing Plants', 'Warehouses', 'Commercial Buildings', 'Residential Societies'],
    icon: 'ShieldCheck'
  },
  {
    id: 'armed-security',
    title: 'Armed Security / Armed Guards',
    tagline: 'Licensed personnel for high-risk assets and critical protection',
    description: 'Certified armed guards with government-issued firearm licenses for high-security facilities, cash-in-transit escorts, jewellery outlets, and VIP personnel protection.',
    keyPoints: [
      'Fully licensed & verified arms holders',
      'Weapons handling & crisis response training',
      'High-risk asset escort & transit protection',
      'Vigilant deterrent for critical installations'
    ],
    idealFor: ['Cash Logistics', 'Financial Establishments', 'High-Value Manufacturing', 'Executive Escort'],
    icon: 'Lock'
  },
  {
    id: 'lady-security',
    title: 'Lady Security Guards',
    tagline: 'Professional female security officers for respectful, thorough inspection',
    description: 'Duly trained female security personnel essential for female staff frisking, corporate reception desks, healthcare premises, shopping malls, and educational institutions.',
    keyPoints: [
      'Female visitor & employee frisking compliance',
      'Front-desk reception & identity card issuance',
      'Discreet and courteous customer interactions',
      'Hostel, hospital & retail floor security'
    ],
    idealFor: ['Corporate Reception', 'Textile & Electronics Plants', 'Shopping Malls', 'Colleges & Hostels'],
    icon: 'UserCheck'
  },
  {
    id: 'bouncer-services',
    title: 'Bouncer Services',
    tagline: 'Formidable physical presence for crowd control and private events',
    description: 'Physically imposing, disciplined bouncers trained in conflict de-escalation, crowd control, access screening, VIP movement escort, and event safety management.',
    keyPoints: [
      'Crowd control & entry management',
      'VIP guest safety & stage perimeter security',
      'Conflict de-escalation without disruption',
      'Corporate AGMs, public gatherings & gala events'
    ],
    idealFor: ['Corporate Events', 'Exhibitions & Expos', 'High-Profile Functions', 'Hotels & Banquets'],
    icon: 'Users'
  },
  {
    id: 'security-supervisors',
    title: 'Security Supervisors & Field Officers',
    tagline: 'Operational leadership ensuring flawless on-site guard performance',
    description: 'Experienced on-ground supervisors who conduct night surprise visits, manage shift handovers, maintain site registers, liaise with client facility heads, and resolve escalations.',
    keyPoints: [
      'Regular day & surprise night site inspections',
      'Duty roster allocation & attendance audits',
      'Direct coordination with client administration',
      'Immediate replacement in case of guard absence'
    ],
    idealFor: ['Multi-Post Facilities', 'Large Industrial Compounds', 'Housing Complexes', 'IT Parks'],
    icon: 'Award'
  },
  {
    id: 'manpower-solutions',
    title: 'Security Manpower Solutions',
    tagline: 'Custom turnkey workforce deployment designed to client scale',
    description: 'Comprehensive workforce planning and end-to-end security staffing tailored specifically to your facility layout, risk profile, shift timings, and statutory compliance needs.',
    keyPoints: [
      'Customized risk assessment & manpower sizing',
      'Statutory compliance & labor law alignment',
      'Turnkey staffing for short-term or annual contracts',
      'Dedicated single point of contact for accounts'
    ],
    idealFor: ['Infrastructure Projects', 'SEZs & Industrial Parks', 'New Site Launches', 'Corporate Headquarters'],
    icon: 'Briefcase'
  }
];

export const HOUSEKEEPING_DATA = {
  title: 'Professional Housekeeping Services',
  tagline: 'Hassle-free, dependable and cost-effective facility cleanliness',
  mission: 'To raise the bar for cleanliness and organization by providing superior housekeeping services.',
  vision: 'To become a recognised leader in the housekeeping business, setting standards for excellence and innovation.',
  description: 'M.D. Security provides dedicated, trained housekeeping manpower equipped with modern cleaning methodologies to maintain immaculate hygiene across industrial, commercial, and residential spaces in Maharashtra.',
  features: [
    {
      title: 'Dedicated & Courteous Staff',
      desc: 'Polite, well-groomed, knowledgeable housekeeping staff trained in commercial decorum.'
    },
    {
      title: 'Modern Cleaning Techniques',
      desc: 'Systematic surface disinfection, mechanised scrubbing, glass cleaning, and waste segregation.'
    },
    {
      title: 'Quality & Hygiene Standards',
      desc: 'Zero-compromise cleanliness checklists for washrooms, pantry areas, shop floors, and lobbies.'
    },
    {
      title: 'Health, Safety & Environment',
      desc: 'Strict adherence to environmental considerations and chemical safety protocols on client premises.'
    },
    {
      title: 'Facility Management Support',
      desc: 'Seamless integration with administrative staff for pantry support, waste disposal, and utility maintenance.'
    },
    {
      title: 'Client-Specific Solutions',
      desc: 'Flexible shift scheduling aligned to your operational hours without interrupting day-to-day work.'
    }
  ],
  selectedClients: [
    'Balaji Formalin Pvt. Ltd.',
    'B. G. Shirke Contraction Technology',
    'Hiranandani Fortune City',
    '"Roots 9" Hotel',
    'Unit Modular Pvt. Ltd.',
    'Arkose Industries',
    'A. G. Mercantile Company Pvt. Ltd.'
  ]
};

// Exact 17 client records matching the brochure page image
export const IMPORTANT_CLIENTS: ClientItem[] = [
  {
    id: 'client-1',
    name: 'B. G. Shirke Contraction Technology',
    brochureSubtext: 'B. G. SHIRKE CONTRACTION TECHNOLOGY',
    location: 'MIDC Patalganga',
    category: 'Infrastructure',
    shortName: 'SHIRKE',
    isHousekeepingClient: true
  },
  {
    id: 'client-2',
    name: 'J. Kumar Infraproject',
    brochureSubtext: 'J. KUMAR INFRAPROJECT',
    location: 'Mumbai',
    category: 'Infrastructure',
    shortName: 'J.KUMAR',
    isHousekeepingClient: false
  },
  {
    id: 'client-3',
    name: 'Geo Consult Associates',
    brochureSubtext: 'GEO ASSOCIATE',
    location: 'Pune',
    category: 'Corporate',
    shortName: 'GeoConsult',
    isHousekeepingClient: false
  },
  {
    id: 'client-4',
    name: 'Balaji Formalin Pvt. Ltd.',
    brochureSubtext: 'BALAJI FORMALIN',
    location: 'MIDC Rasayani',
    category: 'Industrial',
    shortName: 'BALAJI',
    isHousekeepingClient: true
  },
  {
    id: 'client-5',
    name: 'Arihant Arshiya',
    brochureSubtext: 'ARIHANT SOCIETY',
    location: 'Khopoli',
    category: 'Residential',
    shortName: 'ARIHĀNT',
    isHousekeepingClient: false
  },
  {
    id: 'client-6',
    name: 'Qualizens Pharma Pvt. Ltd.',
    brochureSubtext: 'QUALIZENS PHARMA PVT LTD,',
    location: 'Khopoli',
    category: 'Industrial',
    shortName: 'Qualizens',
    isHousekeepingClient: false
  },
  {
    id: 'client-7',
    name: 'Arkose Industries',
    brochureSubtext: 'ARKOSE INDUSTRIES',
    location: 'Khopoli',
    category: 'Industrial',
    shortName: 'Arkose',
    isHousekeepingClient: true
  },
  {
    id: 'client-8',
    name: 'Adithi Hotel',
    brochureSubtext: 'ADITHI HOTEL',
    location: 'Pune',
    category: 'Hospitality',
    shortName: 'ADITHI',
    isHousekeepingClient: false
  },
  {
    id: 'client-9',
    name: 'Roots 9 Kitchen & Bar',
    brochureSubtext: 'ROOT 9 - PUNE',
    location: 'Pune',
    category: 'Hospitality',
    shortName: 'ROOTS 9',
    isHousekeepingClient: true
  },
  {
    id: 'client-10',
    name: 'Nineteen Grand West Pvt. Ltd.',
    brochureSubtext: 'NINETEEN GRAND WEST PVT. LTD.',
    location: 'Pune Pimpri Chinchwad',
    category: 'Commercial',
    shortName: '19 GRAND WEST',
    isHousekeepingClient: false
  },
  {
    id: 'client-11',
    name: 'AAI Charitable & Educational Trust',
    brochureSubtext: 'AAI CHARITABLE & EDUCATIONAL TRUST',
    location: 'Pune',
    category: 'Corporate',
    shortName: 'आई',
    isHousekeepingClient: false
  },
  {
    id: 'client-12',
    name: 'MTDC Resors',
    brochureSubtext: 'MTDC RESORS',
    location: 'Malshej',
    category: 'Hospitality',
    shortName: 'MTDC',
    isHousekeepingClient: false
  },
  {
    id: 'client-13',
    name: 'H.K. Enterprises',
    brochureSubtext: 'H. K. ENTERPRISES',
    location: 'Thane',
    category: 'Commercial',
    shortName: 'HK GROUP',
    isHousekeepingClient: false
  },
  {
    id: 'client-14',
    name: 'RIO Moduler',
    brochureSubtext: 'RIO MODULER',
    location: 'Khopoli MIDC',
    category: 'Industrial',
    shortName: 'RIO',
    isHousekeepingClient: false
  },imageUrl: '/indian_security_guards_hero_1790692918464.jpg',
  
  {
    id: 'client-15',
    name: 'Rubaru Real Estate',
    brochureSubtext: 'HIRANANDANI RUBARU',
    location: 'Panvel',
    category: 'Residential',
    shortName: 'RUBARU',
    isHousekeepingClient: false
  },
  {
    id: 'client-16',
    name: 'A G Mercantiles',
    brochureSubtext: 'A G MERCANTILES',
    location: 'Mumbai',
    category: 'Commercial',
    shortName: 'A G',
    isHousekeepingClient: true
  },
  {
    id: 'client-17',
    name: 'Shivam Prajapati Complex',
    brochureSubtext: 'SHIVAM PRAJAPATI COMPLEX',
    location: 'Lodhivali',
    category: 'Residential',
    shortName: 'SHIVAM',
    isHousekeepingClient: false
  }
];

export const INDUSTRIES_SERVED = [
  {
    title: 'Industrial & Manufacturing',
    subtitle: 'MIDC Patalganga, Khopoli & Rasayani Units',
    desc: 'Heavy industrial security, raw material in-gate logging, weighbridge control, and perimeter protection for factories.',
    icon: 'Factory'
  },
  {
    title: 'Corporate Offices & IT Hubs',
    subtitle: 'Business Parks & Head Offices in Pune & Mumbai',
    desc: 'Visitor access badges, polite front-desk reception officers, after-hours facility monitoring, and asset security.',
    icon: 'Building2'
  },
  {
    title: 'Construction & Infrastructure Sites',
    subtitle: 'Major Civil, Highway & Metro Projects',
    desc: 'Site perimeter guarding, equipment asset protection, diesel theft prevention, and worker access control.',
    icon: 'HardHat'
  },
  {
    title: 'Residential & Housing Societies',
    subtitle: 'Apartment Complexes & Gated Communities',
    desc: 'Gate surveillance, resident vehicle verification, delivery check-in, night rounds, and family safety.',
    icon: 'Home'
  },
  {
    title: 'Commercial & Retail Centers',
    subtitle: 'Shopping Complexes & Showrooms',
    desc: 'Baggage scanning, anti-pilferage watch, crowd flow coordination, and parking guidance.',
    icon: 'Store'
  },
  {
    title: 'Educational Institutions',
    subtitle: 'Schools, Colleges & Training Campuses',
    desc: 'Campus boundary vigilance, student gate control, authorized visitor recording, and peaceful campus atmosphere.',
    icon: 'GraduationCap'
  },
  {
    title: 'Hospitality & Resorts',
    subtitle: 'Hotels, Banquets & Tourism Destinations in Pune & Malshej',
    desc: 'Courteous guest reception, VIP safety, discreet bouncer presence, and property vigilance.',
    icon: 'Compass'
  },
  {
    title: 'Pharma & Chemical Facilities',
    subtitle: 'Hazardous & Regulated Production Units in Khopoli',
    desc: 'Safety-gear compliance verification, strict authorized entry, fire hazard monitoring, and regulatory logs.',
    icon: 'FlaskConical'
  }
];

// All images strictly feature authentic Indian personnel in Maharashtra environments
export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Indian Security Guard Personnel Squad',
    category: 'Security Team',
    imageUrl: '/src/assets/images/indian_security_guards_hero_1790692918464.jpg',
    caption: 'Disciplined Indian security guards in crisp navy blue uniforms standing at the entrance of an industrial facility in Maharashtra.',
    locationTag: 'Maharashtra MIDC Site'
  },
  {
    id: 'gal-2',
    title: 'MIDC Factory Gate & Vehicle Checkpoint',
    category: 'Industrial Security',
imageUrl: '/indian_guard_industrial_gate_1790692932721.jpg',
    caption: 'Indian security guard verifying material gate passes, recording vehicle logs, and checking personnel entry at an industrial gate.',
    locationTag: 'MIDC Industrial Gate'
  },
  {
    id: 'gal-3',
    title: 'Corporate Lady Security Officer',
    category: 'Lady Security',
    imageUrl: '/src/assets/images/indian_lady_security_guard_1790692944668.jpg',
    caption: 'Professional female Indian security officer handling corporate reception desk security, visitor logging, and employee entry.',
    locationTag: 'Corporate Reception'
  },
  {
    id: 'gal-4',
    title: 'Morning Guard Briefing & Parade Formation',
    category: 'Security Operations',
    imageUrl: '/src/assets/images/indian_security_parade_briefing_1790692955639.jpg',
    caption: 'Disciplined guard squad during morning parade, uniform turnout review, and daily shift instructions led by security supervisors.',
    locationTag: 'Field Supervision'
  },
  {
    id: 'gal-5',
    title: 'Facility Housekeeping & Hygiene Team',
    category: 'Housekeeping',
    imageUrl: '/src/assets/images/indian_housekeeping_facility_staff_1790692972764.jpg',
    caption: 'Dedicated Indian housekeeping staff maintaining immaculate corporate premises, polished floors, and hygiene standards.',
    locationTag: 'Corporate Facility'
  }
];
