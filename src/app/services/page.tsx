import { services } from '@/data/services';
import React from 'react';
import type { Metadata } from 'next';
import ServicesGridClient from './ServicesGridClient';

export const metadata: Metadata = {
  title: 'Services | AI Policy Consulting & Technology Governance',
  description: 'Explore our suite of AI policy consulting, technology governance, and regulatory compliance services for government and enterprise organizations.',
  keywords: [
    'AI policy consulting',
    'technology governance',
    'regulatory compliance',
    'government consulting',
    'enterprise policy advisory',
    'AI governance',
    'tech policy',
    'compliance consulting',
    'public sector advisory',
    'services'
  ],
  openGraph: {
    title: 'Services | AI Policy Consulting & Technology Governance',
    description: 'Explore our suite of AI policy consulting, technology governance, and regulatory compliance services for government and enterprise organizations.',
    url: 'https://chloeautio.com/services',
    siteName: 'Autio Strategies',
    images: [
      {
        url: 'https://chloeautio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autio Strategies - AI Policy Consulting & Technology Governance'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://chloeautio.com/services'
  }
};

export default function ServicesPage() {
  return <ServicesGridClient services={services} />;
} 