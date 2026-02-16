export interface Startup {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  website: string;
  stage: 'Seed' | 'Series A' | 'Series B' | 'Series C';
  status: 'Pipeline' | 'Portfolio';
  sector: string;
  dealStage: 'Sourced' | 'Initial Review' | 'Deep Dive' | 'Due Diligence' | 'Partner Meeting' | 'Term Sheet' | 'Invested';
  founded: number;
  location: string;
  team: {
    name: string;
    role: string;
    background: string;
  }[];
  metrics: {
    revenue: number;
    revenueGrowth: number;
    arr: number;
    customers: number;
    churn: number;
    burnRate: number;
    runway: number;
    cac: number;
    ltv: number;
  };
  financials: {
    valuation: number;
    raising: number;
    invested?: number;
    ownership?: number;
    investmentDate?: string;
  };
  traction: string[];
  risks: string[];
  score: number;
  thesis: string;
}

export const startups: Startup[] = [
  // PORTFOLIO COMPANIES (5)
  {
    id: 'quantumflow',
    name: 'QuantumFlow',
    tagline: 'AI-powered supply chain optimization',
    logo: '/logos/quantumflow.png',
    website: 'https://quantumflow.ai',
    stage: 'Series A',
    status: 'Portfolio',
    sector: 'Enterprise SaaS',
    dealStage: 'Invested',
    founded: 2022,
    location: 'San Francisco, CA',
    team: [
      { name: 'Sarah Chen', role: 'CEO', background: 'Former VP Engineering at Flexport' },
      { name: 'Marcus Rodriguez', role: 'CTO', background: 'Ex-Google AI Research' },
      { name: 'Emily Park', role: 'COO', background: '10 years at McKinsey' }
    ],
    metrics: {
      revenue: 4800000,
      revenueGrowth: 312,
      arr: 5200000,
      customers: 47,
      churn: 4,
      burnRate: 280000,
      runway: 26,
      cac: 82000,
      ltv: 980000
    },
    financials: {
      valuation: 42000000,
      raising: 8000000,
      invested: 8000000,
      ownership: 19,
      investmentDate: '2024-11-15'
    },
    traction: [
      'Signed Fortune 500 customer (Walmart)',
      'ARR grew 312% YoY',
      'Expanded to 12 countries',
      'Strategic partnership with SAP'
    ],
    risks: [
      'High customer concentration (top 3 = 60% revenue)',
      'Long sales cycles (6-9 months)',
      'Competition from Oracle, IBM'
    ],
    score: 92,
    thesis: 'Supply chain is a $15B market ripe for AI disruption. QuantumFlow has proven product-market fit with tier-1 enterprise logos and best-in-class retention. Team has deep domain expertise.'
  },
  {
    id: 'meridian-health',
    name: 'Meridian Health',
    tagline: 'Virtual-first chronic care management',
    logo: '/logos/meridian.png',
    website: 'https://meridianhealth.com',
    stage: 'Series B',
    status: 'Portfolio',
    sector: 'Healthcare',
    dealStage: 'Invested',
    founded: 2021,
    location: 'Austin, TX',
    team: [
      { name: 'Dr. James Wilson', role: 'CEO', background: 'Former Chief Medical Officer at One Medical' },
      { name: 'Rachel Kim', role: 'CTO', background: 'Ex-Epic Systems Lead Engineer' },
      { name: 'David Okonkwo', role: 'Head of Clinical', background: 'Stanford Medicine faculty' }
    ],
    metrics: {
      revenue: 18500000,
      revenueGrowth: 245,
      arr: 22000000,
      customers: 78000,
      churn: 8,
      burnRate: 1200000,
      runway: 18,
      cac: 180,
      ltv: 2800
    },
    financials: {
      valuation: 125000000,
      raising: 25000000,
      invested: 12000000,
      ownership: 9.6,
      investmentDate: '2025-03-20'
    },
    traction: [
      '78K patients enrolled',
      'Partnerships with 3 major insurers',
      'NPS of 82 (industry avg: 45)',
      'Break-even path by Q2 2027'
    ],
    risks: [
      'Regulatory changes in telehealth reimbursement',
      'Competitive market with well-funded players',
      'Provider shortage in some markets'
    ],
    score: 88,
    thesis: 'Chronic disease management is a $200B opportunity. Meridian\'s clinical outcomes data (15% reduction in hospitalizations) and insurance partnerships create strong moat. Experienced healthcare team.'
  },
  {
    id: 'nexgen-robotics',
    name: 'NexGen Robotics',
    tagline: 'Autonomous warehouse robotics',
    logo: '/logos/nexgen.png',
    website: 'https://nexgenrobotics.io',
    stage: 'Seed',
    status: 'Portfolio',
    sector: 'Hardware + AI',
    dealStage: 'Invested',
    founded: 2023,
    location: 'Boston, MA',
    team: [
      { name: 'Dr. Amit Patel', role: 'CEO', background: 'MIT Robotics PhD, ex-Boston Dynamics' },
      { name: 'Lisa Anderson', role: 'VP Engineering', background: 'Former Amazon Robotics lead' },
      { name: 'Tom Chen', role: 'Head of Sales', background: '15 years in logistics tech' }
    ],
    metrics: {
      revenue: 1200000,
      revenueGrowth: 780,
      arr: 1800000,
      customers: 8,
      churn: 0,
      burnRate: 220000,
      runway: 14,
      cac: 120000,
      ltv: 1400000
    },
    financials: {
      valuation: 18000000,
      raising: 3500000,
      invested: 3500000,
      ownership: 19.4,
      investmentDate: '2025-08-12'
    },
    traction: [
      'Deployed in 8 facilities (Target, Home Depot pilots)',
      'ROI payback period: 14 months',
      '99.7% uptime across all deployments',
      'LOIs for 20 additional facilities'
    ],
    risks: [
      'Hardware margins lower than software',
      'Long implementation cycles',
      'Competition from established players'
    ],
    score: 85,
    thesis: 'Warehouse automation is accelerating post-pandemic. NexGen\'s robots have superior accuracy (99.7% vs 95% industry avg) and faster deployment. Strong founding team with technical moat.'
  },
  {
    id: 'fintech-shield',
    name: 'FintechShield',
    tagline: 'Real-time fraud detection for financial services',
    logo: '/logos/fintech-shield.png',
    website: 'https://fintechshield.com',
    stage: 'Series A',
    status: 'Portfolio',
    sector: 'Fintech',
    dealStage: 'Invested',
    founded: 2022,
    location: 'New York, NY',
    team: [
      { name: 'Alex Thompson', role: 'CEO', background: 'Former VP Product at Stripe' },
      { name: 'Dr. Nina Ivanova', role: 'Chief Scientist', background: 'ML researcher at MIT' },
      { name: 'Jordan Lee', role: 'CRO', background: 'Ex-Plaid enterprise sales' }
    ],
    metrics: {
      revenue: 6400000,
      revenueGrowth: 428,
      arr: 7800000,
      customers: 124,
      churn: 6,
      burnRate: 420000,
      runway: 22,
      cac: 38000,
      ltv: 620000
    },
    financials: {
      valuation: 58000000,
      raising: 12000000,
      invested: 12000000,
      ownership: 20.7,
      investmentDate: '2025-01-10'
    },
    traction: [
      'Processing $2.1B in transactions monthly',
      'Fraud detection rate: 97.2% (vs 89% industry avg)',
      'Customers include 3 neobanks',
      'API integration avg 2 weeks'
    ],
    risks: [
      'Dependent on fintech growth',
      'Regulatory compliance complexity',
      'Larger competitors (Sift, Riskified)'
    ],
    score: 90,
    thesis: 'Fraud is costing financial services $32B annually. FintechShield\'s ML model has best-in-class detection rates with low false positives. Team has deep fintech expertise and product is sticky.'
  },
  {
    id: 'educonnect',
    name: 'EduConnect',
    tagline: 'Skills-based learning platform for workforce development',
    logo: '/logos/educonnect.png',
    website: 'https://educonnect.io',
    stage: 'Seed',
    status: 'Portfolio',
    sector: 'Edtech',
    dealStage: 'Invested',
    founded: 2023,
    location: 'Seattle, WA',
    team: [
      { name: 'Michelle Garcia', role: 'CEO', background: 'Former Director at Coursera' },
      { name: 'Kevin Zhang', role: 'CTO', background: 'Ex-Duolingo engineering lead' },
      { name: 'Samantha Brown', role: 'Head of Content', background: '12 years in corporate training' }
    ],
    metrics: {
      revenue: 980000,
      revenueGrowth: 520,
      arr: 1400000,
      customers: 42,
      churn: 12,
      burnRate: 180000,
      runway: 16,
      cac: 18000,
      ltv: 142000
    },
    financials: {
      valuation: 15000000,
      raising: 3000000,
      invested: 3000000,
      ownership: 20,
      investmentDate: '2025-09-25'
    },
    traction: [
      '42 enterprise customers (Fortune 1000)',
      '18,000 active learners',
      '87% course completion rate',
      'Partnership with AWS for cloud certifications'
    ],
    risks: [
      'Crowded market with many competitors',
      'High churn rate (12%)',
      'Sales cycle extending (was 2mo, now 3.5mo)'
    ],
    score: 78,
    thesis: 'Corporate training is a $370B market shifting to skills-based learning. EduConnect has strong engagement metrics and Fortune 1000 traction. Need to improve retention and sales efficiency.'
  },

  // PIPELINE COMPANIES (20)
  {
    id: 'cloudvault',
    name: 'CloudVault',
    tagline: 'Zero-trust security for cloud infrastructure',
    logo: '/logos/cloudvault.png',
    website: 'https://cloudvault.io',
    stage: 'Series A',
    status: 'Pipeline',
    sector: 'Cybersecurity',
    dealStage: 'Due Diligence',
    founded: 2022,
    location: 'San Francisco, CA',
    team: [
      { name: 'Ryan Mitchell', role: 'CEO', background: 'Former security engineer at Cloudflare' },
      { name: 'Dr. Yuki Tanaka', role: 'CTO', background: 'PhD in cryptography from Stanford' }
    ],
    metrics: {
      revenue: 3200000,
      revenueGrowth: 380,
      arr: 4100000,
      customers: 38,
      churn: 7,
      burnRate: 340000,
      runway: 14,
      cac: 65000,
      ltv: 880000
    },
    financials: {
      valuation: 35000000,
      raising: 10000000
    },
    traction: [
      'SOC 2 Type II certified',
      'Protecting $8B in cloud infrastructure',
      'Zero breaches across customer base',
      '3 Fortune 500 customers'
    ],
    risks: [
      'Crowdfunded market with Palo Alto, Zscaler',
      'Short runway (14 months)',
      'Customer concentration risk'
    ],
    score: 84,
    thesis: 'Cloud security spend growing 25% annually. CloudVault has strong technical differentiation and enterprise traction. Need to validate unit economics before investing.'
  },
  {
    id: 'agriai',
    name: 'AgriAI',
    tagline: 'Precision agriculture powered by computer vision',
    logo: '/logos/agriai.png',
    website: 'https://agriai.co',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'AgTech',
    dealStage: 'Partner Meeting',
    founded: 2023,
    location: 'Des Moines, IA',
    team: [
      { name: 'Carlos Mendez', role: 'CEO', background: 'Agronomy PhD, former John Deere' },
      { name: 'Priya Sharma', role: 'CTO', background: 'Ex-Google AI, computer vision expert' }
    ],
    metrics: {
      revenue: 420000,
      revenueGrowth: 650,
      arr: 680000,
      customers: 124,
      churn: 18,
      burnRate: 140000,
      runway: 10,
      cac: 3800,
      ltv: 18000
    },
    financials: {
      valuation: 12000000,
      raising: 2500000
    },
    traction: [
      '124 farms across 5 states',
      'Avg yield improvement: 18%',
      'Reduced pesticide use by 32%',
      'Pilot with Cargill'
    ],
    risks: [
      'Seasonal revenue patterns',
      'Low margin business',
      'Farmer adoption challenges',
      'Very short runway'
    ],
    score: 72,
    thesis: 'Agriculture is a massive market but historically difficult for VC returns. Strong technical team and early traction. Concerned about unit economics and go-to-market strategy.'
  },
  {
    id: 'mindwell',
    name: 'MindWell',
    tagline: 'AI-powered mental health support platform',
    logo: '/logos/mindwell.png',
    website: 'https://mindwell.health',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Healthcare',
    dealStage: 'Deep Dive',
    founded: 2023,
    location: 'Portland, OR',
    team: [
      { name: 'Dr. Emma Wilson', role: 'CEO', background: 'Clinical psychologist, Stanford faculty' },
      { name: 'Lucas Brown', role: 'CTO', background: 'Ex-Calm, product engineer' }
    ],
    metrics: {
      revenue: 840000,
      revenueGrowth: 420,
      arr: 1200000,
      customers: 12000,
      churn: 22,
      burnRate: 200000,
      runway: 12,
      cac: 42,
      ltv: 180
    },
    financials: {
      valuation: 18000000,
      raising: 4000000
    },
    traction: [
      '12K active users',
      'Avg session time: 28 minutes',
      'Clinical outcomes: 67% improvement in PHQ-9 scores',
      'B2B2C partnerships with 3 employers'
    ],
    risks: [
      'High churn rate (22%)',
      'Competitive market (Calm, Headspace, BetterHelp)',
      'Regulatory concerns around AI in mental health',
      'Low LTV:CAC ratio (4.3x)'
    ],
    score: 68,
    thesis: 'Mental health is important but market is very crowded. Concerned about retention and monetization. Strong clinical outcomes data but need to see path to scale profitably.'
  },
  {
    id: 'carboncapture',
    name: 'CarbonCapture',
    tagline: 'Direct air capture technology for carbon removal',
    logo: '/logos/carboncapture.png',
    website: 'https://carboncapture.co',
    stage: 'Series A',
    status: 'Pipeline',
    sector: 'Climate Tech',
    dealStage: 'Initial Review',
    founded: 2021,
    location: 'Boulder, CO',
    team: [
      { name: 'Dr. Henrik Larsson', role: 'CEO', background: 'Chemical engineer, MIT PhD' },
      { name: 'Amanda Foster', role: 'COO', background: 'Former Tesla operations director' }
    ],
    metrics: {
      revenue: 2100000,
      revenueGrowth: 180,
      arr: 2800000,
      customers: 6,
      churn: 0,
      burnRate: 580000,
      runway: 8,
      cac: 420000,
      ltv: 4200000
    },
    financials: {
      valuation: 65000000,
      raising: 20000000
    },
    traction: [
      'Sequestered 1,200 tons CO2',
      'Offtake agreements with Microsoft, Stripe',
      'Cost per ton: $280 (industry: $600)',
      'Facility in development (10x capacity)'
    ],
    risks: [
      'Capital intensive business',
      'Technology scale-up risk',
      'Regulatory and policy dependency',
      'Very short runway'
    ],
    score: 75,
    thesis: 'Carbon removal is critical for climate goals. CarbonCapture has best-in-class unit economics and tier-1 customers. Capital requirements are high but long-term market is enormous.'
  },
  {
    id: 'paystream',
    name: 'PayStream',
    tagline: 'Instant payroll for hourly workers',
    logo: '/logos/paystream.png',
    website: 'https://paystream.co',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Fintech',
    dealStage: 'Deep Dive',
    founded: 2023,
    location: 'Miami, FL',
    team: [
      { name: 'Maria Gonzalez', role: 'CEO', background: 'Ex-Square, payments lead' },
      { name: 'Jake Morrison', role: 'CTO', background: 'Former Stripe engineer' }
    ],
    metrics: {
      revenue: 680000,
      revenueGrowth: 890,
      arr: 1100000,
      customers: 240,
      churn: 15,
      burnRate: 175000,
      runway: 11,
      cac: 2800,
      ltv: 18000
    },
    financials: {
      valuation: 16000000,
      raising: 3500000
    },
    traction: [
      '240 business customers',
      '48K workers using platform',
      'Processing $24M monthly in wages',
      'NPS: 74'
    ],
    risks: [
      'Competitive market (DailyPay, Branch, PayActiv)',
      'Thin margins on transaction fees',
      'Regulatory complexity across states'
    ],
    score: 76,
    thesis: 'Earned wage access is growing rapidly. PayStream has strong product-market fit and virality (42% organic growth). Margins are thin but scale economics should improve. Team is strong.'
  },
  {
    id: 'logixai',
    name: 'LogixAI',
    tagline: 'AI copilot for software developers',
    logo: '/logos/logixai.png',
    website: 'https://logixai.dev',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Developer Tools',
    dealStage: 'Partner Meeting',
    founded: 2023,
    location: 'Seattle, WA',
    team: [
      { name: 'Ethan Park', role: 'CEO', background: 'Ex-GitHub, former eng manager' },
      { name: 'Dr. Aisha Rahman', role: 'Chief Scientist', background: 'OpenAI researcher' }
    ],
    metrics: {
      revenue: 520000,
      revenueGrowth: 1240,
      arr: 920000,
      customers: 1800,
      churn: 9,
      burnRate: 190000,
      runway: 13,
      cac: 180,
      ltv: 1200
    },
    financials: {
      valuation: 22000000,
      raising: 5000000
    },
    traction: [
      '1,800 paying developers',
      'Used in 120 companies',
      'Avg time saved: 8 hours/week per dev',
      'Viral growth (k-factor: 1.4)'
    ],
    risks: [
      'GitHub Copilot dominance',
      'Rapid commoditization of AI coding tools',
      'OpenAI/Anthropic competing directly'
    ],
    score: 79,
    thesis: 'Developer tools are a proven market. LogixAI has differentiated features (debugging, code review) beyond autocomplete. Concerned about moat vs GitHub/OpenAI. Strong viral growth.'
  },
  {
    id: 'spacetime',
    name: 'SpaceTime',
    tagline: 'Real-time collaboration platform for distributed teams',
    logo: '/logos/spacetime.png',
    website: 'https://spacetime.work',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Productivity',
    dealStage: 'Initial Review',
    founded: 2023,
    location: 'San Francisco, CA',
    team: [
      { name: 'Oliver Chen', role: 'CEO', background: 'Ex-Figma product manager' },
      { name: 'Sophie Laurent', role: 'CTO', background: 'Former Zoom engineer' }
    ],
    metrics: {
      revenue: 280000,
      revenueGrowth: 680,
      arr: 520000,
      customers: 420,
      churn: 28,
      burnRate: 160000,
      runway: 9,
      cac: 380,
      ltv: 1200
    },
    financials: {
      valuation: 14000000,
      raising: 3000000
    },
    traction: [
      '420 teams using platform',
      '6,800 daily active users',
      'Avg session: 42 minutes',
      'Featured on Product Hunt (#2 product of the day)'
    ],
    risks: [
      'Very high churn (28%)',
      'Saturated collaboration tool market',
      'Short runway (9 months)',
      'Unproven monetization'
    ],
    score: 62,
    thesis: 'Team is strong but market is incredibly crowded (Slack, Teams, Notion, etc.). Churn is concerningly high. Need to see clear differentiation and path to retention before considering.'
  },
  {
    id: 'biosynth',
    name: 'BioSynth',
    tagline: 'AI-designed synthetic biology for drug discovery',
    logo: '/logos/biosynth.png',
    website: 'https://biosynth.bio',
    stage: 'Series A',
    status: 'Pipeline',
    sector: 'Biotech',
    dealStage: 'Sourced',
    founded: 2021,
    location: 'Cambridge, MA',
    team: [
      { name: 'Dr. Rebecca Stein', role: 'CEO', background: 'Harvard Medical School, former Moderna' },
      { name: 'Dr. James Liu', role: 'CSO', background: 'Synthetic biology pioneer, MIT professor' }
    ],
    metrics: {
      revenue: 4200000,
      revenueGrowth: 95,
      arr: 5100000,
      customers: 12,
      churn: 0,
      burnRate: 820000,
      runway: 18,
      cac: 380000,
      ltv: 5200000
    },
    financials: {
      valuation: 120000000,
      raising: 30000000
    },
    traction: [
      'Partnerships with Pfizer, Roche',
      '3 molecules in preclinical trials',
      '18 patents filed',
      '$42M in milestone payments possible'
    ],
    risks: [
      'Long R&D timelines (8-12 years)',
      'Regulatory approval risk',
      'High capital requirements',
      'Scientific execution risk'
    ],
    score: 80,
    thesis: 'Biotech is outside our typical focus but team and technology are exceptional. Partner interest from Big Pharma is validating. Timeline and capital needs require specialized biotech expertise.'
  },
  {
    id: 'homeiq',
    name: 'HomeIQ',
    tagline: 'Smart home energy optimization platform',
    logo: '/logos/homeiq.png',
    website: 'https://homeiq.io',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Climate Tech',
    dealStage: 'Initial Review',
    founded: 2023,
    location: 'Denver, CO',
    team: [
      { name: 'Michael Torres', role: 'CEO', background: 'Ex-Nest, product lead' },
      { name: 'Anna Schmidt', role: 'CTO', background: 'Former Tesla energy engineer' }
    ],
    metrics: {
      revenue: 340000,
      revenueGrowth: 520,
      arr: 580000,
      customers: 2400,
      churn: 24,
      burnRate: 145000,
      runway: 10,
      cac: 120,
      ltv: 480
    },
    financials: {
      valuation: 12000000,
      raising: 2500000
    },
    traction: [
      '2,400 homes using platform',
      'Avg energy savings: 23%',
      'Partnership with 2 utilities',
      '$68 annual revenue per home'
    ],
    risks: [
      'Low LTV ($480)',
      'High churn (24%)',
      'Commoditization risk',
      'Slow adoption of smart home tech'
    ],
    score: 64,
    thesis: 'Smart home energy is interesting but unit economics are challenging. $480 LTV is too low for this CAC and churn rate. Would need dramatic improvement in retention and monetization.'
  },
  {
    id: 'retailos',
    name: 'RetailOS',
    tagline: 'Operating system for omnichannel retail',
    logo: '/logos/retailos.png',
    website: 'https://retailos.com',
    stage: 'Series A',
    status: 'Pipeline',
    sector: 'Retail Tech',
    dealStage: 'Deep Dive',
    founded: 2022,
    location: 'Chicago, IL',
    team: [
      { name: 'Jennifer Adams', role: 'CEO', background: 'Former VP at Shopify' },
      { name: 'Robert Kim', role: 'CTO', background: 'Ex-Amazon retail tech' }
    ],
    metrics: {
      revenue: 5600000,
      revenueGrowth: 285,
      arr: 7200000,
      customers: 68,
      churn: 5,
      burnRate: 480000,
      runway: 16,
      cac: 72000,
      ltv: 1200000
    },
    financials: {
      valuation: 48000000,
      raising: 12000000
    },
    traction: [
      '68 retail chains (300+ stores)',
      'Processing $420M in annual GMV',
      'Inventory accuracy improved 40%',
      'Customer case study: 18% revenue lift'
    ],
    risks: [
      'Dependency on retail industry health',
      'Competition from Shopify, Square',
      'Long implementation cycles (4-6 months)'
    ],
    score: 82,
    thesis: 'Omnichannel retail is critical but market is mature. RetailOS has strong traction and excellent retention. Team knows the space. Need to validate differentiation vs Shopify Plus.'
  },
  {
    id: 'neuropulse',
    name: 'NeuroPulse',
    tagline: 'Brain-computer interface for accessibility',
    logo: '/logos/neuropulse.png',
    website: 'https://neuropulse.tech',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Hardware + AI',
    dealStage: 'Sourced',
    founded: 2022,
    location: 'Pittsburgh, PA',
    team: [
      { name: 'Dr. Samuel Greene', role: 'CEO', background: 'Neuroscience PhD, former Neuralink' },
      { name: 'Katie Lin', role: 'CTO', background: 'Ex-Apple, hardware engineering' }
    ],
    metrics: {
      revenue: 180000,
      revenueGrowth: 420,
      arr: 320000,
      customers: 42,
      churn: 12,
      burnRate: 240000,
      runway: 6,
      cac: 4200,
      ltv: 32000
    },
    financials: {
      valuation: 25000000,
      raising: 6000000
    },
    traction: [
      '42 beta users',
      'FDA breakthrough device designation',
      'Clinical trial results: 87% efficacy',
      'Partnership with Johns Hopkins'
    ],
    risks: [
      'Extremely short runway (6 months)',
      'Regulatory approval required',
      'High R&D costs',
      'Small addressable market'
    ],
    score: 70,
    thesis: 'Fascinating technology with social impact but outside our expertise. FDA approval pathway is long and expensive. Market size is limited. Would need co-investor with healthcare/medical device experience.'
  },
  {
    id: 'fleetwise',
    name: 'FleetWise',
    tagline: 'Predictive maintenance for commercial fleets',
    logo: '/logos/fleetwise.png',
    website: 'https://fleetwise.ai',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Enterprise SaaS',
    dealStage: 'Partner Meeting',
    founded: 2023,
    location: 'Atlanta, GA',
    team: [
      { name: 'Chris Patel', role: 'CEO', background: 'Ex-Samsara, fleet operations' },
      { name: 'Laura Martinez', role: 'CTO', background: 'Former Tesla data scientist' }
    ],
    metrics: {
      revenue: 920000,
      revenueGrowth: 640,
      arr: 1400000,
      customers: 28,
      churn: 11,
      burnRate: 185000,
      runway: 13,
      cac: 38000,
      ltv: 340000
    },
    financials: {
      valuation: 16000000,
      raising: 3500000
    },
    traction: [
      '28 fleet customers (5,200 vehicles)',
      'Downtime reduced by 34%',
      'Maintenance cost savings: $1,800/vehicle/year',
      'Pilot with UPS'
    ],
    risks: [
      'Competitive market (Samsara, Geotab)',
      'Hardware dependency',
      'Fleet industry cyclicality'
    ],
    score: 77,
    thesis: 'Fleet management is a real pain point. FleetWise has strong ROI story and good early traction. Team has domain expertise. Concerned about defensibility vs Samsara. Unit economics look promising.'
  },
  {
    id: 'codecollab',
    name: 'CodeCollab',
    tagline: 'Async code review platform for distributed teams',
    logo: '/logos/codecollab.png',
    website: 'https://codecollab.dev',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Developer Tools',
    dealStage: 'Initial Review',
    founded: 2023,
    location: 'Remote',
    team: [
      { name: 'Diego Silva', role: 'CEO', background: 'Ex-GitLab, engineering manager' },
      { name: 'Emma Watson', role: 'CTO', background: 'Former Microsoft GitHub team' }
    ],
    metrics: {
      revenue: 180000,
      revenueGrowth: 840,
      arr: 340000,
      customers: 180,
      churn: 32,
      burnRate: 120000,
      runway: 8,
      cac: 280,
      ltv: 840
    },
    financials: {
      valuation: 10000000,
      raising: 2000000
    },
    traction: [
      '180 teams using platform',
      '3,200 developers',
      'Review time reduced by 40%',
      'Integration with GitHub, GitLab, Bitbucket'
    ],
    risks: [
      'Extremely high churn (32%)',
      'Low LTV ($840)',
      'Short runway (8 months)',
      'GitHub/GitLab could build this'
    ],
    score: 58,
    thesis: 'Churn is dealbreaker. LTV:CAC ratio is only 3x. Market is competitive and incumbents have distribution. Runway is concerning. Would pass unless they dramatically improve retention.'
  },
  {
    id: 'foodchain',
    name: 'FoodChain',
    tagline: 'Supply chain transparency for food industry',
    logo: '/logos/foodchain.png',
    website: 'https://foodchain.io',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Enterprise SaaS',
    dealStage: 'Deep Dive',
    founded: 2023,
    location: 'Austin, TX',
    team: [
      { name: 'Maria Santos', role: 'CEO', background: 'Former Whole Foods supply chain director' },
      { name: 'Tom Anderson', role: 'CTO', background: 'Ex-IBM, blockchain expert' }
    ],
    metrics: {
      revenue: 620000,
      revenueGrowth: 480,
      arr: 980000,
      customers: 34,
      churn: 9,
      burnRate: 165000,
      runway: 11,
      cac: 28000,
      ltv: 280000
    },
    financials: {
      valuation: 14000000,
      raising: 3000000
    },
    traction: [
      '34 food companies (grocery, restaurants)',
      'Tracking $180M in food products',
      'Recall response time: 2 hours (vs 2 days)',
      'Partnership with FDA for pilot program'
    ],
    risks: [
      'Blockchain implementation complexity',
      'Requires network effects to scale',
      'Food industry slow to adopt new tech'
    ],
    score: 74,
    thesis: 'Food safety is a major issue. FoodChain has strong domain expertise and FDA validation. Blockchain adds complexity. Unit economics are decent. Need to see path to network effects.'
  },
  {
    id: 'talentmatch',
    name: 'TalentMatch',
    tagline: 'AI-powered technical recruiting platform',
    logo: '/logos/talentmatch.png',
    website: 'https://talentmatch.ai',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'HR Tech',
    dealStage: 'Partner Meeting',
    founded: 2023,
    location: 'San Francisco, CA',
    team: [
      { name: 'Ashley Johnson', role: 'CEO', background: 'Former recruiter at Google' },
      { name: 'Raj Malhotra', role: 'CTO', background: 'Ex-LinkedIn, ML engineer' }
    ],
    metrics: {
      revenue: 1100000,
      revenueGrowth: 720,
      arr: 1800000,
      customers: 92,
      churn: 14,
      burnRate: 220000,
      runway: 12,
      cac: 12000,
      ltv: 84000
    },
    financials: {
      valuation: 18000000,
      raising: 4000000
    },
    traction: [
      '92 companies using platform',
      '2,400 placements made',
      'Time-to-hire reduced by 45%',
      'Placement success rate: 89%'
    ],
    risks: [
      'Saturated HR tech market',
      'Dependent on hiring cycles',
      'Competition from LinkedIn, Indeed',
      'Churn trending up (was 8%, now 14%)'
    ],
    score: 73,
    thesis: 'Technical recruiting is a pain point but market is crowded. TalentMatch has good traction and metrics. Concerned about rising churn and defensibility. Would need to see differentiation vs LinkedIn.'
  },
  {
    id: 'dataforge',
    name: 'DataForge',
    tagline: 'Real-time data pipeline platform',
    logo: '/logos/dataforge.png',
    website: 'https://dataforge.io',
    stage: 'Series A',
    status: 'Pipeline',
    sector: 'Data Infrastructure',
    dealStage: 'Deep Dive',
    founded: 2022,
    location: 'Seattle, WA',
    team: [
      { name: 'Dr. Wei Zhang', role: 'CEO', background: 'Ex-Databricks, distributed systems expert' },
      { name: 'Sarah Mitchell', role: 'CTO', background: 'Former Snowflake engineer' }
    ],
    metrics: {
      revenue: 4200000,
      revenueGrowth: 340,
      arr: 5800000,
      customers: 58,
      churn: 4,
      burnRate: 420000,
      runway: 18,
      cac: 68000,
      ltv: 1600000
    },
    financials: {
      valuation: 45000000,
      raising: 12000000
    },
    traction: [
      '58 enterprise customers',
      'Processing 2.4TB data per day',
      '99.99% uptime SLA',
      'Customers include Uber, Airbnb'
    ],
    risks: [
      'Competitive market (Fivetran, Airbyte)',
      'Dependent on cloud infrastructure costs',
      'Customer concentration (top 5 = 55% ARR)'
    ],
    score: 86,
    thesis: 'Data infrastructure is a massive market. DataForge has excellent metrics and tier-1 customer logos. Team is world-class. Strong retention and unit economics. Competitive but differentiated.'
  },
  {
    id: 'greencommute',
    name: 'GreenCommute',
    tagline: 'Employer-sponsored EV charging network',
    logo: '/logos/greencommute.png',
    website: 'https://greencommute.co',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Climate Tech',
    dealStage: 'Initial Review',
    founded: 2023,
    location: 'San Jose, CA',
    team: [
      { name: 'Brian Lee', role: 'CEO', background: 'Ex-ChargePoint, business development' },
      { name: 'Angela Torres', role: 'COO', background: 'Former Tesla charging infrastructure' }
    ],
    metrics: {
      revenue: 480000,
      revenueGrowth: 560,
      arr: 780000,
      customers: 48,
      churn: 16,
      burnRate: 190000,
      runway: 9,
      cac: 14000,
      ltv: 82000
    },
    financials: {
      valuation: 15000000,
      raising: 3500000
    },
    traction: [
      '48 employer customers',
      '280 charging stations deployed',
      '18,000 employees have access',
      '92K charging sessions completed'
    ],
    risks: [
      'Capital intensive (hardware costs)',
      'Competitive market (ChargePoint, EVgo)',
      'Dependency on EV adoption rates',
      'Short runway'
    ],
    score: 69,
    thesis: 'EV charging is growing but capital requirements are high. GreenCommute has employer angle which is interesting. Unit economics are okay. Team has domain expertise. Market timing is key.'
  },
  {
    id: 'legalai',
    name: 'LegalAI',
    tagline: 'AI-powered contract review and analysis',
    logo: '/logos/legalai.png',
    website: 'https://legalai.law',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Legal Tech',
    dealStage: 'Partner Meeting',
    founded: 2023,
    location: 'New York, NY',
    team: [
      { name: 'Jonathan Hayes', role: 'CEO', background: 'Former corporate lawyer at Cravath' },
      { name: 'Dr. Priya Patel', role: 'CTO', background: 'NLP researcher at Columbia' }
    ],
    metrics: {
      revenue: 840000,
      revenueGrowth: 680,
      arr: 1300000,
      customers: 124,
      churn: 10,
      burnRate: 195000,
      runway: 13,
      cac: 7200,
      ltv: 72000
    },
    financials: {
      valuation: 17000000,
      raising: 4000000
    },
    traction: [
      '124 law firms and legal departments',
      '42,000 contracts analyzed',
      'Review time reduced by 70%',
      'Accuracy rate: 94%'
    ],
    risks: [
      'Liability concerns in legal industry',
      'Resistance from lawyers to AI',
      'Competitive market (Harvey, CoCounsel)',
      'Regulatory uncertainty'
    ],
    score: 78,
    thesis: 'Legal tech is hot. LegalAI has strong traction and unit economics. Team combines legal and technical expertise. Accuracy is good but not perfect. Need to understand differentiation vs Harvey AI.'
  },
  {
    id: 'mobilityos',
    name: 'MobilityOS',
    tagline: 'Operating system for micro-mobility fleets',
    logo: '/logos/mobilityos.png',
    website: 'https://mobilityos.co',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Transportation',
    dealStage: 'Sourced',
    founded: 2022,
    location: 'Los Angeles, CA',
    team: [
      { name: 'Marcus Chen', role: 'CEO', background: 'Former Bird operations lead' },
      { name: 'Jessica Rodriguez', role: 'CTO', background: 'Ex-Lime, IoT engineer' }
    ],
    metrics: {
      revenue: 720000,
      revenueGrowth: 420,
      arr: 1100000,
      customers: 14,
      churn: 21,
      burnRate: 175000,
      runway: 10,
      cac: 58000,
      ltv: 260000
    },
    financials: {
      valuation: 16000000,
      raising: 3500000
    },
    traction: [
      '14 micro-mobility operators',
      'Managing 28,000 vehicles',
      'Fleet utilization improved 32%',
      'Operating in 42 cities'
    ],
    risks: [
      'Dependent on struggling micro-mobility industry',
      'High churn (21%)',
      'Market consolidation risk',
      'Unit economics of customers are poor'
    ],
    score: 65,
    thesis: 'Micro-mobility market has been difficult. Many operators struggling. MobilityOS has interesting tech but customer base is fragile. Churn is high. Would need confidence in industry recovery.'
  },
  {
    id: 'virtulab',
    name: 'VirtuLab',
    tagline: 'Virtual laboratory for remote science education',
    logo: '/logos/virtulab.png',
    website: 'https://virtulab.edu',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'Edtech',
    dealStage: 'Initial Review',
    founded: 2023,
    location: 'Boston, MA',
    team: [
      { name: 'Dr. Elizabeth Moore', role: 'CEO', background: 'Former professor at MIT' },
      { name: 'Andrew Kim', role: 'CTO', background: 'Ex-Unity, VR engineer' }
    ],
    metrics: {
      revenue: 420000,
      revenueGrowth: 520,
      arr: 680000,
      customers: 82,
      churn: 18,
      burnRate: 155000,
      runway: 11,
      cac: 7800,
      ltv: 42000
    },
    financials: {
      valuation: 13000000,
      raising: 2800000
    },
    traction: [
      '82 universities and high schools',
      '12,000 students using platform',
      'Used in chemistry, biology, physics courses',
      'Avg engagement: 34 minutes per session'
    ],
    risks: [
      'Edtech sales cycles are long',
      'Limited budgets in education',
      'VR headset requirement is barrier',
      'LTV:CAC ratio is only 5.4x'
    ],
    score: 71,
    thesis: 'Virtual labs are interesting but education market is challenging. Strong academic backgrounds but unit economics are concerning. VR dependency adds friction. Would need to see path to B2B2C or consumer.'
  },
  {
    id: 'supplyiq',
    name: 'SupplyIQ',
    tagline: 'Demand forecasting for e-commerce brands',
    logo: '/logos/supplyiq.png',
    website: 'https://supplyiq.ai',
    stage: 'Seed',
    status: 'Pipeline',
    sector: 'E-commerce',
    dealStage: 'Deep Dive',
    founded: 2023,
    location: 'Austin, TX',
    team: [
      { name: 'Nicole Zhang', role: 'CEO', background: 'Former Amazon supply chain' },
      { name: 'Marcus Williams', role: 'CTO', background: 'Ex-Shopify, data science' }
    ],
    metrics: {
      revenue: 760000,
      revenueGrowth: 640,
      arr: 1200000,
      customers: 68,
      churn: 12,
      burnRate: 180000,
      runway: 12,
      cac: 11000,
      ltv: 88000
    },
    financials: {
      valuation: 15000000,
      raising: 3500000
    },
    traction: [
      '68 e-commerce brands',
      'Forecasting $240M in inventory',
      'Stockout reduction: 38%',
      'Overstock reduction: 42%'
    ],
    risks: [
      'Competitive market (many forecasting tools)',
      'E-commerce slowdown',
      'Dependent on integrations (Shopify, Amazon)',
      'Churn rising (was 7%, now 12%)'
    ],
    score: 76,
    thesis: 'Inventory optimization is a real pain for DTC brands. SupplyIQ has strong ROI case and good early traction. Concerned about churn trend and market saturation. Unit economics are solid.'
  }
];
