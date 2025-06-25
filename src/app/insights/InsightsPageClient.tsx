'use client';
import React, { useEffect, useState } from 'react';
import { ArticleCard, CardSkeleton as ArticleCardSkeleton } from '@/components/content/ArticleCard';
import { PolicyBrief, CardSkeleton as PolicyBriefSkeleton } from '@/components/content/PolicyBrief';
import { CaseStudyCard, CardSkeleton as CaseStudyCardSkeleton } from '@/components/content/CaseStudyCard';
import { ResourceCard, CardSkeleton as ResourceCardSkeleton } from '@/components/content/ResourceCard';
import type { Article, PolicyBrief as PolicyBriefType, CaseStudy, Resource } from '@/data/insights';
import AuthorityHeading from '@/components/ui/AuthorityHeading';

interface InsightsPageClientProps {
  articles: Article[];
  policyBriefs: PolicyBriefType[];
  caseStudies: CaseStudy[];
  resources: Resource[];
}

export default function InsightsPageClient({ articles, policyBriefs, caseStudies, resources }: InsightsPageClientProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-[50vh] min-h-[320px] mb-0 bg-paynesGray"
        style={{
          backgroundImage: `url('/images/stocks/insights-analysis.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Green overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(139,172,79,0.2)' }} />
        {/* Dark overlay for header readability */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-5xl font-bold mb-4 text-eggshell"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            Insights & Analysis
          </AuthorityHeading>
        </div>
      </section>
      {/* Body Text Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          <ul className="list-disc list-inside text-left mx-auto inline-block space-y-4">
            <li><strong>Overview of Policy Landscape:</strong> Receive tailored reviews of relevant international, domestic, and local policy frameworks that align with your organization's interests and priorities.</li>
            <li><strong>Real-Time Policy Updates and Ecosystem Insights:</strong> Stay informed with timely updates on policy initiatives and gain comprehensive analysis of the regulatory landscape to navigate changes effectively.</li>
            <li><strong>Legislative and Policy Analysis:</strong> Benefit from expert evaluation of specific policy proposals, initiatives, and emerging trends, helping you anticipate impacts and adjust your strategies proactively.</li>
            <li><strong>Targeted Insights:</strong> Receive briefings on relevant sectoral agencies, and/or identify key AI policy players, incentives, and possible engagement channels to pursue in short to long-term timeframes.</li>
          </ul>
        </div>
      </section>
    </>
  );
} 