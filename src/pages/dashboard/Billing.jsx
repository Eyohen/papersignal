import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import {
  CreditCardIcon,
  BanknotesIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/solid';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

const DashboardBilling = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const currentPlan = {
    name: 'Professional',
    price: billingCycle === 'monthly' ? 49 : 490,
    period: billingCycle === 'monthly' ? 'month' : 'year',
    features: [
      'Up to 10,000 messages/month',
      'Advanced chat features',
      'Email API (10,000 emails/month)',
      'Priority support',
      'Advanced analytics',
      'Unlimited team members',
      'Custom branding',
      'Webhook integrations'
    ],
    usage: {
      messages: { used: 7834, limit: 10000 },
      emails: { used: 4567, limit: 10000 },
      apiCalls: { used: 89234, limit: 100000 },
      teamMembers: { used: 8, limit: null }
    },
    nextBilling: '2025-04-15',
    autoRenew: true
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for getting started',
      features: [
        'Up to 1,000 messages/month',
        'Basic live chat widget',
        'Email API (1,000 emails/month)',
        'Standard support',
        'Basic analytics',
        '2 team members'
      ],
      limits: {
        messages: 1000,
        emails: 1000,
        apiCalls: 10000,
        teamMembers: 2
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: 'Advanced features for scaling businesses',
      features: [
        'Up to 10,000 messages/month',
        'Advanced chat features',
        'Email API (10,000 emails/month)',
        'Priority support',
        'Advanced analytics',
        'Unlimited team members',
        'Custom branding',
        'Webhook integrations'
      ],
      limits: {
        messages: 10000,
        emails: 10000,
        apiCalls: 100000,
        teamMembers: null
      },
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      description: 'Tailored solutions with enterprise support',
      features: [
        'Unlimited messages',
        'White-label solution',
        'Custom integrations',
        'Dedicated success manager',
        'SLA guarantees',
        'Advanced security features',
        'Custom workflows',
        '24/7 phone support'
      ],
      limits: {
        messages: null,
        emails: null,
        apiCalls: null,
        teamMembers: null
      }
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'visa',
      last4: '4242',
      expiryMonth: 12,
      expiryYear: 2027,
      isDefault: true,
      cardholderName: 'John Doe'
    },
    {
      id: 2,
      type: 'mastercard',
      last4: '5555',
      expiryMonth: 8,
      expiryYear: 2026,
      isDefault: false,
      cardholderName: 'John Doe'
    }
  ];

  const invoices = [
    {
      id: 'INV-2024-003',
      date: '2024-03-15',
      amount: 49.00,
      status: 'paid',
      description: 'Professional Plan - March 2024',
      dueDate: '2024-03-15',
      paidDate: '2024-03-15'
    },
    {
      id: 'INV-2024-002',
      date: '2024-02-15',
      amount: 49.00,
      status: 'paid',
      description: 'Professional Plan - February 2024',
      dueDate: '2024-02-15',
      paidDate: '2024-02-15'
    },
    {
      id: 'INV-2024-001',
      date: '2024-01-15',
      amount: 49.00,
      status: 'paid',
      description: 'Professional Plan - January 2024',
      dueDate: '2024-01-15',
      paidDate: '2024-01-15'
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-15',
      amount: 49.00,
      status: 'paid',
      description: 'Professional Plan - December 2023',
      dueDate: '2023-12-15',
      paidDate: '2023-12-15'
    }
  ];

  const usageStats = [
    {
      name: 'API Requests',
      used: 89234,
      limit: 100000,
      unit: 'requests',
      color: 'bg-blue-500',
      percentage: 89
    },
    {
      name: 'Messages Sent',
      used: 7834,
      limit: 10000,
      unit: 'messages',
      color: 'bg-green-500',
      percentage: 78
    },
    {
      name: 'Emails Sent',
      used: 4567,
      limit: 10000,
      unit: 'emails',
      color: 'bg-purple-500',
      percentage: 46
    }
  ];

  const getCardIcon = (type) => {
    switch (type) {
      case 'visa':
        return (
          <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">VISA</span>
          </div>
        );
      case 'mastercard':
        return (
          <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">MC</span>
          </div>
        );
      default:
        return <CreditCardIcon className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'overdue':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getUsageWarningLevel = (percentage) => {
    if (percentage >= 90) return 'text-red-600 bg-red-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <DashboardLayout currentPage="billing">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
          <p className="mt-1 text-gray-500">Manage your subscription, usage, and payment methods</p>
        </div>

        {/* Current Plan Overview */}
        <div className="bg-gradient-to-r from-[#27214e] to-[#1a1735] rounded-lg shadow-sm text-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">{currentPlan.name} Plan</h2>
              <p className="text-[#c4e6ff] mb-4">
                ${currentPlan.price}/{currentPlan.period} • Next billing: {formatDate(currentPlan.nextBilling)}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span>Auto-renewal {currentPlan.autoRenew ? 'enabled' : 'disabled'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4 text-[#c4e6ff]" />
                  <span>Billing cycle: {billingCycle}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="bg-white text-[#27214e] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Change Plan
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-[#27214e] transition-colors">
                Manage Billing
              </button>
            </div>
          </div>
        </div>

        {/* Usage Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Current Usage</h3>
              <p className="text-gray-500 text-sm">Your usage for this billing cycle</p>
            </div>
            <span className="text-sm text-gray-500">Resets on {formatDate(currentPlan.nextBilling)}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageStats.map((stat) => (
              <div key={stat.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-900">{stat.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getUsageWarningLevel(stat.percentage)}`}>
                    {stat.percentage}%
                  </span>
                </div>
                <div className="mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${stat.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {stat.used.toLocaleString()} / {stat.limit.toLocaleString()} {stat.unit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Available Plans</h3>
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      billingCycle === 'monthly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      billingCycle === 'yearly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? 'border-[#27214e] bg-[#c4e6ff]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${plan.popular ? 'ring-2 ring-[#27214e] ring-opacity-20' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-4">
                        <span className="bg-[#27214e] text-white px-3 py-1 text-xs font-medium rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={selectedPlan === plan.id}
                            onChange={() => setSelectedPlan(plan.id)}
                            className="text-[#27214e] focus:ring-[#27214e]"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                            <p className="text-gray-600 text-sm">{plan.description}</p>
                          </div>
                        </div>
                        <div className="ml-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {plan.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {plan.features.length > 3 && (
                              <span className="text-xs text-gray-500">+{plan.features.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {typeof plan[billingCycle + 'Price'] === 'number' 
                            ? `$${plan[billingCycle + 'Price']}`
                            : plan[billingCycle + 'Price']
                          }
                        </div>
                        <div className="text-sm text-gray-500">
                          {typeof plan[billingCycle + 'Price'] === 'number' 
                            ? `/${billingCycle.slice(0, -2)}`
                            : 'pricing'
                          }
                        </div>
                        {billingCycle === 'yearly' && typeof plan.yearlyPrice === 'number' && (
                          <div className="text-xs text-green-600 font-medium">
                            Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPlan !== 'professional' && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-[#27214e] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#1a1735] transition-colors">
                    {selectedPlan === 'enterprise' ? 'Contact Sales' : 'Upgrade Plan'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735] flex items-center">
                  <PlusIcon className="w-4 h-4 mr-1" />
                  Add Card
                </button>
              </div>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getCardIcon(method.type)}
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          •••• •••• •••• {method.last4}
                        </p>
                        <p className="text-xs text-gray-500">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {method.isDefault && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Default
                        </span>
                      )}
                      <button className="text-gray-400 hover:text-gray-600">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Invoice */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Invoice</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Professional Plan</span>
                  <span className="font-medium">${currentPlan.price}.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between text-sm border-t border-gray-200 pt-3">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${currentPlan.price}.00</span>
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Due on {formatDate(currentPlan.nextBilling)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
                <p className="text-gray-500 text-sm">Download your invoices and view payment history</p>
              </div>
              <button className="text-[#27214e] text-sm font-medium hover:text-[#1a1735] flex items-center">
                <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                Export All
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {invoice.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${invoice.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(invoice.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-[#27214e] hover:text-[#1a1735] font-medium flex items-center ml-auto">
                        <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Billing Settings</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">Auto-renewal</p>
                <p className="text-sm text-gray-500">Automatically renew your subscription</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={currentPlan.autoRenew}
                  onChange={() => {}}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4e6ff] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27214e]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">Usage alerts</p>
                <p className="text-sm text-gray-500">Get notified when approaching usage limits</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4e6ff] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27214e]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">Invoice notifications</p>
                <p className="text-sm text-gray-500">Email notifications for new invoices</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c4e6ff] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#27214e]"></div>
              </label>
            </div>

            <div className="pt-4">
              <button className="text-red-600 text-sm font-medium hover:text-red-800 flex items-center">
                <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardBilling;