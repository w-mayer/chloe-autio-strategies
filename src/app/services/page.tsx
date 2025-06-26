import { services } from '@/data/services';
import React from 'react';
import type { Metadata } from 'next';
import ServicesGridClient from './ServicesGridClient';
import { siteMetadata } from '@/data/metadata';

export const metadata: Metadata = {
  title: siteMetadata.pages.services.title,
  description: siteMetadata.pages.services.description,
  keywords: siteMetadata.pages.services.keywords,
  openGraph: {
    title: siteMetadata.pages.services.title,
    description: siteMetadata.pages.services.description,
    url: siteMetadata.pages.services.url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'website',
  },
  alternates: {
    canonical: siteMetadata.pages.services.url,
  },
};

export default function ServicesPage() {
  return <ServicesGridClient services={services} />;
} 