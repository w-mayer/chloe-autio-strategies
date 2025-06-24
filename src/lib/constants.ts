// Site metadata
type SiteMeta = {
  title: string;
  description: string;
  url: string;
};

export const siteMeta: SiteMeta = {
  title: "Chloe Autio Strategies",
  description: "Professional tech policy consulting for the digital age.",
  url: "https://chloeautio.com",
};

// Navigation menu
type NavItem = {
  label: string;
  href: string;
};

export const navMenu: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Social media links
type SocialLink = {
  platform: string;
  url: string;
};

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/chloeautio" },
  { platform: "Twitter", url: "https://twitter.com/chloeautio" },
  { platform: "Email", url: "mailto:hello@chloeautio.com" },
];

// Contact information
type ContactInfo = {
  email: string;
  phone?: string;
  address?: string;
};

export const contactInfo: ContactInfo = {
  email: "hello@chloeautio.com",
}; 