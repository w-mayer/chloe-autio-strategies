# Website Maintenance Guide

**For Non-Technical Users**

This guide helps you manage the Autio Strategies website without needing technical knowledge. Follow these instructions carefully to avoid breaking the website.

---

## ⚠️ Important Warnings

- **Always backup content** before making changes
- **Never delete files** unless you're absolutely sure they're not needed
- **Test changes** on a staging environment first (if available)
- **Contact a developer** if you're unsure about any step

---

## 📝 Content Management

### How to Update Text Content

**All website text is now centralized in one file** - `src/data/content.ts`. This makes it much easier to update content without touching code.

#### **Main Content File Location:**
```
src/data/
├── content.ts      (ALL website text content - main file)
├── services.ts     (Service-specific content)
├── insights.ts     (Articles, case studies, resources)
└── metadata.ts     (SEO and page metadata)
```

#### **Step-by-Step Text Updates:**

1. **Open the main content file:** `src/data/content.ts`
2. **Find the section** you want to edit (use Ctrl+F or Cmd+F to search)
3. **Edit the text** between the quotes `'your text here'`
4. **Save the file**
5. **Test the changes** by refreshing the website

#### **Content Organization in content.ts:**

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

#### **Common Text Updates:**

**Company Information** (`src/data/content.ts` - `site` section):
- Company name, taglines, contact information
- Social media links
- Website URLs

**Navigation** (`src/data/content.ts` - `navigation` section):
- Menu item names and links
- Mobile menu text

**Homepage Sections** (`src/data/content.ts` - `hero`, `services`, etc.):
- Hero title and subtitle
- Service descriptions
- Button text
- Section titles

**About Page** (`src/data/content.ts` - `about` section):
- Team member bios and information
- Page titles and descriptions

**Forms** (`src/data/content.ts` - `forms` section):
- Form labels and placeholders
- Error messages
- Success messages
- Button text

**Footer** (`src/data/content.ts` - `footer` section):
- Footer links and text
- Contact information

### How to Change Images

#### **Image File Locations:**
```
public/images/
├── headshot/       (Profile photos)
├── logo/          (Company logos)
├── partner_logos/ (Client/partner logos)
└── stocks/        (Background and content images)
```

#### **Image Requirements:**
- **Formats:** JPG, PNG, WebP (recommended)
- **Profile photos:** 400x400 pixels minimum
- **Logos:** PNG with transparent background
- **Background images:** 1920x1080 pixels minimum
- **File size:** Keep under 2MB for fast loading

#### **Upload Process:**

1. **Prepare your image:**
   - Resize to recommended dimensions
   - Optimize file size (use tools like TinyPNG)
   - Use descriptive filename (e.g., `new-headshot-2024.jpg`)

2. **Upload to correct folder:**
   - Profile photos → `public/images/headshot/`
   - Logos → `public/images/logo/`
   - Content images → `public/images/stocks/`

3. **Update image references:**
   - Open `src/data/content.ts`
   - Find the image path you want to update
   - Change the path to match your new image name

#### **Example: Updating a Profile Photo**

1. Save your new photo as `chloe-autio-2024.jpg` in `public/images/headshot/`
2. Open `src/data/content.ts`
3. Find the `about.team.chloe.image` field and update:
   ```javascript
   about: {
     team: {
       chloe: {
         image: '/images/headshot/chloe-autio-2024.jpg',
         // ... other fields
       }
     }
   }
   ```

### How to Modify Navigation Menus

#### **Main Navigation** (`src/data/content.ts` - `navigation` section):

The main menu items are defined in the `navigation.items` array:

```javascript
navigation: {
  items: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ],
}
```

**To add a new menu item:**
1. Add a new object to the `items` array
2. Create the corresponding page file (contact developer)
3. Test the navigation

