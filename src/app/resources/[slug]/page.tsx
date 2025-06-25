import React from 'react';
import { articles, policyBriefs, caseStudies } from '@/data/insights';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import type { Article } from '@/data/insights';

interface ResourceArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ResourceArticlePage({ params }: ResourceArticlePageProps) {
  const { slug } = await params;
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

  // Choose a background image (default or per-type)
  let heroImage = '/images/stocks/research.jpg';
  if (caseStudy) heroImage = '/images/stocks/briefings-talks.jpg';
  if (brief) heroImage = '/images/stocks/policy-development.jpg';

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-[40vh] min-h-[240px] mb-0"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-5xl font-bold mb-4 text-eggshell drop-shadow-lg force-eggshell"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            {content.title}
          </AuthorityHeading>
        </div>
      </section>
      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          {/* Author and date */}
          <div className="flex items-center gap-3 mb-6">
            <OptimizedImage 
              src={content.author.avatarUrl} 
              alt={content.author.name} 
              width={40} 
              height={40} 
              className="w-10 h-10 rounded-full object-cover"
              type="headshot"
            />
            <div>
              <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{content.author.name}</div>
              <div className="text-xs text-neutral-500">{new Date(content.date).toLocaleDateString()}</div>
            </div>
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
          <div className="mb-8 p-4 bg-primary-50 dark:bg-paynesGray/40 rounded-lg flex items-center gap-4">
            <OptimizedImage 
              src={content.author.avatarUrl} 
              alt={content.author.name} 
              width={48} 
              height={48} 
              className="w-12 h-12 rounded-full object-cover"
              type="headshot"
            />
            <div>
              <div className="font-semibold text-primary-700">{content.author.name}</div>
              <div className="text-xs text-neutral-600 mb-1">{content.author.title}</div>
              <div className="text-sm text-neutral-700 dark:text-neutral-200">{content.author.bio}</div>
            </div>
          </div>
          {/* Social Sharing */}
          <div className="flex items-center gap-4 mb-8 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <span className="text-sm text-neutral-600">Share this article:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-colors"
              aria-label="Share on LinkedIn"
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
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((relatedArticle) => (
              <div key={relatedArticle.slug} className="bg-white dark:bg-paynesGray rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{relatedArticle.title}</h3>
                <p className="text-gray dark:text-paynesGray mb-4 text-sm">{relatedArticle.summary}</p>
                <Link
                  href={`/resources/${relatedArticle.slug}`}
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
} 