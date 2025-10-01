//pages/dashboard/Settings
// import React, { useState } from 'react';
// import DashboardLayout from '../../components/DashboardLayout';
// import {
//   UserIcon,
//   BellIcon,
//   ShieldCheckIcon,
//   CreditCardIcon,
//   KeyIcon,
//   GlobeAltIcon,
//   PaintBrushIcon,
//   DevicePhoneMobileIcon,
//   ExclamationTriangleIcon,
//   CheckCircleIcon
// } from '@heroicons/react/24/solid';
// import { EyeIcon, EyeSlashIcon, PencilIcon } from '@heroicons/react/24/outline';

// const DashboardSettings = () => {
//   const [activeTab, setActiveTab] = useState('account');
//   const [showApiKey, setShowApiKey] = useState(false);
//   const [notifications, setNotifications] = useState({
//     email: true,
//     push: false,
//     sms: true,
//     marketing: false
//   });

//   const tabs = [
//     { id: 'account', name: 'Account', icon: UserIcon },
//     { id: 'notifications', name: 'Notifications', icon: BellIcon },
//     { id: 'security', name: 'Security', icon: ShieldCheckIcon },
//     { id: 'api', name: 'API Keys', icon: KeyIcon },
//     { id: 'billing', name: 'Billing', icon: CreditCardIcon },
//     { id: 'preferences', name: 'Preferences', icon: GlobeAltIcon }
//   ];

//   const handleNotificationChange = (type) => {
//     setNotifications(prev => ({
//       ...prev,
//       [type]: !prev[type]
//     }));
//   };

//   const renderAccountSettings = () => (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//             <input 
//               type="text" 
//               defaultValue="John" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//             <input 
//               type="text" 
//               defaultValue="Doe" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//             <input 
//               type="email" 
//               defaultValue="john@company.com" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//             <input 
//               type="tel" 
//               defaultValue="+1 (555) 123-4567" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//             <input 
//               type="text" 
//               defaultValue="Acme Inc" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
//             <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
//               <option>1-10 employees</option>
//               <option>11-50 employees</option>
//               <option selected>51-200 employees</option>
//               <option>201-1000 employees</option>
//               <option>1000+ employees</option>
//             </select>
//           </div>
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Company Website</label>
//             <input 
//               type="url" 
//               defaultValue="https://acme.com" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <button className="bg-[#27214e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1a1735] transition-colors">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );

