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
- [x] Contact email: "chloe@autiostrategies.com"
- [x] LinkedIn URL: "https://linkedin.com/in/chloeautio"
- [x] GitHub URL: "https://github.com/w-mayer/chloe-autio-strategies"
- [x] Website URL: "https://autiostrategies.com"

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
- [x] Primary button: "Contact Us" → "/contact"
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
- [x] Email link: "Email" → "mailto:chloe@autiostrategies.com"
- [x] LinkedIn link: "LinkedIn" → "https://linkedin.com/in/chloeautio"
- [x] Logo image: "/images/logo/AutioStrategies_Logo_FullColor_JustMark.png"

**Header (`src/data/content.ts` - `header` section):**
- [x] Logo image: "/images/logo/AutioStrategies_Logo_FullColor_Horz (1).png"
- [x] Mobile menu open button text: "Open menu"

**Forms (`src/data/content.ts` - `forms` section):**
- [x] Contact form title, field labels, placeholders, error messages, and success messages
- [x] Newsletter form title, description, placeholder, button text, and messages

**Common UI Elements (`src/data/content.ts` - `ui` section):**
- [x] Button text: "Learn More", "Contact Us", "Get Started", "Read More"
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
  subtitle: 'Your new subtitle',
  // ... other fields
}
```

**Update contact information:**
```javascript
site: {
  email: 'newemail@yourcompany.com',
  website: 'https://yournewwebsite.com',
  // ... other fields
}
```

**Update navigation:**
```javascript
navigation: {
  items: [
    { name: 'New Menu Item', href: '/new-page' },
    // ... other items
  ],
}
```

**Update form labels:**
```javascript
forms: {
  contact: {
    fields: {
      name: {
        label: 'Your New Label',
        // ... other field properties
      },
    },
  },
}
```

**Update metadata:**
```javascript
// In src/data/metadata.ts
pages: {
  home: {
    title: 'Your New Page Title',
    description: 'Your new page description',
    // ... other metadata
  },
}
```

### Content File Locations

**Main content files:**
- `src/data/content.ts` - All UI text, forms, navigation
- `src/data/metadata.ts` - SEO metadata for all pages
- `src/data/services.ts` - Service descriptions and details
- `src/data/resources.ts` - Articles, case studies, policy briefs
- `src/lib/constants.ts` - Site-wide constants and configuration

**Component files (don't edit these):**
- `src/components/` - React components (code only)
- `src/app/` - Page components (code only)

### Content Structure Reference

**Site Information:**
```javascript
site: {
  name: 'Autio Strategies',
  tagline: 'AI Policy Consulting & Technology Governance',
  description: 'Professional technology governance...',
  email: 'chloe@autiostrategies.com',
  website: 'https://autiostrategies.com',
}
```

**Navigation:**
```javascript
navigation: {
  items: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // ... other items
  ],
}
```

**Hero Sections:**
```javascript
pages: {
  home: {
    hero: {
      title: 'AI Policy Consulting',
      subtitle: 'Professional technology governance...',
      buttons: {
        primary: { text: 'Our Services', href: '/services' },
        secondary: { text: 'Contact Us', href: '/contact' },
      },
    },
  },
}
```

**Forms:**
```javascript
forms: {
  contact: {
    title: 'Contact Form',
    netlifyName: 'contact',
    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        error: 'Name is required',
      },
      // ... other fields
    },
  },
}
```

### Common Mistakes to Avoid

**❌ Don't edit component files:**
- Don't change text in `.tsx` files
- Don't modify `src/components/` files
- Don't edit `src/app/` page files

**❌ Don't hardcode URLs:**
- Don't put `https://autiostrategies.com` directly in components
- Use the `site.website` value from content.ts

**❌ Don't change file structure:**
- Don't move files to different folders
- Don't rename data files
- Don't change import paths

**✅ Do edit data files:**
- Edit `src/data/content.ts` for all text content
- Edit `src/data/metadata.ts` for SEO information
- Edit `src/data/services.ts` for service details
- Edit `src/data/resources.ts` for articles and resources

### Testing Your Changes

1. **Save the file** after making changes
2. **Refresh the website** in your browser
3. **Check the specific page** where you made changes
4. **Verify the text updated** correctly
5. **Test any links** you changed

### Getting Help

If you need help with content editing:

1. **Check this guide** for common editing tasks
2. **Look at existing content** in the data files for examples
3. **Contact the development team** for technical issues
4. **Backup your changes** before making major edits

### Content Backup

Before making major changes:

1. **Copy the current content** to a backup file
2. **Make small changes** and test each one
3. **Keep a log** of what you changed
4. **Test thoroughly** before publishing

### Content Validation

After making changes, verify:

- [ ] All text displays correctly
- [ ] No broken links
- [ ] Forms still work
- [ ] Navigation is correct
- [ ] SEO metadata is updated
- [ ] No console errors

### Advanced Content Editing

**Adding new pages:**
1. Add navigation item in `content.ts`
2. Add metadata in `metadata.ts`
3. Create page component (contact developer)
4. Test navigation and SEO

**Adding new services:**
1. Add service in `services.ts`
2. Update navigation if needed
3. Add metadata for service page
4. Test service page and links

**Adding new resources:**
1. Add resource in `resources.ts`
2. Update metadata if needed
3. Test resource display
4. Verify links work correctly

### Content Guidelines

**Text Style:**
- Use clear, professional language
- Keep sentences concise
- Use consistent terminology
- Avoid technical jargon for general audiences

