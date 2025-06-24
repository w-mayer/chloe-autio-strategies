import { services } from '@/data/services';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-6">{service.title}</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-8 max-w-2xl">{service.overview}</p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">Key Benefits</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-200 space-y-1">
          {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">Our Methodology</h2>
        <p className="text-neutral-700 dark:text-neutral-200">{service.methodology}</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">Case Studies</h2>
        {service.caseStudies.map((cs, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-lg font-semibold text-primary-700">{cs.title}</h3>
            <p className="text-neutral-700 dark:text-neutral-200">{cs.description}</p>
          </div>
        ))}
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">Contact Us About {service.title}</h2>
        <form className="max-w-lg space-y-4 bg-primary-50 dark:bg-neutral-900 p-6 rounded-lg border border-primary-200 dark:border-neutral-800">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input id="name" name="name" type="text" required className="form-input" />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input id="email" name="email" type="email" required className="form-input" />
          </div>
          <div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" required className="form-input min-h-[96px]" />
          </div>
          <button type="submit" className="btn-primary btn-primary-cta w-full">Request Consultation</button>
        </form>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">Related Services</h2>
        <ul className="flex flex-wrap gap-4">
          {service.related.map(slug => {
            const rel = services.find(s => s.slug === slug);
            if (!rel) return null;
            return (
              <li key={rel.slug}>
                <Link href={`/services/${rel.slug}`} className="text-primary-700 hover:text-primary-900 underline underline-offset-4 font-medium">
                  {rel.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
} 