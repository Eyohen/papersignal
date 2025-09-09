// //pages/Home.jsx
// import React, { useState } from 'react';
// import { CheckIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
// import { 
//   ChatBubbleLeftRightIcon, 
//   EnvelopeIcon, 
//   BellIcon,
//   SparklesIcon,
//   ArrowRightIcon,
//   PlayIcon
// } from '@heroicons/react/24/solid';

// const Home = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState('growth');

//   const features = [
//     {
//       icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
//       title: "Live Customer Chat",
//       description: "Real-time messaging with your customers, seamless integration, and powerful chat management tools."
//     },
//     {
//       icon: <EnvelopeIcon className="w-8 h-8" />,
//       title: "Email APIs",
//       description: "Robust email automation, templates, and delivery tracking to keep your customers engaged."
//     },
//     {
//       icon: <BellIcon className="w-8 h-8" />,
//       title: "Smart Notifications",
//       description: "Push notifications and pop-up alerts to ensure no customer message goes unnoticed."
//     }
//   ];

//   const plans = [
//     {
//       name: "Starter",
//       subtitle: "Perfect for getting started",
//       price: "Free",
//       period: "forever",
//       description: "Essential features for small teams",
//       features: [
//         "Up to 100 messages/month",
//         "Basic live chat",
//         "Email support",
//         "2 team members",
//         "Basic notifications"
//       ],
//       limitations: [
//         "Limited customization",
//         "No advanced analytics",
//         "Community support only"
//       ],
//       buttonText: "Get Started Free",
//       buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
//     },
//     {
//       name: "Growth",
//       subtitle: "Most Popular",
//       price: "$16",
//       period: "per month",
//       description: "Everything you need to scale",
//       features: [
//         "Unlimited messages",
//         "Advanced live chat",
//         "Full email API access",
//         "Unlimited team members",
//         "Advanced notifications",
//         "Custom branding",
//         "Analytics dashboard",
//         "Priority support"
//       ],
//       limitations: [],
//       buttonText: "Start Growth Plan",
//       buttonStyle: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/25",
//       popular: true
//     },
//     {
//       name: "Enterprise",
//       subtitle: "For large organizations",
//       price: "Custom",
//       period: "pricing",
//       description: "Tailored solutions for enterprise needs",
//       features: [
//         "Everything in Growth",
//         "Custom integrations",
//         "Dedicated account manager",
//         "SLA guarantees",
//         "Advanced security",
//         "Custom workflows",
//         "White-label options",
//         "24/7 phone support"
//       ],
//       limitations: [],
//       buttonText: "Contact Sales",
//       buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
//     }
//   ];

//   const stats = [
//     { value: "99.9%", label: "Uptime" },
//     { value: "2.3s", label: "Response Time" },
//     { value: "50K+", label: "Messages Daily" },
//     { value: "500+", label: "Happy Customers" }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
//                 <SparklesIcon className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold text-gray-900">Papersignal</span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
//               <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
//               <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
//               <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-cyan-500/25">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <button 
//               className="md:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <Bars3Icon className="w-6 h-6 text-gray-900" />
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {mobileMenuOpen && (
//             <div className="md:hidden py-4 border-t border-gray-100">
//               <div className="flex flex-col space-y-4">
//                 <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
//                 <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
//                 <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
//                 <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg w-full">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//           <div className="text-center">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 mb-8">
//               <SparklesIcon className="w-4 h-4 text-cyan-500 mr-2" />
//               <span className="text-sm font-medium text-cyan-700">Revolutionizing B2B Customer Communication</span>
//             </div>
            
//             <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Live Chat That
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Converts</span>
//             </h1>
            
//             <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
//               Transform your customer communication with real-time messaging, powerful email APIs, 
//               and intelligent notifications. All in one platform designed for modern B2B companies.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//               <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-xl shadow-cyan-500/25 flex items-center justify-center">
//                 Start Free Trial
//                 <ArrowRightIcon className="w-5 h-5 ml-2" />
//               </button>
//               <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center">
//                 <PlayIcon className="w-5 h-5 mr-2" />
//                 Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Background gradient */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 lg:py-32 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Everything You Need to 
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Succeed</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive suite of tools helps you engage customers, automate communications, 
//               and never miss an important message.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Simple, Transparent 
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Pricing</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Choose the perfect plan for your business. Start free, scale as you grow.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {plans.map((plan, index) => (
//               <div key={index} className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
//                 plan.popular 
//                   ? 'border-cyan-400 shadow-xl shadow-cyan-500/10 scale-105' 
//                   : 'border-gray-200 hover:border-gray-300'
//               }`}>
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                     <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </div>
//                   </div>
//                 )}
                
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
//                   <p className="text-gray-600 mb-4">{plan.subtitle}</p>
//                   <div className="mb-4">
//                     <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
//                     {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
//                   </div>
//                   <p className="text-gray-600">{plan.description}</p>
//                 </div>

//                 <div className="space-y-4 mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center">
//                       <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                   {plan.limitations.map((limitation, limitIndex) => (
//                     <div key={limitIndex} className="flex items-center opacity-60">
//                       <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
//                       <span className="text-gray-600">{limitation}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
//                   {plan.buttonText}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-500">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             Ready to Transform Your Customer Communication?
//           </h2>
//           <p className="text-xl text-cyan-100 mb-8">
//             Join hundreds of businesses already using Papersignal to deliver exceptional customer experiences.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl">
//               Start Free Trial
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
//                   <SparklesIcon className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold">Papersignal</span>
//               </div>
//               <p className="text-gray-400 max-w-md">
//                 Revolutionizing B2B customer communication with live chat, email APIs, and smart notifications.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <div className="space-y-2 text-gray-400">
//                 <div>Live Chat</div>
//                 <div>Email APIs</div>
//                 <div>Notifications</div>
//                 <div>Analytics</div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <div className="space-y-2 text-gray-400">
//                 <div>About</div>
//                 <div>Blog</div>
//                 <div>Careers</div>
//                 <div>Contact</div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 Papersignal. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;













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

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "Basic live chat widget",
        "Email API (1,000 emails/month)",
        "Standard support",
        "Basic analytics",
        "2 team members"
      ],
      limitations: [
        "Limited customization",
        "No advanced features",
        "Community support only"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border-2 border-[#27214e] text-[#27214e] hover:bg-[#27214e] hover:text-white"
    },
    {
      name: "Professional",
      subtitle: "Most popular",
      price: "$16",
      period: "/month",
      description: "Advanced features for scaling businesses",
      features: [
        "Up to 10,000 messages/month",
        "Advanced chat features",
        "Email API (10,000 emails/month)",
        "Priority support",
        "Advanced analytics & reporting",
        "Unlimited team members",
        "Custom branding",
        "Webhook integrations"
      ],
      limitations: [],
      buttonText: "Start Professional",
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
    <div className="min-h-screen bg-white" style={{fontFamily: 'Bricolage Grotesque, system-ui, -apple-system, sans-serif'}}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#27214e] rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#27214e]">Papersignal</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Documentation</a>
              <a href="#support" className="text-gray-600 hover:text-[#27214e] transition-colors font-medium">Support</a>
              <button className="text-[#27214e] hover:text-[#1a1735] font-medium">
                Sign In
              </button>
              <button className="bg-[#27214e] text-white px-6 py-2.5 rounded-lg hover:bg-[#1a1735] transition-all duration-200 font-medium">
                Get Started
              </button>
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
              <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
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






