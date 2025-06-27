# Cursor Rules: Content and Metadata Management

This document establishes coding rules to ensure that all content and metadata are properly sourced from data files rather than being hardcoded in page components. This maintains consistency, enables easy content updates, and supports internationalization.

ALWAYS NOTE: Business name is "Autio Strategies" Website is autiostrategies.com

## Core Principle

**NEVER hardcode content or metadata in page components. All text, titles, descriptions, and metadata must come from data files in the `src/data/` directory.**

## Data File Structure

### Required Data Files

All content and metadata should be organized in the following data files:

```
src/data/
├── content.ts          # UI text, button labels, form text
├── metadata.ts         # Page metadata, SEO information
├── resources.ts        # Articles, policy briefs, case studies
└── services.ts         # Service offerings and descriptions

src/lib/
└── constants.ts        # Site-wide constants and configuration
```

## Content Management Rules

### 1. Page Content

**❌ FORBIDDEN:**
```tsx
// Never do this
export default function AboutPage() {
  return (
    <div>
      <h1>About Chloe Autio Strategies</h1>
      <p>We are a leading AI policy consulting firm...</p>
    </div>
  );
}
```

**✅ REQUIRED:**
```tsx
// Always do this
import { siteContent } from '@/data/content';

export default function AboutPage() {
  const { about } = siteContent;
  
  return (
    <div>
      <h1>{about.title}</h1>
      <p>{about.description}</p>
    </div>
  );
}
```

### 2. Page Metadata

**❌ FORBIDDEN:**
```tsx
// Never do this
export const metadata: Metadata = {
  title: 'About Us | Chloe Autio Strategies',
  description: 'Learn about our AI policy consulting services...',
  keywords: ['AI policy', 'consulting', 'governance'],
};
```

**✅ REQUIRED:**
```tsx
// Always do this
import { siteMetadata } from '@/data/metadata';

export const metadata: Metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  keywords: siteMetadata.about.keywords,
  openGraph: siteMetadata.about.openGraph,
  twitter: siteMetadata.about.twitter,
};
```

### 3. Button Labels and UI Text

**❌ FORBIDDEN:**
```tsx
// Never do this
<Button>Contact Us</Button>
<p>Ready to get started?</p>
```

**✅ REQUIRED:**
```tsx
// Always do this
import { siteContent } from '@/data/content';

const { ui, cta } = siteContent;

<Button>{ui.buttons.contact}</Button>
<p>{cta.readyToStart}</p>
```

### 4. Form Labels and Placeholders

**❌ FORBIDDEN:**
```tsx
// Never do this
<Input placeholder="Enter your email" />
<label>Full Name</label>
```

**✅ REQUIRED:**
```tsx
// Always do this
import { siteContent } from '@/data/content';

const { forms } = siteContent;

<Input placeholder={forms.contact.emailPlaceholder} />
<label>{forms.contact.nameLabel}</label>
```

## Data File Organization

### content.ts Structure

```typescript
export const siteContent = {
  ui: {
    buttons: {
      contact: 'Contact Us',
      readMore: 'Read More',
      exploreServices: 'Explore Our Services',
    },
    navigation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      resources: 'Resources',
      contact: 'Contact',
    },
  },
  pages: {
    home: {
      hero: {
        title: 'AI Policy Consulting & Technology Governance',
        subtitle: 'Expert guidance for government and enterprise leaders',
      },
      cta: {
        title: 'Ready to get started?',
        description: 'Let\'s discuss your AI governance needs',
      },
    },
    about: {
      title: 'About Chloe Autio Strategies',
      description: 'We are a leading AI policy consulting firm...',
    },
  },
  forms: {
    contact: {
      title: 'Get in Touch',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your project...',
      submitButton: 'Send Message',
    },
  },
};
```

### metadata.ts Structure

