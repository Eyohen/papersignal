import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardLayout';
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  EyeIcon,
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';
import { PlusIcon, FunnelIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/outline';

const DashboardEmail = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const stats = [
    {
      name: 'Emails Sent',
      value: '124,847',
      change: '+23%',
      icon: PaperAirplaneIcon,
      color: 'text-blue-600'
    },
    {
      name: 'Delivery Rate',
      value: '98.7%',
      change: '+1.2%',
      icon: CheckCircleIcon,
      color: 'text-green-600'
    },
    {
      name: 'Open Rate',
      value: '24.3%',
      change: '+3.1%',
      icon: EyeIcon,
      color: 'text-purple-600'
    },
    {
      name: 'Click Rate',
      value: '4.8%',
      change: '+0.7%',
      icon: ChartBarIcon,
      color: 'text-orange-600'
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Welcome Series - New Users',
      subject: 'Welcome to Papersignal! Get started in 5 minutes',
      status: 'sent',
      sent: 2847,
      delivered: 2834,
      opened: 1205,
      clicked: 247,
      bounced: 13,
      createdAt: '2024-03-10',
      lastSent: '2 hours ago',
      type: 'automated'
    },
    {
      id: 2,
      name: 'Product Update - March Features',
      subject: 'New features that will boost your productivity',
      status: 'sending',
      sent: 8934,
      delivered: 8901,
      opened: 2156,
      clicked: 423,
      bounced: 33,
      createdAt: '2024-03-09',
      lastSent: '15 min ago',
      type: 'campaign'
    },
    {
      id: 3,
      name: 'Re-engagement Campaign',
      subject: "We miss you! Here's what you've been missing",
      status: 'draft',
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      bounced: 0,
      createdAt: '2024-03-08',
      lastSent: 'Never',
      type: 'campaign'
    },
    {
      id: 4,
      name: 'API Documentation Updates',
      subject: 'Important API changes - Action required',
      status: 'scheduled',
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      bounced: 0,
      createdAt: '2024-03-07',
      lastSent: 'Scheduled for tomorrow',
      type: 'transactional'
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      description: 'Onboard new users with a friendly welcome message',
      category: 'Onboarding',
      lastModified: '2 days ago',
      usage: 2847
    },
    {
      id: 2,
      name: 'Product Announcement',
      description: 'Announce new features and updates',
      category: 'Marketing',
      lastModified: '1 week ago',
      usage: 1567
    },
    {
      id: 3,
      name: 'Password Reset',
      description: 'Secure password reset instructions',
      category: 'Transactional',
      lastModified: '3 days ago',
      usage: 892
    },
    {
      id: 4,
      name: 'Payment Receipt',
      description: 'Transaction confirmation and receipt',
      category: 'Transactional',
      lastModified: '1 day ago',
      usage: 456
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'campaign_sent',
      message: 'Welcome Series campaign sent to 2,847 recipients',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'template_created',
      message: 'New template "Product Update" created',
      timestamp: '4 hours ago',
      status: 'info'
    },
    {
      id: 3,
      type: 'bounce_alert',
      message: 'High bounce rate detected for "Newsletter March"',
      timestamp: '6 hours ago',
      status: 'warning'
    },
    {
      id: 4,
      type: 'api_usage',
      message: 'API quota 75% used - 1,234 requests remaining',
      timestamp: '8 hours ago',
      status: 'info'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'sent': return 'text-green-600 bg-green-100';
      case 'sending': return 'text-blue-600 bg-blue-100';
      case 'draft': return 'text-gray-600 bg-gray-100';
      case 'scheduled': return 'text-purple-600 bg-purple-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const calculateRate = (numerator, denominator) => {
    if (denominator === 0) return '0%';
    return `${((numerator / denominator) * 100).toFixed(1)}%`;
  };

  const renderCampaigns = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search campaigns..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] text-sm"
            />
          </div>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white hover:bg-gray-50">
            <FunnelIcon className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
        <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors flex items-center">
          <PlusIcon className="w-4 h-4 mr-2" />
          Create Campaign
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sent</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{campaign.subject}</div>
                    <div className="mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {campaign.type}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div>
                    <div>Sent: {campaign.sent.toLocaleString()}</div>
                    <div className="text-gray-500">Delivered: {campaign.delivered.toLocaleString()}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="text-gray-900">Open: {calculateRate(campaign.opened, campaign.delivered)}</div>
                    <div className="text-gray-500">Click: {calculateRate(campaign.clicked, campaign.delivered)}</div>
                    <div className="text-red-600">Bounce: {calculateRate(campaign.bounced, campaign.sent)}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{campaign.lastSent}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button 
                      onClick={() => setSelectedCampaign(campaign)}
                      className="text-[#27214e] hover:text-[#1a1735] text-sm font-medium"
                    >
                      View
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTemplates = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] text-sm"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
            <option value="">All Categories</option>
            <option value="onboarding">Onboarding</option>
            <option value="marketing">Marketing</option>
            <option value="transactional">Transactional</option>
          </select>
        </div>
        <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors flex items-center">
          <PlusIcon className="w-4 h-4 mr-2" />
          Create Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#c4e6ff] text-[#27214e]">
                  {template.category}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <PencilIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Used {template.usage} times</span>
              <span>{template.lastModified}</span>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="flex-1 bg-[#27214e] text-white px-3 py-2 rounded text-sm font-medium hover:bg-[#1a1735] transition-colors">
                Use Template
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Top Performing Campaigns</h3>
            <ChartBarIcon className="h-6 w-6 text-[#27214e]" />
          </div>
          <div className="space-y-3">
            {campaigns.slice(0, 3).map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{campaign.name}</p>
                  <p className="text-xs text-gray-500">Open Rate: {calculateRate(campaign.opened, campaign.delivered)}</p>
                </div>
                <div className="ml-4 text-right">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#27214e] h-2 rounded-full"
                      style={{ width: `${(campaign.opened / campaign.delivered) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Email Health Score</h3>
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">92</div>
            <p className="text-gray-600 text-sm mb-4">Excellent reputation</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Rate</span>
                <span className="font-medium">98.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Spam Rate</span>
                <span className="font-medium">0.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bounce Rate</span>
                <span className="font-medium">1.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            <ClockIcon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-3">
            {recentActivity.slice(0, 4).map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`mt-1 w-2 h-2 rounded-full ${getActivityStatusColor(activity.status).replace('text-', 'bg-')}`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'campaigns', name: 'Campaigns', icon: EnvelopeIcon },
    { id: 'templates', name: 'Templates', icon: DocumentTextIcon },
    { id: 'analytics', name: 'Analytics', icon: ChartBarIcon }
  ];

  return (
    <DashboardLayout currentPage="email">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email API</h1>
          <p className="mt-1 text-gray-500">Manage your email campaigns and track performance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <p className="text-sm text-gray-500 mt-2">{stat.change} from last month</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-[#27214e] text-[#27214e]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="p-6">
            {activeTab === 'campaigns' && renderCampaigns()}
            {activeTab === 'templates' && renderTemplates()}
            {activeTab === 'analytics' && renderAnalytics()}
          </div>
        </div>

        {/* Campaign Details Modal (if selected) */}
        {selectedCampaign && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{selectedCampaign.name}</h2>
                  <button 
                    onClick={() => setSelectedCampaign(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-gray-600 mt-1">{selectedCampaign.subject}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Delivery Stats</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sent</span>
                        <span className="font-medium">{selectedCampaign.sent.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivered</span>
                        <span className="font-medium">{selectedCampaign.delivered.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bounced</span>
                        <span className="font-medium text-red-600">{selectedCampaign.bounced.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Engagement Stats</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Opened</span>
                        <span className="font-medium">{selectedCampaign.opened.toLocaleString()} ({calculateRate(selectedCampaign.opened, selectedCampaign.delivered)})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Clicked</span>
                        <span className="font-medium">{selectedCampaign.clicked.toLocaleString()} ({calculateRate(selectedCampaign.clicked, selectedCampaign.delivered)})</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors">
                    View Full Report
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardEmail;