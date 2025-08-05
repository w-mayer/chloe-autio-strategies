export interface Service {
  slug: string;
  title: string;
  overview: string;
  benefits: string[];
  methodology: string;
  related: string[]; // slugs of related services
  backgroundImage: string; // path to hero background image
  detailedContent?: string[]; // optional detailed content for services that need it
  backgroundPosition?: string; // optional: CSS object-position for hero image
}

export const services: Service[] = [
  {
    slug: 'insight-analysis',
    title: 'Insight & Analysis',
    overview: 'Tailored intelligence to drive your strategy forward.',
    benefits: [
      'Data-driven insights for decision-making',
      'Early identification of policy and regulatory trends',
      'Actionable recommendations for your organization',
    ],
    methodology: 'We combine proprietary data, expert analysis, and ongoing monitoring to deliver actionable intelligence tailored to your needs.',
    related: ['research', 'policy-development'],
    backgroundImage: '/images/stocks/insights-analysis.jpg',
    backgroundPosition: 'center 50%', 
    detailedContent: [
      '<strong>Legislative and Policy Analysis:</strong> Expert evaluation of specific policy proposals, initiatives, and emerging trends, helping you anticipate impacts and adjust your strategies proactively.',
      '<strong>Real-Time Policy Updates and Ecosystem Insights:</strong> Stay informed with timely updates on policy initiatives and gain comprehensive analysis of the regulatory landscape to navigate changes effectively.',
      '<strong>Targeted Insights:</strong> Receive briefings on relevant sectoral agencies, and/or identify key AI policy players, incentives, and possible engagement channels to pursue in short to long-term timeframes.',
      '<strong>In-Depth Research:</strong> Conduct research on technology policy and governance issues delivered in the form of white papers, memos, or just quick bullets.'
    ],
  },
  {
    slug: 'facilitation',
    title: 'Facilitation',
    overview: 'Expertly moderated discussions to build relationships and inform strategies. ',
    benefits: [
      'Improved stakeholder alignment',
      'Transparent, participatory processes',
      'Enhanced policy legitimacy and impact',
    ],
    methodology: 'We design and execute engagement strategies, including roundtables, public consultations, and digital feedback platforms, to capture diverse perspectives and foster collaboration.',
    related: ['policy-development', 'briefings-talks'],
    backgroundImage: '/images/stocks/events-facilitation.jpg',
    backgroundPosition: 'center 30%', 
    detailedContent: [
      '<strong>Customized Workshops and Roundtables:</strong> Organize and lead targeted workshops or roundtables on policy and governance topics to drive informed discussions and decision-making.',
      '<strong>Stakeholder Feedback Sessions:</strong> Design and facilitate focus groups to gather feedback from diverse stakeholders on governance processes and/or policy positions.',
    ],
  },
  {
    slug: 'events',
    title: 'Events',
    overview: 'Planning and execution of custom events ranging from large gatherings to intimate salon dinners.',
    benefits: [
      'Tailored curriculum for diverse audiences',
      'Expert-led workshops and seminars',
      'Ongoing support and resource development',
    ],
    methodology: 'We assess organizational needs, design interactive learning experiences, and provide follow-up insights to ensure lasting impact.',
    related: ['facilitation', 'third-party-management'],
    backgroundImage: '/images/stocks/about.jpg',
    detailedContent: [
      '<strong>Planning and Coordination:</strong> Event design and management from conception to follow-ups. ',
      '<strong>Programming:</strong> Speaker selection and outreach, and development of key messages. ',
      '<strong>Identification of Target Invitees:</strong> Selecting the most curated guest lists to achieve desired outcomes.',
      '<strong>Exclusive Networking Events and Salon Dinners:</strong> Timed to executive visits to DC or SF and curated based on goals to expand networks or have a robust policy discussion.'
    ],
  },
  {
    slug: 'strategy',
    title: 'Strategy & Prioritization',
    overview: 'Focused approaches to achieve results.',
    benefits: [
      'Data-driven prioritization of high-impact policy initiatives',
      'Strategic stakeholder engagement and coalition building',
      'Optimized resource allocation for maximum organizational impact',
    ],
    methodology: 'We conduct comprehensive landscape analysis to map key stakeholders and policy dynamics, develop prioritized engagement strategies aligned with organizational objectives, and provide ongoing strategic guidance to optimize resource deployment and maximize influence in critical policy debates.',
    related: ['insight-analysis', 'policy-development'],
    backgroundImage: '/images/stocks/strategy.jpg',
    backgroundPosition: 'center 10%', 
    detailedContent: [
      '<strong>Overall Strategy for Policy Positioning or Engagement:</strong> Comprehensive strategies to guide positioning or engagement efforts, including brand and messaging, timing considerations, and coalition building aligned to organizational objectives and the current policy/political landscape.',
      '<strong>Resource and Time Prioritization:</strong> Optimize time and resources to focus on highest impact initiatives or events.',
      '<strong>Stakeholder Mapping and Relationship Development:</strong> Map the people and organizations influencing the AI policy debate. Design and execute targeted engagement strategies to build relationships.',
      '<strong>Event Selection and Prioritization:</strong> Provide expert advice on key events and engagement opportunities to maximize your organization\'s impact and visibility.',
    ],
  },
  {
    slug: 'presentations-briefings',
    title: 'Presentations & Briefings',
    overview: 'Expert preparatory and educational insights on topics of your choosing.',
    benefits: [
      'Strategic messaging tailored to key stakeholder audiences',
      'Comprehensive briefing materials for high-stakes engagements',
      'Expert content development and presentation delivery',
    ],
    methodology: 'We collaborate with leadership to identify key messaging priorities, develop comprehensive briefing materials and presentation content, and provide strategic guidance to ensure effective communication with target audiences including policymakers, executives, and other critical stakeholders.',
    related: ['facilitation', 'third-party-management'],
    backgroundImage: '/images/stocks/contact.jpg',
    backgroundPosition: 'center 5%', 
    detailedContent: [
      '<strong>Tailored Presentations:</strong> Custom presentations on specialized topics, designed for a range of audiences.',
      '<strong>Background and Briefing Documents:</strong> Develop materials to prepare executives for visits with policymakers or key stakeholders.',
      '<strong>Custom Programming:</strong> Create and organize detailed briefings on policy or technology, including program development and speaker selection.',
    ],
  },
  {
    slug: 'policy-development',
    title: 'Policy Development',
    overview: 'Substantive positions aligned with your goals and a dynamic regulatory ecosystem.',
    benefits: [
      'Strategic policy positions that advance organizational objectives',
      'Comprehensive regulatory analysis and response capabilities',
      'Proactive thought leadership in emerging policy areas',
    ],
    methodology: 'We analyze the regulatory landscape and organizational priorities to develop evidence-based policy positions, draft compelling government correspondence and testimony, and identify strategic opportunities to influence policy discussions through coordinated advocacy and thought leadership initiatives.',
    related: ['presentations-briefings', 'third-party-management'],
    backgroundImage: '/images/stocks/policy-development.jpg',
    detailedContent: [
      '<strong>Tailored Policy Position Development:</strong> Craft and refine public policy positions that align with your priorities and external dynamics.',
      '<strong>Development of Briefs, Testimony, and Requests:</strong> Efficiently draft or review comment responses / RFIs, develop compelling testimony, letters and other government correspondence.',
      '<strong>Thought Leadership:</strong> Identify opportunities to elevate policy messaging, coordinating with communications or PR teams.',
    ],
  },
  {
    slug: 'third-party-management',
    title: 'Third Party Management',
    overview: 'Collaboration and partner management to achieve common objectives.',
    benefits: [
      'Access to new networks and expertise',
      'Joint initiatives for greater impact',
      'Sustainable, long-term collaborations',
    ],
    methodology: 'We identify potential partners, broker introductions, and support the design and management of joint projects from inception to completion.',
    related: ['briefings-talks', 'insight-analysis'],
    backgroundImage: '/images/stocks/third-party.jpg',
    backgroundPosition: 'center 20%', 
    detailedContent: [
      '<strong>Partner Selection and Management:</strong> Assist in identifying and managing external partners such as think tanks, convening organizations, grant awardees and civil society initiatives to advance strategic goals.',
      '<strong>Government and Public Affairs Coordination:</strong> Support selection and collaboration with government affairs partners, including trade associations and lobbying firms.',
      '<strong>Media Relations:</strong> Outreach and connection to relevant journalists and outlets to advance thought leadership goals.',
      '<strong>Vendor Analysis:</strong> Overview and recommendations of available AI solutions for a specific problem space. Recommendations for third-party technology governance solutions, such as algorithmic auditors and red-teaming platforms, to advance oversight and compliance efforts.'
    ],
  },
]; 