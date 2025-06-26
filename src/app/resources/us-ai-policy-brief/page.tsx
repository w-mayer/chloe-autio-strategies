import React from 'react';
import Link from 'next/link';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteMetadata } from '@/data/metadata';
import { siteContent } from '@/data/content';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: siteMetadata.resources['us-ai-policy-brief'].title,
  description: siteMetadata.resources['us-ai-policy-brief'].description,
  keywords: siteMetadata.resources['us-ai-policy-brief'].keywords,
  openGraph: {
    title: siteMetadata.resources['us-ai-policy-brief'].title,
    description: siteMetadata.resources['us-ai-policy-brief'].description,
    url: siteMetadata.resources['us-ai-policy-brief'].url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'article' as const,
  },
  alternates: {
    canonical: siteMetadata.resources['us-ai-policy-brief'].url,
  },
};

export default function USPolicyBriefPage() {
  const { ui, resources, pages } = siteContent;
  const brief = resources['us-ai-policy-brief'];

  const author = {
    name: 'Chloe Autio',
    title: 'Founder, Chloe Autio Strategies',
    bio: 'Chloe Autio is a leading expert in AI policy, governance, and technology strategy, advising government and enterprise clients on responsible innovation.',
  };

  return (
    <>
      <PageHero 
        pageName="resources" 
        title={brief.title}
        subtitle={brief.subtitle}
      />

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-4xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          {/* Author and date */}
          <div className="mb-6">
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{author.name}</div>
            <div className="text-xs text-neutral-500">April 20, 2024</div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            {['Policy Brief', 'Federal Policy', 'AI Governance', 'Regulation'].map((tag) => (
              <span key={tag} className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-blue dark:prose-invert max-w-none mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Executive Summary</h2>
            <p className="mb-6">
              The U.S. federal government has taken significant steps to establish a comprehensive framework for AI governance in 2024. 
              This brief examines the key developments, challenges, and implications for organizations operating in the AI space, 
              providing actionable insights for policy compliance and strategic planning.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Key Executive Orders</h2>
            <p className="mb-4">
              The Biden administration&apos;s Executive Order on AI Safety and Security represents a landmark effort to balance innovation 
              with responsible AI development. This comprehensive framework addresses multiple aspects of AI governance:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Safety Standards:</strong> New mandatory safety standards for AI systems that pose significant risks</li>
              <li><strong>Privacy Protections:</strong> Enhanced privacy safeguards and data protection measures</li>
              <li><strong>Workforce Development:</strong> Initiatives to prepare the workforce for AI-driven changes</li>
              <li><strong>International Collaboration:</strong> Frameworks for global AI governance cooperation</li>
              <li><strong>Innovation Support:</strong> Programs to maintain U.S. leadership in AI development</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Legislative Landscape</h2>
            <p className="mb-4">
              Congress has introduced several bipartisan bills addressing AI governance, reflecting growing consensus on the need 
              for comprehensive AI regulation:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>AI Accountability Act:</strong> Establishes liability frameworks for AI system failures</li>
              <li><strong>National AI Commission Act:</strong> Creates a bipartisan commission to study AI policy</li>
              <li><strong>Algorithmic Accountability Act:</strong> Requires impact assessments for automated decision systems</li>
              <li><strong>AI in Government Act:</strong> Sets standards for federal AI procurement and use</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Regulatory Developments</h2>
            <p className="mb-4">
              Federal agencies are actively developing sector-specific AI regulations to address unique challenges in their domains:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Healthcare (FDA)</h3>
                <p className="text-sm">Guidance on AI in medical devices, clinical decision support systems, and drug development</p>
              </div>
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Consumer Protection (FTC)</h3>
                <p className="text-sm">Enforcement actions on AI bias, deceptive practices, and unfair competition</p>
              </div>
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Criminal Justice (DOJ)</h3>
                <p className="text-sm">Guidance on AI in law enforcement, sentencing, and risk assessment</p>
              </div>
              <div className="bg-primary-50 dark:bg-paynesGray/40 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Financial Services (SEC/CFTC)</h3>
                <p className="text-sm">Regulations on AI in trading, risk management, and consumer financial services</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Implications for Organizations</h2>
            <p className="mb-4">
              Organizations should prepare for increased regulatory scrutiny and compliance requirements. 
              Key considerations for successful AI implementation include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>AI Governance Frameworks:</strong> Establish comprehensive policies and procedures for AI development and deployment</li>
              <li><strong>Risk Assessment Protocols:</strong> Implement systematic approaches to identify and mitigate AI-related risks</li>
              <li><strong>Transparency Measures:</strong> Develop explainable AI systems and clear communication about AI use</li>
              <li><strong>Workforce Training:</strong> Invest in education and training programs for AI literacy and responsible use</li>
              <li><strong>Compliance Monitoring:</strong> Create systems to track and report on AI compliance across the organization</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Strategic Recommendations</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Immediate Actions (0-6 months)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Conduct AI inventory and risk assessment</li>
                <li>Establish AI governance committee</li>
                <li>Develop initial AI policies and procedures</li>
                <li>Begin workforce AI training programs</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Medium-term Planning (6-18 months)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Implement comprehensive AI governance framework</li>
                <li>Develop AI transparency and explainability systems</li>
                <li>Establish compliance monitoring and reporting</li>
                <li>Create AI ethics and bias mitigation protocols</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Long-term Strategy (18+ months)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Integrate AI governance into organizational culture</li>
                <li>Develop advanced AI risk management capabilities</li>
                <li>Establish industry leadership in responsible AI</li>
                <li>Contribute to AI policy development and standards</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Looking Ahead</h2>
            <p className="mb-6">
              As the policy landscape continues to evolve, organizations must stay informed and proactive in their AI governance strategies. 
              Regular monitoring of regulatory developments and engagement with policymakers will be essential for successful AI implementation. 
              The organizations that adapt quickly and responsibly will be best positioned to leverage AI&apos;s benefits while managing its risks.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> This brief provides a high-level overview of current U.S. federal AI policy developments. 
                Organizations should consult with legal and policy experts for specific compliance guidance and stay updated on 
                the latest regulatory changes.
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
            <span className="text-sm text-neutral-600">{ui.sharing.shareBrief}</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteMetadata.resources['us-ai-policy-brief'].url)}`}
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
    </>
  );
} 