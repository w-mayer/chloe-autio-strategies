export const siteContent = {
  // Global site information
  site: {
    name: 'Autio Strategies',
    tagline: 'AI Policy Consulting & Technology Governance',
    description: 'Professional technology governance and regulatory compliance advisory for government and enterprise organizations',
    email: 'info@autiostrategies.com',
    github: 'https://github.com/chloeautio/chloe-autio-strategies',
    website: 'https://autiostrategies.com',
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

  // Page-specific hero configurations
  pages: {
    home: {
      hero: {
        title: 'AI Policy Consulting',
        subtitle: 'Helping organizations develop and implement successful strategies related to AI policy and governance.',
        buttons: {
          primary: { text: 'Our Services', href: '/services' },
          secondary: { text: 'Contact Us', href: '/contact' },
        },
        background: {
          image: '/images/stocks/resources.jpg',
          alt: 'Jefferson Memorial night reflection',
        },
      },
    },
    about: {
      hero: {
        title: 'Our Team',
        subtitle: 'Meet the experts behind Autio Strategies - dedicated professionals committed to advancing AI policy and technology governance.',
        background: {
          image: '/images/stocks/about.jpg',
          alt: 'About Autio Strategies background',
        },
      },
    },
    services: {
      hero: {
        title: 'Our Services',
        subtitle: 'Autio Strategies offers a comprehensive suite of services designed to empower government and enterprise clients to navigate the evolving landscape of AI and technology policy with confidence and clarity.',
        background: {
          image: '/images/stocks/services.jpg',
          alt: 'Services background',
        },
      },
    },
    resources: {
      hero: {
        title: 'Resources & Thought Leadership',
        subtitle: 'Explore our latest articles, policy briefs, case studies, and curated resources on AI policy, governance, and regulatory topics for government and enterprise leaders.',
        background: {
          image: '/images/stocks/hero-background.jpg',
          alt: 'Resources background',
        },
      },
    },
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Get in touch to discuss how our expertise can help your organization navigate AI policy and governance challenges.',
        background: {
          image: '/images/stocks/contact.jpg',
          alt: 'Contact background',
        },
      },
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
        image: '/images/partner_logos/Cohere-Logo.png',
        alt: 'Cohere Logo'
      },
      { 
        name: 'Department of Defense', 
        image: '/images/partner_logos/DoD-Logo-Stacked.png',
        alt: 'Department of Defense Logo'
      },
      { 
        name: 'NIST', 
        image: '/images/partner_logos/f_nist-logo-brand-black.png',
        alt: 'NIST Logo'
      },
      { 
        name: 'Google Cloud Platform', 
        image: '/images/partner_logos/Google_Cloud_Platform-Logo.png',
        alt: 'Google Cloud Platform Logo'
      },
      { 
        name: 'Google DeepMind', 
        image: '/images/partner_logos/Google_DeepMind_logo.png',
        alt: 'Google DeepMind Logo'
      },
      { 
        name: 'Meta', 
        image: '/images/partner_logos/Meta-Logo.png',
        alt: 'Meta Logo'
      },
      { 
        name: 'OECD', 
        image: '/images/partner_logos/OCED.jpeg',
        alt: 'OECD Logo'
      },
      { 
        name: 'Uber', 
        image: '/images/partner_logos/Uber_logo_2018.png',
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
        description: 'Proven track record of advising governments, Fortune 500s, and startups on responsible AI, data governance, and emerging tech policy.',
      },
      {
        title: 'Global Perspectives',
        description: 'Experience working with international organizations to shape global standards and best practices.',
      },
      {
        title: 'Demonstrated Outcomes',
        description: 'Trusted by leading organizations to deliver actionable insights, drive compliance, and enable responsible innovation in AI and technology.',
      },
    ],
  },

  // Contact CTA section
  contactCTA: {
    title: 'Ready to Transform Your Organization?',
    description: "Let's discuss how our expertise in AI policy, technology governance, and regulatory compliance can help your organization navigate the complexities of the digital age.",
    buttons: {
      primary: { text: 'Contact Us', href: '/contact' },
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
        description: 'Chloe Autio is a technology policy expert with nearly a decade of experience advising organizations on AI policy and governance. Through her practice Autio Strategies, she provides strategic guidance to clients including government bodies, Fortune 50 companies, large AI labs and startups, and leading trade associations. Her advice helps organizations develop clear policy positions, enhance engagement and internal strategies, and anticipate regulatory implications. Chloe\'s consultancy is built on a solid foundation of experience, including her pivotal role in shaping Intel Corps emerging technology policy portfolio and developing their Responsible AI (RAI) program from its beginning.',
        bio: 'Chloe is an Adjunct AI Policy Advisor at the Institute for Security and Technology, a Faculty Lecturer at the Future of Privacy Forum, and board member of Humane Intelligence. Her insights are frequently sought after by both government and civil society organizations, and her expertise has been highlighted in prominent media outlets such as the Wall Street Journal, Axios, POLITICO, and Bloomberg, among others. She holds an economics degree from UC Berkeley, where she studied a range of topics related to technology policy, data ethics, and the social implications of computing. Chloe resides in the Washington, D.C. area with her husband and stepdaughter.',
        image: {
          src: '/images/headshot/optimized/autio_headshot.webp',
          alt: 'Chloe Autio, Founder & CEO of Autio Strategies',
        },
      },
      samuel: {
        name: 'Samuel Wells',
        title: 'Policy Manager',
        description: 'Samuel Wells holds a wealth of policy and engagement experience at the intersection of science, technology, and government. Before joining Autio Strategies, he served in the White House on Vice President Kamala Harris\' team. Prior to that, Sam held a range of research and policy roles, including as a research assistant at the University of Chicago\'s Health Lab, where he contributed to the Transform911 initiative aimed at modernizing the nation\'s emergency response system. He has also interned for multiple members of Congress, the Office of the Science and Technology Adviser to the Secretary of State, and the Director of National Intelligence\'s Private Sector Group. Sam holds a BA in Public Policy & Leadership from the University of Virginia.',
        image: {
          src: '/images/headshot/optimized/wells_headshot.webp',
          alt: 'Samuel Wells, Policy Manager at Autio Strategies',
        },
      },
    },
    cta: {
      title: 'Partner with Our Team',
      description: 'Connect with our team to discuss how our combined expertise can help your organization navigate the evolving landscape of AI policy and governance.',
      button: { text: 'Contact Us', href: '/contact' },
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
      email: { text: 'Email', href: 'mailto:info@autiostrategies.com' },
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
      netlifyName: 'contact',
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
      netlifyName: 'newsletter',
      description: 'Stay updated with the latest insights in AI policy and technology governance.',
      placeholder: 'Enter your email address',
      button: { text: 'Subscribe', loading: 'Subscribing...' },
      success: 'Thank you for subscribing!',
      error: 'Please enter a valid email address.',
    },
  },

  // Common UI elements
  ui: {
    buttons: {
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      getStarted: 'Get Started',
      readMore: 'Read More',
      exploreAllServices: 'Explore All Services',
      learnAboutTeam: 'Learn About Our Team',
      exploreServices: 'Explore Our Services',
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
    cta: {
      readyToGetStarted: 'Ready to Get Started?',
      needExpertGuidance: 'Need Expert Guidance?',
      discussExpertise: "Let's discuss how our expertise can help your organization achieve its goals.",
      discussServices: "Let's discuss how our comprehensive suite of services can help your organization navigate AI policy and governance challenges.",
      putInsightsIntoAction: "Ready to put these insights into action? Let's discuss how our expertise can help your organization navigate AI policy and governance challenges.",
    },
    pages: {
      contact: {
        title: 'Contact Us',
      },
      services: {
        title: 'Our Services',
        description: 'Autio Strategies offers a comprehensive suite of services designed to empower government and enterprise clients to navigate the evolving landscape of AI and technology policy with confidence and clarity.',
      },
      resources: {
        title: 'Resources & Thought Leadership',
        description: 'Explore our latest articles, policy briefs, case studies, and curated resources on AI policy, governance, and regulatory topics for government and enterprise leaders.',
      },
    },
    navigation: {
      backToResources: '← Back to Resources',
    },
    sharing: {
      shareArticle: 'Share this article:',
      shareCaseStudy: 'Share this case study:',
      shareBrief: 'Share this brief:',
      shareOnLinkedIn: 'Share on LinkedIn',
    },
    sections: {
      relatedArticles: 'Related Articles',
      featuredArticles: 'Featured Articles',
      policyBriefs: 'Policy Briefs',
      caseStudies: 'Case Studies',
      resourceLibrary: 'Resource Library',
      serviceDetails: 'Service Details',
      keyBenefits: 'Key Benefits',
      ourMethodology: 'Our Methodology',
      relatedServices: 'Related Services',
    },
  },
}; 