//   const renderNotificationSettings = () => (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
//         <div className="space-y-4">
//           {Object.entries({
//             email: 'Email Notifications',
//             push: 'Push Notifications', 
//             sms: 'SMS Notifications',
//             marketing: 'Marketing Communications'
//           }).map(([key, label]) => (
//             <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200">
//               <div>
//                 <p className="text-sm font-medium text-gray-900">{label}</p>
//                 <p className="text-sm text-gray-500">
//                   {key === 'email' && 'Receive updates about your account and services'}
//                   {key === 'push' && 'Get real-time notifications on your devices'}
//                   {key === 'sms' && 'Important alerts sent to your phone'}
//                   {key === 'marketing' && 'Product updates and promotional content'}
//                 </p>
//               </div>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="sr-only peer"
//                   checked={notifications[key]}
//                   onChange={() => handleNotificationChange(key)}
//                 />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4e6ff] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27214e]"></div>
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Frequency</h3>
//         <div className="space-y-3">
//           <label className="flex items-center">
//             <input type="radio" name="frequency" defaultChecked className="mr-3 text-[#27214e] focus:ring-[#27214e]" />
//             <span className="text-sm">Immediately</span>
//           </label>
//           <label className="flex items-center">
//             <input type="radio" name="frequency" className="mr-3 text-[#27214e] focus:ring-[#27214e]" />
//             <span className="text-sm">Daily digest</span>
//           </label>
//           <label className="flex items-center">
//             <input type="radio" name="frequency" className="mr-3 text-[#27214e] focus:ring-[#27214e]" />
//             <span className="text-sm">Weekly summary</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSecuritySettings = () => (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
//             <input 
//               type="password" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
//             <input 
//               type="password" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
//             <input 
//               type="password" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
//           <div className="flex items-center">
//             <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
//             <div>
//               <p className="text-sm font-medium text-green-800">Two-factor authentication is enabled</p>
//               <p className="text-sm text-green-600">Your account is protected with an additional security layer</p>
//             </div>
//           </div>
//         </div>
//         <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735]">
//           Manage 2FA Settings →
//         </button>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Active Sessions</h3>
//         <div className="space-y-3">
//           <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <div className="bg-green-100 p-2 rounded-lg">
//                 <DevicePhoneMobileIcon className="w-5 h-5 text-green-600" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-900">iPhone - Safari</p>
//                 <p className="text-sm text-gray-500">Current session • New York, NY</p>
//               </div>
//             </div>
//             <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//           </div>
//           <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gray-100 p-2 rounded-lg">
//                 <DevicePhoneMobileIcon className="w-5 h-5 text-gray-600" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-900">MacBook Pro - Chrome</p>
//                 <p className="text-sm text-gray-500">2 hours ago • New York, NY</p>
//               </div>
//             </div>
//             <button className="text-red-600 text-sm hover:text-red-800">Revoke</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderApiSettings = () => (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">API Keys</h3>
//         <div className="space-y-4">
//           <div className="border border-gray-200 rounded-lg p-4">
//             <div className="flex items-center justify-between mb-3">
//               <div>
//                 <p className="text-sm font-medium text-gray-900">Production API Key</p>
//                 <p className="text-sm text-gray-500">Used for live applications</p>
//               </div>
//               <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <code className="flex-1 text-sm bg-gray-100 px-3 py-2 rounded font-mono">
//                 {showApiKey ? 'pk_live_1234567890abcdef1234567890abcdef' : 'pk_live_••••••••••••••••••••••••••••••••'}
//               </code>
//               <button
//                 onClick={() => setShowApiKey(!showApiKey)}
//                 className="p-2 text-gray-500 hover:text-gray-700"
//               >
//                 {showApiKey ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
//               </button>
//               <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735]">
//                 Copy
//               </button>
//             </div>
//           </div>
//           <div className="border border-gray-200 rounded-lg p-4">
//             <div className="flex items-center justify-between mb-3">
//               <div>
//                 <p className="text-sm font-medium text-gray-900">Test API Key</p>
//                 <p className="text-sm text-gray-500">Used for development and testing</p>
//               </div>
//               <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Test</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <code className="flex-1 text-sm bg-gray-100 px-3 py-2 rounded font-mono">
//                 pk_test_••••••••••••••••••••••••••••••••
//               </code>
//               <button className="p-2 text-gray-500 hover:text-gray-700">
//                 <EyeIcon className="w-4 h-4" />
//               </button>
//               <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735]">
//                 Copy
//               </button>
//             </div>
//           </div>
//         </div>
//         <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors">
//           Generate New Key
//         </button>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Webhook Settings</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Webhook URL</label>
//             <input 
//               type="url" 
//               placeholder="https://your-app.com/webhook" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Events to Subscribe</label>
//             <div className="space-y-2">
//               {['message.sent', 'email.delivered', 'notification.clicked'].map((event) => (
//                 <label key={event} className="flex items-center">
//                   <input type="checkbox" className="mr-2 text-[#27214e] focus:ring-[#27214e]" />
//                   <code className="text-sm">{event}</code>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderBillingSettings = () => (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h3>
//         <div className="bg-[#c4e6ff]/20 border border-[#c4e6ff] rounded-lg p-6">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h4 className="text-lg font-semibold text-[#27214e]">Professional Plan</h4>
//               <p className="text-gray-600">$49/month • Billed monthly</p>
//             </div>
//             <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735]">
//               Upgrade Plan
//             </button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//             <div>
//               <p className="text-gray-600">API Requests</p>
//               <p className="font-semibold">45,892 / 100,000</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Team Members</p>
//               <p className="font-semibold">8 / Unlimited</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Next Billing</p>
//               <p className="font-semibold">March 15, 2025</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
//         <div className="border border-gray-200 rounded-lg p-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
//                 <span className="text-white text-xs font-bold">VISA</span>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
//                 <p className="text-sm text-gray-500">Expires 12/27</p>
//               </div>
//             </div>
//             <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735] flex items-center">
//               <PencilIcon className="w-4 h-4 mr-1" />
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Billing History</h3>
//         <div className="space-y-2">
//           {[
//             { date: 'Feb 15, 2025', amount: '$49.00', status: 'Paid' },
//             { date: 'Jan 15, 2025', amount: '$49.00', status: 'Paid' },
//             { date: 'Dec 15, 2024', amount: '$49.00', status: 'Paid' }
//           ].map((invoice, index) => (
//             <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
//               <div>
//                 <p className="text-sm font-medium text-gray-900">{invoice.date}</p>
//                 <p className="text-sm text-gray-500">Professional Plan</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium text-gray-900">{invoice.amount}</span>
//                 <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">{invoice.status}</span>
//                 <button className="text-[#27214e] text-sm hover:text-[#1a1735]">Download</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderPreferencesSettings = () => (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Language & Region</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
//             <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
//               <option>English (US)</option>
//               <option>English (UK)</option>
//               <option>French</option>
//               <option>German</option>
//               <option>Spanish</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
//             <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
//               <option>Eastern Time (ET)</option>
//               <option>Pacific Time (PT)</option>
//               <option>Central Time (CT)</option>
//               <option>Mountain Time (MT)</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Interface</h3>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-900">Dark Mode</p>
//               <p className="text-sm text-gray-500">Switch to dark theme</p>
//             </div>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input type="checkbox" className="sr-only peer" />
//               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4e6ff] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27214e]"></div>
//             </label>
//           </div>
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-900">Compact View</p>
//               <p className="text-sm text-gray-500">Show more content in less space</p>
//             </div>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input type="checkbox" className="sr-only peer" />
//               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4e6ff] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27214e]"></div>
//             </label>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-medium text-gray-900 mb-4">Data & Privacy</h3>
//         <div className="space-y-4">
//           <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-900">Download Your Data</p>
//                 <p className="text-sm text-gray-500">Get a copy of all your account data</p>
//               </div>
//               <span className="text-[#27214e]">→</span>
//             </div>
//           </button>
//           <button className="w-full text-left p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-red-900">Delete Account</p>
//                 <p className="text-sm text-red-600">Permanently delete your account and all data</p>
//               </div>
//               <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'account':
//         return renderAccountSettings();
//       case 'notifications':
//         return renderNotificationSettings();
//       case 'security':
//         return renderSecuritySettings();
//       case 'api':
//         return renderApiSettings();
//       case 'billing':
//         return renderBillingSettings();
//       case 'preferences':
//         return renderPreferencesSettings();
//       default:
//         return renderAccountSettings();
//     }
//   };

