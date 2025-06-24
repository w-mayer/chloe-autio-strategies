import React from 'react';
import { articles } from '@/data/insights';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import Image from 'next/image';

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return notFound();
  const related = articles.filter(a => article.related.includes(a.slug));

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">{article.title}</h1>
        <div className="flex items-center gap-3 mb-6">
          <Image src={article.author.avatarUrl} alt={article.author.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{article.author.name}</div>
            <div className="text-xs text-neutral-500">{new Date(article.date).toLocaleDateString()}</div>
          </div>
        </div>
        <div className="prose prose-blue dark:prose-invert max-w-none mb-8" dangerouslySetInnerHTML={{ __html: article.content }} />
        <div className="flex gap-2 mb-8">
          {article.tags.map(tag => (
            <span key={tag} className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        {/* Social Sharing */}
        <div className="mb-12">
          <span className="text-sm text-neutral-600 mr-2">Share:</span>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent('https://chloeautio.com/insights/' + article.slug)}`} target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-900 underline mr-3">Twitter</a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://chloeautio.com/insights/' + article.slug)}&title=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-900 underline">LinkedIn</a>
        </div>
        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">Related Articles</h2>
            <ul className="list-disc list-inside space-y-2">
              {related.map(a => (
                <li key={a.slug}>
                  <Link href={`/insights/${a.slug}`} className="text-primary-700 hover:text-primary-900 underline">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        {/* Newsletter Signup */}
        <section className="mt-16">
          <NewsletterSignup />
        </section>
      </article>
    </main>
  );
} 