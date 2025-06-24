import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { ContactCTA } from '@/components/sections/ContactCTA';
import React from 'react';

function ValueProposition() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-8">
          Why Choose Chloe Autio Strategies?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-primary-50 dark:bg-neutral-900 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">AI Policy Expertise</h3>
            <p className="text-neutral-700 dark:text-neutral-200 text-base">Decades of experience advising governments, Fortune 500s, and startups on responsible AI, data governance, and emerging tech policy.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-primary-50 dark:bg-neutral-900 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">Global Perspective</h3>
            <p className="text-neutral-700 dark:text-neutral-200 text-base">Experience working with international organizations (OECD, NIST, DOD, Meta, DeepMind, Google Cloud, Cohere) to shape global standards and best practices.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-primary-50 dark:bg-neutral-900 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">Proven Results</h3>
            <p className="text-neutral-700 dark:text-neutral-200 text-base">Trusted by leading organizations to deliver actionable insights, drive compliance, and enable responsible innovation in AI and technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <ServicesGrid />
      <ClientLogos />
      <ValueProposition />
      <ContactCTA />
    </main>
  );
}
