//pages/Home.jsx
import React, { useState } from 'react';
import { CheckIcon, XMarkIcon, Bars3Icon, ChevronRightIcon } from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BellIcon,
  SparklesIcon,
  ArrowRightIcon,
  PlayIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
// import logo1 from '../assets/logo3.png'
import logo from '../assets/logo.png'
import { IoMailOutline } from "react-icons/io5";
import { URL } from '../url'
import axios from 'axios';


const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate()

  const features = [
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Live Customer Chat",
      description: "Enterprise-grade messaging with advanced routing, real-time collaboration, and comprehensive chat analytics."
    },
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: "Email API Platform",
      description: "Scalable email infrastructure with 99.9% deliverability, advanced templating, and comprehensive tracking."
    },
    {
      icon: <BellIcon className="w-8 h-8" />,
      title: "Intelligent Notifications",
      description: "Smart notification engine with advanced targeting, A/B testing, and cross-channel orchestration."
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Deep insights into customer interactions with real-time dashboards and customizable reporting."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant infrastructure with end-to-end encryption and advanced access controls."
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
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
      buttonStyle: "border-2 border-[#27214e] text-[#27214e] hover:bg-[#27214e] hover:text-white"
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
      buttonStyle: "bg-[#27214e] text-white hover:bg-[#1a1735]",
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
      buttonStyle: "border-2 border-[#27214e] text-[#27214e] hover:bg-[#27214e] hover:text-white"
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
      company: "TechFlow"
    },
    {
      quote: "The email deliverability and analytics have been game-changing for our customer engagement campaigns. Highly recommended.",
      author: "Marcus Rodriguez",
      role: "Head of Growth, DataSync",
      company: "DataSync"
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
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Bricolage Grotesque, system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg flex items-center justify-center">
                <IoMailOutline color='#800080' size={26}/>
                {/* <img src={logo} className="w-16" /> */}
              </div>
              <span className="text-2xl font-bold text-[#27214e]">Papersignal</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Documentation</a>
              <a href="#support" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Support</a>
              <Link to={'/login'} className="text-[#27214e] hover:text-[#1a1735] font-medium">
                Sign In
              </Link>
              <Link to={'/signup'} className="bg-[#27214e] text-white px-6 py-2.5 rounded-lg hover:bg-[#1a1735] transition-all duration-200 font-medium">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Bars3Icon className="w-6 h-6 text-[#27214e]" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-[#27214e] font-medium">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-[#27214e] font-medium">Pricing</a>
                <a href="#docs" className="text-gray-600 hover:text-[#27214e] font-medium">Documentation</a>
                <a href="#support" className="text-gray-600 hover:text-[#27214e] font-medium">Support</a>
                <hr className="border-gray-200" />
                <button className="text-[#27214e] hover:text-[#1a1735] font-medium text-left">
                  Sign In
                </button>
                <button className="bg-[#27214e] text-white px-6 py-2.5 rounded-lg w-full font-medium">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#c4e6ff]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#c4e6ff]/30 border border-[#c4e6ff] mb-8">
              <SparklesIcon className="w-4 h-4 text-[#27214e] mr-2" />
              <span className="text-sm font-semibold text-[#27214e]">Trusted by 2,500+ companies worldwide</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Customer Communication
              <br />
              <span className="text-[#27214e]">Platform for Developers</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build powerful customer experiences with our comprehensive suite of APIs for chat,
              email, and notifications. Trusted by engineering teams at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-[#27214e] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1a1735] transition-all duration-200 flex items-center justify-center">
                Start Building Free
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-[#27214e] hover:text-[#27214e] transition-all duration-200 flex items-center justify-center">
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                View Documentation
              </button>
            </div>

            {/* Code Example */}
            <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-6 text-left mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Quick Start</span>
                <span className="text-[#c4e6ff] text-xs bg-gray-800 px-2 py-1 rounded">cURL</span>
              </div>
              <code className="text-green-400 text-sm">
                <div>curl -X POST https://api.papersignal.com/v1/messages \\</div>
                <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \\</div>
                <div className="ml-4">-H "Content-Type: application/json" \\</div>
                <div className="ml-4">-d '&#123;"to": "user@example.com", "message": "Hello!"&#125;'</div>
              </code>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#27214e] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Everything you need to build exceptional customer experiences
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive APIs and tools designed for modern development teams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#c4e6ff] hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#c4e6ff] rounded-lg flex items-center justify-center mb-4 text-[#27214e] group-hover:bg-[#27214e] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by engineering teams worldwide
            </h2>
            <p className="text-gray-600">See what industry leaders are saying about Papersignal</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#c4e6ff] rounded-full flex items-center justify-center text-[#27214e] font-semibold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration logos */}
          <div className="text-center">
            <p className="text-gray-600 mb-8">Integrates with your favorite tools</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center space-x-3 px-6 py-4 rounded-lg">
                  <span className="text-2xl">{integration.logo}</span>
                  <span className="font-medium text-gray-700">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free and scale as you grow. No hidden fees or surprise charges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${plan.popular
                ? 'border-[#27214e] shadow-lg shadow-[#27214e]/10'
                : 'border-gray-200 hover:border-gray-300'
                }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#27214e] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start opacity-60">
                      <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#27214e]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-[#c4e6ff] mb-8">
            Join thousands of developers building better customer experiences with Papersignal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#27214e] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
              Start Building Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#27214e] transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white cursor-pointer">Live Chat API</div>
                <div className="hover:text-white cursor-pointer">Email API</div>
                <div className="hover:text-white cursor-pointer">Notifications</div>
                <div className="hover:text-white cursor-pointer">Analytics</div>
                <div className="hover:text-white cursor-pointer">Pricing</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white cursor-pointer">Documentation</div>
                <div className="hover:text-white cursor-pointer">API Reference</div>
                <div className="hover:text-white cursor-pointer">SDKs</div>
                <div className="hover:text-white cursor-pointer">Status Page</div>
                <div className="hover:text-white cursor-pointer">Changelog</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white cursor-pointer">About</div>
                <div className="hover:text-white cursor-pointer">Blog</div>
                <div className="hover:text-white cursor-pointer">Careers</div>
                <div className="hover:text-white cursor-pointer">Press</div>
                <div className="hover:text-white cursor-pointer">Partners</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white cursor-pointer">Help Center</div>
                <div className="hover:text-white cursor-pointer">Contact</div>
                <div className="hover:text-white cursor-pointer">Community</div>
                <div className="hover:text-white cursor-pointer">Privacy</div>
                <div className="hover:text-white cursor-pointer">Terms</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#27214e] rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Papersignal</span>
            </div>
            <p className="text-gray-400">© 2025 Papersignal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;






