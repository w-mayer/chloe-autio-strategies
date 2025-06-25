# Content Editing Guide

**For Non-Technical Users**

This guide helps you edit website content without needing technical knowledge. All text content is now centralized in simple data files that you can edit with any text editor.

---

## 📋 Content Centralization Checklist

### ✅ Completed Content Extraction

**Site Information (`src/data/content.ts` - `site` section):**
- [x] Company name: "Autio Strategies"
- [x] Tagline: "AI Policy Consulting & Technology Governance"
- [x] Description: "Professional technology governance and regulatory compliance advisory..."
- [x] Contact email: "info@chloeautio.com"
- [x] LinkedIn URL: "https://linkedin.com/in/chloeautio"
- [x] GitHub URL: "https://github.com/chloeautio/chloe-autio-strategies"
- [x] Website URL: "https://chloeautio.com"

**Navigation (`src/data/content.ts` - `navigation` section):**
- [x] Home link: "/"
- [x] About link: "/about"
- [x] Services link: "/services"
- [x] Resources link: "/resources"
- [x] Contact link: "/contact"

**Hero Section (`src/data/content.ts` - `hero` section):**
- [x] Main title: "AI Policy Consulting"
- [x] Subtitle: "Professional technology governance and regulatory compliance advisory..."
- [x] Primary button: "Our Services" → "/services"
- [x] Secondary button: "Contact Us" → "/contact"
- [x] Background image: "/images/stocks/hero-background.jpg"
- [x] Background alt text: "Jefferson Memorial night reflection"

**Services Section (`src/data/content.ts` - `services` section):**
- [x] Section title: "Our Services"
- [x] Learn more button text: "Learn More"

**Client Logos Section (`src/data/content.ts` - `clientLogos` section):**
- [x] Section title: "Trusted by Leading Organizations"
- [x] 6 client logo placeholders with colors and text colors

**Testimonials Section (`src/data/content.ts` - `testimonials` section):**
- [x] Section title: "What Our Clients Say"
- [x] 3 testimonial quotes with names and roles

**Value Proposition Section (`src/data/content.ts` - `valueProposition` section):**
- [x] Section title: "Why Choose Autio Strategies?"
- [x] 3 value proposition cards with titles and descriptions

**Contact CTA Section (`src/data/content.ts` - `contactCTA` section):**
- [x] Title: "Ready to Transform Your Organization?"
- [x] Description: "Let's discuss how our expertise..."
- [x] Primary button: "Schedule a Consultation" → "/contact"
- [x] Secondary button: "Learn More" → "/services"
- [x] Background image: "/images/stocks/cta-background.jpg"
- [x] Logo image: "/images/logo/AutioStrategies_Logo_AllWhite_Horz.png"

**About Page (`src/data/content.ts` - `about` section):**
- [x] Hero title: "Our Team"
- [x] Hero subtitle: "Meet the experts behind Autio Strategies..."
- [x] Chloe Autio bio, roles, expertise, and image
- [x] Samuel Wells bio, roles, expertise, and image
- [x] CTA title: "Partner with Our Team"
- [x] CTA description and button

**Footer (`src/data/content.ts` - `footer` section):**
- [x] Built by text: "Built by"
- [x] Source code text: "The source code is available on"
- [x] Privacy link: "Privacy" → "/privacy"
- [x] Terms link: "Terms" → "/terms"
- [x] Email link: "Email" → "mailto:info@chloeautio.com"
- [x] LinkedIn link: "LinkedIn" → "https://linkedin.com/in/chloeautio"
- [x] Logo image: "/images/logo/AutioStrategies_Logo_FullColor_JustMark.png"

**Header (`src/data/content.ts` - `header` section):**
- [x] Logo image: "/images/logo/AutioStrategies_Logo_FullColor_Horz (1).png"
- [x] Mobile menu open button text: "Open menu"

**Forms (`src/data/content.ts` - `forms` section):**
- [x] Contact form title, field labels, placeholders, error messages, and success messages
- [x] Newsletter form title, description, placeholder, button text, and messages
- [x] Consultation form title, description, field labels, placeholders, and messages

