import React from 'react';

export default function Footer() {
  const footerConfig = {
    companyName: 'TechTest',
    description: 'Building the future with modern technology solutions.',
    sections: {
      company: {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ],
      },
    },
    copyright: '© 2024 TechTest. All rights reserved.',
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground">
                <span data-editable="companyName">{footerConfig.companyName}</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              <span data-editable="description">{footerConfig.description}</span>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              <span data-editable="companyTitle">{footerConfig.sections.company.title}</span>
            </h4>
            <ul className="space-y-3">
              {footerConfig.sections.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    data-editable-href={`companyLink${index}Href`}
                    data-href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span data-editable={`companyLink${index}Label`}>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              <span data-editable="legalTitle">{footerConfig.sections.legal.title}</span>
            </h4>
            <ul className="space-y-3">
              {footerConfig.sections.legal.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    data-editable-href={`legalLink${index}Href`}
                    data-href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span data-editable={`legalLink${index}Label`}>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              <span data-editable="copyright">{footerConfig.copyright}</span>
            </p>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 sm:mt-0 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
