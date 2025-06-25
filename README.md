# Autio Strategies

A professional AI policy consulting, technology governance, and regulatory compliance advisory website built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Overview

Autio Strategies provides expert guidance for government and enterprise leaders navigating the complex landscape of AI policy, technology governance, and regulatory compliance. This website serves as the digital presence for our consulting services, showcasing our expertise and facilitating client engagement.

### Key Features
- **Service Showcase**: Comprehensive display of consulting services including insight analysis, research, policy development, and events facilitation
- **Content Management**: Dynamic content system for articles, policy briefs, case studies, and resources
- **Interactive Animations**: Sophisticated text animations and hover effects for enhanced user experience
- **Responsive Design**: Mobile-first approach with optimized performance across all devices
- **SEO Optimized**: Comprehensive metadata, structured data, and performance optimization
- **Accessibility Focused**: WCAG compliant with ARIA labels and keyboard navigation support

### Target Audience
- Government agencies and policymakers
- Enterprise technology leaders
- Regulatory compliance officers
- Technology governance professionals
- Organizations seeking AI policy guidance

## Technical Stack

### Core Framework
- **Next.js**: 14.2.30 with App Router
- **React**: 18.3.1 with TypeScript 5
- **TypeScript**: For type safety and developer experience

### Styling & UI
- **Tailwind CSS**: 3.4.1 with custom design system
- **Framer Motion**: 12.19.1 for animations
- **React Hook Form**: 7.58.1 with Zod validation
- **Lucide React**: 0.522.0 for icons
- **React Icons**: 5.5.0 for additional icon sets

### Development Tools
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing
- **Prettier**: Code formatting

### Deployment
- **Platform**: Vercel (recommended) or any Next.js-compatible hosting
- **Database**: Static site - no database required
- **External Services**: None currently integrated

## Project Structure

```
chloe-autio-strategies/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── insights/          # Insights and blog pages
│   │   ├── resources/         # Resources and articles
│   │   ├── services/          # Services pages
│   │   ├── globals.css        # Global styles and CSS variables
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── content/           # Content display components
│   │   ├── forms/             # Form components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Base UI components
│   ├── data/                  # Static data and content
│   │   ├── insights.ts        # Articles, policy briefs, case studies
│   │   └── services.ts        # Services data
│   ├── lib/                   # Utility functions and constants
│   │   ├── constants.ts       # Site constants and metadata
│   │   ├── hooks/             # Custom React hooks
│   │   └── utils.ts           # Common utilities
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
│   └── images/               # Image assets
├── scripts/                   # Build and utility scripts
└── docs/                      # Documentation files
```

### Key Configuration Files
- **`next.config.mjs`**: Next.js configuration with image optimization
- **`tailwind.config.ts`**: Tailwind CSS configuration with custom design system
- **`tsconfig.json`**: TypeScript configuration
- **`.eslintrc.json`**: ESLint rules and configuration

## Getting Started

### Prerequisites
- **Node.js**: 18.0.0 or higher
- **npm**: 8.0.0 or higher (or yarn)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/autiostrategies/chloe-autio-strategies.git
   cd chloe-autio-strategies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

This project currently operates as a static site and doesn't require environment variables. However, if you plan to integrate external services, create a `.env.local` file in the root directory:

```bash
# Example environment variables (not currently required)
# NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
# NEXT_PUBLIC_CONTACT_EMAIL=contact@yourdomain.com
```

### First-Time Setup Checklist

- [ ] Install Node.js 18+ and npm
- [ ] Clone the repository
- [ ] Install dependencies with `npm install`
- [ ] Start development server with `npm run dev`
- [ ] Verify the site loads at http://localhost:3000
- [ ] Run `npm run type-check` to verify TypeScript
- [ ] Run `npm run lint` to check code quality

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run type-check` | TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run analyze-images` | Analyze image optimization |

## Key Integrations

### Current Integrations
- **None currently active** - This is a static site with no external service integrations

