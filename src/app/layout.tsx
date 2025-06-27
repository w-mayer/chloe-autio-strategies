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
    apple: '/images/logo/AutioStrategies_Logo_FullColor_JustMark.png',
  },
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
                email: 'info@chloeautio.com',
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
