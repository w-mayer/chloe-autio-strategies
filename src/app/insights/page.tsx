import { articles, policyBriefs, caseStudies, resources } from '@/data/insights';
import { ArticleCard, CardSkeleton as ArticleCardSkeleton } from '@/components/content/ArticleCard';
import { PolicyBrief, CardSkeleton as PolicyBriefSkeleton } from '@/components/content/PolicyBrief';
import { CaseStudyCard, CardSkeleton as CaseStudyCardSkeleton } from '@/components/content/CaseStudyCard';
import { ResourceCard, CardSkeleton as ResourceCardSkeleton } from '@/components/content/ResourceCard';
import type { Metadata } from 'next';
import InsightsPageClient from './InsightsPageClient';

export const metadata: Metadata = {
  title: 'Insights & Thought Leadership | AI Policy Consulting',
  description: 'Explore articles, policy briefs, case studies, and resources on AI policy consulting, technology governance, and regulatory compliance for government and enterprise leaders.',
  keywords: [
    'AI policy consulting',
    'technology governance',
    'regulatory compliance',
    'government consulting',
    'enterprise policy advisory',
    'AI governance',
    'tech policy',
    'compliance consulting',
    'public sector advisory',
    'thought leadership'
  ],
  openGraph: {
    title: 'Insights & Thought Leadership | AI Policy Consulting',
    description: 'Explore articles, policy briefs, case studies, and resources on AI policy consulting, technology governance, and regulatory compliance for government and enterprise leaders.',
    url: 'https://chloeautio.com/insights',
    siteName: 'Chloe Autio Strategies',
    images: [
      {
        url: 'https://chloeautio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chloe Autio Strategies - AI Policy Consulting & Technology Governance'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Thought Leadership | AI Policy Consulting',
    description: 'Explore articles, policy briefs, case studies, and resources on AI policy consulting, technology governance, and regulatory compliance for government and enterprise leaders.',
    images: ['https://chloeautio.com/og-image.png'],
    creator: '@chloeautio'
  },
  alternates: {
    canonical: 'https://chloeautio.com/insights'
  }
};

export default function InsightsPage() {
  return <InsightsPageClient
    articles={articles}
    policyBriefs={policyBriefs}
    caseStudies={caseStudies}
    resources={resources}
  />;
} 