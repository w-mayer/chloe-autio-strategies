import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { siteMetadata } from '@/data/metadata';
import { siteContent } from '@/data/content';
import { articles, policyBriefs, caseStudies } from '@/data/resources';
import type { Metadata } from 'next';

interface ResourceArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ResourceArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Find the article, policy brief, or case study by slug
  const article = articles.find(a => a.slug === slug);
  const brief = policyBriefs.find(b => b.slug === slug);
  const caseStudy = caseStudies.find(c => c.slug === slug);
  const content = article || brief || caseStudy;
  
  if (!content) {
    return {
      title: 'Resource Not Found | Autio Strategies',
      description: 'The requested resource could not be found.',
    };
  }

  const resourceMetadata = siteMetadata.resources[slug as keyof typeof siteMetadata.resources];
  
  return {
    title: resourceMetadata?.title || `${content.title} | Autio Strategies`,
    description: resourceMetadata?.description || content.summary,
    keywords: resourceMetadata?.keywords || [
      'AI policy consulting',
      'technology governance',
      ...content.tags,
    ],
    openGraph: {
      title: resourceMetadata?.title || `${content.title} | Autio Strategies`,
      description: resourceMetadata?.description || content.summary,
      url: resourceMetadata?.url || `${siteMetadata.default.url}/resources/${slug}`,
      siteName: siteMetadata.default.siteName,
      images: [siteMetadata.default.image],
      locale: siteMetadata.default.locale,
      type: 'article' as const,
      publishedTime: content.date,
      authors: [content.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: resourceMetadata?.title || `${content.title} | Autio Strategies`,
      description: resourceMetadata?.description || content.summary,
      images: [siteMetadata.default.image.url],
      creator: siteMetadata.twitter.creator,
    },
    alternates: {
      canonical: resourceMetadata?.url || `${siteMetadata.default.url}/resources/${slug}`,
    },
  };
}

export default async function ResourceArticlePage({ params }: ResourceArticlePageProps) {
  const { slug } = await params;
  const { ui, pages } = siteContent;
  
  // Find the article, policy brief, or case study by slug
  const article = articles.find(a => a.slug === slug);
  const brief = policyBriefs.find(b => b.slug === slug);
  const caseStudy = caseStudies.find(c => c.slug === slug);
  const content = article || brief || caseStudy;
  if (!content) return notFound();

  // Related articles (for articles only)
  let related: typeof articles = [];
  if (article && article.related) {
    related = articles.filter(a => article.related.includes(a.slug));
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-[40vh] min-h-[240px] mb-0"
        style={{
          backgroundImage: `url('${pages.resources.hero.background.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-6xl font-bold mb-6 heading"
          >
            {content.title}
          </AuthorityHeading>
        </div>
      </section>
      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          {/* Author and date */}
          <div className="mb-6">
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{content.author.name}</div>
            <div className="text-xs text-neutral-500">{new Date(content.date).toLocaleDateString()}</div>
          </div>
          {/* Tags */}
          {content.tags && (
            <div className="flex gap-2 mb-4">
              {content.tags.map((tag: string) => (
                <span key={tag} className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {/* Content */}
          <div className="prose prose-blue dark:prose-invert max-w-none mb-8" dangerouslySetInnerHTML={{ __html: content.content }} />
          {/* Author Bio */}
          <div className="mb-8 p-4 bg-primary-50 dark:bg-paynesGray/40 rounded-lg">
            <div className="font-semibold text-primary-700">{content.author.name}</div>
            <div className="text-xs text-neutral-600 mb-1">{content.author.title}</div>
            <div className="text-sm text-neutral-700 dark:text-neutral-200">{content.author.bio}</div>
          </div>
          {/* Social Sharing */}
          <div className="flex items-center gap-4 mb-8 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <span className="text-sm text-neutral-600">{ui.sharing.shareArticle}</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-colors"
              aria-label={ui.sharing.shareOnLinkedIn}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          {/* Back to Resources */}
          <div className="text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
            >
              {ui.navigation.backToResources}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">{ui.sections.relatedArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((relatedArticle) => (
              <div key={relatedArticle.slug} className="bg-white dark:bg-paynesGray rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{relatedArticle.title}</h3>
                <p className="text-gray dark:text-paynesGray mb-4 text-sm">{relatedArticle.summary}</p>
                <Link
                  href={`/resources/${relatedArticle.slug}`}
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors"
                >
                  {ui.buttons.readMore} →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
} 