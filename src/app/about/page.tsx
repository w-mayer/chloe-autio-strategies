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
  const { about, pages } = siteContent;
  
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
            {pages.about.hero.title}
          </AuthorityHeading>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto body-text text-eggshell">
            {pages.about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-4 py-16">
        {/* Chloe Autio */}
        <section className="flex flex-col lg:flex-row items-start gap-10 mb-16" itemScope itemType="https://schema.org/Person">
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="relative w-full h-96 lg:h-96 rounded-lg overflow-hidden shadow-lg bg-eggshell">
              <Image
                src={about.team.chloe.image.src}
                alt={about.team.chloe.image.alt}
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl">
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
          </div>
        </section>

        {/* Samuel Wells */}
        <section className="flex flex-col lg:flex-row items-start gap-10" itemScope itemType="https://schema.org/Person">
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="relative w-full h-96 lg:h-96 rounded-lg overflow-hidden shadow-lg bg-eggshell">
              <Image
                src={about.team.samuel.image.src}
                alt={about.team.samuel.image.alt}
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          </div>
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 heading" itemProp="name">
              {about.team.samuel.name}
            </h2>
            <p className="text-xl text-primary-600 mb-4 body-text" itemProp="jobTitle">
              {about.team.samuel.title}
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text" itemProp="description">
              {about.team.samuel.description}
            </p>
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
              hasCredential: 'B.A. in Economics'
            },
            {
              '@type': 'Person',
              name: 'Samuel Wells',
              jobTitle: 'Policy Manager',
              description: 'Policy expert with experience in government relations and technology policy.',
              alumniOf: 'University of Virginia',
              hasCredential: 'B.A. in Public Policy & Leadership'
            }
          ]
        })}
      </script>
    </div>
  );
} 