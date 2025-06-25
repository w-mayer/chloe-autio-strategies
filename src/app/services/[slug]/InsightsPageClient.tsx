'use client';
import React from 'react';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';

export default function InsightsPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-paynesGray">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/stocks/insights-analysis.jpg"
            alt="Insights and analysis background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Green overlay */}
          <div className="absolute inset-0 z-10" style={{ background: 'rgba(139,172,79,0.2)' }} />
        </div>
        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-6xl font-bold mb-6 heading text-eggshell"
          >
            Insights & Analysis
          </AuthorityHeading>
        </div>
      </section>
      {/* Body Text Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="body-text text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto bg-white/80 dark:bg-paynesGray/80 rounded-xl shadow-lg p-8 -mt-16 relative z-20 backdrop-blur">
          <ul className="list-disc list-inside text-left mx-auto inline-block space-y-4">
            <li><strong>Overview of Policy Landscape:</strong> Receive tailored reviews of relevant international, domestic, and local policy frameworks that align with your organization&apos;s interests and priorities.</li>
            <li><strong>Real-Time Policy Updates and Ecosystem Insights:</strong> Stay informed with timely updates on policy initiatives and gain comprehensive analysis of the regulatory landscape to navigate changes effectively.</li>
            <li><strong>Legislative and Policy Analysis:</strong> Benefit from expert evaluation of specific policy proposals, initiatives, and emerging trends, helping you anticipate impacts and adjust your strategies proactively.</li>
            <li><strong>Targeted Insights:</strong> Receive briefings on relevant sectoral agencies, and/or identify key AI policy players, incentives, and possible engagement channels to pursue in short to long-term timeframes.</li>
          </ul>
        </div>
      </section>
    </>
  );
} 