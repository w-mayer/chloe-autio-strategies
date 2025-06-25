export const siteContent = {
  // Global site information
  site: {
    name: 'Autio Strategies',
    tagline: 'AI Policy Consulting & Technology Governance',
    description: 'Professional technology governance and regulatory compliance advisory for government and enterprise organizations',
    email: 'info@chloeautio.com',
    linkedin: 'https://linkedin.com/in/chloeautio',
    github: 'https://github.com/chloeautio/chloe-autio-strategies',
    website: 'https://chloeautio.com',
  },

  // Navigation
  navigation: {
    items: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
    ],
  },

  // Hero section
  hero: {
    title: 'AI Policy Consulting',
    subtitle: 'Professional technology governance and regulatory compliance advisory for government and enterprise organizations',
    buttons: {
      primary: { text: 'Our Services', href: '/services' },
      secondary: { text: 'Contact Us', href: '/contact' },
    },
    background: {
      image: '/images/stocks/hero-background.jpg',
      alt: 'Jefferson Memorial night reflection',
    },
  },

  // Services section
  services: {
    title: 'Our Services',
    learnMore: 'Learn More',
  },

  // Client logos section
  clientLogos: {
    title: 'Trusted by Leading Organizations',
    logos: [
      { 
        name: 'Cohere', 
        image: '/images/partner_logos/svg_logos/Cohere-Logo.svg',
        alt: 'Cohere Logo'
      },
      { 
        name: 'Department of Defense', 
        image: '/images/partner_logos/svg_logos/DoD-Logo-Stacked.svg',
        alt: 'Department of Defense Logo'
      },
      { 
        name: 'NIST', 
        image: '/images/partner_logos/svg_logos/f_nist-logo-brand-black.svg',
        alt: 'NIST Logo'
      },
      { 
        name: 'Google Cloud Platform', 
        image: '/images/partner_logos/svg_logos/Google_Cloud_Platform-Logo.svg',
        alt: 'Google Cloud Platform Logo'
      },
      { 
        name: 'Google DeepMind', 
        image: '/images/partner_logos/svg_logos/Google_DeepMind_logo.svg',
        alt: 'Google DeepMind Logo'
      },
      { 
        name: 'Meta', 
        image: '/images/partner_logos/svg_logos/Meta-Logo.svg',
        alt: 'Meta Logo'
      },
      { 
        name: 'OECD', 
        image: '/images/partner_logos/svg_logos/OCED.svg',
        alt: 'OECD Logo'
      },
      { 
        name: 'Uber', 
        image: '/images/partner_logos/svg_logos/Uber_logo_2018.svg',
        alt: 'Uber Logo'
      },
    ],
  },

  // Testimonials section
  testimonials: {
    title: 'What Our Clients Say',
    items: [
      {
        quote: 'Autio Strategies helped us transform our business and achieve record growth. Their insights are invaluable.',
        name: 'Alex Johnson',
        role: 'CEO, Acme Corp',
      },
      {
        quote: 'The leadership workshops were a game changer for our team. Highly recommended!',
        name: 'Maria Lee',
        role: 'Head of People, InnovateX',
      },
      {
        quote: 'Their data analytics expertise unlocked new opportunities for us. Professional and results-driven.',
        name: 'Sam Patel',
        role: 'COO, FinEdge',
      },
    ],
  },

  // Value proposition section
  valueProposition: {
    title: 'Why Choose Autio Strategies?',
    cards: [
      {
        title: 'AI Policy Expertise',
        description: 'Decades of experience advising governments, Fortune 500s, and startups on responsible AI, data governance, and emerging tech policy.',
      },
      {
        title: 'Global Perspective',
        description: 'Experience working with international organizations (OECD, NIST, DOD, Meta, DeepMind, Google Cloud, Cohere) to shape global standards and best practices.',
      },
      {
        title: 'Proven Results',
        description: 'Trusted by leading organizations to deliver actionable insights, drive compliance, and enable responsible innovation in AI and technology.',
      },
    ],
  },

  // Contact CTA section
  contactCTA: {
    title: 'Ready to Transform Your Organization?',
    description: "Let's discuss how our expertise in AI policy, technology governance, and regulatory compliance can help your organization navigate the complexities of the digital age.",
    buttons: {
      primary: { text: 'Schedule a Consultation', href: '/contact' },
      secondary: { text: 'Learn More', href: '/services' },
    },
    background: {
      image: '/images/stocks/cta-background.jpg',
      alt: 'Professional consulting background',
    },
    logo: {
      image: '/images/logo/AutioStrategies_Logo_AllWhite_Horz.png',
      alt: 'Autio Strategies Logo',
    },
  },

  // About page
  about: {
    hero: {
      title: 'Our Team',
      subtitle: 'Meet the experts behind Autio Strategies - dedicated professionals committed to advancing AI policy and technology governance.',
    },
    team: {
      chloe: {
        name: 'Chloe Autio',
        title: 'Founder & CEO',
        description: 'Chloe Autio is a recognized expert in AI policy and technology governance, with over a decade of experience advising government and enterprise organizations. Prior to founding Autio Strategies, Chloe served as the Senior Policy Advisor for AI and Emerging Technologies at the White House Office of Science and Technology Policy (OSTP), where she led the development of the National AI Initiative and coordinated federal AI policy across agencies.',
        bio: 'Chloe has also held senior positions at the Department of Defense, where she developed AI governance frameworks for military applications, and at leading technology companies, where she advised on responsible AI development and deployment. She holds a Master\'s degree in Public Policy from Harvard Kennedy School and a Bachelor\'s degree in Computer Science from Stanford University.',
        rolesTitle: 'Key Roles & Affiliations:',
        roles: [
          'Senior Policy Advisor, White House Office of Science and Technology Policy',
          'AI Governance Lead, Department of Defense',
          'Member, National AI Advisory Committee',
          'Fellow, Stanford Institute for Human-Centered AI',
          'Advisory Board Member, Partnership on AI',
        ],
        expertiseTitle: 'Areas of Expertise:',
        expertise: [
          'AI Policy Development',
          'Technology Governance',
          'Regulatory Compliance',
          'Government Relations',
          'Strategic Advisory',
        ],
        image: {
          src: '/images/headshot/autio_headshot.jpg',
          alt: 'Chloe Autio, Founder & CEO of Autio Strategies',
        },
      },
      samuel: {
        name: 'Samuel Wells',
        title: 'Policy Manager',
        description: 'Samuel Wells holds a wealth of policy and engagement experience at the intersection of science, technology, and government. Before joining Autio Strategies, he served in the White House on Vice President Kamala Harris\' team. Prior to that, Sam held a range of research and policy roles, including as a research assistant at the University of Chicago\'s Health Lab, where he contributed to the Transform911 initiative aimed at modernizing the nation\'s emergency response system. He has also interned for multiple members of Congress, the Office of the Science and Technology Adviser to the Secretary of State, and the Director of National Intelligence\'s Private Sector Group. Sam holds a BA in Public Policy & Leadership from the University of Virginia.',
        rolesTitle: 'Key Roles & Affiliations:',
        roles: [
          'Policy Advisor, White House Office of the Vice President',
          'Research Assistant, University of Chicago Health Lab',
          'Transform911 Initiative Contributor',
          'Congressional Intern, Multiple Offices',
          'State Department Science & Technology Adviser Intern',
        ],
        expertiseTitle: 'Areas of Expertise:',
        expertise: [
          'Policy Research',
          'Government Relations',
          'Technology Policy',
          'Public Sector Advisory',
          'Strategic Communications',
        ],
        image: {
          src: '/images/headshot/wells_headshot.jpeg',
          alt: 'Samuel Wells, Policy Manager at Autio Strategies',
        },
      },
    },
    cta: {
      title: 'Partner with Our Team',
      description: 'Connect with our team to discuss how our combined expertise can help your organization navigate the evolving landscape of AI policy and governance.',
      button: { text: 'Request a Consultation', href: '/contact' },
    },
  },

  // Footer
  footer: {
    builtBy: 'Built by',
    sourceCode: 'The source code is available on',
    links: {
      privacy: { text: 'Privacy', href: '/privacy' },
      terms: { text: 'Terms', href: '/terms' },
    },
    contact: {
      email: { text: 'Email', href: 'mailto:info@chloeautio.com' },
      linkedin: { text: 'LinkedIn', href: 'https://linkedin.com/in/chloeautio' },
    },
    logo: {
      src: '/images/logo/AutioStrategies_Logo_FullColor_JustMark.png',
      alt: 'Autio Strategies Mark',
    },
  },

  // Header
  header: {
    logo: {
      src: '/images/logo/AutioStrategies_Logo_FullColor_Horz (1).png',
      alt: 'Autio Strategies Logo',
    },
    mobileMenu: {
      openButton: { text: 'Open menu', ariaLabel: 'Open menu' },
    },
  },

  // Forms
  forms: {
    contact: {
      title: 'Contact Form',
      fields: {
        name: { label: 'Name', placeholder: '', error: 'Name is required' },
        email: { label: 'Email', placeholder: '', error: 'Invalid email address' },
        services: { 
          label: 'Services of Interest', 
          placeholder: '',
          error: 'Please select at least one service',
          other: 'Other',
          otherPlaceholder: "Describe the service you're interested in",
        },
        message: { label: 'Message', placeholder: '', error: 'Message must be at least 10 characters' },
      },
      buttons: {
        submit: { text: 'Send Message', loading: 'Sending...' },
      },
      success: 'Thank you for your message!',
      loading: 'Contact form loading',
    },
    newsletter: {
      title: 'Newsletter Signup',
      description: 'Stay updated with the latest insights in AI policy and technology governance.',
      placeholder: 'Enter your email address',
      button: { text: 'Subscribe', loading: 'Subscribing...' },
      success: 'Thank you for subscribing!',
      error: 'Please enter a valid email address.',
    },
    consultation: {
      title: 'Request Consultation',
      description: 'Schedule a consultation to discuss your organization\'s AI policy and governance needs.',
      fields: {
        name: { label: 'Full Name', placeholder: 'Enter your full name' },
        email: { label: 'Email Address', placeholder: 'Enter your email address' },
        organization: { label: 'Organization', placeholder: 'Enter your organization name' },
        role: { label: 'Role/Title', placeholder: 'Enter your role or title' },
        services: { label: 'Services of Interest', placeholder: 'Select services you\'re interested in' },
        timeline: { label: 'Timeline', placeholder: 'When do you need this completed?' },
        budget: { label: 'Budget Range', placeholder: 'What is your budget range?' },
        message: { label: 'Additional Details', placeholder: 'Tell us more about your needs and objectives' },
      },
      buttons: {
        submit: { text: 'Request Consultation', loading: 'Sending...' },
      },
      success: 'Thank you for your consultation request! We\'ll be in touch soon.',
    },
  },

  // Common UI elements
  ui: {
    buttons: {
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      getStarted: 'Get Started',
      scheduleConsultation: 'Schedule a Consultation',
      requestConsultation: 'Request a Consultation',
      readMore: 'Read More',
    },
    loading: {
      loading: 'Loading...',
      sending: 'Sending...',
      submitting: 'Submitting...',
    },
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      minLength: 'Must be at least {min} characters',
      maxLength: 'Must be no more than {max} characters',
    },
    aria: {
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
      learnMoreAbout: 'Learn more about',
    },
  },
}; 