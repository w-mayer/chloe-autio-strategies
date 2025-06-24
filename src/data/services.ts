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
    slug: 'policy-intelligence',
    title: 'Policy Intelligence',
    overview: 'Leverage advanced analytics and AI-driven insights to inform policy decisions, anticipate regulatory trends, and proactively address emerging challenges.',
    benefits: [
      'Data-driven policy recommendations',
      'Early identification of regulatory risks',
      'Enhanced situational awareness for decision-makers',
    ],
    methodology: 'Our approach integrates proprietary data sources, machine learning models, and expert analysis to deliver actionable intelligence tailored to your organization\'s needs. We provide ongoing monitoring and scenario planning to ensure you stay ahead of the policy curve.',
    caseStudies: [
      {
        title: 'AI Risk Monitoring for Federal Agency',
        description: 'Developed a real-time dashboard for a federal agency to monitor global AI policy developments and assess potential impacts on national programs.'
      }
    ],
    related: ['research-analysis', 'policy-development'],
  },
  {
    slug: 'research-analysis',
    title: 'Research & Analysis',
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
    related: ['policy-intelligence', 'policy-development'],
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
    related: ['stakeholder-engagement', 'training-education'],
  },
  {
    slug: 'stakeholder-engagement',
    title: 'Stakeholder Engagement',
    overview: 'Strategic facilitation of stakeholder input and consensus-building to ensure policy initiatives are informed, inclusive, and actionable.',
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
    related: ['policy-development', 'strategic-partnerships'],
  },
  {
    slug: 'training-education',
    title: 'Training & Education',
    overview: 'Custom training programs and educational resources to build internal capacity and foster a culture of responsible innovation.',
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
    related: ['policy-development', 'strategic-partnerships'],
  },
  {
    slug: 'strategic-partnerships',
    title: 'Strategic Partnerships',
    overview: 'Facilitate alliances and collaborations that advance shared policy objectives and drive innovation across sectors.',
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
    related: ['stakeholder-engagement', 'training-education'],
  },
]; 