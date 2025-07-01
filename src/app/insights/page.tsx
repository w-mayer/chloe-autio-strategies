import { articles, policyBriefs, caseStudies, resources } from '@/data/resources';
import { ArticleCard } from '@/components/content/ArticleCard';
import { ResourceCard } from '@/components/content/ResourceCard';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/data/metadata';
import { siteContent } from '@/data/content';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: siteMetadata.pages.resources.title,
  description: siteMetadata.pages.resources.description,
  keywords: siteMetadata.pages.resources.keywords,
  openGraph: {
    title: siteMetadata.pages.resources.title,
    description: siteMetadata.pages.resources.description,
    url: siteMetadata.pages.resources.url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'website' as const,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.pages.resources.title,
    description: siteMetadata.pages.resources.description,
    images: [siteMetadata.default.image.url],
    creator: siteMetadata.twitter.creator,
  },
  alternates: {
    canonical: siteMetadata.pages.resources.url,
  },
};

export default function InsightsPage() {
  const featuredArticles = articles.filter(a => a.featured);
  const { ui } = siteContent;
  
  return (
    <>
      <PageHero pageName="insights" overlayOpacity={60} />

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">{ui.sections.featuredArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Policy Briefs */}
      {policyBriefs.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">{ui.sections.policyBriefs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policyBriefs.map(brief => (
              <ResourceCard key={brief.slug} resource={brief} />
            ))}
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">{ui.sections.caseStudies}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(cs => (
              <ResourceCard key={cs.slug} resource={cs} />
            ))}
          </div>
        </section>
      )}

      {/* Resource Library */}
      {resources.length > 0 && (
        <section className="container mx-auto px-4 py-4">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">{ui.sections.resourceLibrary}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map(resource => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-6 text-center bg-primary-50 dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4 heading">{ui.cta.needExpertGuidance}</h2>
          <p className="text-lg text-gray dark:text-paynesGray mb-8 body-text">
            {ui.cta.putInsightsIntoAction}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="text-lg px-8 py-3">
              {ui.buttons.contactUs}
            </Button>
            <Button href="/services" variant="outline" className="text-lg px-8 py-3">
              {ui.buttons.exploreServices}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 