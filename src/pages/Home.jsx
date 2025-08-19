// // Home.jsx
// import Navbar from '../components/Navbar';
// import { FiMail, FiCpu, FiShield, FiZap, FiDatabase, FiCheck, FiArrowRight } from 'react-icons/fi';
// import { BsBarChart, BsCodeSlash, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 md:px-0">
//         <div className="container mx-auto max-w-6xl">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
//                 Email API for <span className="text-gray-500">Modern</span> Developers
//               </h1>
//               <p className="mt-6 text-lg text-gray-600 max-w-lg">
//                 PaperSignal provides a powerful, flexible API for sending, tracking, and managing emails at scale. Build better user experiences with reliable email delivery.
//               </p>
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <a 
//                   href="/signup" 
//                   className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-center"
//                 >
//                   Get Started Free
//                 </a>
//                 <Link 
//                   to="/documentation" 
//                   className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors text-center"
//                 >
//                   Read Documentation
//                 </Link>
//               </div>
//               <div className="mt-8 flex items-center text-sm text-gray-500">
//                 <FiCheck className="text-black mr-2" />
//                 <span>No credit card required</span>
//                 <span className="mx-3">•</span>
//                 <FiCheck className="text-black mr-2" />
//                 <span>100 emails/day free</span>
//                 <span className="mx-3">•</span>
//                 <FiCheck className="text-black mr-2" />
//                 <span>5-minute setup</span>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                     <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                     <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                   </div>
//                   <div className="ml-4 text-xs text-gray-500">api-request.js</div>
//                 </div>
//                 <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
//                   <code>
// {`import { PaperSignal } from '@papersignal/sdk';

// // Initialize the client
// const client = new PaperSignal('YOUR_API_KEY');

// // Send a simple email
// await client.send({
//   from: 'notifications@yourapp.com',
//   to: 'user@example.com',
//   subject: 'Welcome to YourApp!',
//   html: '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
  
//   // Optional tracking
//   track: {
//     opens: true,
//     clicks: true,
//     unsubscribe: true
//   }
// });`}
//                   </code>
//                 </pre>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Logos Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto max-w-6xl px-4">
//           <p className="text-center text-gray-500 mb-8">Trusted by innovative companies</p>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
//             {Array(6).fill().map((_, i) => (
//               <div key={i} className="h-8 bg-gray-300 rounded w-32"></div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Features Section */}
//       <section id="features" className="py-20">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-black">Powerful Email API Features</h2>
//             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//               Everything you need to deliver emails reliably and gain valuable insights
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <FiZap className="text-black text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-black mb-3">Lightning Fast Delivery</h3>
//               <p className="text-gray-600">
//                 Our global infrastructure ensures your emails reach inboxes quickly and reliably, every time.
//               </p>
//             </div>
            
//             {/* Feature 2 */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <BsBarChart className="text-black text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-black mb-3">Detailed Analytics</h3>
//               <p className="text-gray-600">
//                 Track opens, clicks, bounces, and more with real-time reporting and comprehensive dashboards.
//               </p>
//             </div>
            
//             {/* Feature 3 */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <FiShield className="text-black text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-black mb-3">Security & Compliance</h3>
//               <p className="text-gray-600">
//                 GDPR-compliant infrastructure with built-in SPF, DKIM, and DMARC support for maximum deliverability.
//               </p>
//             </div>
            
//             {/* Feature 4 */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <BsCodeSlash className="text-black text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-black mb-3">Developer Friendly</h3>
//               <p className="text-gray-600">
//                 Clean, intuitive APIs with SDKs for all major languages and comprehensive documentation.
//               </p>
//             </div>
            
//             {/* Feature 5 */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <FiCpu className="text-black text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-black mb-3">Smart Templating</h3>
//               <p className="text-gray-600">
//                 Powerful templating engine with dynamic content, personalization, and A/B testing capabilities.
//               </p>
//             </div>
            
