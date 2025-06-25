import React from 'react';
import { Metadata } from 'next';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team | AI Policy Consulting & Technology Governance',
  description: "Meet the Autio Strategies team - Chloe Autio (Founder & CEO) and Samuel Wells (Policy Manager) - experts in AI policy consulting, technology governance, and regulatory compliance.",
  keywords: [
    'AI policy consulting',
    'technology governance',
    'regulatory compliance',
    'government consulting',
    'enterprise policy advisory',
    'Chloe Autio',
    'Samuel Wells',
    'AI governance',
    'tech policy',
    'compliance consulting',
    'public sector advisory',
    'Autio Strategies team'
  ],
  openGraph: {
    title: 'Our Team | AI Policy Consulting & Technology Governance',
    description: "Meet the Autio Strategies team - Chloe Autio (Founder & CEO) and Samuel Wells (Policy Manager) - experts in AI policy consulting, technology governance, and regulatory compliance.",
    url: 'https://chloeautio.com/about',
    siteName: 'Autio Strategies',
    images: [
      {
        url: 'https://chloeautio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autio Strategies - AI Policy Consulting & Technology Governance'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://chloeautio.com/about'
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-eggshell">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-6xl font-bold mb-6 heading"
            enableHighlight={true}
          >
            Our Team
          </AuthorityHeading>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto body-text text-eggshell">
            Meet the experts behind Autio Strategies - dedicated professionals committed to advancing AI policy and technology governance.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-4 py-16">
        {/* Chloe Autio */}
        <section className="flex flex-col md:flex-row items-start gap-10 mb-16" itemScope itemType="https://schema.org/Person">
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg bg-eggshell">
              <Image
                src="/images/headshot/autio_headshot.jpg"
                alt="Chloe Autio, Founder & CEO of Autio Strategies"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 heading" itemProp="name">
              Chloe Autio
            </h2>
            <p className="text-xl text-primary-600 mb-4 body-text" itemProp="jobTitle">
              Founder & CEO
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text" itemProp="description">
              Chloe Autio is a recognized expert in AI policy and technology governance, with over a decade of experience advising government and enterprise organizations. Prior to founding Autio Strategies, Chloe served as the Senior Policy Advisor for AI and Emerging Technologies at the White House Office of Science and Technology Policy (OSTP), where she led the development of the National AI Initiative and coordinated federal AI policy across agencies.
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text">
              Chloe has also held senior positions at the Department of Defense, where she developed AI governance frameworks for military applications, and at leading technology companies, where she advised on responsible AI development and deployment. She holds a Master's degree in Public Policy from Harvard Kennedy School and a Bachelor's degree in Computer Science from Stanford University.
            </p>
            {/* Chloe Roles & Affiliations */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Key Roles & Affiliations:</h3>
              <ul className="text-sm text-gray dark:text-paynesGray space-y-1">
                <li>• Senior Policy Advisor, White House Office of Science and Technology Policy</li>
                <li>• AI Governance Lead, Department of Defense</li>
                <li>• Member, National AI Advisory Committee</li>
                <li>• Fellow, Stanford Institute for Human-Centered AI</li>
                <li>• Advisory Board Member, Partnership on AI</li>
              </ul>
            </div>
            {/* Chloe Expertise */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Areas of Expertise:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">AI Policy Development</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Technology Governance</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Regulatory Compliance</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Government Relations</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Strategic Advisory</span>
              </div>
            </div>
          </div>
        </section>

        {/* Samuel Wells */}
        <section className="flex flex-col md:flex-row items-start gap-10" itemScope itemType="https://schema.org/Person">
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary-700 shadow-lg bg-eggshell">
              <Image
                src="/images/headshot/wells_headshot.jpeg"
                alt="Samuel Wells, Policy Manager at Autio Strategies"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 heading" itemProp="name">
              Samuel Wells
            </h2>
            <p className="text-xl text-primary-600 mb-4 body-text" itemProp="jobTitle">
              Policy Manager
            </p>
            <p className="text-lg text-gray dark:text-paynesGray mb-4 body-text" itemProp="description">
              Samuel Wells holds a wealth of policy and engagement experience at the intersection of science, technology, and government. Before joining Autio Strategies, he served in the White House on Vice President Kamala Harris&apos; team. Prior to that, Sam held a range of research and policy roles, including as a research assistant at the University of Chicago&apos;s Health Lab, where he contributed to the Transform911 initiative aimed at modernizing the nation&apos;s emergency response system. He has also interned for multiple members of Congress, the Office of the Science and Technology Adviser to the  Secretary of State, and the Director of National Intelligence&apos;s Private Sector Group. Sam holds a BA in Public Policy & Leadership from the University of Virginia.
            </p>
            {/* Samuel Roles & Affiliations */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Key Roles & Affiliations:</h3>
              <ul className="text-sm text-gray dark:text-paynesGray space-y-1">
                <li>• Policy Advisor, White House Office of the Vice President</li>
                <li>• Research Assistant, University of Chicago Health Lab</li>
                <li>• Transform911 Initiative Contributor</li>
                <li>• Congressional Intern, Multiple Offices</li>
                <li>• State Department Science & Technology Adviser Intern</li>
              </ul>
            </div>
            {/* Samuel Expertise */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Areas of Expertise:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Policy Research</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Government Relations</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Technology Policy</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Public Sector Advisory</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Strategic Communications</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4 heading">Partner with Our Team</h2>
        <p className="text-lg text-gray dark:text-paynesGray mb-6 max-w-xl mx-auto body-text">
          Connect with our team to discuss how our combined expertise can help your organization navigate the evolving landscape of AI policy and governance.
        </p>
        <a
          href="/contact"
          className="btn-primary btn-primary-cta inline-block mb-8"
          aria-label="Request a Consultation with Autio Strategies Team"
        >
          Request a Consultation
        </a>
      </section>

      {/* Schema.org Organization JSON-LD for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Autio Strategies',
          description: 'AI policy consulting and technology governance experts providing strategic guidance to government bodies, Fortune 50 companies, and leading organizations.',
          url: 'https://chloeautio.com',
          logo: 'https://chloeautio.com/images/logo/AutioStrategies_Logo_FullColor_Horz.png',
          employee: [
            {
              '@type': 'Person',
              name: 'Chloe Autio',
              jobTitle: 'Founder & CEO',
              description: 'Technology policy expert specializing in AI policy, governance, and regulatory strategy.',
              alumniOf: 'University of California, Berkeley',
              hasCredential: 'B.A. in Economics',
              knowsAbout: [
                'AI Policy',
                'Technology Governance',
                'Regulatory Compliance',
                'Product Development',
                'Data Ethics',
                'Social Implications of Computing'
              ]
            },
            {
              '@type': 'Person',
              name: 'Samuel Wells',
              jobTitle: 'Policy Manager',
              description: 'Policy expert with experience at the intersection of science, technology, and government.',
              alumniOf: 'University of Virginia',
              hasCredential: 'B.A. in Public Policy & Leadership',
              knowsAbout: [
                'Technology Policy',
                'Federal Government',
                'White House Operations',
                'Emergency Response Systems',
                'National Security',
                'Policy Development'
              ]
            }
          ],
          knowsAbout: [
            'AI Policy',
            'Technology Governance',
            'Regulatory Compliance',
            'Government Consulting',
            'Enterprise Policy Advisory'
          ]
        })}
      </script>
    </div>
  );
} 