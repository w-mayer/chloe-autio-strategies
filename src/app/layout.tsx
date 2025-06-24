import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteMeta } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chloe Autio Strategies | AI Policy Consulting & Technology Governance",
  description: "Professional AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.",
  keywords: [
    "AI policy consulting",
    "technology governance",
    "regulatory compliance",
    "government consulting",
    "enterprise policy advisory",
    "AI governance",
    "tech policy",
    "compliance consulting",
    "public sector advisory",
    "Chloe Autio"
  ],
  authors: [{ name: "Chloe Autio" }],
  openGraph: {
    title: "Chloe Autio Strategies | AI Policy Consulting & Technology Governance",
    description: "Professional AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.",
    url: siteMeta.url,
    siteName: "Chloe Autio Strategies",
    images: [
      {
        url: `${siteMeta.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Chloe Autio Strategies - AI Policy Consulting & Technology Governance"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chloe Autio Strategies | AI Policy Consulting & Technology Governance",
    description: "Professional AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.",
    images: [`${siteMeta.url}/og-image.png`],
    creator: "@chloeautio"
  },
  metadataBase: new URL(siteMeta.url),
  alternates: {
    canonical: siteMeta.url
  }
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
              name: 'Chloe Autio Strategies',
              url: siteMeta.url,
              logo: `${siteMeta.url}/og-image.png`,
              description: 'Professional AI policy consulting, technology governance, and regulatory compliance advisory for government and enterprise organizations.',
              sameAs: [
                'https://linkedin.com/in/chloeautio'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                email: 'info@chloeautio.com',
                contactType: 'customer support',
                url: `${siteMeta.url}/contact`
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
