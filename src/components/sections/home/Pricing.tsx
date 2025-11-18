'use client';

import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Crown } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular: boolean;
  icon: React.ReactNode;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'accent';
}

interface PricingConfig {
  title: string;
  subtitle: string;
  billingToggle: {
    monthly: string;
    yearly: string;
    yearlyDiscount: string;
  };
  tiers: PricingTier[];
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const config: PricingConfig = {
    title: 'Choose Your Plan',
    subtitle: 'Start free and scale as you grow. No hidden fees, cancel anytime.',
    billingToggle: {
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: 'Save 20%',
    },
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: isYearly ? '$0' : '$0',
        period: 'forever',
        description: 'Perfect for getting started with basic features',
        features: [
          'Up to 3 projects',
          'Basic analytics',
          'Community support',
          '1GB storage',
          'Standard templates',
        ],
        limitations: ['Limited customization', 'Basic support only'],
        popular: false,
        icon: <Zap className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonVariant: 'secondary',
      },
      {
        id: 'pro',
        name: 'Professional',
        price: isYearly ? '$19' : '$24',
        period: isYearly ? '/month' : '/month',
        description: 'Best for growing businesses and teams',
        features: [
          'Unlimited projects',
          'Advanced analytics',
          'Priority support',
          '50GB storage',
          'Premium templates',
          'Custom integrations',
          'Team collaboration',
          'API access',
        ],
        limitations: [],
        popular: true,
        icon: <Star className="w-6 h-6" />,
        buttonText: 'Start Pro Trial',
        buttonVariant: 'primary',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: isYearly ? '$49' : '$59',
        period: isYearly ? '/month' : '/month',
        description: 'Advanced features for large organizations',
        features: [
          'Everything in Pro',
          'Unlimited storage',
          '24/7 phone support',
          'Custom branding',
          'Advanced security',
          'SSO integration',
          'Dedicated manager',
          'Custom contracts',
        ],
        limitations: [],
        popular: false,
        icon: <Crown className="w-6 h-6" />,
        buttonText: 'Contact Sales',
        buttonVariant: 'accent',
      },
    ],
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Can I change my plan anytime?',
          answer:
            'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
        },
        {
          question: 'Is there a free trial?',
          answer:
            'We offer a 14-day free trial for all paid plans. No credit card required to start.',
        },
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans.',
        },
      ],
    },
  };

  const getButtonClasses = (variant: string, popular: boolean) => {
    const baseClasses =
      'w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl`;
      case 'secondary':
        return `${baseClasses} bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border`;
      case 'accent':
        return `${baseClasses} bg-accent text-accent-foreground hover:bg-accent/80 border border-border`;
      default:
        return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90`;
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 p-1 bg-muted rounded-lg max-w-xs mx-auto">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span data-editable="monthlyLabel">{config.billingToggle.monthly}</span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                isYearly
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span data-editable="yearlyLabel">{config.billingToggle.yearly}</span>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                <span data-editable="yearlyDiscount">{config.billingToggle.yearlyDiscount}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config.tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                tier.popular
                  ? 'border-2 border-primary shadow-xl scale-105'
                  : 'border border-border shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      tier.popular
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <span data-editable={`tier${index}Name`}>{tier.name}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable={`tier${index}Description`}>{tier.description}</span>
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-foreground">
                    <span data-editable={`tier${index}Price`}>{tier.price}</span>
                  </span>
                  <span className="text-muted-foreground ml-2">
                    <span data-editable={`tier${index}Period`}>{tier.period}</span>
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        <span data-editable={`tier${index}Feature${featureIndex}`}>{feature}</span>
                      </span>
                    </li>
                  ))}
                  {tier.limitations.map((limitation, limitIndex) => (
                    <li key={`limit-${limitIndex}`} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <span data-editable={`tier${index}Limitation${limitIndex}`}>
                          {limitation}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={getButtonClasses(tier.buttonVariant, tier.popular)}
                onClick={() => console.log(`Selected ${tier.name} plan`)}
              >
                <span data-editable={`tier${index}ButtonText`}>{tier.buttonText}</span>
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            <span data-editable="faqTitle">{config.faq.title}</span>
          </h3>
          <div className="space-y-4">
            {config.faq.items.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-foreground">
                    <span data-editable={`faqQuestion${index}`}>{item.question}</span>
                  </span>
                  <div
                    className={`transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      <span data-editable={`faqAnswer${index}`}>{item.answer}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h4 className="text-2xl font-bold text-foreground mb-4">
            <span data-editable="bottomCtaTitle">Still have questions?</span>
          </h4>
          <p className="text-muted-foreground mb-6">
            <span data-editable="bottomCtaSubtitle">
              Our team is here to help you choose the right plan for your needs.
            </span>
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            <span data-editable="bottomCtaButton">Contact Support</span>
          </button>
        </div>
      </div>
    </section>
  );
}