//             {/* Feature 6 */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <FiDatabase className="text-black text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-black mb-3">Scalable Infrastructure</h3>
//               <p className="text-gray-600">
//                 Send millions of emails daily with automatic scaling to handle your peak demand periods.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Documentation Preview Section */}
//       <section id="documentation" className="py-20 bg-gray-50">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//             <div className="md:w-1/2 order-2 md:order-1">
//               <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                     <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                     <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//                   </div>
//                   <div className="ml-4 text-xs text-gray-500">documentation-example.md</div>
//                 </div>
//                 <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
//                   <code>
// {`# Email Tracking

// PaperSignal provides advanced tracking features for your emails.

// \`\`\`javascript
// await client.send({
//   // Your email content
//   ...
  
//   // Tracking configuration
//   track: {
//     opens: true,       // Track when emails are opened
//     clicks: true,      // Track link clicks
//     unsubscribe: true  // Add unsubscribe capabilities
//   },
  
//   // Webhooks for real-time notifications
//   webhooks: {
//     opened: 'https://your-app.com/hooks/email-opened',
//     clicked: 'https://your-app.com/hooks/email-clicked'
//   }
// });
// \`\`\``}
//                   </code>
//                 </pre>
//               </div>
//             </div>
//             <div className="md:w-1/2 order-1 md:order-2">
//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Comprehensive Documentation</h2>
//               <p className="text-gray-600 mb-6">
//                 Our API is meticulously documented with clear examples, guides, and API references to help you integrate quickly and effectively.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start">
//                   <FiCheck className="text-black mt-1 mr-3" />
//                   <span className="text-gray-600">Step-by-step quickstart guides</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FiCheck className="text-black mt-1 mr-3" />
//                   <span className="text-gray-600">Detailed API reference</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FiCheck className="text-black mt-1 mr-3" />
//                   <span className="text-gray-600">Code samples for all popular languages</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FiCheck className="text-black mt-1 mr-3" />
//                   <span className="text-gray-600">Best practices and optimization tips</span>
//                 </li>
//               </ul>
//               <Link
//                 to="/documentation" 
//                 className="flex items-center text-black font-medium hover:text-gray-700 transition-colors"
//               >
//                 Browse full documentation
//                 <FiArrowRight className="ml-2" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Pricing Section */}
//       <section id="pricing" className="py-20">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-black">Transparent, Scalable Pricing</h2>
//             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//               Pay only for what you use with no hidden fees or long-term commitments
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Starter Plan */}
//             <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-black mb-2">Starter</h3>
//                 <p className="text-gray-600 mb-6">Perfect for small projects and startups</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-black">$0</span>
//                   <span className="text-gray-600">/month</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">100 emails/day free</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Basic analytics</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">API access</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Email support</span>
//                   </li>
//                 </ul>
//                 <a 
//                   href="#signup" 
//                   className="block w-full py-3 text-center bg-gray-50 text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
//                 >
//                   Start Free
//                 </a>
//               </div>
//             </div>
            
//             {/* Growth Plan */}
//             <div className="bg-white rounded-xl border-2 border-black shadow-lg transform scale-105">
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-xl font-semibold text-black">Growth</h3>
//                   <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded-full">Most Popular</span>
//                 </div>
//                 <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-black">$15</span>
//                   <span className="text-gray-600">/month</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">50,000 emails/month</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Advanced analytics</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Webhooks & integrations</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Priority support</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Custom templates</span>
//                   </li>
//                 </ul>
//                 <a 
//                   href="#signup" 
//                   className="block w-full py-3 text-center bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
//                 >
//                   Get Started
//                 </a>
//               </div>
//             </div>
            