**Common UI Elements (`src/data/content.ts` - `ui` section):**
- [x] Button text: "Learn More", "Contact Us", "Get Started", "Schedule a Consultation", "Request a Consultation", "Read More"
- [x] Loading text: "Loading...", "Sending...", "Submitting..."
- [x] Error messages: "This field is required", "Please enter a valid email address", etc.
- [x] Aria labels: "Close menu", "Open menu", "Learn more about"

**SEO Metadata (`src/data/metadata.ts`):**
- [x] Home page title, description, and keywords
- [x] About page title, description, and keywords
- [x] Services page title, description, and keywords
- [x] Resources page title, description, and keywords
- [x] Contact page title, description, and keywords
- [x] Default metadata for all pages

### ✅ Components Refactored

**Layout Components:**
- [x] Header (`src/components/layout/header.tsx`)
- [x] Footer (`src/components/layout/footer.tsx`)
- [x] Navigation (`src/components/layout/Navigation.tsx`)
- [x] MobileMenu (`src/components/layout/MobileMenu.tsx`)

**Section Components:**
- [x] Hero (`src/components/sections/Hero.tsx`)
- [x] ServicesGrid (`src/components/sections/ServicesGrid.tsx`)
- [x] ValueProposition (`src/components/sections/ValueProposition.tsx`)
- [x] ContactCTA (`src/components/sections/ContactCTA.tsx`)
- [x] ClientLogos (`src/components/sections/ClientLogos.tsx`)
- [x] Testimonials (`src/components/sections/Testimonials.tsx`)
- [x] NewsletterSignup (`src/components/sections/NewsletterSignup.tsx`)

**Form Components:**
- [x] ContactForm (`src/components/forms/ContactForm.tsx`)
- [x] NewsletterForm (`src/components/forms/NewsletterForm.tsx`)
- [x] ConsultationForm (`src/components/forms/ConsultationForm.tsx`)

**Content Components:**
- [x] ArticleCard (`src/components/content/ArticleCard.tsx`)
- [x] PolicyBrief (`src/components/content/PolicyBrief.tsx`)
- [x] CaseStudyCard (`src/components/content/CaseStudyCard.tsx`)
- [x] ResourceCard (`src/components/content/ResourceCard.tsx`)

**Page Components:**
- [x] About page (`src/app/about/page.tsx`)

### ✅ Content Structure Verified

**No Hardcoded Text Remaining:**
- [x] All component text now references centralized content
- [x] All button text centralized
- [x] All form labels and messages centralized
- [x] All navigation items centralized
- [x] All aria-labels centralized
- [x] All image paths and alt text centralized

**Content Keys Are Descriptive:**
- [x] Keys use clear, non-technical language
- [x] Keys are organized logically by page/section
- [x] Keys follow consistent naming patterns

**Dynamic Content Properly Structured:**
- [x] Arrays for navigation items, testimonials, client logos
- [x] Objects for complex content like team member bios
- [x] Nested objects for forms with fields, buttons, messages

**Image Paths and Alt Text Included:**
- [x] All image paths reference `/public/images/` directory
- [x] All images have descriptive alt text
- [x] Logo images properly categorized

**Form Configurations Complete:**
- [x] All form field labels, placeholders, and error messages
- [x] All form button text and loading states
- [x] All form success and error messages

**Navigation and Button Links Preserved:**
- [x] All internal links use proper Next.js routing
- [x] All external links have proper attributes
- [x] All button hrefs maintained

---

## 🎯 Summary

**Total Content Items Centralized:** 150+ text elements
**Components Refactored:** 15+ components
**Files Created/Updated:** 3 data files, 1 documentation file
**Content Categories:** 12 major sections

All hardcoded text has been successfully extracted and centralized. The website now has a maintainable content system that allows non-technical users to edit all text content without touching code.

---

## 📝 How to Edit Content

### Quick Start

1. **Open the content file:** `src/data/content.ts`
2. **Find the section** you want to edit (use Ctrl+F or Cmd+F)
3. **Edit the text** between the quotes
4. **Save the file** and refresh the website

### Common Edits

