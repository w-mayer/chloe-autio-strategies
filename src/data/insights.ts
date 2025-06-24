export interface Author {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: Author;
  tags: string[];
  featured?: boolean;
  related: string[]; // slugs of related articles
}

export interface PolicyBrief {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: Author;
  tags: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  organization: string;
  author: Author;
  tags: string[];
}

export interface Resource {
  slug: string;
  title: string;
  url: string;
  description: string;
  type: 'report' | 'toolkit' | 'dataset' | 'guideline';
}

export const authors: Author[] = [
  {
    name: 'Chloe Autio',
    title: 'Founder, Chloe Autio Strategies',
    bio: 'Chloe Autio is a leading expert in AI policy, governance, and technology strategy, advising government and enterprise clients on responsible innovation.',
    avatarUrl: '/profile-placeholder.jpg',
  },
];

export const articles: Article[] = [
  {
    slug: 'navigating-ai-regulation-2025',
    title: 'Navigating the Evolving Landscape of AI Regulation in 2025',
    summary: 'A comprehensive overview of global AI regulatory trends and what they mean for government and enterprise leaders.',
    content: '<p>As AI technologies advance, regulatory frameworks are rapidly evolving. This article explores the latest developments in AI policy, compliance requirements, and best practices for organizations operating in this dynamic environment.</p>',
    date: '2024-06-01',
    author: authors[0],
    tags: ['AI Policy', 'Regulation', 'Compliance'],
    featured: true,
    related: ['ai-governance-best-practices'],
  },
  {
    slug: 'ai-governance-best-practices',
    title: 'Best Practices for AI Governance in the Public Sector',
    summary: 'Key strategies for implementing effective AI governance frameworks in government agencies.',
    content: '<p>Effective AI governance is essential for public trust and accountability. This article outlines actionable steps for agencies to establish robust oversight and risk management processes.</p>',
    date: '2024-05-15',
    author: authors[0],
    tags: ['AI Governance', 'Public Sector'],
    related: ['navigating-ai-regulation-2025'],
  },
  {
    slug: 'placeholder-featured-article',
    title: 'Placeholder Featured Article',
    summary: 'This is a placeholder featured article to preview the UI.',
    content: '<p>Placeholder content for the featured article. Replace with real content.</p>',
    date: '2024-07-01',
    author: authors[0],
    tags: ['Placeholder', 'Featured'],
    featured: true,
    related: [],
  },
];

export const policyBriefs: PolicyBrief[] = [
  {
    slug: 'us-ai-policy-brief',
    title: 'U.S. Federal AI Policy: 2024 Brief',
    summary: 'An executive summary of recent U.S. federal actions on AI policy and implications for regulated entities.',
    content: '<p>This brief distills the latest federal guidance, executive orders, and legislative proposals shaping the U.S. AI policy landscape.</p>',
    date: '2024-04-20',
    author: authors[0],
    tags: ['Policy Brief', 'Federal Policy'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'public-sector-ai-implementation',
    title: 'AI Implementation in the Public Sector: A Case Study',
    summary: 'How a federal agency successfully deployed AI for regulatory compliance and operational efficiency.',
    content: '<p>This case study examines the challenges, solutions, and outcomes of a major AI deployment in a government context.</p>',
    date: '2024-03-10',
    organization: 'U.S. Federal Agency',
    author: authors[0],
    tags: ['Case Study', 'Public Sector', 'AI Implementation'],
  },
  {
    slug: 'placeholder-case-study',
    title: 'Placeholder Case Study',
    summary: 'This is a placeholder case study to preview the UI.',
    content: '<p>Placeholder content for the case study. Replace with real content.</p>',
    date: '2024-07-01',
    organization: 'Placeholder Organization',
    author: authors[0],
    tags: ['Placeholder', 'Case Study'],
  },
];

export const resources: Resource[] = [
  {
    slug: 'nist-ai-risk-management-framework',
    title: 'NIST AI Risk Management Framework',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    description: 'Comprehensive framework for managing risks associated with AI systems, published by NIST.',
    type: 'guideline',
  },
  {
    slug: 'oecd-ai-policy-observatory',
    title: 'OECD AI Policy Observatory',
    url: 'https://oecd.ai/',
    description: 'Global resource for AI policy analysis, data, and best practices.',
    type: 'report',
  },
]; 