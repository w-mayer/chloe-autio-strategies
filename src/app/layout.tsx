import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chloe Autio Strategies",
  description: "Empowering businesses with strategic solutions and innovative approaches",
  keywords: ["strategy", "consulting", "business development", "market analysis"],
  authors: [{ name: "Chloe Autio" }],
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
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
