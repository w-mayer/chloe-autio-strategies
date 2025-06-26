import React from 'react';
import type { Metadata } from 'next';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import { siteMetadata } from '@/data/metadata';
import { siteContent } from '@/data/content';
import ContactPageClient from './ContactPageClient';
import { PageHero } from '@/components/sections/PageHero';

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

export default function ContactPage() {
  const { ui, pages } = siteContent;
  
  return (
    <>
      <PageHero 
        pageName="contact" 
        className="relative h-[50vh] flex items-center justify-center"
        overlayOpacity={50}
      />
      <ContactPageClient />
    </>
  );
} 