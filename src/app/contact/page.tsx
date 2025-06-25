import type { Metadata } from 'next';
import AuthorityHeading from '@/components/ui/AuthorityHeading';

export const metadata: Metadata = {
  title: 'Contact | AI Policy Consulting & Technology Governance',
  description: 'Contact Autio Strategies for AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
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
    description: 'Contact Autio Strategies for AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
    url: 'https://chloeautio.com/contact',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | AI Policy Consulting & Technology Governance',
    description: 'Contact Autio Strategies for AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
    images: ['https://chloeautio.com/og-image.png'],
    creator: '@autiostrategies'
  },
  alternates: {
    canonical: 'https://chloeautio.com/contact'
  }
};

import ContactPageClient from './ContactPageClient';

export default function ContactPage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center w-full h-[40vh] min-h-[240px] mb-0"
        style={{
          backgroundImage: `url('/images/stocks/contact.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-5xl font-bold mb-4 text-eggshell drop-shadow-lg force-eggshell"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            Contact Us
          </AuthorityHeading>
        </div>
      </section>
      <ContactPageClient />
    </>
  );
} 