```typescript
export const siteMetadata = {
  home: {
    title: 'AI Policy Consulting & Technology Governance | Autio Strategies',
    description: 'Expert AI policy consulting and technology governance for government and enterprise leaders.',
    keywords: ['AI policy consulting', 'technology governance', 'regulatory compliance'],
    openGraph: {
      title: 'AI Policy Consulting & Technology Governance',
      description: 'Expert guidance for government and enterprise leaders',
      url: 'https://autiostrategies.com',
      siteName: 'Autio Strategies',
      images: [
        {
          url: 'https://autiostrategies.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Autio Strategies - AI Policy Consulting',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Policy Consulting & Technology Governance',
      description: 'Expert guidance for government and enterprise leaders',
      images: ['https://autiostrategies.com/og-image.png'],
      creator: '@chloeautio',
    },
  },
  about: {
    title: 'About Us | Autio Strategies',
    description: 'Learn about our expertise in AI policy consulting and technology governance.',
    keywords: ['about us', 'AI policy', 'consulting', 'governance'],
    // ... similar structure for other pages
  },
};
```

## Implementation Guidelines

### 1. Import Data at the Top

Always import data files at the top of your component:

```tsx
import { siteContent } from '@/data/content';
import { siteMetadata } from '@/data/metadata';
import { articles, policyBriefs } from '@/data/resources';
```

### 2. Destructure for Clarity

Use destructuring to make the code more readable:

```tsx
const { ui, pages, forms } = siteContent;
const { home, about } = pages;
const { buttons } = ui;
```

### 3. Use TypeScript for Type Safety

Define proper types for your data structures:

```typescript
// src/types/content.ts
export interface SiteContent {
  ui: {
    buttons: {
      contact: string;
      readMore: string;
      exploreServices: string;
    };
    navigation: {
      home: string;
      about: string;
      services: string;
    };
  };
  pages: {
    home: {
      hero: {
        title: string;
        subtitle: string;
      };
    };
  };
}
```

### 4. Handle Dynamic Content

For dynamic content (like blog posts), use the data files as the source of truth:

```tsx
// ✅ Good: Content comes from data
const article = articles.find(a => a.slug === slug);
if (!article) return notFound();

return (
  <div>
    <h1>{article.title}</h1>
    <p>{article.summary}</p>
  </div>
);
```

## Validation Checklist

Before committing any changes, verify:

- [ ] No hardcoded text in page components
- [ ] All metadata comes from `src/data/metadata.ts`
- [ ] All UI text comes from `src/data/content.ts`
- [ ] All dynamic content comes from appropriate data files
- [ ] TypeScript types are properly defined
- [ ] Data files are properly structured and organized

## Common Anti-Patterns to Avoid

### 1. Inline Text
```tsx
// ❌ Don't do this
<h1>Welcome to our site</h1>
<p>This is some hardcoded content</p>
```

### 2. Hardcoded Metadata
```tsx
// ❌ Don't do this
export const metadata = {
  title: 'Hardcoded Title',
  description: 'Hardcoded description',
};
```

### 3. Mixed Content Sources
```tsx
// ❌ Don't do this
const { ui } = siteContent;
<h1>Hardcoded Title</h1>  // Some from data, some hardcoded
<Button>{ui.buttons.contact}</Button>
```

### 4. String Concatenation
```tsx
// ❌ Don't do this
const title = 'About ' + companyName + ' | Our Services';
```

## Benefits of Following These Rules

1. **Consistency**: All content follows the same structure and patterns
2. **Maintainability**: Content updates only require changes to data files
3. **Internationalization**: Easy to add multiple languages
4. **SEO**: Centralized metadata management
5. **Type Safety**: TypeScript ensures content structure consistency
6. **Testing**: Easier to test content separately from components
7. **Collaboration**: Content editors can work independently from developers

## Migration Guide

If you find hardcoded content in existing components:

1. **Identify the content** that needs to be moved to data files
2. **Add the content** to the appropriate data file (`content.ts`, `metadata.ts`, etc.)
3. **Update the component** to import and use the data
4. **Test thoroughly** to ensure the content displays correctly
5. **Update types** if necessary to maintain type safety

## Enforcement

- **Code Reviews**: Always check for hardcoded content during reviews
- **Linting**: Consider adding ESLint rules to detect hardcoded strings
- **Documentation**: Keep this document updated with new patterns and examples
- **Team Training**: Ensure all team members understand these rules

Remember: **Content belongs in data files, not in components.**
