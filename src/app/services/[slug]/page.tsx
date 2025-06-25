import React from 'react';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import InsightsPageClient from './InsightsPageClient';
import Image from 'next/image';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return notFound();
  }

  // Special case for insight-analysis service
  if (slug === 'insight-analysis') {
    return <InsightsPageClient />;
  }

  // Choose background image based on service type
  const getBackgroundImage = () => {
    switch (slug) {
      case 'policy-development':
        return '/images/stocks/policy-development.jpg';
      case 'events-facilitation':
        return '/images/stocks/events-facilitation.jpg';
      case 'briefings-talks':
        return '/images/stocks/briefings-talks.jpg';
      case 'third-party':
        return '/images/stocks/third-party.jpg';
      default:
        return '/images/stocks/services.jpg';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-[40vh] min-h-[240px] mb-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={getBackgroundImage()}
            alt={`${service.title} service background`}
            fill
            className="w-full h-full object-cover object-center"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-5xl font-bold mb-4 text-eggshell drop-shadow-lg force-eggshell"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            {service.title}
          </AuthorityHeading>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          <p className="mb-8">{service.overview}</p>
          <section className="mb-10">
            <h2 className="text-2xl subheading text-primary-800 mb-2">Key Benefits</h2>
            <ul className="list-disc list-inside body-text space-y-1">
              {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl subheading text-primary-800 mb-2">Our Methodology</h2>
            <p className="body-text">{service.methodology}</p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl subheading text-primary-800 mb-2">Case Studies</h2>
            {service.caseStudies.map((cs, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-lg font-semibold text-primary-700 heading">{cs.title}</h3>
                <p className="body-text">{cs.description}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-2xl subheading text-primary-800 mb-2">Related Services</h2>
            <ul className="flex flex-wrap gap-4">
              {service.related.map(slug => {
                const rel = services.find(s => s.slug === slug);
                if (!rel) return null;
                return (
                  <li key={rel.slug}>
                    <Link href={`/services/${rel.slug}`} className="text-primary-700 hover:text-primary-900 underline underline-offset-4 font-medium body-text">
                      {rel.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
} 