### Planned Integrations
- **Email Services**: Contact form submission handling
- **Analytics**: Google Analytics or similar for user tracking
- **Social Media**: LinkedIn sharing capabilities
- **Content Management**: Headless CMS for dynamic content updates

## Development Guidelines

### Code Organization

**Component Structure**
- Use functional components with TypeScript
- Follow the established component hierarchy:
  - `ui/` - Base UI components (Button, Card, Input, etc.)
  - `layout/` - Layout components (Header, Footer, Navigation)
  - `sections/` - Page sections (Hero, ServicesGrid, etc.)
  - `content/` - Content display components (ArticleCard, etc.)
  - `forms/` - Form components (ContactForm, etc.)

**File Naming**
- Components: PascalCase (e.g., `AuthorityHeading.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Pages: kebab-case (e.g., `contact/page.tsx`)

### Styling Approach

**Tailwind CSS**
- Use utility classes for styling
- Leverage the custom design system defined in `tailwind.config.ts`
- Follow mobile-first responsive design principles
- Use CSS custom properties for theme values

**Design System**
- **Colors**: Primary green (#6F9C3B), grays, and accent colors
- **Typography**: Inter font family with custom weights
- **Spacing**: Consistent scale (0-128)
- **Components**: Reusable with consistent variants

### State Management

**Current Approach**
- React hooks for local component state
- No global state management required (static site)
- Form state handled by React Hook Form

**Future Considerations**
- Consider Zustand or Redux Toolkit if global state needed
- Implement React Query for API data fetching

### Animation Guidelines

**Framer Motion**
- Use for complex animations and transitions
- Implement reduced motion support for accessibility
- Follow performance best practices

**CSS Animations**
- Use for simple hover effects and micro-interactions
- Leverage Tailwind's animation utilities
- Ensure 60fps performance

## Content Management

### Static Data Files
- **`src/data/services.ts`**: Service offerings and details
- **`src/data/insights.ts`**: Articles, policy briefs, case studies

### Content Updates
1. Edit the appropriate data file in `src/data/`
2. Follow the established TypeScript interfaces
3. Test changes locally
4. Deploy through the standard deployment process

### Image Assets
- Store images in `public/images/`
- Use Next.js Image component for optimization
- Follow the established naming conventions
- Optimize images before adding to the project

## Troubleshooting

### Common Issues

**Build Failures**
```bash
# Check Node.js version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

**Development Server Issues**
```bash
# Check if port 3000 is in use
lsof -i :3000

# Use different port
npm run dev -- -p 3001
```

**Styling Issues**
```bash
# Rebuild Tailwind CSS
npm run build

# Check for CSS conflicts
npm run lint
```

### Debug Mode

**Enable Debug Logging**
```bash
# Set debug environment variable
DEBUG=* npm run dev
```

**Component Debugging**
- Add `console.log` statements in components
- Use React Developer Tools browser extension
- Check browser console for errors

### Performance Issues

**Image Optimization**
```bash
# Analyze image optimization
npm run analyze-images

# Check Core Web Vitals
# Use Lighthouse in Chrome DevTools
```

**Bundle Size**
```bash
# Analyze bundle size
npm run build
# Check .next/analyze/ for detailed breakdown
```

### Log Locations

**Development Logs**
- Browser console for client-side errors
- Terminal for server-side errors
- Next.js logs in terminal output

**Production Logs**
- Vercel dashboard (if deployed on Vercel)
- Hosting platform logs
- Browser console for client-side errors

## Additional Documentation

For detailed information on specific topics, refer to:

- **[Deployment Guide](DEPLOYMENT.md)** - Comprehensive deployment instructions for multiple platforms
- **[Maintenance Guide](MAINTENANCE.md)** - Non-technical user guide for website management

## Contributing

1. Follow the existing code style and conventions
2. Use TypeScript for all new code
3. Write meaningful commit messages
4. Test your changes thoroughly
5. Ensure accessibility compliance
6. Update documentation for new features

## License

This project is proprietary to Autio Strategies.

## Support

For support or questions about this project, please contact the development team.
