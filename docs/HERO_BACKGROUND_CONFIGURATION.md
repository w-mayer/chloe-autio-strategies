# Hero Background Image Configuration

This document explains how to configure hero background images for different pages in the Autio Strategies website.

## Overview

Hero background images are now centrally configured in `src/data/content.ts` under the `pages` section. This allows for easy management and updates of hero images across all pages.

## Configuration Structure

### Content File Location
All hero configurations are stored in `src/data/content.ts` under the `pages` object:

```typescript
export const siteContent = {
  pages: {
    home: {
      hero: {
        title: 'AI Policy Consulting',
        subtitle: 'Professional technology governance...',
        buttons: {
          primary: { text: 'Our Services', href: '/services' },
          secondary: { text: 'Contact Us', href: '/contact' },
        },
        background: {
          image: '/images/stocks/hero-background.jpg',
          alt: 'Jefferson Memorial night reflection',
        },
      },
    },
    // ... other pages
  },
};
```

### Available Pages

The following pages have hero configurations:

- **home**: Homepage hero section
- **about**: About page hero section  
- **services**: Services page hero section
- **resources**: Resources page hero section
- **contact**: Contact page hero section

### Configuration Properties

Each page hero configuration includes:

- `title`: The main heading text
- `subtitle`: The subtitle/description text
- `background.image`: Path to the background image (relative to `public/`)
- `background.alt`: Alt text for accessibility
- `buttons` (home page only): Primary and secondary call-to-action buttons

## Usage

### Using the PageHero Component

The recommended way to add hero sections to pages is using the `PageHero` component:

```tsx
import { PageHero } from '@/components/sections/PageHero';

export default function MyPage() {
  return (
    <>
      <PageHero pageName="resources" />
      {/* Rest of page content */}
    </>
  );
}
```

### Customizing Hero Content

You can override the default title and subtitle:

```tsx
<PageHero 
  pageName="resources" 
  title="Custom Title"
  subtitle="Custom subtitle text"
/>
```

### Customizing Styling

You can customize the styling and overlay opacity:

```tsx
<PageHero 
  pageName="contact" 
  className="relative h-[50vh] flex items-center justify-center"
  overlayOpacity={50}
/>
```

### Using the Utility Function

You can also access hero configurations directly using the utility function:

```tsx
import { getPageHero } from '@/lib/utils';

const hero = getPageHero('resources');
console.log(hero.background.image); // '/images/stocks/services.jpg'
```

## Image Requirements

### File Location
All hero background images should be placed in the `public/images/stocks/` directory.

### Recommended Specifications
- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 or 2:1 (landscape)
- **Resolution**: Minimum 1920x1080px
- **File Size**: Optimized for web (under 500KB recommended)

### Current Images
- `hero-background.jpg`: Homepage hero
- `services.jpg`: Services and Resources pages
- `contact.jpg`: Contact page

## Updating Hero Images

To change a hero background image:

1. **Add the new image** to `public/images/stocks/`
2. **Update the configuration** in `src/data/content.ts`:

```typescript
pages: {
  resources: {
    hero: {
      background: {
        image: '/images/stocks/new-image.jpg', // Update this line
        alt: 'New image description',
      },
    },
  },
}
```

3. **Test the changes** by visiting the page

## Benefits

This centralized configuration system provides:

- **Easy Management**: All hero images in one place
- **Consistency**: Standardized hero sections across pages
- **Maintainability**: Simple updates without touching page components
- **Reusability**: The `PageHero` component can be used anywhere
- **Type Safety**: TypeScript ensures correct configuration

## Migration Notes

This system replaces the previous approach where hero images were hardcoded in individual page components. The old `hero` configuration in `content.ts` has been removed in favor of the new `pages` structure. 