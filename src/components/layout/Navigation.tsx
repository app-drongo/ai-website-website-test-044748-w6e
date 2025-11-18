'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero', section: 'hero' },
    { label: 'Pricing', href: '#pricing', section: 'pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pricing'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, section: string) => {
    setActiveSection(section);
    setIsOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={e => {
                e.preventDefault();
                handleNavClick('#hero', 'hero');
              }}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            >
              <span data-editable="logoText">TechSite</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => (
                <a
                  key={item.section}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.href, item.section);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.section
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#pricing', 'pricing')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span data-editable="ctaText">Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
          {navItems.map(item => (
            <a
              key={item.section}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                handleNavClick(item.href, item.section);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeSection === item.section
                  ? 'text-primary bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('#pricing', 'pricing')}
              className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-md text-base font-medium hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span data-editable="ctaText">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
