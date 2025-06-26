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
- **Contact Form:** Netlify Forms with automatic email notifications
- **Newsletter:** Netlify Forms with email notifications
- **Spam Protection:** Built-in Netlify spam filtering
- **Form Data Storage:** Automatic storage in Netlify dashboard

#### **Netlify Forms Benefits:**
- **No setup required** - Forms work automatically
- **Spam protection** - Built-in filtering and honeypot
- **Email notifications** - Automatic emails on form submission
- **Data storage** - All submissions stored in Netlify dashboard
- **Success redirects** - Automatic redirects after submission
- **No external services** - Everything handled by Netlify

#### **Form Management in Netlify Dashboard:**

1. **Access Form Submissions:**
   - Log into [netlify.com](https://netlify.com)
   - Go to your site dashboard
   - Click "Forms" in the left sidebar
   - View all form submissions

2. **Configure Email Notifications:**
   - In Forms section, click "Settings"
   - Add email addresses for notifications
   - Choose notification frequency
   - Set up spam filtering preferences

3. **Export Form Data:**
   - Select form submissions
   - Click "Export" to download CSV
   - Use for CRM integration or analysis

#### **Form Types and Handling:**

**Contact Form (`contact`):**
- General inquiries and service requests
- Service selection with checkboxes
- Automatic email to specified address
- Success redirect to `/contact?success=true`

**Newsletter Form (`newsletter`):**
- Email signup for updates
- Used on contact page
- Success redirect to `/?newsletter=success`

#### **To Customize Form Notifications:**

1. **In Netlify Dashboard:**
   - Go to Site settings → Forms
   - Configure notification emails
   - Set up custom email templates
   - Adjust spam filtering settings

2. **Form Content Updates:**
   - Edit form labels and messages in `src/data/content.ts`
   - Update form names in `forms` section
   - Test form functionality after changes

3. **Success Page Customization:**
   - Forms automatically redirect with success parameters
   - Components check URL parameters for success states
   - Success messages show from centralized content

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
  - Verify contact forms work and submit successfully
  - Test newsletter signup forms
  - Check form success messages appear
  - Check social media links
  - Test on mobile devices

- [ ] **Review content accuracy**
  - Check for outdated information
  - Verify contact details are current
  - Update any time-sensitive content
  - Review form labels and messages

- [ ] **Monitor performance**
  - Check website loading speed
  - Review Netlify deployment logs
  - Test on different browsers
  - Check form submission success rates

- [ ] **Form monitoring**
  - Check Netlify dashboard for new form submissions
  - Review spam filtering effectiveness
  - Verify email notifications are working
  - Test form success redirects

### Monthly Maintenance Checklist

- [ ] **Content updates**
  - Add new articles or case studies
  - Update service descriptions
  - Refresh images if needed
  - Review and update resources
  - Update form content if needed

- [ ] **Security checks**
  - Update passwords if needed
  - Review Netlify access permissions
  - Check for suspicious form submissions
  - Review spam filtering settings

- [ ] **Backup procedures**
  - Download content files
  - Backup images and media
  - Export form submission data from Netlify
  - Save configuration settings

- [ ] **Form analysis**
  - Review form submission trends
  - Analyze conversion rates
  - Check for form errors or issues
  - Update form content based on user feedback

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
   - `netlify.toml` (Netlify configuration)
   - `public/forms.html` (form detection file)
   - Environment variables (safely stored)

4. **Form data:**
   - Export form submissions from Netlify dashboard
   - Backup form configuration settings
   - Save email notification settings

#### **Backup Schedule:**
- **Weekly:** Content files and images
- **Monthly:** Full website backup and form data export
- **Before major changes:** Complete backup

#### **Backup Storage:**
- **Local:** Computer hard drive
- **Cloud:** Google Drive, Dropbox, or OneDrive
- **Version Control:** Git repository (for developers)
- **Netlify:** Form data automatically backed up in dashboard

---

## 🆘 Getting Help

### When to Contact a Developer

**Contact a developer immediately if:**
- Website is completely down or not loading
- Forms are not working or submitting
- Form success messages not appearing
- Images are broken or missing
- Navigation is not functioning
- You see error messages you don't understand
- Netlify deployment fails

**Contact a developer for:**
- Adding new features or functionality
- Changing website design or layout
- Setting up new integrations
- Performance optimization
- Security updates
- Creating new pages or components
- Form configuration changes
- Netlify setup issues

### Common Issues and Solutions

#### **Form Issues:**

**Forms not submitting:**
- Check Netlify dashboard for form detection
- Verify `data-netlify="true"` attributes on forms
- Ensure `public/forms.html` exists and is correct
- Check form names match in `src/data/content.ts`

**Form success messages not showing:**
- Check URL parameters for success states
- Verify form redirects are working
- Test form submission in Netlify dashboard
- Check browser console for errors

**Spam submissions:**
- Review Netlify spam filtering settings
- Check form submission quality in dashboard
- Consider adding honeypot fields if needed
- Monitor form submission patterns

#### **Netlify Issues:**

**Deployment failures:**
- Check Netlify build logs
- Verify `netlify.toml` configuration
- Check for build errors in local development
- Review environment variables

**Domain issues:**
- Check DNS settings in domain registrar
- Verify SSL certificate status
- Test domain connectivity
- Check Netlify domain settings

#### **Content Issues:**

**Content not updating:**
- Verify changes saved in `src/data/content.ts`
- Check for syntax errors in content file
- Clear browser cache
- Check Netlify deployment status

**Images not loading:**
- Verify image files exist in `public/images/`
- Check image paths in `src/data/content.ts`
- Ensure image filenames match exactly
- Check image file permissions

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
| Form Configuration | `src/data/content.ts` | Text editor |
| Netlify Config | `netlify.toml` | Text editor |
| Form Detection | `public/forms.html` | Text editor |

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
| Update form success message | `src/data/content.ts` | `forms.[form].success` |
| Change form names | `src/data/content.ts` | `forms.[form].netlifyName` |

### Emergency Checklist

- [ ] Website accessible?
- [ ] All pages loading?
- [ ] Forms working and submitting?
- [ ] Form success messages appearing?
- [ ] Images displaying?
- [ ] Navigation functional?
- [ ] Contact information current?
- [ ] Social media links working?
- [ ] No error messages visible?
- [ ] Netlify deployment successful?
- [ ] Form submissions being received?

---

**Remember:** When in doubt, contact a developer. It's better to ask for help than to accidentally break something important! 