//pages/dashboard/Overview
import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardLayout';
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BellIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  CodeBracketIcon
} from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/outline';

const DashboardOverview = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    {
      name: 'Total Messages',
      stat: '12,847',
      previousStat: '11,234',
      change: '14%',
      changeType: 'increase',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'Emails Sent',
      stat: '8,429',
      previousStat: '7,892',
      change: '7%',
      changeType: 'increase',
      icon: EnvelopeIcon,
      color: 'bg-green-500'
    },
    {
      name: 'Push Notifications',
      stat: '24,568',
      previousStat: '26,112',
      change: '6%',
      changeType: 'decrease',
      icon: BellIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'API Requests',
      stat: '1.2M',
      previousStat: '1.1M',
      change: '9%',
      changeType: 'increase',
      icon: CodeBracketIcon,
      color: 'bg-orange-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'chat',
      title: 'New chat session started',
      description: 'Customer john@example.com initiated a chat',
      time: '2 minutes ago',
      status: 'active',
      icon: ChatBubbleLeftRightIcon
    },
    {
      id: 2,
      type: 'email',
      title: 'Email campaign completed',
      description: 'Welcome series sent to 234 recipients',
      time: '15 minutes ago',
      status: 'success',
      icon: EnvelopeIcon
    },
    {
      id: 3,
      type: 'api',
      title: 'API rate limit warning',
      description: 'Approaching 80% of monthly quota',
      time: '1 hour ago',
      status: 'warning',
      icon: ExclamationTriangleIcon
    },
    {
      id: 4,
      type: 'notification',
      title: 'Push notification sent',
      description: 'Product update sent to 1,847 users',
      time: '2 hours ago',
      status: 'success',
      icon: BellIcon
    }
  ];

  const quickActions = [
    {
      name: 'Start Live Chat',
      description: 'Begin a new customer conversation',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-blue-50 text-blue-700 hover:bg-blue-100'
    },
    {
      name: 'Send Email Campaign',
      description: 'Create and send a new email',
      icon: EnvelopeIcon,
      color: 'bg-green-50 text-green-700 hover:bg-green-100'
    },
    {
      name: 'Push Notification',
      description: 'Send push notification to users',
      icon: BellIcon,
      color: 'bg-purple-50 text-purple-700 hover:bg-purple-100'
    },
    {
      name: 'View Documentation',
      description: 'Access API docs and guides',
      icon: DocumentTextIcon,
      color: 'bg-gray-50 text-gray-700 hover:bg-gray-100'
    }
  ];

  const systemStatus = [
    { service: 'Live Chat API', status: 'operational', uptime: '99.99%' },
    { service: 'Email API', status: 'operational', uptime: '99.95%' },
    { service: 'Push Notifications', status: 'operational', uptime: '99.98%' },
    { service: 'Analytics', status: 'maintenance', uptime: '99.87%' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'maintenance':
        return 'text-yellow-600 bg-yellow-100';
      case 'degraded':
        return 'text-orange-600 bg-orange-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'active':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout currentPage="overview">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="mt-1 text-gray-500">
              Welcome back! Here's what's happening with your communications.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            >
              <option value="1d">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors">
              Export Data
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`${item.color} rounded-lg p-3`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">{item.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className={`flex items-center ${
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.changeType === 'increase' ? (
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-sm font-medium">{item.change}</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            <p className="text-gray-500 text-sm">Get started with common tasks</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  className={`${action.color} rounded-lg p-4 text-left transition-colors border border-transparent hover:border-gray-200`}
                >
                  <action.icon className="h-8 w-8 mb-3" />
                  <h3 className="font-medium mb-1">{action.name}</h3>
                  <p className="text-sm opacity-75">{action.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              <p className="text-gray-500 text-sm">Latest updates from your communications</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`${getActivityStatusColor(activity.status)} rounded-lg p-2`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735] transition-colors">
                  View all activity →
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
              <p className="text-gray-500 text-sm">Current status of all services</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {systemStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{service.service}</p>
                      <p className="text-xs text-gray-500">Uptime: {service.uptime}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735] transition-colors">
                  View status page →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Usage Summary</h2>
                <p className="text-gray-500 text-sm">Current month's usage across all services</p>
              </div>
              <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735] transition-colors">
                View detailed analytics →
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#27214e] mb-2">76%</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-[#27214e] h-2 rounded-full" style={{width: '76%'}}></div>
                </div>
                <p className="text-sm text-gray-600">API Quota Used</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">92%</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <p className="text-sm text-gray-600">Email Deliverability</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3.2s</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;