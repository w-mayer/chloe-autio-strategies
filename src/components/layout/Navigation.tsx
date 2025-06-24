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
    <ul className="flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={cn(
              'transition-colors hover:text-primary-700',
              useActivePath(item.href) && 'text-primary-700 font-semibold'
            )}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
} 