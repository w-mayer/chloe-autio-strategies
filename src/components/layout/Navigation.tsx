'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { siteContent } from '@/data/content';

export function Navigation() {
  const pathname = usePathname();
  const { navigation } = siteContent;
  
  return (
    <ul className="flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 text-sm lg:text-base font-normal whitespace-nowrap">
      {navigation.items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={cn(
              'transition-colors text-gray-700 hover:text-primary nav-text px-2 lg:px-3 py-2 lg:py-1 rounded hover:bg-gray-100 touch-target',
              pathname === item.href && 'font-semibold text-primary underline underline-offset-4'
            )}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
} 