'use client';
import React from 'react';
import { Menu } from 'lucide-react';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import Image from 'next/image';

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container flex h-16 items-center justify-between">
        <a className="flex items-center" href="/" aria-label="Home">
          <Image
            src="/images/logo/AutioStrategies_Logo_FullColor_Horz (1).png"
            alt="Autio Strategies Logo"
            width={138}
            height={40}
            className="block"
            priority={true}
          />
        </a>
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <Navigation />
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
} 