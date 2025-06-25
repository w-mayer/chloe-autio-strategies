'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { siteContent } from '@/data/content';

export function Navigation() {
  const pathname = usePathname();
  const { navigation } = siteContent;
  
  return (
    <ul className="flex items-center gap-8 text-base font-normal">
      {navigation.items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={cn(
              'transition-colors text-gray hover:text-primary nav-text px-3 py-1 rounded',
              pathname === item.href && 'font-semibold underline underline-offset-4'
            )}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
} 