//   return (
//     <DashboardLayout currentPage="settings">
//       <div className="space-y-6">
//         {/* Header */}
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
//           <p className="mt-1 text-gray-500">Manage your account settings and preferences</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <nav className="space-y-1">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
//                     activeTab === tab.id
//                       ? 'bg-[#c4e6ff] text-[#27214e]'
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   <tab.icon className="mr-3 h-5 w-5" />
//                   {tab.name}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               {renderTabContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default DashboardSettings;




import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import {
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  KeyIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/solid';
import { EyeIcon, EyeSlashIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { URL } from '../../url';
import axios from 'axios';

const DashboardSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [showApiKey, setShowApiKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [merchantData, setMerchantData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    country: '',
  });

  useEffect(() => {
    fetchMerchantProfile();
  }, []);

  const fetchMerchantProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${URL}/api/merchant/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMerchantData(response.data.merchant);
      setFormData({
        firstName: response.data.merchant.firstName || '',
        lastName: response.data.merchant.lastName || '',
        email: response.data.merchant.email || '',
        businessName: response.data.merchant.businessName || '',
        country: response.data.merchant.country || '',
      });
    } catch (err) {
      setError('Failed to load profile data');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      await axios.put(`${URL}/api/merchant/profile`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateApiKey = async () => {
    if (!confirm('Are you sure? This will invalidate your current API key.')) return;

    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${URL}/api/merchant/regenerate-key`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMerchantData(prev => ({ ...prev, apiKey: response.data.apiKey }));
      setSuccess('API key regenerated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to regenerate API key');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSuccess('Copied to clipboard!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const tabs = [
    { id: 'account', name: 'Account', icon: UserIcon },
    { id: 'api', name: 'API Keys', icon: KeyIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
  ];

  const renderAccountSettings = () => (
    <div className="space-y-6">
      {success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
          {success}
        </div>
      )}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input 
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <input 
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Information</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <input 
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button 
          onClick={handleSaveProfile}
          disabled={loading}
          className="bg-[#27214e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1a1735] transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );

  const renderApiSettings = () => (
    <div className="space-y-6">
      {success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
          {success}
        </div>
      )}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">API Key</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-gray-900">Production API Key</p>
              <p className="text-sm text-gray-500">Use this key to authenticate API requests</p>
            </div>
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <code className="flex-1 text-sm bg-gray-100 px-3 py-2 rounded font-mono break-all">
              {showApiKey ? merchantData?.apiKey : merchantData?.apiKey?.replace(/.(?=.{4})/g, '•')}
            </code>
            <button
              onClick={() => setShowApiKey(!showApiKey)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              {showApiKey ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => copyToClipboard(merchantData?.apiKey)}
              className="p-2 text-[#27214e] hover:text-[#1a1735]"
            >
              <ClipboardDocumentIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <button 
          onClick={handleRegenerateApiKey}
          disabled={loading}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center disabled:opacity-50"
        >
          <ArrowPathIcon className="w-4 h-4 mr-2" />
          {loading ? 'Regenerating...' : 'Regenerate API Key'}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Integration Guide</h3>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Base URL</p>
            <code className="block text-sm bg-white px-3 py-2 rounded border border-gray-200">{URL}/api</code>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Authentication Header</p>
            <code className="block text-sm bg-white px-3 py-2 rounded border border-gray-200">
              x-api-key: YOUR_API_KEY
            </code>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Example Request</p>
            <pre className="text-xs bg-white px-3 py-2 rounded border border-gray-200 overflow-x-auto">
{`curl -X POST ${URL}/api/api-key/chats \\
  -H "x-api-key: ${merchantData?.apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "subject": "Support Request"
  }'`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Available Endpoints</h3>
        <div className="space-y-2">
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <code className="text-sm font-medium text-[#27214e]">POST /api-key/chats</code>
                <p className="text-xs text-gray-600 mt-1">Create a new chat</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <code className="text-sm font-medium text-[#27214e]">GET /api-key/chats</code>
                <p className="text-xs text-gray-600 mt-1">Get all chats</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <code className="text-sm font-medium text-[#27214e]">POST /api-key/emails/send</code>
                <p className="text-xs text-gray-600 mt-1">Send an email</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <code className="text-sm font-medium text-[#27214e]">GET /api-key/emails</code>
                <p className="text-xs text-gray-600 mt-1">Get email transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            />
          </div>
        </div>
        <button className="mt-4 bg-[#27214e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1a1735] transition-colors">
          Update Password
        </button>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Account Status</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-green-800">Email Verified</p>
              <p className="text-sm text-green-600">Your account is fully verified and active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return renderAccountSettings();
      case 'api':
        return renderApiSettings();
      case 'security':
        return renderSecuritySettings();
      default:
        return renderAccountSettings();
    }
  };

  return (
    <DashboardLayout currentPage="settings">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-gray-500">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#c4e6ff] text-[#27214e]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;