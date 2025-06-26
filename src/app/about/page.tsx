import React from 'react';
import { Metadata } from 'next';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import { siteContent } from '@/data/content';
import { siteMetadata } from '@/data/metadata';

export const metadata: Metadata = {
  title: siteMetadata.pages.about.title,
  description: siteMetadata.pages.about.description,
  keywords: siteMetadata.pages.about.keywords,
  openGraph: {
    title: siteMetadata.pages.about.title,
    description: siteMetadata.pages.about.description,
    url: siteMetadata.pages.about.url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'website' as const,
  },
  alternates: {
    canonical: siteMetadata.pages.about.url,
  },
};

export default function AboutPage() {
  const { about } = siteContent;
  
  return (
    <div className="min-h-screen bg-eggshell">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-6xl font-bold mb-6 heading"
            enableHighlight={true}
          >
            {about.hero.title}
          </AuthorityHeading>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto body-text text-eggshell">
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-4 py-16">
        {/* Chloe Autio */}
        <section className="flex flex-col md:flex-row items-start gap-10 mb-16" itemScope itemType="https://schema.org/Person">
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg bg-eggshell">
              <Image
                src={about.team.chloe.image.src}
                alt={about.team.chloe.image.alt}
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 heading" itemProp="name">
              {about.team.chloe.name}
            </h2>
            <p className="text-xl text-primary-600 mb-4 body-text" itemProp="jobTitle">
              {about.team.chloe.title}
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text" itemProp="description">
              {about.team.chloe.description}
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text">
              {about.team.chloe.bio}
            </p>
            {/* Chloe Roles & Affiliations */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary mb-2">{about.team.chloe.rolesTitle}</h3>
              <ul className="text-sm text-gray dark:text-paynesGray space-y-1">
                {about.team.chloe.roles.map((role, index) => (
                  <li key={index}>• {role}</li>
                ))}
              </ul>
            </div>
            {/* Chloe Expertise */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">{about.team.chloe.expertiseTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {about.team.chloe.expertise.map((skill, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Samuel Wells */}
        <section className="flex flex-col md:flex-row items-start gap-10" itemScope itemType="https://schema.org/Person">
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg bg-eggshell">
              <Image
                src={about.team.samuel.image.src}
                alt={about.team.samuel.image.alt}
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 heading" itemProp="name">
              {about.team.samuel.name}
            </h2>
            <p className="text-xl text-primary-600 mb-4 body-text" itemProp="jobTitle">
              {about.team.samuel.title}
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text" itemProp="description">
              {about.team.samuel.description}
            </p>
            {/* Samuel Roles & Affiliations */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary mb-2">{about.team.samuel.rolesTitle}</h3>
              <ul className="text-sm text-gray dark:text-paynesGray space-y-1">
                {about.team.samuel.roles.map((role, index) => (
                  <li key={index}>• {role}</li>
                ))}
              </ul>
            </div>
            {/* Samuel Expertise */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">{about.team.samuel.expertiseTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {about.team.samuel.expertise.map((skill, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4 heading">{about.cta.title}</h2>
        <p className="text-lg text-gray dark:text-paynesGray mb-6 max-w-xl mx-auto body-text">
          {about.cta.description}
        </p>
        <a
          href={about.cta.button.href}
          className="btn-primary btn-primary-cta inline-block mb-8"
          aria-label={`${about.cta.button.text} with Autio Strategies Team`}
        >
          {about.cta.button.text}
        </a>
      </section>

      {/* Schema.org Organization JSON-LD for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Autio Strategies',
          description: 'AI policy consulting and technology governance experts providing strategic guidance to government bodies, Fortune 50 companies, and leading organizations.',
          url: siteMetadata.default.url,
          logo: `${siteMetadata.default.url}/images/logo/AutioStrategies_Logo_FullColor_Horz.png`,
          employee: [
            {
              '@type': 'Person',
              name: 'Chloe Autio',
              jobTitle: 'Founder & CEO',
              description: 'Technology policy expert specializing in AI policy, governance, and regulatory strategy.',
              alumniOf: 'University of California, Berkeley',
              hasCredential: 'B.A. in Economics',
              knowsAbout: [
                'AI Policy',
                'Technology Governance',
                'Regulatory Compliance',
                'Government Relations',
                'Strategic Advisory'
              ]
            },
            {
              '@type': 'Person',
              name: 'Samuel Wells',
              jobTitle: 'Policy Manager',
              description: 'Policy expert with experience in government relations and technology policy.',
              alumniOf: 'University of Virginia',
              hasCredential: 'B.A. in Public Policy & Leadership',
              knowsAbout: [
                'Policy Research',
                'Government Relations',
                'Technology Policy',
                'Public Sector Advisory',
                'Strategic Communications'
              ]
            }
          ]
        })}
      </script>
    </div>
  );
} 