import React from 'react';
import Link from 'next/link';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Placeholder Case Study | Autio Strategies',
  description: 'A placeholder case study demonstrating how organizations can implement AI governance frameworks and navigate regulatory compliance challenges.',
  keywords: [
    'case study',
    'AI governance',
    'implementation',
    'regulatory compliance',
    'organizational strategy',
    'AI policy'
  ],
  openGraph: {
    title: 'Placeholder Case Study',
    description: 'A placeholder case study demonstrating AI governance implementation.',
    url: 'https://chloeautio.com/resources/placeholder-case-study',
    siteName: 'Autio Strategies',
    images: [
      {
        url: 'https://chloeautio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Placeholder Case Study'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  alternates: {
    canonical: 'https://chloeautio.com/resources/placeholder-case-study'
  }
};

export default function PlaceholderCaseStudyPage() {
  const author = {
    name: 'Chloe Autio',
    title: 'Founder, Chloe Autio Strategies',
    bio: 'Chloe Autio is a leading expert in AI policy, governance, and technology strategy, advising government and enterprise clients on responsible innovation.',
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-[40vh] min-h-[240px] mb-0"
        style={{
          backgroundImage: `url('/images/stocks/briefings-talks.jpg')`,
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
            Placeholder Case Study
          </AuthorityHeading>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Demonstrating AI governance implementation and regulatory compliance
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-4xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          {/* Organization and date */}
          <div className="mb-6">
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Placeholder Organization</div>
            <div className="text-xs text-neutral-500">July 1, 2024</div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            {['Placeholder', 'Case Study', 'AI Governance', 'Implementation'].map((tag) => (
              <span key={tag} className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-blue dark:prose-invert max-w-none mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Executive Summary</h2>
            <p className="mb-6">
              This placeholder case study demonstrates how organizations can successfully implement AI governance frameworks 
              while navigating complex regulatory environments. The case study outlines key challenges, implementation strategies, 
              and lessons learned that can be applied across different sectors and organizational contexts.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Background</h2>
            <p className="mb-6">
              The organization faced increasing pressure to modernize operations through AI while ensuring compliance 
              with evolving regulatory requirements. The challenge was to implement robust governance without stifling 
              innovation or creating unnecessary bureaucratic overhead.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Key Challenges</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Regulatory Complexity:</strong> Navigating multiple overlapping regulatory frameworks</li>
              <li><strong>Stakeholder Alignment:</strong> Balancing competing interests across departments</li>
              <li><strong>Resource Constraints:</strong> Limited budget and expertise for AI governance</li>
              <li><strong>Change Management:</strong> Overcoming resistance to new processes and procedures</li>
              <li><strong>Technology Integration:</strong> Ensuring AI systems work with existing infrastructure</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Implementation Strategy</h2>
            <p className="mb-4">
              The organization adopted a phased approach to AI governance implementation:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Phase 1: Foundation</h3>
                <p className="text-sm">Establish governance framework, identify stakeholders, and conduct initial risk assessment</p>
              </div>
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Phase 2: Pilot</h3>
                <p className="text-sm">Implement governance in select areas, test processes, and gather feedback</p>
              </div>
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Phase 3: Scale</h3>
                <p className="text-sm">Expand implementation across organization, refine processes, and establish monitoring</p>
              </div>
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Phase 4: Optimize</h3>
                <p className="text-sm">Continuous improvement, performance measurement, and stakeholder engagement</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Key Success Factors</h2>
            <p className="mb-4">
              Several factors contributed to the successful implementation:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Executive Leadership:</strong> Strong commitment from senior management</li>
              <li><strong>Cross-functional Teams:</strong> Collaboration across departments and disciplines</li>
              <li><strong>Clear Communication:</strong> Regular updates and transparent decision-making</li>
              <li><strong>Training Programs:</strong> Comprehensive education for all stakeholders</li>
              <li><strong>Flexible Framework:</strong> Adaptable governance that can evolve with needs</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Outcomes and Impact</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Positive Results</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Improved operational efficiency and decision-making</li>
                <li>Enhanced regulatory compliance and risk management</li>
                <li>Increased stakeholder confidence and trust</li>
                <li>Better resource allocation and cost management</li>
                <li>Strengthened competitive position in the market</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Lessons Learned</h2>
            <p className="mb-4">
              Key insights from this implementation include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Start Small:</strong> Begin with pilot programs before full-scale implementation</li>
              <li><strong>Engage Stakeholders:</strong> Involve all relevant parties from the beginning</li>
              <li><strong>Measure Progress:</strong> Establish clear metrics and regular reporting</li>
              <li><strong>Stay Flexible:</strong> Be prepared to adapt as circumstances change</li>
              <li><strong>Focus on Culture:</strong> Governance is as much about people as processes</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Recommendations for Other Organizations</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Implementation Tips</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Conduct thorough stakeholder analysis before beginning</li>
                <li>Develop clear communication and training plans</li>
                <li>Establish regular review and update processes</li>
                <li>Build in flexibility for future changes</li>
                <li>Create mechanisms for ongoing feedback and improvement</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> This is a placeholder case study designed to demonstrate the structure and content 
                format for real case studies. The specific details, outcomes, and recommendations would be based on 
                actual organizational experiences and results.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mb-8 p-4 bg-primary-50 dark:bg-paynesGray/40 rounded-lg">
            <div className="font-semibold text-primary-700">{author.name}</div>
            <div className="text-xs text-neutral-600 mb-1">{author.title}</div>
            <div className="text-sm text-neutral-700 dark:text-neutral-200">{author.bio}</div>
          </div>

          {/* Social Sharing */}
          <div className="flex items-center gap-4 mb-8 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <span className="text-sm text-neutral-600">Share this case study:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://chloeautio.com/resources/placeholder-case-study')}`}
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
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
} 