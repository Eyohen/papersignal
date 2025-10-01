import React, { useState } from 'react';
import { 
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  KeyIcon,
  CreditCardIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid';

const DashboardLayout = ({ children, currentPage = 'overview' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: HomeIcon, id: 'overview' },
    { name: 'Live Chat', href: '/dashboard/chat', icon: ChatBubbleLeftRightIcon, id: 'chat' },
    { name: 'Email API', href: '/dashboard/email', icon: EnvelopeIcon, id: 'email' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon, id: 'analytics' },
    { name: 'Team', href: '/dashboard/team', icon: UserGroupIcon, id: 'team' },
    // { name: 'API Keys', href: '/dashboard/api-keys', icon: KeyIcon, id: 'api-keys' },
    { name: 'Documentation', href: '/dashboard/docs', icon: DocumentTextIcon, id: 'docs' },
  ];

  const secondaryNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: CogIcon, id: 'settings' },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCardIcon, id: 'billing' },
    { name: 'Support', href: '/dashboard/support', icon: QuestionMarkCircleIcon, id: 'support' },
  ];

  const profileMenuItems = [
    { name: 'Your Profile', icon: UserCircleIcon },
    { name: 'Settings', icon: Cog6ToothIcon },
    { name: 'Sign out', icon: ArrowRightOnRectangleIcon },
  ];

  const user = {
    name: 'John Doe',
    email: 'john@company.com',
    avatar: null,
    company: 'Acme Inc'
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50" style={{fontFamily: 'Bricolage Grotesque, system-ui, -apple-system, sans-serif'}}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#27214e] rounded-lg flex items-center justify-center">
                    <SparklesIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-[#27214e]">Papersignal</span>
                </div>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      currentPage === item.id
                        ? 'bg-[#c4e6ff] text-[#27214e] border-r-2 border-[#27214e]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                  >
                    <item.icon
                      className={`${
                        currentPage === item.id ? 'text-[#27214e]' : 'text-gray-400 group-hover:text-gray-500'
                      } mr-3 flex-shrink-0 h-5 w-5`}
                    />
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${
                        currentPage === item.id
                          ? 'bg-[#c4e6ff] text-[#27214e] border-r-2 border-[#27214e]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                    >
                      <item.icon
                        className={`${
                          currentPage === item.id ? 'text-[#27214e]' : 'text-gray-400 group-hover:text-gray-500'
                        } mr-3 flex-shrink-0 h-5 w-5`}
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#27214e] rounded-lg flex items-center justify-center">
                    <SparklesIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-[#27214e]">Papersignal</span>
                </div>
              </div>
              <nav className="mt-8 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      currentPage === item.id
                        ? 'bg-[#c4e6ff] text-[#27214e] border-r-2 border-[#27214e]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                  >
                    <item.icon
                      className={`${
                        currentPage === item.id ? 'text-[#27214e]' : 'text-gray-400 group-hover:text-gray-500'
                      } mr-3 flex-shrink-0 h-5 w-5`}
                    />
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${
                        currentPage === item.id
                          ? 'bg-[#c4e6ff] text-[#27214e] border-r-2 border-[#27214e]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
                    >
                      <item.icon
                        className={`${
                          currentPage === item.id ? 'text-[#27214e]' : 'text-gray-400 group-hover:text-gray-500'
                        } mr-3 flex-shrink-0 h-5 w-5`}
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Top navigation */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow border-b border-gray-200">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#27214e] md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600 max-w-lg">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </div>
                  <input
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent text-sm"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Notifications */}
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27214e]">
                <BellIcon className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27214e]"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  >
                    <div className="h-8 w-8 rounded-full bg-[#27214e] flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-3 hidden md:block">
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-700">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.company}</p>
                      </div>
                    </div>
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-400" />
                  </button>
                </div>

                {profileDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    {profileMenuItems.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <item.icon className="mr-3 h-4 w-4 text-gray-400" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;