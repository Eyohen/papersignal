//pages/dashboard/Analytics
import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardLayout';
import {
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  UserGroupIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid';
import { CalendarIcon, FunnelIcon } from '@heroicons/react/24/outline';

const DashboardAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('messages');

  const keyMetrics = [
    {
      name: 'Total Messages',
      value: '45,892',
      change: '+23%',
      changeType: 'positive',
      icon: ChartBarIcon
    },
    {
      name: 'Active Users',
      value: '12,847',
      change: '+12%',
      changeType: 'positive',
      icon: UserGroupIcon
    },
    {
      name: 'Avg Response Time',
      value: '2.3s',
      change: '-8%',
      changeType: 'positive',
      icon: ClockIcon
    },
    {
      name: 'Engagement Rate',
      value: '67.4%',
      change: '+5%',
      changeType: 'positive',
      icon: EyeIcon
    }
  ];

  const chartData = [
    { name: 'Jan', messages: 4000, emails: 2400, notifications: 2400 },
    { name: 'Feb', messages: 3000, emails: 1398, notifications: 2210 },
    { name: 'Mar', messages: 2000, emails: 9800, notifications: 2290 },
    { name: 'Apr', messages: 2780, emails: 3908, notifications: 2000 },
    { name: 'May', messages: 1890, emails: 4800, notifications: 2181 },
    { name: 'Jun', messages: 2390, emails: 3800, notifications: 2500 },
    { name: 'Jul', messages: 3490, emails: 4300, notifications: 2100 }
  ];

  const deviceStats = [
    { name: 'Desktop', percentage: 45, color: 'bg-blue-500' },
    { name: 'Mobile', percentage: 35, color: 'bg-green-500' },
    { name: 'Tablet', percentage: 20, color: 'bg-purple-500' }
  ];

  const topCountries = [
    { country: 'United States', users: '5,847', percentage: 38 },
    { country: 'United Kingdom', users: '2,234', percentage: 15 },
    { country: 'Germany', users: '1,892', percentage: 12 },
    { country: 'France', users: '1,567', percentage: 10 },
    { country: 'Canada', users: '1,234', percentage: 8 },
    { country: 'Others', users: '2,568', percentage: 17 }
  ];

  const realtimeData = [
    { time: '12:00 PM', active: 1847 },
    { time: '12:05 PM', active: 1923 },
    { time: '12:10 PM', active: 2156 },
    { time: '12:15 PM', active: 1967 },
    { time: '12:20 PM', active: 2234 },
    { time: '12:25 PM', active: 2089 }
  ];

  return (
    <DashboardLayout currentPage="analytics">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="mt-1 text-gray-500">
              Track your communication performance and user engagement
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white hover:bg-gray-50">
              <FunnelIcon className="w-4 h-4 mr-2" />
              Filters
            </button>
            <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric) => (
            <div key={metric.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <metric.icon className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className={`flex items-center ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.changeType === 'positive' ? (
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Communication Trends</h2>
                <p className="text-gray-500 text-sm">Messages, emails, and notifications over time</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">Messages</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Emails</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Notifications</button>
              </div>
            </div>
          </div>
          <div className="p-6">
            {/* Simplified Chart Representation */}
            <div className="h-80 bg-gradient-to-t from-[#c4e6ff]/10 to-[#c4e6ff]/30 rounded-lg flex items-end justify-around p-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div 
                    className="w-8 bg-[#27214e] rounded-t-sm"
                    style={{ height: `${(data.messages / 5000) * 200}px` }}
                  ></div>
                  <span className="text-xs text-gray-600">{data.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Device Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Device Usage</h2>
              <p className="text-gray-500 text-sm">How users access your services</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {deviceStats.map((device, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${device.color}`}></div>
                      <span className="text-sm font-medium text-gray-900">{device.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${device.color} h-2 rounded-full`}
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-10">{device.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Top Countries</h2>
              <p className="text-gray-500 text-sm">Where your users are located</p>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {topCountries.slice(0, 5).map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{country.country}</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-[#27214e] h-1.5 rounded-full"
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-sm font-medium text-gray-900">{country.users}</p>
                      <p className="text-xs text-gray-500">{country.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Users */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Real-time Activity</h2>
              <p className="text-gray-500 text-sm">Active users in the last 30 minutes</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#27214e]">2,234</div>
                <div className="text-sm text-gray-500">users online now</div>
              </div>
              <div className="space-y-2">
                {realtimeData.slice(-4).map((data, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{data.time}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: `${(data.active / 2500) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-900 font-medium w-12 text-right">{data.active}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
            <p className="text-gray-500 text-sm">Detailed performance breakdown by service</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600 mb-3">API Uptime</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '99.9%'}}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">156ms</div>
                <div className="text-sm text-gray-600 mb-3">Avg API Response</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">97.2%</div>
                <div className="text-sm text-gray-600 mb-3">Success Rate</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '97.2%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;