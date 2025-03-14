// Home.jsx
import Navbar from '../components/Navbar';
import { FiMail, FiCpu, FiShield, FiZap, FiDatabase, FiCheck, FiArrowRight } from 'react-icons/fi';
import { BsBarChart, BsCodeSlash, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Email API for <span className="text-gray-500">Modern</span> Developers
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                PaperSignal provides a powerful, flexible API for sending, tracking, and managing emails at scale. Build better user experiences with reliable email delivery.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#signup" 
                  className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-center"
                >
                  Get Started Free
                </a>
                <a 
                  href="#documentation" 
                  className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors text-center"
                >
                  Read Documentation
                </a>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <FiCheck className="text-black mr-2" />
                <span>No credit card required</span>
                <span className="mx-3">•</span>
                <FiCheck className="text-black mr-2" />
                <span>100 emails/day free</span>
                <span className="mx-3">•</span>
                <FiCheck className="text-black mr-2" />
                <span>5-minute setup</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500">api-request.js</div>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  <code>
{`import { PaperSignal } from '@papersignal/sdk';

// Initialize the client
const client = new PaperSignal('YOUR_API_KEY');

// Send a simple email
await client.send({
  from: 'notifications@yourapp.com',
  to: 'user@example.com',
  subject: 'Welcome to YourApp!',
  html: '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
  
  // Optional tracking
  track: {
    opens: true,
    clicks: true,
    unsubscribe: true
  }
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by innovative companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {Array(6).fill().map((_, i) => (
              <div key={i} className="h-8 bg-gray-300 rounded w-32"></div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Powerful Email API Features</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver emails reliably and gain valuable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FiZap className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Lightning Fast Delivery</h3>
              <p className="text-gray-600">
                Our global infrastructure ensures your emails reach inboxes quickly and reliably, every time.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BsBarChart className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Detailed Analytics</h3>
              <p className="text-gray-600">
                Track opens, clicks, bounces, and more with real-time reporting and comprehensive dashboards.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FiShield className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Security & Compliance</h3>
              <p className="text-gray-600">
                GDPR-compliant infrastructure with built-in SPF, DKIM, and DMARC support for maximum deliverability.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BsCodeSlash className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Developer Friendly</h3>
              <p className="text-gray-600">
                Clean, intuitive APIs with SDKs for all major languages and comprehensive documentation.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FiCpu className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Smart Templating</h3>
              <p className="text-gray-600">
                Powerful templating engine with dynamic content, personalization, and A/B testing capabilities.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FiDatabase className="text-black text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-600">
                Send millions of emails daily with automatic scaling to handle your peak demand periods.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation Preview Section */}
      <section id="documentation" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500">documentation-example.md</div>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  <code>
{`# Email Tracking

PaperSignal provides advanced tracking features for your emails.

\`\`\`javascript
await client.send({
  // Your email content
  ...
  
  // Tracking configuration
  track: {
    opens: true,       // Track when emails are opened
    clicks: true,      // Track link clicks
    unsubscribe: true  // Add unsubscribe capabilities
  },
  
  // Webhooks for real-time notifications
  webhooks: {
    opened: 'https://your-app.com/hooks/email-opened',
    clicked: 'https://your-app.com/hooks/email-clicked'
  }
});
\`\`\``}
                  </code>
                </pre>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Comprehensive Documentation</h2>
              <p className="text-gray-600 mb-6">
                Our API is meticulously documented with clear examples, guides, and API references to help you integrate quickly and effectively.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="text-black mt-1 mr-3" />
                  <span className="text-gray-600">Step-by-step quickstart guides</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-black mt-1 mr-3" />
                  <span className="text-gray-600">Detailed API reference</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-black mt-1 mr-3" />
                  <span className="text-gray-600">Code samples for all popular languages</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-black mt-1 mr-3" />
                  <span className="text-gray-600">Best practices and optimization tips</span>
                </li>
              </ul>
              <a 
                href="#full-docs" 
                className="flex items-center text-black font-medium hover:text-gray-700 transition-colors"
              >
                Browse full documentation
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Transparent, Scalable Pricing</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Pay only for what you use with no hidden fees or long-term commitments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small projects and startups</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">100 emails/day free</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">API access</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                </ul>
                <a 
                  href="#signup" 
                  className="block w-full py-3 text-center bg-gray-50 text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Start Free
                </a>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-white rounded-xl border-2 border-black shadow-lg transform scale-105">
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-black">Growth</h3>
                  <span className="bg-gray-100 text-xs font-medium px-2 py-1 rounded-full">Most Popular</span>
                </div>
                <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$15</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">50,000 emails/month</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Webhooks & integrations</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Custom templates</span>
                  </li>
                </ul>
                <a 
                  href="#signup" 
                  className="block w-full py-3 text-center bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For high-volume senders</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Unlimited emails</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Dedicated IP addresses</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">SLA guarantees</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">24/7 premium support</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-black mr-3" />
                    <span className="text-gray-600">Custom integrations</span>
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="block w-full py-3 text-center bg-gray-50 text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your email experience?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of developers building better email experiences with PaperSignal
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#signup" 
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <a 
              href="#documentation" 
              className="border border-gray-500 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Documentation
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <FiMail className="text-black text-2xl mr-2" />
                <span className="font-bold text-xl text-black">PaperSignal</span>
              </div>
              <p className="text-gray-600 mb-6">
                The email API for modern developers
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsLinkedin className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#documentation" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8">
            <p className="text-gray-500 text-center">
              &copy; {new Date().getFullYear()} PaperSignal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;