import type { Metadata } from 'next';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import { siteMetadata } from '@/data/metadata';
import { siteContent } from '@/data/content';

export const metadata: Metadata = {
  title: siteMetadata.pages.contact.title,
  description: siteMetadata.pages.contact.description,
  keywords: siteMetadata.pages.contact.keywords,
  openGraph: {
    title: siteMetadata.pages.contact.title,
    description: siteMetadata.pages.contact.description,
    url: siteMetadata.pages.contact.url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'website' as const,
  },
  alternates: {
    canonical: siteMetadata.pages.contact.url,
  },
};

import ContactPageClient from './ContactPageClient';

export default function ContactPage() {
  const { ui } = siteContent;
  
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/stocks/contact.jpg"
            alt="Contact background"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-6xl font-bold mb-6 heading text-eggshell"
          >
            {ui.pages.contact.title}
          </AuthorityHeading>
        </div>
      </section>
      <ContactPageClient />
    </>
  );
} 