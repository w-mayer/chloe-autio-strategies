import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { ContactCTA } from '@/components/sections/ContactCTA';
import React from 'react';
import { ValueProposition } from '@/components/sections/ValueProposition';

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
