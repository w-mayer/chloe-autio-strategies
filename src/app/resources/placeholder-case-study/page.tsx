import React from 'react';
import Link from 'next/link';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteMetadata } from '@/data/metadata';
import { siteContent } from '@/data/content';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: siteMetadata.resources['placeholder-case-study'].title,
  description: siteMetadata.resources['placeholder-case-study'].description,
  keywords: siteMetadata.resources['placeholder-case-study'].keywords,
  openGraph: {
    title: siteMetadata.resources['placeholder-case-study'].title,
    description: siteMetadata.resources['placeholder-case-study'].description,
    url: siteMetadata.resources['placeholder-case-study'].url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'article' as const,
  },
  alternates: {
    canonical: siteMetadata.resources['placeholder-case-study'].url,
  },
};

export default function PlaceholderCaseStudyPage() {
  const { ui, resources, pages } = siteContent;
  const caseStudy = resources['placeholder-case-study'];
  
  return (
    <>
      <PageHero 
        pageName="resources" 
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
      />

      {/* Navigation */}
      <section className="container mx-auto px-4 py-4">
        <Link href="/resources" className="text-primary-700 hover:text-primary-900 underline underline-offset-4 font-medium body-text">
          {ui.navigation.backToResources}
        </Link>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Meta information */}
          <div className="mb-8 p-6 bg-primary-50 dark:bg-neutral-900 rounded-lg">
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{caseStudy.organization}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{caseStudy.date}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {caseStudy.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              This placeholder case study demonstrates how organizations can successfully implement AI governance frameworks
              and achieve regulatory compliance while maintaining operational efficiency and innovation.
            </p>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Executive Summary</h2>
            <p className="mb-6">
              This case study examines the successful implementation of a comprehensive AI governance framework
              at a mid-sized technology company. The organization faced challenges in balancing innovation with
              regulatory compliance, particularly in light of emerging AI regulations and industry standards.
            </p>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Background</h2>
            <p className="mb-6">
              The organization, a technology company with approximately 500 employees, had been developing
              AI-powered products for the healthcare sector. As regulatory requirements for AI systems became
              more stringent, the company needed to establish robust governance processes while maintaining
              its competitive edge in the market.
            </p>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Challenges</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Lack of formal AI governance policies and procedures</li>
              <li>Inconsistent risk assessment methodologies across teams</li>
              <li>Limited expertise in regulatory compliance for AI systems</li>
              <li>Need to balance innovation speed with compliance requirements</li>
              <li>Stakeholder resistance to perceived bureaucratic overhead</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Solution</h2>
            <p className="mb-6">
              Working with Autio Strategies, the organization implemented a comprehensive AI governance
              framework that included:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Establishment of an AI Ethics Committee with cross-functional representation</li>
              <li>Development of standardized risk assessment protocols</li>
              <li>Implementation of AI system documentation and monitoring requirements</li>
              <li>Creation of training programs for technical and non-technical staff</li>
              <li>Integration of governance processes into existing development workflows</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Results</h2>
            <p className="mb-6">
              The implementation of the AI governance framework resulted in significant improvements:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>100% compliance with relevant AI regulations and industry standards</li>
              <li>Reduced time-to-market for new AI products by 25% through streamlined processes</li>
              <li>Enhanced stakeholder confidence and trust in AI systems</li>
              <li>Improved risk identification and mitigation capabilities</li>
              <li>Increased employee awareness and engagement with AI ethics and governance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Key Learnings</h2>
            <p className="mb-6">
              This case study demonstrates several important principles for successful AI governance implementation:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Executive leadership commitment is essential for successful implementation</li>
              <li>Cross-functional collaboration ensures comprehensive coverage of governance needs</li>
              <li>Integration with existing processes minimizes disruption and resistance</li>
              <li>Ongoing training and communication maintain engagement and effectiveness</li>
              <li>Regular review and updates ensure continued relevance and effectiveness</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary-800 mb-4 heading">Conclusion</h2>
            <p className="mb-6">
              The successful implementation of AI governance at this organization demonstrates that
              effective governance can enhance rather than hinder innovation. By establishing clear
              processes and responsibilities, the organization was able to maintain its competitive
              position while ensuring compliance and building stakeholder trust.
            </p>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> {caseStudy.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center bg-primary-50 dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4 heading">{ui.cta.needExpertGuidance}</h2>
          <p className="text-lg text-gray dark:text-paynesGray mb-8 body-text">
            {ui.cta.discussExpertise}
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