**To change menu text:**
1. Edit the `name` property
2. Keep the `href` the same (unless you're changing the page URL)

### How to Update Contact Information

#### **Primary Contact Details** (`src/data/content.ts` - `site` section):

Update these values for company-wide contact information:
- Email addresses
- Social media links
- Website URLs

#### **Footer Contact** (`src/data/content.ts` - `footer` section):

The footer contact information is managed in the `footer` section:
- Email link
- LinkedIn link
- Other social media links

**To update contact information:**
1. Find the appropriate section in `src/data/content.ts`
2. Update the values
3. Test all links work correctly

### How to Add/Remove Pages or Sections

#### **Adding a New Page:**

1. **Contact a developer** to create the page file
2. **Add to navigation:**
   - Update `src/data/content.ts` - `navigation.items` array
   - Add new menu item

3. **Test the page:**
   - Visit the new URL
   - Check navigation works
   - Verify mobile menu includes new page

#### **Removing a Page:**

1. **Remove from navigation first:**
   - Delete menu item from `src/data/content.ts` - `navigation.items`
   - Contact developer to remove page file

2. **Update any links:**
   - Search for references to the old page
   - Update or remove broken links

---

## 📱 Social Media & Communication Setup

### Email Services Configuration

#### **Current Email Setup:**
- **Contact Form:** Basic mailto link
- **Email Provider:** Not configured
- **Newsletter:** Not implemented

#### **To Configure Email Services:**

1. **Choose Email Provider:**
   - **Recommended:** SendGrid, Mailgun, or AWS SES
   - **Alternative:** Gmail SMTP (for low volume)

2. **Contact Form Setup:**
   - Contact developer to update form components
   - Add email service API keys
   - Test form submission

3. **Newsletter Integration:**
   - Choose newsletter service (Mailchimp, ConvertKit)
   - Contact developer to update form components
   - Test subscription flow

#### **Email Configuration Steps:**

1. **Get API Keys** from your chosen provider
2. **Add to environment variables:**
   ```
   EMAIL_API_KEY=your_api_key_here
   EMAIL_FROM=info@chloeautio.com
   ```
3. **Contact developer** to update form components
4. **Test thoroughly** before going live

### LinkedIn Integration

#### **Current LinkedIn Setup:**
- **Profile:** https://linkedin.com/in/chloeautio
- **Integration:** Basic link in footer
- **API Integration:** None currently configured

#### **To Add LinkedIn API Integration:**

1. **LinkedIn Developer Setup:**
   - Go to [LinkedIn Developers](https://developer.linkedin.com/)
   - Create a new app
   - Get API credentials

2. **Update Configuration:**
   - Add LinkedIn API keys to environment variables
   - Update profile URL in `src/data/content.ts` - `site.linkedin`
   - Contact developer to configure sharing buttons

3. **Testing LinkedIn Integration:**
   - Verify profile links work
   - Test sharing functionality
   - Monitor API usage

### Social Media Links

**Current social media links:**
- LinkedIn: `https://linkedin.com/in/chloeautio`

**To update social media links:**
1. Open `src/data/content.ts`
2. Find the `site` section
3. Update the appropriate social media URLs
4. Test all links work correctly

---

## 🔧 Regular Maintenance Tasks

### Weekly Maintenance Checklist

- [ ] **Check website functionality**
  - Test all navigation links
  - Verify contact forms work
  - Check social media links
  - Test on mobile devices

- [ ] **Review content accuracy**
  - Check for outdated information
  - Verify contact details are current
  - Update any time-sensitive content

- [ ] **Monitor performance**
  - Check website loading speed
  - Review error logs (if accessible)
  - Test on different browsers

### Monthly Maintenance Checklist

- [ ] **Content updates**
  - Add new articles or case studies
  - Update service descriptions
  - Refresh images if needed
  - Review and update resources

- [ ] **Security checks**
  - Update passwords if needed
  - Review user access (if applicable)
  - Check for suspicious activity

- [ ] **Backup procedures**
  - Download content files
  - Backup images and media
  - Save configuration settings

### Performance Monitoring Basics

#### **What to Monitor:**
- **Page load times** (should be under 3 seconds)
- **Mobile responsiveness** (test on different screen sizes)
- **Broken links** (use tools like Google Search Console)
- **Error rates** (check for 404 or 500 errors)

#### **Free Monitoring Tools:**
- **Google PageSpeed Insights** - Performance testing
- **Google Search Console** - SEO and error monitoring
- **GTmetrix** - Detailed performance analysis
- **UptimeRobot** - Website availability monitoring

### Content Backup Procedures

#### **What to Backup:**
1. **Content files:**
   - `src/data/content.ts` (main content file)
   - `src/data/services.ts`
   - `src/data/insights.ts`
   - `src/data/metadata.ts`

2. **Images and media:**
   - `public/images/` folder
   - Any uploaded files

3. **Configuration:**
   - Environment variables (safely stored)
   - API keys and credentials

#### **Backup Schedule:**
- **Weekly:** Content files and images
- **Monthly:** Full website backup
- **Before major changes:** Complete backup

#### **Backup Storage:**
- **Local:** Computer hard drive
- **Cloud:** Google Drive, Dropbox, or OneDrive
- **Version Control:** Git repository (for developers)

---

## 🆘 Getting Help

### When to Contact a Developer

**Contact a developer immediately if:**
- Website is completely down or not loading
- Forms are not working
- Images are broken or missing
- Navigation is not functioning
- You see error messages you don't understand

**Contact a developer for:**
- Adding new features or functionality
- Changing website design or layout
- Setting up new integrations
- Performance optimization
- Security updates
- Creating new pages or components

### How to Document Issues

#### **Before Contacting a Developer:**

1. **Document the problem:**
   - What were you trying to do?
   - What happened instead?
   - What error messages appeared?
   - When did this start happening?

2. **Gather information:**
   - Screenshots of the issue
   - Browser and device information
   - Steps to reproduce the problem
   - Any recent changes you made

3. **Check common solutions:**
   - Clear browser cache
   - Try different browser
   - Check internet connection
   - Restart your computer

#### **Issue Report Template:**
```
Issue: [Brief description]
Date: [When it started]
Steps to reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected result: [What should happen]
Actual result: [What actually happened]
Error messages: [Any error text]
Browser/Device: [Chrome on Mac, etc.]
Recent changes: [Any recent updates you made]
```

### Emergency Contact Procedures

#### **Website Down Emergency:**
1. **Don't panic** - most issues can be resolved quickly
2. **Document the problem** using the template above
3. **Contact developer** with urgent priority
4. **Have backup contact information** ready
5. **Prepare alternative communication** if needed

#### **Contact Information:**
- **Primary Developer:** [Add developer contact info]
- **Backup Contact:** [Add backup contact info]
- **Emergency Email:** [Add emergency email]
- **Response Time:** [Expected response time]

### Resources for Learning More

#### **Website Management:**
- **Next.js Documentation:** https://nextjs.org/docs
- **GitHub Guides:** https://guides.github.com/
- **Web Development Basics:** MDN Web Docs

#### **Content Management:**
- **Content Editing Guide:** See `docs/CONTENT_EDITING.md`
- **Image Optimization:** https://squoosh.app/
- **Color Tools:** https://coolors.co/

#### **Social Media Management:**
- **LinkedIn Developer Docs:** https://developer.linkedin.com/
- **Email Service Guides:** Provider-specific documentation

---

## 📋 Quick Reference

### File Locations Summary

| Content Type | File Location | How to Edit |
|--------------|---------------|-------------|
| **ALL Website Text** | `src/data/content.ts` | Text editor |
| Services | `src/data/services.ts` | Text editor |
| Articles | `src/data/insights.ts` | Text editor |
| SEO Metadata | `src/data/metadata.ts` | Text editor |
| Images | `public/images/` | File manager |

### Common Tasks Quick Guide

| Task | File to Edit | What to Change |
|------|--------------|----------------|
| Update company name | `src/data/content.ts` | `site.name` |
| Change hero title | `src/data/content.ts` | `hero.title` |
| Update navigation | `src/data/content.ts` | `navigation.items` |
| Change contact email | `src/data/content.ts` | `site.email` |
| Update team bio | `src/data/content.ts` | `about.team.[name].description` |
| Change form labels | `src/data/content.ts` | `forms.[form].fields` |
| Update button text | `src/data/content.ts` | Various button text fields |
| Change logo | `public/images/logo/` | Upload new file and update `content.ts` |

### Emergency Checklist

- [ ] Website accessible?
- [ ] All pages loading?
- [ ] Forms working?
- [ ] Images displaying?
- [ ] Navigation functional?
- [ ] Contact information current?
- [ ] Social media links working?
- [ ] No error messages visible?

---

**Remember:** When in doubt, contact a developer. It's better to ask for help than to accidentally break something important! 