**Change company name:**
```javascript
site: {
  name: 'Your New Company Name',
  // ... other fields
}
```

**Update hero section:**
```javascript
hero: {
  title: 'Your New Hero Title',
  subtitle: 'Your new subtitle text',
  // ... other fields
}
```

**Edit navigation:**
```javascript
navigation: {
  items: [
    { name: 'New Page Name', href: '/new-page' },
    // ... other items
  ]
}
```

**Update contact information:**
```javascript
site: {
  email: 'newemail@company.com',
  linkedin: 'https://linkedin.com/in/newprofile',
  // ... other fields
}
```

For more detailed instructions, see the sections below.

## Overview

All website content is now stored in centralized data files located in the `/src/data/` directory. This makes it easy for non-technical users to update text, images, and other content without touching code.

## File Structure

- `/src/data/content.ts` - Main content file with all text content
- `/src/data/metadata.ts` - SEO and meta information
- `/src/data/services.ts` - Service-specific content (already exists)
- `/src/data/insights.ts` - Blog posts and resources (already exists)

## How to Edit Content

### 1. Opening the Files

1. Navigate to the `/src/data/` folder in your project
2. Open the file you want to edit (e.g., `content.ts`)
3. Use any text editor (VS Code, Notepad++, etc.)

### 2. Basic Editing Rules

**DO:**
- ✅ Edit text between quotes: `'Your new text here'`
- ✅ Update URLs and links
- ✅ Change image paths
- ✅ Add or remove items from arrays
- ✅ Update contact information

**DON'T:**
- ❌ Change the structure (object keys, brackets, commas)
- ❌ Remove quotes around text
- ❌ Delete commas between items
- ❌ Change file names or locations
- ❌ Edit anything outside the `/src/data/` folder

### 3. Content Organization

The content is organized by page/section:

```javascript
export const siteContent = {
  // Global site information
  site: { ... },
  
  // Navigation menu
  navigation: { ... },
  
  // Homepage sections
  hero: { ... },
  services: { ... },
  valueProposition: { ... },
  contactCTA: { ... },
  
  // About page
  about: { ... },
  
  // Footer
  footer: { ... },
  
  // Forms
  forms: { ... },
};
```

## Common Editing Tasks

### Updating the Hero Section

Find the `hero` section in `content.ts`:

```javascript
hero: {
  title: 'AI Policy Consulting',
  subtitle: 'Professional technology governance and regulatory compliance advisory...',
  buttons: {
    primary: { text: 'Our Services', href: '/services' },
    secondary: { text: 'Contact Us', href: '/contact' },
  },
}
```

**To change the title:**
- Find `title: 'AI Policy Consulting'`
- Replace `'AI Policy Consulting'` with your new title
- Keep the quotes: `title: 'Your New Title'`

**To change button text:**
- Find `primary: { text: 'Our Services', href: '/services' }`
- Replace `'Our Services'` with your new button text
- Keep the `href: '/services'` part unchanged

### Updating Team Information

Find the `about.team` section:

```javascript
about: {
  team: {
    chloe: {
      name: 'Chloe Autio',
      title: 'Founder & CEO',
      description: 'Chloe Autio is a recognized expert...',
      // ... more fields
    },
    samuel: {
      name: 'Samuel Wells',
      title: 'Policy Manager',
      // ... more fields
    },
  },
}
```

**To update a team member's bio:**
- Find the `description` field for that person
- Replace the text between quotes
- You can use multiple lines for readability

### Updating Contact Information

Find the `site` section:

```javascript
site: {
  name: 'Autio Strategies',
  email: 'info@chloeautio.com',
  linkedin: 'https://linkedin.com/in/chloeautio',
  // ... more fields
}
```

**To change the email:**
- Find `email: 'info@chloeautio.com'`
- Replace with your new email: `email: 'newemail@example.com'`

### Updating Navigation

Find the `navigation` section:

```javascript
navigation: {
  items: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // ... more items
  ],
}
```

**To add a new menu item:**
- Add a new line after the last item
- Follow the same format: `{ name: 'New Page', href: '/new-page' },`
- Don't forget the comma after the previous item

