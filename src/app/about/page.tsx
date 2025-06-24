import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Chloe Autio | AI Policy Consulting & Credentials',
  description: "Learn about Chloe Autio's expertise in AI policy consulting, technology governance, regulatory compliance, and enterprise/government advisory.",
  keywords: [
    'AI policy consulting',
    'technology governance',
    'regulatory compliance',
    'government consulting',
    'enterprise policy advisory',
    'Chloe Autio',
    'AI governance',
    'tech policy',
    'compliance consulting',
    'public sector advisory'
  ],
  openGraph: {
    title: 'About Chloe Autio | AI Policy Consulting & Credentials',
    description: "Learn about Chloe Autio's expertise in AI policy consulting, technology governance, regulatory compliance, and enterprise/government advisory.",
    url: 'https://chloeautio.com/about',
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
    type: 'profile'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Chloe Autio | AI Policy Consulting & Credentials',
    description: "Learn about Chloe Autio's expertise in AI policy consulting, technology governance, regulatory compliance, and enterprise/government advisory.",
    images: ['https://chloeautio.com/og-image.png'],
    creator: '@chloeautio'
  },
  alternates: {
    canonical: 'https://chloeautio.com/about'
  }
};

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-16" itemScope itemType="https://schema.org/Person">
      {/* Professional Biography */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-12">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg bg-eggshell flex items-center justify-center">
            <Image
              src="/images/headshot/ChloeAutioHeadshot.jpeg"
              alt="Chloe Autio, AI policy consultant and technology governance expert"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 heading" itemProp="name">Chloe Autio</h1>
          <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text" itemProp="description">
            Chloe Autio is a technology policy expert with nearly a decade of experience advising organizations on AI policy and governance. Through her practice, Autio Strategies, she provides strategic guidance to clients including government bodies, Fortune 50 companies, large AI labs and startups, and leading trade associations. Her advice helps organizations develop clear policy positions, enhance engagement and internal strategies, and anticipate regulatory implications.
          </p>
          <p className="text-base text-gray dark:text-paynesGray mb-2 body-text">
            Chloe's consultancy is built on a solid foundation of experience, including her pivotal role in shaping Intel Corp.'s emerging technology policy portfolio and developing their Responsible AI program from its beginning. Her approach integrates a deep understanding of product development, compliance, communications and social responsibility. She couples her substantive expertise in this niche field with a broad network of contacts in D.C. and beyond to best serve her clients' interests.
          </p>
        </div>
      </section>

      {/* Credentials & Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4 heading">Credentials & Expertise</h2>
        <ul className="list-disc list-inside text-gray dark:text-paynesGray space-y-2">
          <li className="body-text">Advisor to government bodies, Fortune 50 companies, large AI labs, startups, and trade associations</li>
          <li className="body-text">Strategic guidance on AI policy, governance, compliance, and regulatory engagement</li>
          <li className="body-text">Pivotal in shaping Intel Corp.'s emerging technology policy and Responsible AI program</li>
          <li className="body-text">Deep expertise in product development, compliance, communications, and social responsibility</li>
          <li className="body-text">Broad network of contacts in Washington, D.C. and beyond</li>
        </ul>
      </section>

      {/* Additional Roles & Affiliations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4 heading">Additional Roles & Affiliations</h2>
        <ul className="list-disc list-inside text-gray dark:text-paynesGray space-y-2">
          <li className="body-text">Adjunct AI Policy Advisor, Institute for Security and Technology</li>
          <li className="body-text">Faculty Lecturer, Future of Privacy Forum</li>
          <li className="body-text">Board Member, Humane Intelligence</li>
        </ul>
      </section>

      {/* Media & Recognition */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4 heading">Media & Recognition</h2>
        <ul className="list-disc list-inside text-gray dark:text-paynesGray space-y-2">
          <li className="body-text">Frequently sought after by government and civil society organizations</li>
          <li className="body-text">Expertise highlighted in The Wall Street Journal, Axios, POLITICO, Bloomberg, and more</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4 heading">Education</h2>
        <ul className="list-disc list-inside text-gray dark:text-paynesGray space-y-2">
          <li className="body-text">B.A. in Economics, University of California, Berkeley</li>
          <li className="body-text">Studied technology policy, data ethics, and the social implications of computing</li>
        </ul>
      </section>

      {/* Personal */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4 heading">Personal</h2>
        <p className="text-base text-gray dark:text-paynesGray body-text">
          Chloe resides in the Washington, D.C. area with her husband and stepdaughter.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold text-primary mb-4 heading">Partner with Chloe Autio Strategies</h2>
        <p className="text-lg text-gray dark:text-paynesGray mb-6 max-w-xl mx-auto body-text">
          Connect with Chloe to discuss how her expertise can help your organization navigate the evolving landscape of AI policy and governance.
        </p>
        <a
          href="/contact"
          className="btn-primary btn-primary-cta inline-block"
          aria-label="Request a Consultation with Chloe Autio"
        >
          Request a Consultation
        </a>
      </section>

      {/* Schema.org Person JSON-LD for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Chloe Autio',
          jobTitle: 'Founder, Autio Strategies',
          description: 'Technology policy expert specializing in AI policy, governance, and regulatory strategy.',
          alumniOf: [
            'University of California, Berkeley',
          ],
          hasCredential: [
            'B.A. in Economics',
          ],
          knowsAbout: [
            'AI Policy',
            'Technology Governance',
            'Regulatory Compliance',
            'Product Development',
            'Data Ethics',
            'Social Implications of Computing',
          ],
          url: 'https://chloeautio.com/about',
          sameAs: [
            'https://linkedin.com/in/chloeautio',
          ],
        })}
      </script>
    </main>
  );
} 