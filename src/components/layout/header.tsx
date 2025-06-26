'use client';
import React from 'react';
import { Menu } from 'lucide-react';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import Image from 'next/image';
import { siteContent } from '@/data/content';

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { header } = siteContent;

  // Handle scroll-based transparency
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 navbar-enhanced ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm border-gray-200'
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <a className="flex items-center flex-shrink-0" href="/" aria-label="Home">
          <Image
            src={header.logo.src}
            alt={header.logo.alt}
            width={138}
            height={40}
            className="block"
            priority={true}
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex flex-1 items-center justify-center">
          <Navigation />
        </nav>
        
        {/* Large Tablet Navigation - Horizontal Scrollable */}
        <nav className="hidden lg:flex xl:hidden flex-1 items-center justify-center min-w-0">
          <div className="flex items-center gap-4 px-4 overflow-x-auto scrollbar-hide scroll-smooth">
            <Navigation />
          </div>
        </nav>
        
        {/* Medium Tablet Navigation - Horizontal Scrollable */}
        <nav className="hidden md:flex lg:hidden flex-1 items-center justify-center min-w-0">
          <div className="flex items-center gap-3 px-2 overflow-x-auto scrollbar-hide scroll-smooth">
            <Navigation />
          </div>
        </nav>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 hover:bg-gray-100 transition-colors"
            aria-label={header.mobileMenu.openButton.ariaLabel}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
} 