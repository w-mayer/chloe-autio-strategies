# Component Documentation

This document provides comprehensive documentation for all components in the Autio Strategies website.

## Table of Contents

- [UI Components](#ui-components)
- [Layout Components](#layout-components)
- [Content Components](#content-components)
- [Form Components](#form-components)
- [Section Components](#section-components)

## UI Components

### AuthorityHeading

A sophisticated heading component with animated text reveals, parallax effects, and visual accents.

```tsx
import AuthorityHeading from '@/components/ui/AuthorityHeading';

// Basic usage
<AuthorityHeading size="h1" className="text-4xl">
  Strategic Leadership Solutions
</AuthorityHeading>

// Advanced configuration
<AuthorityHeading 
  size="h2"
  className="text-3xl mb-8"
  enableParallax={true}
  enableProgress={true}
  enableHighlight={true}
>
  Transform Your Business
</AuthorityHeading>
```

**Props:**
- `children: string` - The heading text
- `className?: string` - Additional CSS classes
- `size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` - HTML heading tag (default: 'h1')
- `enableParallax?: boolean` - Enable parallax effect (default: true)
- `enableProgress?: boolean` - Enable progress indicator (default: false)
- `enableHighlight?: boolean` - Enable background highlight (default: true)

### Button

A flexible button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui/button';

// Primary button
<Button variant="default" size="default">
  Get Started
</Button>

// Secondary button
<Button variant="outline" size="lg">
  Learn More
</Button>

// Ghost button
<Button variant="ghost" size="sm">
  Cancel
</Button>
```

**Props:**
- `variant?: 'default' | 'outline' | 'ghost' | 'link'` - Button style variant
- `size?: 'sm' | 'default' | 'lg'` - Button size
- `disabled?: boolean` - Disable the button
- `onClick?: () => void` - Click handler
- All standard button HTML attributes

### Card

A versatile card component with hover effects and customizable content.

```tsx
import { Card } from '@/components/ui/Card';

// Basic card
<Card className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Card with disabled hover
<Card hoverable={false} className="p-4">
  <p>Static card content</p>
</Card>
```

**Props:**
- `hoverable?: boolean` - Enable hover effects (default: true)
- `className?: string` - Additional CSS classes
- All standard div HTML attributes

### Badge

A badge component for displaying status, tags, or labels.

```tsx
import { Badge } from '@/components/ui/Badge';

// Default badge
<Badge>New</Badge>

// Secondary badge
<Badge variant="secondary">Featured</Badge>

// Destructive badge
<Badge variant="destructive">Error</Badge>
```

**Props:**
- `variant?: 'default' | 'secondary' | 'destructive'` - Badge style variant
- `className?: string` - Additional CSS classes
- All standard span HTML attributes

### Input

A styled input component with consistent design.

```tsx
import { Input } from '@/components/ui/Input';

// Basic input
<Input 
  type="email" 
  placeholder="Enter your email"
  className="w-full"
/>

// Input with label
<div>
  <label htmlFor="email">Email</label>
  <Input 
    id="email"
    type="email" 
    placeholder="Enter your email"
  />
</div>
```

**Props:**
- All standard input HTML attributes
- `className?: string` - Additional CSS classes

### Textarea

A styled textarea component for multi-line text input.

```tsx
import { Textarea } from '@/components/ui/Textarea';

// Basic textarea
<Textarea 
  placeholder="Enter your message"
  rows={4}
  className="w-full"
/>

// Textarea with label
<div>
  <label htmlFor="message">Message</label>
  <Textarea 
    id="message"
    placeholder="Enter your message"
    rows={6}
  />
</div>
```

**Props:**
- All standard textarea HTML attributes
- `className?: string` - Additional CSS classes

### Modal

A modal component for overlays and dialogs.

```tsx
import { Modal } from '@/components/ui/Modal';

// Basic modal
<Modal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here</p>
</Modal>
```

**Props:**
- `isOpen: boolean` - Whether the modal is visible
- `onClose: () => void` - Function to close the modal
- `title?: string` - Modal title
- `children: React.ReactNode` - Modal content
- `className?: string` - Additional CSS classes

## Layout Components

### Header

The main site header with navigation and branding.

```tsx
import { Header } from '@/components/layout/header';

// Used in layout.tsx
<Header />
```

**Features:**
- Responsive navigation menu
- Mobile menu with hamburger button
- Logo and branding
- Contact CTA button

### Footer

The main site footer with links and company information.

```tsx
import { Footer } from '@/components/layout/footer';

// Used in layout.tsx
<Footer />
```

**Features:**
- Company information
- Navigation links
- Social media links
- Copyright notice

### Navigation

The main navigation component used in the header.

```tsx
import { Navigation } from '@/components/layout/Navigation';

// Basic usage
<Navigation items={navItems} />

// With custom styling
<Navigation 
  items={navItems} 
  className="hidden md:flex"
/>
```

**Props:**
- `items: NavItem[]` - Navigation items array
- `className?: string` - Additional CSS classes

### MobileMenu

A mobile-friendly navigation menu with slide-out animation.

```tsx
import { MobileMenu } from '@/components/layout/MobileMenu';

// Basic usage
<MobileMenu 
  isOpen={isMobileMenuOpen}
  onClose={() => setIsMobileMenuOpen(false)}
  items={navItems}
/>
```

**Props:**
- `isOpen: boolean` - Whether the menu is open
- `onClose: () => void` - Function to close the menu
- `items: NavItem[]` - Navigation items array

### PageTransition

A component that provides smooth page transitions.

```tsx
import { PageTransition } from '@/components/layout/PageTransition';

// Wrap main content
<PageTransition>
  <main>{children}</main>
</PageTransition>
```

**Props:**
- `children: React.ReactNode` - Content to animate

## Content Components

### ArticleCard

A card component for displaying article previews.

```tsx
import { ArticleCard } from '@/components/content/ArticleCard';

// Basic usage
<ArticleCard article={article} />

// Loading state
<ArticleCard isLoading={true} />
```

**Props:**
- `article?: Article` - Article data object
- `isLoading?: boolean` - Show loading skeleton

**Article Interface:**
```tsx
interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: Author;
  tags: string[];
  featured?: boolean;
  related: string[];
  externalUrl?: string;
}
```

### PolicyBrief

A card component for displaying policy brief previews.

```tsx
import { PolicyBrief } from '@/components/content/PolicyBrief';

// Basic usage
<PolicyBrief brief={policyBrief} />

// Loading state
<PolicyBrief isLoading={true} />
```

**Props:**
- `brief?: PolicyBriefType` - Policy brief data object
- `isLoading?: boolean` - Show loading skeleton

### CaseStudyCard

A card component for displaying case study previews.

```tsx
import { CaseStudyCard } from '@/components/content/CaseStudyCard';

// Basic usage
<CaseStudyCard caseStudy={caseStudy} />

// Loading state
<CaseStudyCard isLoading={true} />
```

**Props:**
- `caseStudy?: CaseStudy` - Case study data object
- `isLoading?: boolean` - Show loading skeleton

### ResourceCard

A card component for displaying resource previews.

```tsx
import { ResourceCard } from '@/components/content/ResourceCard';

// Basic usage
<ResourceCard resource={resource} />

// Loading state
<ResourceCard isLoading={true} />
```

**Props:**
- `resource?: Resource` - Resource data object
- `isLoading?: boolean` - Show loading skeleton

## Form Components

### ContactForm

A contact form component with validation and submission handling.

```tsx
import { ContactForm } from '@/components/forms/ContactForm';

// Basic usage
<ContactForm />

// With custom styling
<ContactForm className="max-w-2xl mx-auto" />
```

**Features:**
- Form validation with Zod
- Email, name, and message fields
- Submit button with loading state
- Error handling and success messages

### ConsultationForm

A consultation request form component.

```tsx
import { ConsultationForm } from '@/components/forms/ConsultationForm';

// Basic usage
<ConsultationForm />

// With custom styling
<ConsultationForm className="bg-white p-6 rounded-lg" />
```

**Features:**
- Company information fields
- Service selection
- Budget range selection
- Timeline preferences
- Form validation

### NewsletterForm

A newsletter signup form component.

```tsx
import { NewsletterForm } from '@/components/forms/NewsletterForm';

// Basic usage
<NewsletterForm />

// With custom styling
<NewsletterForm className="bg-primary-50 p-4 rounded" />
```

**Features:**
- Email validation
- Privacy policy checkbox
- Submit button with loading state
- Success/error messages

## Section Components

### Hero

The main hero section component for landing pages.

```tsx
import { Hero } from '@/components/sections/Hero';

// Basic usage
<Hero 
  title="Strategic AI Policy Solutions"
  subtitle="Expert guidance for government and enterprise leaders"
  ctaText="Get Started"
  ctaHref="/contact"
/>
```

**Props:**
- `title: string` - Main headline
- `subtitle?: string` - Subtitle text
- `ctaText?: string` - Call-to-action button text
- `ctaHref?: string` - Call-to-action button link
- `backgroundImage?: string` - Background image URL

### ServicesGrid

A grid component for displaying service offerings.

```tsx
import { ServicesGrid } from '@/components/sections/ServicesGrid';

// Basic usage
<ServicesGrid services={services} />

// With custom styling
<ServicesGrid 
  services={services}
  className="py-16 bg-gray-50"
/>
```

**Props:**
- `services: Service[]` - Array of service objects
- `className?: string` - Additional CSS classes

### Testimonials

A testimonials section component.

```tsx
import { Testimonials } from '@/components/sections/Testimonials';

// Basic usage
<Testimonials />

// With custom styling
<Testimonials className="bg-primary-50 py-16" />
```

**Features:**
- Animated testimonial cards
- Client logos
- Staggered entrance animations
- Responsive design

### ValueProposition

A value proposition section component.

```tsx
import { ValueProposition } from '@/components/sections/ValueProposition';

// Basic usage
<ValueProposition />

// With custom styling
<ValueProposition className="py-20" />
```

**Features:**
- Three-column layout
- Icon-based value points
- Animated entrance effects
- Responsive design

### ContactCTA

A call-to-action section for contact conversion.

```tsx
import { ContactCTA } from '@/components/sections/ContactCTA';

// Basic usage
<ContactCTA />

// With custom styling
<ContactCTA className="bg-primary text-white" />
```

**Features:**
- Compelling copy
- Contact button
- Background styling
- Responsive design

### NewsletterSignup

A newsletter signup section component.

```tsx
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

// Basic usage
<NewsletterSignup />

// With custom styling
<NewsletterSignup className="bg-gray-100 p-8 rounded-lg" />
```

**Features:**
- Newsletter form integration
- Compelling copy
- Privacy policy link
- Success/error handling

### ClientLogos

A component for displaying client logos.

```tsx
import { ClientLogos } from '@/components/sections/ClientLogos';

// Basic usage
<ClientLogos />

// With custom styling
<ClientLogos className="py-12 border-t border-gray-200" />
```

**Features:**
- Grid layout for logos
- Hover effects
- Responsive design
- Accessibility labels

## Custom Hooks

### useAuthorityFlow

A custom hook for managing authority flow animations.

```tsx
import { useAuthorityFlow } from '@/lib/hooks/useAuthorityFlow';

function CustomHeading({ children }: { children: string }) {
  const {
    ref,
    isVisible,
    progressWidth,
    parallaxOffset,
    underlineComplete,
    triggerAnimation,
    resetAnimation
  } = useAuthorityFlow({
    enableParallax: true,
    enableProgress: true,
    enableHighlight: true,
    parallaxSpeed: 0.3,
    progressThreshold: 0.3
  });

  return (
    <div ref={ref} className="authority-heading">
      {/* Component implementation */}
    </div>
  );
}
```

**Options:**
- `enableParallax?: boolean` - Enable parallax scrolling
- `enableProgress?: boolean` - Enable progress tracking
- `enableHighlight?: boolean` - Enable background highlight
- `enableColorShift?: boolean` - Enable color shift on scroll
- `parallaxSpeed?: number` - Parallax movement speed
- `progressThreshold?: number` - Intersection observer threshold

## Type Definitions

### Common Types

```tsx
// Base component props
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation item
interface NavItem {
  label: string;
  href: string;
}

// Author information
interface Author {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

// Service information
interface Service {
  slug: string;
  title: string;
  overview: string;
  benefits: string[];
  methodology: string;
  caseStudies: { title: string; description: string }[];
  related: string[];
}
```

## Best Practices

### Component Usage

1. **Always use TypeScript** - All components are fully typed
2. **Follow naming conventions** - Use PascalCase for components, camelCase for props
3. **Use semantic HTML** - Choose appropriate HTML elements
4. **Include accessibility** - Add ARIA labels and keyboard navigation
5. **Handle loading states** - Provide loading skeletons where appropriate

### Styling Guidelines

1. **Use Tailwind classes** - Leverage the design system
2. **Follow responsive design** - Mobile-first approach
3. **Maintain consistency** - Use established color and spacing patterns
4. **Consider animations** - Use Framer Motion for complex animations
5. **Optimize performance** - Use CSS transforms and opacity for animations

### Form Handling

1. **Use React Hook Form** - For form state management
2. **Validate with Zod** - For type-safe validation
3. **Handle errors gracefully** - Show user-friendly error messages
4. **Provide feedback** - Loading states and success messages
5. **Accessibility** - Proper labels and error associations

## Troubleshooting

### Common Issues

1. **Animations not working** - Check if `prefers-reduced-motion` is enabled
2. **Type errors** - Ensure all required props are provided
3. **Styling conflicts** - Check for conflicting CSS classes
4. **Form validation** - Verify Zod schema matches form fields
5. **Performance issues** - Use React.memo for expensive components

### Debug Mode

Add debug classes to see component boundaries:

```css
.debug {
  outline: 2px solid red;
}
```

## Contributing

When adding new components:

1. **Follow existing patterns** - Match the established structure
2. **Add TypeScript types** - Define proper interfaces
3. **Include examples** - Update this documentation
4. **Test thoroughly** - Across different devices and browsers
5. **Consider accessibility** - Ensure WCAG compliance 