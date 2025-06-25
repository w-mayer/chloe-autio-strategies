import { articles, policyBriefs, caseStudies, resources } from '@/data/insights';
import { ArticleCard } from '@/components/content/ArticleCard';
import { PolicyBrief } from '@/components/content/PolicyBrief';
import { CaseStudyCard } from '@/components/content/CaseStudyCard';
import { ResourceCard } from '@/components/content/ResourceCard';
import type { Metadata } from 'next';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Resources | AI Policy Consulting',
  description: 'Explore resources, articles, policy briefs, and case studies on AI policy consulting, technology governance, and regulatory compliance for government and enterprise leaders.',
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
    'thought leadership',
    'resources'
  ],
  openGraph: {
    title: 'Resources | AI Policy Consulting',
    description: 'Explore resources, articles, policy briefs, and case studies on AI policy consulting, technology governance, and regulatory compliance for government and enterprise leaders.',
    url: 'https://chloeautio.com/resources',
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
    title: 'Resources | AI Policy Consulting',
    description: 'Explore resources, articles, policy briefs, and case studies on AI policy consulting, technology governance, and regulatory compliance for government and enterprise leaders.',
    images: ['https://chloeautio.com/og-image.png'],
    creator: '@chloeautio'
  },
  alternates: {
    canonical: 'https://chloeautio.com/resources'
  }
};

export default function ResourcesPage() {
  const featuredArticles = articles.filter(a => a.featured);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[44vh] flex items-center justify-center mb-0 bg-primary-900">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/stocks/services.jpg"
            alt="Resources background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-5xl font-bold mb-4 text-eggshell drop-shadow-lg force-eggshell"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            Resources & Thought Leadership
          </AuthorityHeading>
          <p className="text-lg text-eggshell/90 max-w-2xl mx-auto mt-4">
            Explore our latest articles, policy briefs, case studies, and curated resources on AI policy, governance, and regulatory topics for government and enterprise leaders.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Policy Briefs */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Policy Briefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policyBriefs.map(brief => (
            <PolicyBrief key={brief.slug} brief={brief} />
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map(cs => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>

      {/* Resource Library */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Resource Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map(resource => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>
    </>
  );
} 