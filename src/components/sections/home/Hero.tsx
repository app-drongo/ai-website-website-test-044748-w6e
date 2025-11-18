'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, Users, Award } from 'lucide-react';

interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  videoUrl: string;
  stats: {
    users: string;
    rating: string;
    awards: string;
  };
}

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const config: HeroConfig = {
    title: 'Build the Future with AI',
    subtitle: 'Revolutionary Technology',
    description:
      'Transform your business with cutting-edge AI solutions. Experience the power of intelligent automation and data-driven insights that scale with your ambitions.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'Watch Demo',
    primaryCtaHref: '#pricing',
    secondaryCtaHref: '#demo',
    videoUrl: 'https://example.com/demo-video',
    stats: {
      users: '50K+',
      rating: '4.9',
      awards: '12',
    },
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad1)"/><circle cx="200" cy="200" r="100" fill="white" opacity="0.1"/><circle cx="800" cy="150" r="80" fill="white" opacity="0.1"/><circle cx="1000" cy="400" r="120" fill="white" opacity="0.1"/><circle cx="300" cy="600" r="90" fill="white" opacity="0.1"/></svg>')`,
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary" data-editable="subtitle">
              {config.subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span
              className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
              data-editable="title"
            >
              {config.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            <span data-editable="description">{config.description}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <button
              onClick={() => scrollToSection(config.primaryCtaHref)}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span data-editable="primaryCta">{config.primaryCta}</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12" />
            </button>

            <button
              onClick={() => setIsVideoPlaying(true)}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="group flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span data-editable="secondaryCta">{config.secondaryCta}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground" data-editable="statsUsers">
                  {config.stats.users}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground" data-editable="statsRating">
                  {config.stats.rating}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground" data-editable="statsAwards">
                  {config.stats.awards}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#pricing')}
            className="p-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse animation-delay-1000" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse animation-delay-2000" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse animation-delay-3000" />

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <div className="aspect-video bg-card rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-card-foreground">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg">Demo video would play here</p>
                  <p className="text-sm text-muted-foreground mt-2">Click anywhere to close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
