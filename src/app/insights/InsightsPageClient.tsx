'use client';
import React, { useEffect, useState } from 'react';
import { ArticleCard, CardSkeleton as ArticleCardSkeleton } from '@/components/content/ArticleCard';
import { PolicyBrief, CardSkeleton as PolicyBriefSkeleton } from '@/components/content/PolicyBrief';
import { CaseStudyCard, CardSkeleton as CaseStudyCardSkeleton } from '@/components/content/CaseStudyCard';
import { ResourceCard, CardSkeleton as ResourceCardSkeleton } from '@/components/content/ResourceCard';
import type { Article, PolicyBrief as PolicyBriefType, CaseStudy, Resource } from '@/data/insights';

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
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Insights & Thought Leadership</h1>
      <div className="body-text text-lg text-neutral-700 dark:text-neutral-200 mb-12 text-center max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-left mx-auto inline-block">
          <li><strong>Overview of Policy Landscape:</strong> Receive tailored reviews of relevant international, domestic, and local policy frameworks that align with your organization's interests and priorities.</li>
          <li><strong>Real-Time Policy Updates and Ecosystem Insights:</strong> Stay informed with timely updates on policy initiatives and gain comprehensive analysis of the regulatory landscape to navigate changes effectively.</li>
          <li><strong>Legislative and Policy Analysis:</strong> Benefit from expert evaluation of specific policy proposals, initiatives, and emerging trends, helping you anticipate impacts and adjust your strategies proactively.</li>
          <li><strong>Targeted Insights:</strong> Receive briefings on relevant sectoral agencies, and/or identify key AI policy players, incentives, and possible engagement channels to pursue in short to long-term timeframes.</li>
        </ul>
      </div>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <ArticleCardSkeleton key={i} />)
            : articles.filter(a => a.featured).map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
        </div>
      </section>

      {/* Policy Briefs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">Policy Briefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => <PolicyBriefSkeleton key={i} />)
            : policyBriefs.map(brief => (
                <PolicyBrief key={brief.slug} brief={brief} />
              ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => <CaseStudyCardSkeleton key={i} />)
            : caseStudies.map(cs => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
        </div>
      </section>

      {/* Resource Library */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-6">Resource Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <ResourceCardSkeleton key={i} />)
            : resources.map(resource => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
        </div>
      </section>
    </main>
  );
} 