//             {/* Enterprise Plan */}
//             <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-black mb-2">Enterprise</h3>
//                 <p className="text-gray-600 mb-6">For high-volume senders</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-black">Custom</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Unlimited emails</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Dedicated IP addresses</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">SLA guarantees</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">24/7 premium support</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="text-black mr-3" />
//                     <span className="text-gray-600">Custom integrations</span>
//                   </li>
//                 </ul>
//                 <a 
//                   href="#contact" 
//                   className="block w-full py-3 text-center bg-gray-50 text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
//                 >
//                   Contact Sales
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900 text-white">
//         <div className="container mx-auto max-w-6xl px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your email experience?</h2>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8">
//             Join thousands of developers building better email experiences with PaperSignal
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a 
//               href="#signup" 
//               className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
//             >
//               Start Free Trial
//             </a>
//             <a 
//               href="#documentation" 
//               className="border border-gray-500 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
//             >
//               Explore Documentation
//             </a>
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="py-12 bg-white">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//             <div>
//               <div className="flex items-center mb-6">
//                 <FiMail className="text-black text-2xl mr-2" />
//                 <span className="font-bold text-xl text-black">PaperSignal</span>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 The email API for modern developers
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-500 hover:text-black transition-colors">
//                   <BsTwitter className="text-xl" />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-black transition-colors">
//                   <BsGithub className="text-xl" />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-black transition-colors">
//                   <BsLinkedin className="text-xl" />
//                 </a>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-black mb-4">Product</h4>
//               <ul className="space-y-3">
//                 <li><a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
//                 <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
//                 <li><a href="#documentation" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Status</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-black mb-4">Company</h4>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
//                 <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-black mb-4">Legal</h4>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-black transition-colors">GDPR</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-100 pt-8">
//             <p className="text-gray-500 text-center">
//               &copy; {new Date().getFullYear()} PaperSignal. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

















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

// const PapersignalLanding = () => {
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

// export default PapersignalLanding;

























import React, { useState } from 'react';
import { CheckIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon, 
  BellIcon,
  SparklesIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/solid';

const PapersignalGreenLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('growth');

  const features = [
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Live Customer Chat",
      description: "Real-time messaging with your customers, seamless integration, and powerful chat management tools."
    },
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: "Email APIs",
      description: "Robust email automation, templates, and delivery tracking to keep your customers engaged."
    },
    {
      icon: <BellIcon className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Push notifications and pop-up alerts to ensure no customer message goes unnoticed."
    }
  ];

  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "Free",
      period: "forever",
      description: "Essential features for small teams",
      features: [
        "Up to 100 messages/month",
        "Basic live chat",
        "Email support",
        "2 team members",
        "Basic notifications"
      ],
      limitations: [
        "Limited customization",
        "No advanced analytics",
        "Community support only"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
    },
    {
      name: "Growth",
      subtitle: "Most Popular",
      price: "$16",
      period: "per month",
      description: "Everything you need to scale",
      features: [
        "Unlimited messages",
        "Advanced live chat",
        "Full email API access",
        "Unlimited team members",
        "Advanced notifications",
        "Custom branding",
        "Analytics dashboard",
        "Priority support"
      ],
      limitations: [],
      buttonText: "Start Growth Plan",
      buttonStyle: "bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600 shadow-lg shadow-green-500/25",
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for enterprise needs",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced security",
        "Custom workflows",
        "White-label options",
        "24/7 phone support"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "2.3s", label: "Response Time" },
    { value: "50K+", label: "Messages Daily" },
    { value: "500+", label: "Happy Customers" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Papersignal</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-500/25">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Bars3Icon className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-lg w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-8">
              <SparklesIcon className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm font-medium text-green-700">Revolutionizing B2B Customer Communication</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Live Chat That
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"> Converts</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your customer communication with real-time messaging, powerful email APIs, 
              and intelligent notifications. All in one platform designed for modern B2B companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-200 shadow-xl shadow-green-500/25 flex items-center justify-center">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/50 to-emerald-100/50 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to 
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools helps you engage customers, automate communications, 
              and never miss an important message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple, Transparent 
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start free, scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-green-400 shadow-xl shadow-green-500/10 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center opacity-60">
                      <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Customer Communication?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of businesses already using Papersignal to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Papersignal</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Revolutionizing B2B customer communication with live chat, email APIs, and smart notifications.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Live Chat</div>
                <div>Email APIs</div>
                <div>Notifications</div>
                <div>Analytics</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Papersignal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PapersignalGreenLanding;