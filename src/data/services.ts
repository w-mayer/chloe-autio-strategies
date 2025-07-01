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
    detailedContent: [
      '<strong>In-Depth Research:</strong> Conduct comprehensive descriptive, exploratory, and qualitative research on technology policy and governance issues tailored to your needs.',
      '<strong>Customized Deliverables:</strong> Provide detailed reports, white papers, memos, and case studies, crafted in the format and structure that best suits your objectives.'
    ],
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
    detailedContent: [
      '<strong>Tailored Policy Position Development:</strong> Craft and refine AI, privacy, and data policies that align with your business needs and adapt to external dynamics.',
      '<strong>Development of Briefs, Testimony, and Requests:</strong> Efficiently handle government RFIs, develop compelling testimony, and prepare impactful letter responses.',
      '<strong>Strategic Thought Leadership:</strong> Enhance your policy messaging through thought leadership and seamless coordination with your communications or PR teams.'
    ],
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
    detailedContent: [
      '<strong>Customized Workshops and Roundtables:</strong> Organize and lead targeted workshops or roundtables on pressing policy and governance topics to drive informed discussions and decision-making.',
      '<strong>Stakeholder Feedback Sessions:</strong> Design and facilitate focus groups to gather valuable feedback from diverse stakeholders on governance processes and policy positions.',
      '<strong>Exclusive Networking Events:</strong> Host salon dinners, issue-focused happy hours, and receptions to foster meaningful connections and discussions.',
      '<strong>Event Selection and Prioritization:</strong> Provide expert advice on key events and engagement opportunities to maximize your organization\'s impact and visibility.'
    ],
  },
  {
    slug: 'briefings-talks',
    title: 'Briefings & Talks',
    overview: 'Custom briefings, talks, and educational insights to build internal capacity and foster a culture of responsible innovation.',
    benefits: [
      'Tailored curriculum for diverse audiences',
      'Expert-led workshops and seminars',
      'Ongoing support and resource development',
    ],
    methodology: 'We assess organizational needs, design interactive learning experiences, and provide follow-up insights to ensure lasting impact.',
    related: ['events-facilitation', 'third-party-management'],
    backgroundImage: '/images/stocks/briefings-talks.jpg',
    detailedContent: [
      '<strong>Tailored Presentations:</strong> Custom presentations on specialized topics, expertly designed for your target audiences.',
      '<strong>Custom Briefing and Programming:</strong> Create and organize detailed briefings on policy or technology, including program development and speaker selection.'
    ],
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
    detailedContent: [
      '<strong>Partner Selection and Management:</strong> Assist in identifying and managing external partners such as think tanks, convening organizations, and civil society initiatives to enhance your strategic goals.',
      '<strong>Government and Public Affairs Coordination:</strong> Support the selection and collaboration with government affairs partners, including trade associations and lobbying firms, to effectively navigate regulatory landscapes.',
      '<strong>Technology Governance Solutions:</strong> Provide recommendations for third-party technology governance solutions, such as algorithmic auditors and red-teaming platforms, to ensure robust oversight and compliance.'
    ],
  },
]; 