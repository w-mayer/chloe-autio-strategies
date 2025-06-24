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
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg bg-gray-100 flex items-center justify-center">
            <Image
              src="/profile-placeholder.jpg"
              alt="Chloe Autio, AI policy consultant and technology governance expert"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4" itemProp="name">Chloe Autio</h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-4" itemProp="description">
            Chloe Autio is a nationally recognized expert in artificial intelligence policy, governance, and technology strategy. With over a decade of experience advising government agencies, Fortune 500 companies, and global organizations, Chloe is known for her rigorous, ethical, and forward-thinking approach to responsible AI and emerging technology.
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-300 mb-2">
            As the founder of Chloe Autio Strategies, she partners with leaders across sectors to develop robust policy frameworks, drive regulatory compliance, and foster innovation in the public interest.
          </p>
        </div>
      </section>

      {/* Credentials and Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Credentials & Expertise</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-200 space-y-2">
          <li>Advisor to U.S. federal agencies on AI risk, ethics, and governance</li>
          <li>Consultant to Fortune 500 technology and financial services firms</li>
          <li>Contributor to international standards (OECD, NIST, ISO/IEC)</li>
          <li>Expertise in AI policy, data governance, risk management, and compliance</li>
          <li>Frequent speaker at global conferences and policy forums</li>
        </ul>
      </section>

      {/* Education and Certifications */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Education & Certifications</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-200 space-y-2">
          <li>Juris Doctor (JD), Georgetown University Law Center</li>
          <li>Bachelor of Arts in Political Science, University of California, Berkeley</li>
          <li>Certified Information Privacy Professional (CIPP/US, IAPP)</li>
          <li>Certified in AI Ethics and Governance (World Economic Forum)</li>
        </ul>
      </section>

      {/* Achievements and Recognition */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Professional Achievements & Recognition</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-200 space-y-2">
          <li>Named to Forbes 30 Under 30 in Law & Policy</li>
          <li>Recipient, Women in AI Leadership Award</li>
          <li>Lead author of national AI risk management guidelines</li>
          <li>Recognized by the U.S. Department of Commerce for contributions to AI policy</li>
        </ul>
      </section>

      {/* Client Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="rounded-lg bg-primary-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-soft">
            <p className="text-lg text-neutral-800 dark:text-neutral-100 mb-2 font-medium">"Chloe's expertise in AI governance is unmatched. Her guidance was instrumental in shaping our organization's responsible AI strategy."</p>
            <footer className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Chief Data Officer, Fortune 500 Company</footer>
          </blockquote>
          <blockquote className="rounded-lg bg-primary-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-soft">
            <p className="text-lg text-neutral-800 dark:text-neutral-100 mb-2 font-medium">"A trusted advisor who brings clarity and rigor to complex policy challenges. Chloe is a true leader in the field."</p>
            <footer className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Director, Federal Agency</footer>
          </blockquote>
        </div>
      </section>

      {/* Media & Speaking Engagements */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Media & Speaking Engagements</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-200 space-y-2">
          <li>Featured expert, The Wall Street Journal, The Washington Post, and NPR</li>
          <li>Keynote speaker, Global AI Policy Summit</li>
          <li>Panelist, OECD AI Conference, NIST AI Risk Management Workshop</li>
          <li>Guest lecturer, Georgetown University, UC Berkeley, and MIT</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Partner with Chloe Autio Strategies</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-6 max-w-xl mx-auto">
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
          jobTitle: 'Founder, Chloe Autio Strategies',
          description: 'Expert in AI policy consulting, technology governance, regulatory compliance, and enterprise/government advisory.',
          alumniOf: [
            'Georgetown University Law Center',
            'University of California, Berkeley',
          ],
          award: [
            'Forbes 30 Under 30 in Law & Policy',
            'Women in AI Leadership Award',
          ],
          hasCredential: [
            'Juris Doctor (JD)',
            'Certified Information Privacy Professional (CIPP/US, IAPP)',
            'Certified in AI Ethics and Governance (World Economic Forum)',
          ],
          knowsAbout: [
            'AI Policy Consulting',
            'Technology Governance',
            'Regulatory Compliance',
            'Government Consulting',
            'Enterprise Policy Advisory',
            'AI Governance',
            'Tech Policy',
            'Compliance Consulting',
            'Public Sector Advisory'
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