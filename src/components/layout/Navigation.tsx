'use client';
import React from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

function useActivePath(href: string) {
  if (typeof window === 'undefined') return false;
  return window.location.pathname === href;
}

export function Navigation() {
  return (
    <ul className="flex items-center gap-8 text-base font-normal">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={cn(
              'transition-colors text-gray hover:text-primary nav-text px-3 py-1 rounded',
              useActivePath(item.href) && 'font-semibold underline underline-offset-4'
            )}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
} 