# Squarespace to Netlify Migration Guide

## Overview

This guide provides a step-by-step process for transferring your website hosting from Squarespace to Netlify. Your current Next.js project is already configured for Netlify deployment with static export.

## Pre-Migration Checklist

### 1. Domain and DNS Preparation
- [ ] Note your current Squarespace domain settings
- [ ] Identify your domain registrar (where you purchased the domain)
- [ ] Ensure you have access to your domain's DNS settings
- [ ] Document current DNS records (A, CNAME, MX, TXT records)
- [ ] Note any custom email configurations

### 2. Content Backup
- [ ] Export all content from Squarespace
- [ ] Download all images and media files
- [ ] Export blog posts and pages
- [ ] Save contact form submissions
- [ ] Export any custom CSS/JavaScript
- [ ] Document current SEO settings and meta tags

### 3. Third-Party Services
- [ ] List all third-party integrations (analytics, forms, etc.)
- [ ] Note API keys and configuration settings
- [ ] Document email service providers
- [ ] List any external tools or services

## Migration Steps

### Phase 1: Netlify Setup

#### 1.1 Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Verify your email address

#### 1.2 Connect Your Repository
1. In Netlify dashboard, click "New site from Git"
2. Choose your Git provider (GitHub, GitLab, Bitbucket)
3. Select your repository: `autiostrategies/chloe-autio-strategies`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18`

#### 1.3 Configure Environment Variables
Add any necessary environment variables in Netlify:
- Go to Site settings → Environment variables
- Add any API keys or configuration values
- Set production environment variables

#### 1.4 Test Deployment
1. Trigger a test build in Netlify
2. Verify the site builds successfully
3. Test all functionality on the Netlify preview URL
4. Check that all pages load correctly
5. Test contact forms and other interactive elements

### Phase 2: Domain Configuration

#### 2.1 Add Custom Domain to Netlify
1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain: `autiostrategies.com`
4. Follow Netlify's DNS configuration instructions

#### 2.2 Update DNS Records
**Option A: Use Netlify DNS (Recommended)**
1. Transfer DNS management to Netlify
2. Netlify will automatically configure all necessary records
3. Update nameservers at your domain registrar

**Option B: Keep Current DNS Provider**
1. Add/update DNS records at your current provider:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: autiostrategies.com
   ```

#### 2.3 Configure Email (if applicable)
If you have custom email addresses:
1. Set up email forwarding in Netlify
2. Or configure MX records for your email provider
3. Test email functionality

### Phase 3: Content Migration

#### 3.1 Update Content References
1. Update any hardcoded Squarespace URLs in your content
2. Replace Squarespace-specific links with your new domain
3. Update internal navigation links
4. Check for any Squarespace-specific code or embeds

#### 3.2 SEO and Metadata
1. Update your `sitemap.xml` with the new domain
2. Verify all meta tags are properly configured
3. Update Open Graph and Twitter Card URLs
4. Check canonical URLs

#### 3.3 Forms and Integrations
1. Test contact form functionality
2. Verify form submissions are working
3. Update any webhook URLs
4. Test newsletter signup forms

### Phase 4: Squarespace Cleanup

#### 4.1 Export Final Content
1. Export any remaining content from Squarespace
2. Download all media files
3. Save any custom configurations

#### 4.2 Cancel Squarespace Subscription
1. Ensure your site is fully migrated and tested
2. Cancel your Squarespace subscription
3. Keep a backup of your Squarespace export

## Post-Migration Tasks

### 1. Testing and Verification
- [ ] Test all pages and functionality
- [ ] Verify contact forms work
- [ ] Check mobile responsiveness
- [ ] Test page load speeds
- [ ] Verify SEO elements
- [ ] Test email functionality

### 2. SEO and Analytics
- [ ] Update Google Search Console with new domain
- [ ] Update Google Analytics property
- [ ] Submit new sitemap to search engines
- [ ] Set up 301 redirects if needed
- [ ] Monitor search rankings

### 3. Performance Optimization
- [ ] Enable Netlify's CDN features
- [ ] Configure image optimization
- [ ] Set up caching headers
- [ ] Enable compression
- [ ] Monitor Core Web Vitals

### 4. Security and Monitoring
- [ ] Set up SSL certificate (automatic with Netlify)
- [ ] Configure security headers
- [ ] Set up monitoring and alerts
- [ ] Enable form spam protection

## Configuration Files

### Current Netlify Configuration
Your project already has the necessary configuration:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Next.js Configuration
Your Next.js is configured for static export:

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    // ... other image settings
  },
  // ... other settings
};
```

## Common Issues and Solutions

### 1. Build Failures
- **Issue**: Build fails due to missing dependencies
- **Solution**: Ensure all dependencies are in `package.json`

### 2. Routing Issues
- **Issue**: 404 errors on direct page access
- **Solution**: Verify `netlify.toml` redirects are configured

### 3. Image Loading Problems
- **Issue**: Images not loading after migration
- **Solution**: Check image paths and ensure they're in the `public` directory

### 4. Form Submission Issues
- **Issue**: Contact forms not working
- **Solution**: Verify Netlify Forms is enabled and configured

### 5. Domain Propagation
- **Issue**: Domain not resolving to Netlify
- **Solution**: Allow 24-48 hours for DNS propagation

## Monitoring and Maintenance

### 1. Regular Checks
- Monitor site performance
- Check for broken links
- Review analytics data
- Test contact forms

### 2. Updates and Maintenance
- Keep dependencies updated
- Monitor security advisories
- Regular content updates
- Performance optimization

### 3. Backup Strategy
- Regular code backups
- Content version control
- Database backups (if applicable)
- Configuration backups

## Support Resources

### Netlify Documentation
- [Netlify Docs](https://docs.netlify.com/)
- [Deploy to Netlify](https://docs.netlify.com/site-deploys/create-deploys/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

### Next.js Documentation
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/nextjs/)

### Migration Tools
- [Squarespace Export Tool](https://support.squarespace.com/hc/en-us/articles/206543587-Exporting-your-site)
- [DNS Checker](https://dnschecker.org/)
- [SSL Checker](https://www.ssllabs.com/ssltest/)

## Timeline Estimate

- **Preparation**: 1-2 days
- **Netlify Setup**: 1 day
- **Domain Configuration**: 1-2 days (including DNS propagation)
- **Content Migration**: 1-2 days
- **Testing and Verification**: 1 day
- **Post-migration tasks**: 1-2 days

**Total Estimated Time**: 6-10 days

## Success Criteria

- [ ] Site loads correctly on new domain
- [ ] All pages and functionality work
- [ ] Contact forms submit successfully
- [ ] SEO elements are preserved
- [ ] Page load speeds are maintained or improved
- [ ] SSL certificate is active
- [ ] Analytics are tracking correctly
- [ ] No broken links or missing content

## Rollback Plan

If issues arise during migration:
1. Keep Squarespace subscription active during transition
2. Maintain DNS records for both platforms
3. Have backup of all content and configurations
4. Document all changes made during migration
5. Keep access to both platforms until fully verified

---

**Note**: This guide assumes you're migrating from a Squarespace site to your existing Next.js project. Adjust steps as needed based on your specific Squarespace setup and requirements. __