import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AI Policy Consulting & Technology Governance',
  description: 'Contact Chloe Autio Strategies for AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
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
    'contact'
  ],
  openGraph: {
    title: 'Contact | AI Policy Consulting & Technology Governance',
    description: 'Contact Chloe Autio Strategies for AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
    url: 'https://chloeautio.com/contact',
    siteName: 'Chloe Autio Strategies',
    images: [
      {
        url: 'https://chloeautio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chloe Autio Strategies - AI Policy Consulting & Technology Governance'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | AI Policy Consulting & Technology Governance',
    description: 'Contact Chloe Autio Strategies for AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
    images: ['https://chloeautio.com/og-image.png'],
    creator: '@chloeautio'
  },
  alternates: {
    canonical: 'https://chloeautio.com/contact'
  }
};

import ContactPageClient from './ContactPageClient';

export default function ContactPage() {
  return <ContactPageClient />;
} 