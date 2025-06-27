import { Metadata } from 'next';
import { siteContent } from '@/data/content';
import { siteMetadata } from '@/data/metadata';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: siteMetadata.pages.privacy.title,
  description: siteMetadata.pages.privacy.description,
  keywords: siteMetadata.pages.privacy.keywords,
  openGraph: {
    title: siteMetadata.pages.privacy.title,
    description: siteMetadata.pages.privacy.description,
    url: siteMetadata.pages.privacy.url,
    siteName: siteMetadata.default.siteName,
    images: [siteMetadata.default.image],
    locale: siteMetadata.default.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.pages.privacy.title,
    description: siteMetadata.pages.privacy.description,
    images: [siteMetadata.default.image.url],
  },
};

export default function PrivacyPage() {
  const { privacy } = siteContent;
  const { hero, lastUpdated, sections } = privacy;

  // Helper function to render content with line breaks
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('•')) {
        return (
          <li key={index} className="text-gray-700 leading-relaxed ml-4 list-disc">
            {trimmedLine.substring(1).trim()}
          </li>
        );
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-2">
          {line}
        </p>
      );
    });
  };

  // Helper function to render list items with nested content
  const renderListItem = (item: string) => {
    const lines = item.split('\n');
    const firstLine = lines[0];
    const remainingLines = lines.slice(1);
    
    return (
      <div className="space-y-2">
        <div className="font-semibold text-gray-900">{firstLine}</div>
        {remainingLines.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            {remainingLines.map((line, index) => {
              const trimmedLine = line.trim();
              if (trimmedLine.startsWith('•')) {
                return (
                  <li key={index} className="leading-relaxed">
                    {trimmedLine.substring(1).trim()}
                  </li>
                );
              }
              return (
                <li key={index} className="leading-relaxed">
                  {trimmedLine}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        pageName="privacy"
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Last Updated */}
        <div className="text-sm text-gray-500 mb-8 text-center whitespace-pre-line">
          {lastUpdated}
        </div>

        {/* Privacy Policy Sections */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.introduction.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.introduction.content)}
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.informationWeCollect.title}
            </h2>
            {sections.informationWeCollect.content && (
              <div className="text-gray-700 leading-relaxed mb-6">
                {renderContent(sections.informationWeCollect.content)}
              </div>
            )}
            <div className="space-y-6">
              {sections.informationWeCollect.subsections.map((subsection, index) => (
                <div key={index} className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {subsection.title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {renderContent(subsection.content)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.howWeUseInformation.title}
            </h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              {renderContent(sections.howWeUseInformation.content)}
            </div>
            <div className="space-y-4 text-gray-700">
              {sections.howWeUseInformation.list.map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {renderListItem(item)}
                </div>
              ))}
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.legalBasis.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.legalBasis.content)}
            </div>
          </section>

          {/* Information Sharing and Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.informationSharing.title}
            </h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              {renderContent(sections.informationSharing.content)}
            </div>
            <div className="space-y-4 text-gray-700">
              {sections.informationSharing.list.map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {renderListItem(item)}
                </div>
              ))}
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.dataRetention.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.dataRetention.content)}
            </div>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.yourRights.title}
            </h2>
            {sections.yourRights.content && (
              <div className="text-gray-700 leading-relaxed mb-4">
                {renderContent(sections.yourRights.content)}
              </div>
            )}
            <div className="space-y-4 text-gray-700">
              {sections.yourRights.list.map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {renderListItem(item)}
                </div>
              ))}
            </div>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.internationalTransfers.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.internationalTransfers.content)}
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.dataSecurity.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.dataSecurity.content)}
            </div>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.cookies.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.cookies.content)}
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.children.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.children.content)}
            </div>
          </section>

          {/* California Privacy Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.californiaPrivacy.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.californiaPrivacy.content)}
            </div>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.changes.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(sections.changes.content)}
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sections.contact.title}
            </h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              {renderContent(sections.contact.content)}
            </div>
            <div className="space-y-2">
              {sections.contact.details.map((detail, index) => {
                // Check if this detail contains a website URL
                if (detail.includes('Website:')) {
                  const websiteUrl = detail.replace('Website: ', '');
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      Website:{' '}
                      <a 
                        href={`https://${websiteUrl}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {websiteUrl}
                      </a>
                    </p>
                  );
                }
                // Check if this detail contains an email
                if (detail.includes('Email:')) {
                  const email = detail.replace('Email: ', '');
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      Email:{' '}
                      <a 
                        href={`mailto:${email}`}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {email}
                      </a>
                    </p>
                  );
                }
                // Default rendering for other details
                return (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {detail}
                  </p>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 