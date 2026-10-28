export type Entry = {
  dates: string;
  org: string;
  role: string;
  cats: string[];
  bullets: string[];
  tags: string[];
  logos: string[];
};

export const entries: Entry[] = [
  {
    dates: 'May to Sep 2026',
    org: 'Anthropic',
    role: 'Certificates: AI agent skills and Claude Code',
    cats: ['AI', 'Education'],
    bullets: ['Completed Introduction to agent skills and Claude Code 101 (May 2026), then Claude Code in Action (Sep 2026).'],
    tags: ['AI', 'Education'],
    logos: ['/logos/anthropic.png'],
  },
  {
    dates: 'Aug 2025 to Present',
    org: 'Georgia Institute of Technology',
    role: 'MS Analytics',
    cats: ['Education', 'Analytics'],
    bullets: ['Completing a Master of Science in Analytics alongside full-time work.'],
    tags: ['Education', 'Analytics'],
    logos: ['/logos/gt.png'],
  },
  {
    dates: 'Jul 2025 to Present',
    org: 'Tempo Software',
    role: 'Lead Go-To-Market Analyst',
    cats: ['GTM', 'Analytics'],
    bullets: ['Designed and delivered go-to-market analytics to evaluate product performance, optimize adoption strategies and inform executive decisions.'],
    tags: ['GTM', 'Analytics', 'SaaS'],
    logos: ['/logos/tempo.png'],
  },
  {
    dates: 'Jul 2022 to Sep 2025',
    org: 'Lever',
    role: 'Talent Analytics Consultant',
    cats: ['Analytics'],
    bullets: [
      'Designed, built and automated key metrics with Tableau, Looker and other BI tools.',
      'Ran cross-functional analysis and technical discovery alongside non-technical teams.',
    ],
    tags: ['Analytics', 'SQL', 'Tableau', 'Looker'],
    logos: ['/logos/lever.png'],
  },
  {
    dates: 'Apr 2015 to Jul 2022',
    org: 'TD',
    role: 'Business Data Analyst',
    cats: ['Analytics'],
    bullets: [
      'Built metrics and dashboards for reporting and oversight of department projects in testing and launch, keeping the data accurate.',
      'Grew into data work over seven years, from client service through fraud and AML investigation roles.',
    ],
    tags: ['Analytics', 'Python', 'Dashboards'],
    logos: ['/logos/td.png'],
  },
  {
    dates: '2019 to 2020',
    org: 'Toronto Metropolitan University, Chang School',
    role: 'Certificate in Data Analytics, Big Data and Predictive Analytics',
    cats: ['Education', 'Analytics'],
    bullets: ['Studied analytics, big data and predictive analytics while working.'],
    tags: ['Education', 'Analytics'],
    logos: ['/logos/tmu.png'],
  },
  {
    dates: '2016 to 2017',
    org: 'The Hospital for Sick Children and CAMH',
    role: 'Research Assistant',
    cats: ['Analytics'],
    bullets: ['Supported health research as a research assistant at SickKids (Jan to Nov 2016) and CAMH (Aug 2016 to Mar 2017).'],
    tags: ['Health research'],
    logos: ['/logos/sickkids.png', '/logos/camh.png'],
  },
  {
    dates: '2011 to 2015',
    org: 'York University',
    role: 'BA Honours, Psychology/Business',
    cats: ['Education'],
    bullets: ["Made the Dean's Honour List."],
    tags: ['Education', 'Psychology', 'Business'],
    logos: ['/logos/york.png'],
  },
];
