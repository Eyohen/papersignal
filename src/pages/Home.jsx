//pages/Home.jsx
import React, { useState } from 'react';
import { CheckIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";


const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "Live Customer Chat",
      description: "Enterprise-grade messaging with advanced routing, real-time collaboration, and comprehensive chat analytics."
    },
    {
      title: "Email API Platform",
      description: "Scalable email infrastructure with 99.9% deliverability, advanced templating, and comprehensive tracking."
    },
    {
      title: "Intelligent Notifications",
      description: "Smart notification engine with advanced targeting, A/B testing, and cross-channel orchestration."
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into customer interactions with real-time dashboards and customizable reporting."
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 compliant infrastructure with end-to-end encryption and advanced access controls."
    },
    {
      title: "Powerful Integrations",
      description: "Connect with your existing tools through our extensive API and pre-built integrations."
    }
  ];

  const plans = [
    {
      name: "Starter",
      subtitle: "For growing teams",
      price: "$0",
      period: "/month",
      description: "Everything you need to get started",
      features: [
        "Up to 1,000 messages/month",
        "Chat history limited to 24 hrs",
        "Email API (1,000 emails/month)",
        "Basic analytics",
        "1 seat"
      ],
      limitations: [
        "No File sharing",
        "No customization",
        "No audio calls",
        "Community support only"
      ],
      buttonText: "Get Started Free",
      outlined: true
    },
    {
      name: "Essential",
      subtitle: "Most popular",
      price: "$16",
      period: "/month",
      description: "Advanced features for scaling businesses",
      features: [
        "Up to 10,000 messages/month",
        "2 seats",
        "Audio calls",
        "Email API (unlimited emails/month)",
        "Priority support",
        "File Sharing",
        "Custom branding",
        "Advanced analytics & reporting",
      ],
      limitations: [],
      buttonText: "Start Essential",
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions with enterprise support",
      features: [
        "Unlimited messages",
        "White-label solution",
        "Custom integrations",
        "Dedicated success manager",
        "SLA guarantees",
        "Advanced security features",
        "Custom workflows",
        "24/7 phone support"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      outlined: true
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<100ms", label: "API Response" },
    { value: "1M+", label: "Messages Daily" },
    { value: "2,500+", label: "Companies Trust Us" }
  ];

  const testimonials = [
    {
      quote: "Papersignal transformed how we handle customer communications. The API is incredibly robust and the chat features are exactly what we needed.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
    },
    {
      quote: "The email deliverability and analytics have been game-changing for our customer engagement campaigns. Highly recommended.",
      author: "Marcus Rodriguez",
      role: "Head of Growth, DataSync",
    }
  ];

  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Salesforce", logo: "🏢" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Stripe", logo: "💳" },
    { name: "Zapier", logo: "⚡" },
    { name: "Webhooks", logo: "🔗" }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2.5">
              <IoMailOutline color='#1a1a1a' size={20}/>
              <span className="text-[15px] font-semibold text-[#1a1a1a]">Papersignal</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-[13px] font-medium text-[#6b7280] hover:text-[#1a1a1a]">Features</a>
              <a href="#pricing" className="text-[13px] font-medium text-[#6b7280] hover:text-[#1a1a1a]">Pricing</a>
              <a href="/docs" className="text-[13px] font-medium text-[#6b7280] hover:text-[#1a1a1a]">Docs</a>
              <Link to={'/login'} className="text-[13px] font-medium text-[#6b7280] hover:text-[#1a1a1a]">
                Sign In
              </Link>
              <Link to={'/signup'} className="bg-[#1a1a1a] text-white px-3.5 py-1.5 rounded-md text-[13px] font-medium hover:bg-[#333]">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Bars3Icon className="w-5 h-5 text-[#1a1a1a]" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <a href="#features" className="text-[13px] font-medium text-[#6b7280]">Features</a>
                <a href="#pricing" className="text-[13px] font-medium text-[#6b7280]">Pricing</a>
                <a href="/docs" className="text-[13px] font-medium text-[#6b7280]">Docs</a>
                <hr className="border-gray-200 my-1" />
                <Link to={'/login'} className="text-[13px] font-medium text-[#6b7280]">Sign In</Link>
                <Link to={'/signup'} className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md text-[13px] font-medium text-center">
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-[1080px] mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-medium text-[#6b7280] mb-4">Trusted by 2,500+ companies</p>

            <h1 className="text-[40px] lg:text-[52px] font-semibold text-[#1a1a1a] leading-[1.1] tracking-tight mb-5">
              Customer communication infrastructure for developers
            </h1>

            <p className="text-[17px] text-[#4b5563] leading-relaxed mb-8 max-w-[520px]">
              Build powerful customer experiences with APIs for chat,
              email, and notifications. Designed for engineering teams at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link to={'/signup'} className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#333] inline-flex items-center justify-center gap-2">
                Start Building Free
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
              <a href="/docs" className="border border-gray-300 text-[#4b5563] px-5 py-2.5 rounded-md text-[14px] font-medium hover:border-gray-400 hover:text-[#1a1a1a] inline-flex items-center justify-center">
                View Documentation
              </a>
            </div>

            {/* Code Example */}
            <div className="rounded-lg border border-gray-800 overflow-hidden">
              <div className="bg-[#161b22] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between">
                <span className="text-[12px] text-[#6b7280] font-medium">Quick Start</span>
                <span className="text-[11px] text-[#6b7280] bg-[#0d1117] px-2 py-0.5 rounded">cURL</span>
              </div>
              <div className="bg-[#0d1117] p-4">
                <code className="text-[13px] leading-6 text-[#7ee787]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <div>curl -X POST https://api.papersignal.com/v1/messages \</div>
                  <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                  <div className="ml-4">-H "Content-Type: application/json" \</div>
                  <div className="ml-4">-d '&#123;"to": "user@example.com", "message": "Hello!"&#125;'</div>
                </code>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-[28px] font-semibold text-[#1a1a1a] mb-1">{stat.value}</div>
                <div className="text-[13px] text-[#6b7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b border-gray-200">
        <div className="max-w-[1080px] mx-auto px-6 py-20 lg:py-24">
          <div className="mb-12 max-w-[520px]">
            <h2 className="text-[28px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">
              Everything you need to build exceptional customer experiences
            </h2>
            <p className="text-[15px] text-[#6b7280]">
              Comprehensive APIs and tools designed for modern development teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-2">{feature.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="border-b border-gray-200 bg-[#f9fafb]">
        <div className="max-w-[1080px] mx-auto px-6 py-20 lg:py-24">
          <div className="mb-12 max-w-[520px]">
            <h2 className="text-[28px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">
              Trusted by engineering teams worldwide
            </h2>
            <p className="text-[15px] text-[#6b7280]">See what industry leaders are saying about Papersignal.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-[15px] text-[#4b5563] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f3f4f6] rounded-full flex items-center justify-center text-[12px] font-semibold text-[#6b7280]">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#1a1a1a]">{testimonial.author}</div>
                    <div className="text-[12px] text-[#9ca3af]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration logos */}
          <div>
            <p className="text-[13px] font-medium text-[#9ca3af] uppercase tracking-wide mb-4">Integrations</p>
            <div className="flex flex-wrap items-center gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center gap-2 text-[14px] text-[#6b7280]">
                  <span className="text-lg">{integration.logo}</span>
                  <span className="font-medium">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-gray-200">
        <div className="max-w-[1080px] mx-auto px-6 py-20 lg:py-24">
          <div className="mb-12 max-w-[520px]">
            <h2 className="text-[28px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-[15px] text-[#6b7280]">
              Start free and scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[960px]">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg p-6 border ${plan.popular
                ? 'border-[#1a1a1a]'
                : 'border-gray-200'
                }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded text-[11px] font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-1">{plan.name}</h3>
                  <p className="text-[13px] text-[#9ca3af] mb-4">{plan.subtitle}</p>
                  <div className="mb-2">
                    <span className="text-[32px] font-semibold text-[#1a1a1a]">{plan.price}</span>
                    {plan.period && <span className="text-[14px] text-[#9ca3af] ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-[13px] text-[#6b7280]">{plan.description}</p>
                </div>

                <div className="flex flex-col gap-2.5 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-[#4b5563]">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start gap-2.5">
                      <XMarkIcon className="w-4 h-4 text-[#d1d5db] flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-[#9ca3af]">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-2.5 px-4 rounded-md text-[13px] font-medium ${plan.popular
                  ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                  : 'border border-gray-300 text-[#4b5563] hover:border-gray-400 hover:text-[#1a1a1a]'
                  }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-[1080px] mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-[480px]">
            <h2 className="text-[28px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-[15px] text-[#6b7280] mb-6">
              Join thousands of developers building better customer experiences with Papersignal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to={'/signup'} className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#333] inline-flex items-center justify-center">
                Start Building Free
              </Link>
              <a href="mailto:sales@papersignal.com" className="border border-gray-300 text-[#4b5563] px-5 py-2.5 rounded-md text-[14px] font-medium hover:border-gray-400 hover:text-[#1a1a1a] inline-flex items-center justify-center">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-[1080px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-3">Product</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Live Chat API</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Email API</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Notifications</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Analytics</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Pricing</a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-3">Developers</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Documentation</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">API Reference</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">SDKs</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Status Page</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Changelog</a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-3">Company</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">About</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Blog</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Careers</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Press</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Partners</a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-3">Support</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Help Center</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Contact</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Community</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Privacy</a>
                <a href="#" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a]">Terms</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-3 md:mb-0">
              <IoMailOutline color='#1a1a1a' size={16}/>
              <span className="text-[14px] font-semibold text-[#1a1a1a]">Papersignal</span>
            </div>
            <p className="text-[12px] text-[#9ca3af]">&copy; 2025 Papersignal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
