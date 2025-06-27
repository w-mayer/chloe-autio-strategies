import React from 'react';
import type { Metadata } from 'next';
import { siteMetadata } from '@/data/metadata';
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
  return (
    <>
      <PageHero 
        pageName="contact" 
        overlayOpacity={50}
        objectPosition="center top"
      />
      <ContactPageClient />
    </>
  );
} 