import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: siteMetadata.default.title,
  description: siteMetadata.default.description,
  keywords: siteMetadata.default.keywords,
  authors: [{ name: siteMetadata.default.siteName }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/images/logo/AutioStrategies_Logo_FullColor_JustMark.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: siteMetadata.default.title,
    description: siteMetadata.default.description,
    url: siteMetadata.default.url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'website' as const,
  },
  metadataBase: new URL(siteMetadata.default.url),
  alternates: {
    canonical: siteMetadata.default.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Comprehensive favicon declarations for maximum compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/AutioStrategies_Logo_FullColor_JustMark.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Autio Strategies',
              url: siteMetadata.default.url,
              logo: `${siteMetadata.default.url}/images/logo/AutioStrategies_Logo_FullColor_Horz.png`,
              description: 'Professional AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
              sameAs: [
                // LinkedIn removed
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                email: 'chloe@autiostrategies.com',
                contactType: 'customer support',
                url: `${siteMetadata.default.url}/contact`
              }]
            })
          }}
        />
      </head>
      <body>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <PageTransition>
            <main id="main-content" role="main" tabIndex={-1} className="flex-1 focus:outline-none">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