**SEO Best Practices:**
- Include relevant keywords naturally
- Write descriptive titles and descriptions
- Keep meta descriptions under 160 characters
- Use proper heading structure

**Accessibility:**
- Use descriptive alt text for images
- Write clear form labels
- Use proper ARIA labels
- Ensure color contrast is sufficient

### Troubleshooting

**Text not updating:**
- Check if you saved the file
- Clear browser cache
- Check for syntax errors in the file
- Verify you're editing the correct file

**Links not working:**
- Check the URL format
- Verify the page exists
- Test the link in a new tab
- Check for typos in the URL

**Forms not working:**
- Check form field names match
- Verify Netlify configuration
- Test form submission
- Check browser console for errors

**Images not displaying:**
- Check image file exists
- Verify image path is correct
- Check image file format
- Ensure image file size is reasonable

### Content Workflow

**For regular updates:**
1. Edit content in data files
2. Test changes locally
3. Commit changes to version control
4. Deploy to staging (if available)
5. Deploy to production

**For major changes:**
1. Create content plan
2. Backup current content
3. Make changes in stages
4. Test each stage thoroughly
5. Get approval before publishing
6. Deploy with rollback plan

### Content Version Control

**Best practices:**
- Make small, focused changes
- Use descriptive commit messages
- Test changes before committing
- Keep backups of important content
- Document major changes

**Commit messages:**
- Use clear, descriptive language
- Include the type of change
- Reference the affected content
- Example: "Update hero title and contact email"

### Content Performance

**Optimization tips:**
- Keep content concise and focused
- Use proper heading structure
- Optimize images for web
- Minimize external dependencies
- Use efficient data structures

**Loading optimization:**
- Lazy load non-critical content
- Optimize image sizes
- Use proper caching headers
- Minimize JavaScript bundles
- Use CDN for static assets

### Content Security

**Best practices:**
- Don't include sensitive information
- Validate all user input
- Use HTTPS for all links
- Sanitize HTML content
- Keep dependencies updated

**Data protection:**
- Don't store personal data in content files
- Use environment variables for sensitive data
- Follow GDPR compliance guidelines
- Implement proper data retention policies
- Regular security audits

### Content Analytics

**Tracking content performance:**
- Monitor page views and engagement
- Track form submission rates
- Analyze user behavior patterns
- Measure content effectiveness
- Optimize based on data

**SEO monitoring:**
- Track search rankings
- Monitor organic traffic
- Analyze keyword performance
- Check technical SEO issues
- Optimize content based on insights

### Content Collaboration

**Team workflow:**
- Use version control for all changes
- Review content before publishing
- Maintain style guides
- Regular content audits
- Clear approval processes

**Content review process:**
1. Content creation
2. Internal review
3. Stakeholder approval
4. Technical review
5. Final approval
6. Publication

### Content Maintenance

**Regular tasks:**
- Update outdated information
- Check for broken links
- Review and optimize content
- Update metadata as needed
- Monitor performance metrics

**Content audits:**
- Quarterly content reviews
- Annual comprehensive audits
- Performance analysis
- SEO optimization
- User feedback integration

### Emergency Procedures

**If content breaks:**
1. Don't panic
2. Check recent changes
3. Revert to last working version
4. Test thoroughly
5. Document the issue
6. Implement fix

**Rollback process:**
1. Identify the problematic change
2. Revert to previous version
3. Test the rollback
4. Communicate the issue
5. Plan the fix
6. Implement with extra testing

### Content Training

**For new team members:**
1. Review this documentation
2. Practice with test content
3. Shadow experienced editors
4. Start with simple changes
5. Gradually take on more complex tasks

**Ongoing education:**
- Stay updated on best practices
- Attend content strategy workshops
- Learn from analytics data
- Share knowledge with team
- Regular skill development

### Content Strategy

**Long-term planning:**
- Content calendar development
- Editorial guidelines
- Brand voice consistency
- Content performance goals
- Regular strategy reviews

**Content goals:**
- Improve user engagement
- Increase conversion rates
- Enhance SEO performance
- Build brand authority
- Support business objectives

### Content Quality Assurance

**Quality checklist:**
- [ ] Content is accurate and up-to-date
- [ ] Grammar and spelling are correct
- [ ] Links work properly
- [ ] Images display correctly
- [ ] SEO metadata is optimized
- [ ] Content is accessible
- [ ] Brand voice is consistent
- [ ] Call-to-actions are clear

**Review process:**
1. Self-review before submission
2. Peer review for accuracy
3. Stakeholder approval
4. Technical validation
5. Final quality check
6. Publication and monitoring

### Content Metrics

**Key performance indicators:**
- Page views and time on page
- Form submission rates
- Search engine rankings
- Social media engagement
- User feedback and satisfaction

**Reporting schedule:**
- Weekly performance reviews
- Monthly content analytics
- Quarterly strategy assessments
- Annual comprehensive reports

### Content Innovation

**Staying current:**
- Monitor industry trends
- Experiment with new formats
- Test different approaches
- Learn from competitors
- Adapt to user feedback

**Continuous improvement:**
- Regular content audits
- Performance optimization
- User experience enhancements
- Technology integration
- Process refinement

---

## 🎯 Summary

**Total Content Items Centralized:** 150+ text elements
**Components Refactored:** 15+ components
**Files Created/Updated:** 3 data files, 1 documentation file
**Content Categories:** 12 major sections

All hardcoded text has been successfully extracted and centralized. The website now has a maintainable content system that allows non-technical users to edit all text content without touching code. 