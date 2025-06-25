export interface Service {
  slug: string;
  title: string;
  overview: string;
  benefits: string[];
  methodology: string;
  caseStudies: { title: string; description: string }[];
  related: string[]; // slugs of related services
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
    caseStudies: [
      {
        title: 'AI Risk Monitoring for Federal Agency',
        description: 'Developed a real-time dashboard for a federal agency to monitor global AI policy developments and assess potential impacts on national programs.'
      }
    ],
    related: ['research', 'policy-development'],
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
    caseStudies: [
      {
        title: 'Comparative AI Policy Study',
        description: 'Conducted a cross-jurisdictional analysis of AI governance frameworks for an international standards body.'
      }
    ],
    related: ['insight-analysis', 'policy-development'],
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
    caseStudies: [
      {
        title: 'AI Ethics Policy for Tech Company',
        description: 'Partnered with a leading technology firm to develop and roll out an AI ethics policy adopted across multiple business units.'
      }
    ],
    related: ['insight-analysis', 'research'],
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
    caseStudies: [
      {
        title: 'National AI Strategy Consultation',
        description: 'Led a multi-stakeholder engagement process for a national AI strategy, resulting in broad consensus and actionable recommendations.'
      }
    ],
    related: ['policy-development', 'briefings-talks'],
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
    caseStudies: [
      {
        title: 'AI Policy Bootcamp',
        description: 'Delivered a series of workshops for public sector leaders on AI policy fundamentals and emerging trends.'
      }
    ],
    related: ['events-facilitation', 'third-party-management'],
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
    caseStudies: [
      {
        title: 'Public-Private AI Consortium',
        description: 'Coordinated a multi-organization partnership to launch a public-private consortium focused on responsible AI deployment.'
      }
    ],
    related: ['briefings-talks', 'insight-analysis'],
  },
]; 