export interface Service {
  slug: string;
  title: string;
  overview: string;
  benefits: string[];
  methodology: string;
  related: string[]; // slugs of related services
  backgroundImage: string; // path to hero background image
  detailedContent?: string[]; // optional detailed content for services that need it
}

export const services: Service[] = [
  {
    slug: 'insight-analysis',
    title: 'Insight & Analysis',
    overview: 'Receive tailored insights and analysis to inform your organization\'s strategy, anticipate trends, and proactively address emerging challenges in AI and technology policy.',
    benefits: [
      'Data-driven insights for decision-making',
      'Early identification of policy and regulatory trends',
      'Actionable recommendations for your organization',
    ],
    methodology: 'We combine proprietary data, expert analysis, and ongoing monitoring to deliver actionable intelligence tailored to your needs.',
    related: ['research', 'policy-development'],
    backgroundImage: '/images/stocks/insights-analysis.jpg',
    detailedContent: [
      '<strong>Overview of Policy Landscape:</strong> Receive tailored reviews of relevant international, domestic, and local policy frameworks that align with your organization\'s interests and priorities.',
      '<strong>Real-Time Policy Updates and Ecosystem Insights:</strong> Stay informed with timely updates on policy initiatives and gain comprehensive analysis of the regulatory landscape to navigate changes effectively.',
      '<strong>Legislative and Policy Analysis:</strong> Benefit from expert evaluation of specific policy proposals, initiatives, and emerging trends, helping you anticipate impacts and adjust your strategies proactively.',
      '<strong>Targeted Insights:</strong> Receive briefings on relevant sectoral agencies, and/or identify key AI policy players, incentives, and possible engagement channels to pursue in short to long-term timeframes.'
    ],
  },
  {
    slug: 'research',
    title: 'Research',
    overview: 'Comprehensive research and rigorous analysis to support evidence-based policy making and strategic planning.',
    benefits: [
      'In-depth policy landscape reviews',
      'Benchmarking against global best practices',
      'Clear, actionable reporting for stakeholders',
    ],
    methodology: 'We employ qualitative and quantitative research methods, including stakeholder interviews, literature reviews, and comparative policy analysis, to deliver robust findings and recommendations.',
    related: ['insight-analysis', 'policy-development'],
    backgroundImage: '/images/stocks/research.jpg',
  },
  {
    slug: 'policy-development',
    title: 'Policy Development',
    overview: 'Expert guidance in drafting, refining, and implementing effective policies that align with organizational goals and regulatory requirements.',
    benefits: [
      'Custom policy frameworks',
      'Alignment with legal and ethical standards',
      'Stakeholder buy-in and implementation support',
    ],
    methodology: 'Our team collaborates closely with clients to co-create policy documents, facilitate stakeholder workshops, and ensure seamless adoption and compliance.',
    related: ['insight-analysis', 'research'],
    backgroundImage: '/images/stocks/policy-development.jpg',
  },
  {
    slug: 'events-facilitation',
    title: 'Events and Facilitation',
    overview: 'Strategic facilitation of events, workshops, and stakeholder engagement to ensure policy initiatives are informed, inclusive, and actionable.',
    benefits: [
      'Improved stakeholder alignment',
      'Transparent, participatory processes',
      'Enhanced policy legitimacy and impact',
    ],
    methodology: 'We design and execute engagement strategies, including roundtables, public consultations, and digital feedback platforms, to capture diverse perspectives and foster collaboration.',
    related: ['policy-development', 'briefings-talks'],
    backgroundImage: '/images/stocks/events-facilitation.jpg',
  },
  {
    slug: 'briefings-talks',
    title: 'Briefings & Talks',
    overview: 'Custom briefings, talks, and educational resources to build internal capacity and foster a culture of responsible innovation.',
    benefits: [
      'Tailored curriculum for diverse audiences',
      'Expert-led workshops and seminars',
      'Ongoing support and resource development',
    ],
    methodology: 'We assess organizational needs, design interactive learning experiences, and provide follow-up resources to ensure lasting impact.',
    related: ['events-facilitation', 'third-party-management'],
    backgroundImage: '/images/stocks/briefings-talks.jpg',
  },
  {
    slug: 'third-party-management',
    title: 'Third Party Management',
    overview: 'Facilitate alliances, collaborations, and third-party relationships that advance shared policy objectives and drive innovation across sectors.',
    benefits: [
      'Access to new networks and expertise',
      'Joint initiatives for greater impact',
      'Sustainable, long-term collaborations',
    ],
    methodology: 'We identify potential partners, broker introductions, and support the design and management of joint projects from inception to completion.',
    related: ['briefings-talks', 'insight-analysis'],
    backgroundImage: '/images/stocks/third-party.jpg',
  },
]; 