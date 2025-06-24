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
      <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-8 text-center">Insights & Thought Leadership</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-12 text-center max-w-2xl mx-auto">
        Explore the latest articles, policy briefs, case studies, and resources on AI policy, governance, and regulatory strategy for government and enterprise leaders.
      </p>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Featured Articles</h2>
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
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Policy Briefs</h2>
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
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Case Studies</h2>
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
        <h2 className="text-2xl font-semibold text-primary-800 mb-6">Resource Library</h2>
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