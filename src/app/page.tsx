import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ClientLogosCarousel } from '@/components/sections/ClientLogosCarousel';
import { ContactCTA } from '@/components/sections/ContactCTA';
import React from 'react';
import { ValueProposition } from '@/components/sections/ValueProposition';

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <ServicesGrid />
      <ClientLogosCarousel />
      <ValueProposition />
      <ContactCTA />
    </main>
  );
}
