'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Service } from '@/data/services';

function ServiceCardSkeleton() {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-soft flex flex-col justify-between animate-pulse">
      <div>
        <div className="h-6 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
      </div>
      <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
    </div>
  );
}

interface ServicesGridClientProps {
  services: Service[];
}

export default function ServicesGridClient({ services }: ServicesGridClientProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-8 text-center">Our Services</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-12 text-center max-w-2xl mx-auto">
        Chloe Autio Strategies offers a comprehensive suite of services designed to empower government and enterprise clients to navigate the evolving landscape of AI and technology policy with confidence and clarity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ServiceCardSkeleton key={i} />)
          : services.map(service => (
              <div key={service.slug} className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-soft flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-200 mb-4">{service.overview}</p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-block text-primary-700 hover:text-primary-900 font-medium underline underline-offset-4 transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </Link>
              </div>
            ))}
      </div>
    </main>
  );
} 