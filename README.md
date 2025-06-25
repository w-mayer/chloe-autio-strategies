# Autio Strategies

A professional tech policy consulting firm website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **ESLint** for code quality
- **Responsive design** with mobile-first approach
- **Component-based architecture** with reusable UI components
- **Professional layout** with header and footer
- **SEO optimized** with metadata and structured data
- **Accessibility focused** with ARIA labels and keyboard navigation

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── authority-demo/    # Animation demo page
│   ├── contact/           # Contact page
│   ├── insights/          # Insights and blog pages
│   ├── resources/         # Resources and articles
│   ├── services/          # Services pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── content/           # Content display components
│   │   ├── ArticleCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── PolicyBrief.tsx
│   │   └── ResourceCard.tsx
│   ├── forms/             # Form components
│   │   ├── ConsultationForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   ├── layout/            # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Navigation.tsx
│   │   └── PageTransition.tsx
│   ├── sections/          # Page sections
│   │   ├── ClientLogos.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── Hero.tsx
│   │   ├── NewsletterSignup.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   └── ValueProposition.tsx
│   └── ui/                # Base UI components
│       ├── AuthorityHeading.tsx
│       ├── Badge.tsx
│       ├── button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       └── Textarea.tsx
├── data/                  # Static data and content
│   ├── insights.ts        # Articles, policy briefs, case studies
│   └── services.ts        # Services data
├── lib/                   # Utility functions and constants
│   ├── constants.ts       # Site constants and metadata
│   ├── hooks/             # Custom React hooks
│   │   └── useAuthorityFlow.ts
│   └── utils.ts           # Common utilities (clsx, etc.)
└── types/                 # TypeScript type definitions
    ├── authority-flow.ts  # Authority flow animation types
    └── index.ts           # Common interfaces and types
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chloe-autio-strategies
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

This project currently doesn't require any environment variables as it's a static site. If you need to add API integrations or external services, create a `.env.local` file in the root directory:

```bash
# Example environment variables (not currently required)
# NEXT_PUBLIC_API_URL=your_api_url
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom component library
- **Animations**: Framer Motion 12.19
- **Forms**: React Hook Form 7.58 with Zod validation
- **Icons**: Lucide React 0.522, React Icons 5.5
- **Code Quality**: ESLint 8.57
- **Package Manager**: npm

## Dependencies

### Production Dependencies
- `next`: ^15.3.4 - React framework
- `react`: ^19.1.0 - React library
- `react-dom`: ^19.1.0 - React DOM
- `typescript`: ^5 - TypeScript compiler
- `tailwindcss`: ^3.4.1 - CSS framework
- `framer-motion`: ^12.19.1 - Animation library
- `react-hook-form`: ^7.58.1 - Form handling
- `zod`: ^3.25.67 - Schema validation
- `@hookform/resolvers`: ^5.1.1 - Form validation resolvers
- `clsx`: ^2.1.1 - Conditional CSS classes
- `tailwind-merge`: ^3.3.1 - Tailwind class merging
- `tailwindcss-animate`: ^1.0.7 - Tailwind animations
- `@heroicons/react`: ^2.2.0 - Heroicons
- `lucide-react`: ^0.522.0 - Lucide icons
- `react-icons`: ^5.5.0 - React icons
- `@fontsource/cormorant`: ^5.2.6 - Cormorant font
- `@fontsource/dm-sans`: ^5.2.6 - DM Sans font
- `@tailwindcss/forms`: ^0.5.10 - Tailwind form styles
- `@tailwindcss/typography`: ^0.5.16 - Tailwind typography

### Development Dependencies
- `@types/node`: ^20 - Node.js types
- `@types/react`: ^18 - React types
- `@types/react-dom`: ^18 - React DOM types
- `eslint`: ^8 - Linting
- `eslint-config-next`: 14.2.30 - Next.js ESLint config
- `eslint-plugin-jsx-a11y`: ^6.10.2 - Accessibility linting
- `postcss`: ^8 - CSS processing
- `tailwindcss`: ^3.4.1 - CSS framework

## Design System

The project uses a consistent design system with:

- **Colors**: Custom color palette with primary green (#6F9C3B), grays, and accent colors
- **Typography**: Inter font family with custom font weights
- **Spacing**: Consistent spacing scale (0-128)
- **Components**: Reusable UI components with variants
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant with proper contrast ratios

### Color Palette
- Primary: #6F9C3B (Green)
- Gray: #434344
- Payne's Gray: #455D6A
- Eggshell: #E8E9D7
- Vanilla: #E1DBA7
- Ash Gray: #AAC1BF
- Pale Dogwood: #E5C5BB

## Animation System

The project includes sophisticated animation systems:

### Authority Flow Animations
- Text reveal animations with staggered timing
- Parallax scrolling effects
- Progress indicators
- Background highlights
- See `AUTHORITY_FLOW_ANIMATIONS.md` for detailed documentation

### Service Card Animations
- Entrance animations with staggered delays
- Hover effects with scale and shadow
- Ripple effects on click
- See `SERVICE_CARD_ANIMATIONS.md` for detailed documentation

## Content Management

Content is managed through static data files:

- `src/data/services.ts` - Service offerings and details
- `src/data/insights.ts` - Articles, policy briefs, case studies, and resources

## SEO and Performance

- **Metadata**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD schema markup
- **Open Graph**: Social media optimization
- **Performance**: Optimized images and fonts
- **Accessibility**: ARIA labels and keyboard navigation

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Follow the existing code style and conventions
2. Use TypeScript for all new code
3. Write meaningful commit messages
4. Test your changes thoroughly
5. Ensure accessibility compliance
6. Update documentation for new features

## Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Deploy automatically on push to main branch

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

This project is proprietary to Autio Strategies.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [Framer Motion Documentation](https://www.framer.com/motion/) - learn about animations.
- [React Hook Form Documentation](https://react-hook-form.com/) - learn about form handling.

## Support

For support or questions about this project, please contact the development team.