**To change a menu item name:**
- Find the `name` field you want to change
- Replace the text between quotes

### Updating Form Labels

Find the `forms` section:

```javascript
forms: {
  contact: {
    fields: {
      name: { label: 'Name', placeholder: '', error: 'Name is required' },
      email: { label: 'Email', placeholder: '', error: 'Invalid email address' },
      // ... more fields
    },
  },
}
```

**To change a field label:**
- Find the `label` field you want to change
- Replace the text between quotes

**To change an error message:**
- Find the `error` field you want to change
- Replace the text between quotes

## Image Management

### Updating Image Paths

Images are referenced by their path in the `/public/images/` directory:

```javascript
background: {
  image: '/images/stocks/hero-background.jpg',
  alt: 'Jefferson Memorial night reflection',
}
```

**To change an image:**
1. Place your new image in the appropriate folder in `/public/images/`
2. Update the `image` path to match your new file
3. Update the `alt` text to describe the new image

**Image folder structure:**
- `/public/images/logo/` - Company logos
- `/public/images/headshot/` - Team photos
- `/public/images/stocks/` - Background and stock images
- `/public/images/partner_logos/` - Client/partner logos

## SEO and Metadata

### Updating Page Titles and Descriptions

Find the `metadata.ts` file and locate the page you want to update:

```javascript
pages: {
  home: {
    title: 'Autio Strategies | AI Policy Consulting & Technology Governance',
    description: 'Professional technology governance and regulatory compliance advisory...',
    keywords: ['AI policy consulting', 'technology governance', ...],
  },
}
```

**To change a page title:**
- Find the `title` field for that page
- Replace the text between quotes
- Keep the format: `'Page Name | Autio Strategies'`

**To change a page description:**
- Find the `description` field for that page
- Replace the text between quotes
- Keep it under 160 characters for best SEO

## Adding New Content

### Adding a New Service

1. Open `/src/data/services.ts`
2. Add a new service object following the existing format:

```javascript
{
  slug: 'new-service',
  title: 'New Service Name',
  overview: 'Description of the new service...',
  benefits: [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
  ],
  methodology: 'How we deliver this service...',
  caseStudies: [
    {
      title: 'Case Study Title',
      description: 'Case study description...',
    },
  ],
  related: ['service-slug-1', 'service-slug-2'],
}
```

### Adding a New Blog Post

1. Open `/src/data/insights.ts`
2. Add a new article object following the existing format:

```javascript
{
  slug: 'new-article-slug',
  title: 'New Article Title',
  summary: 'Brief summary of the article...',
  content: '<p>Article content in HTML format...</p>',
  date: '2024-01-15',
  author: authors[0], // Use existing author
  tags: ['Tag 1', 'Tag 2'],
  featured: false, // Set to true to feature on homepage
  related: [], // Array of related article slugs
}
```

## Troubleshooting

### Common Errors

**Syntax Error: Unexpected token**
- Check for missing commas between items
- Check for missing quotes around text
- Check for extra or missing brackets

**Content not updating on website**
- Make sure you saved the file
- Restart the development server
- Clear your browser cache

**Images not showing**
- Check that the image path is correct
- Make sure the image file exists in the specified folder
- Check that the image filename matches exactly (case-sensitive)

### Getting Help

If you encounter issues:
1. Check this guide first
2. Look at existing content for examples
3. Contact the development team for technical support

## Best Practices

1. **Backup before editing**: Make a copy of the file before making changes
2. **Test changes**: Preview your changes on the website before publishing
3. **Keep it concise**: Page titles should be under 60 characters
4. **Use descriptive alt text**: Always provide meaningful descriptions for images
5. **Maintain consistency**: Use consistent terminology across the site
6. **Check spelling**: Proofread all content before saving

## File Locations Summary

- **Main content**: `/src/data/content.ts`
- **SEO metadata**: `/src/data/metadata.ts`
- **Services**: `/src/data/services.ts`
- **Blog posts**: `/src/data/insights.ts`
- **Images**: `/public/images/`

Remember: Only edit files in the `/src/data/` and `/public/images/` folders. All other files contain code that should not be modified. 