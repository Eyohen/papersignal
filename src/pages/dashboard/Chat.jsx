import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardLayout';
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/solid';
import { PlusIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const DashboardChat = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const conversations = [
    {
      id: 1,
      customer: {
        name: 'John Smith',
        email: 'john@example.com',
        avatar: 'JS',
        status: 'online'
      },
      lastMessage: "Hi, I'm having trouble with my account setup",
      timestamp: '2 min ago',
      status: 'unread',
      priority: 'high',
      tags: ['account', 'setup']
    },
    {
      id: 2,
      customer: {
        name: 'Sarah Wilson',
        email: 'sarah@company.com',
        avatar: 'SW',
        status: 'away'
      },
      lastMessage: "Thank you for the quick response!",
      timestamp: '15 min ago',
      status: 'read',
      priority: 'normal',
      tags: ['billing']
    },
    {
      id: 3,
      customer: {
        name: 'Mike Johnson',
        email: 'mike@startup.io',
        avatar: 'MJ',
        status: 'offline'
      },
      lastMessage: "Can you help me integrate the API?",
      timestamp: '1 hour ago',
      status: 'pending',
      priority: 'high',
      tags: ['api', 'integration']
    },
    {
      id: 4,
      customer: {
        name: 'Emma Davis',
        email: 'emma@tech.com',
        avatar: 'ED',
        status: 'online'
      },
      lastMessage: "The new features look great!",
      timestamp: '2 hours ago',
      status: 'read',
      priority: 'low',
      tags: ['feedback']
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'customer',
      message: "Hi, I'm having trouble with my account setup",
      timestamp: '2:30 PM',
      status: 'delivered'
    },
    {
      id: 2,
      sender: 'agent',
      message: "Hi John! I'd be happy to help you with your account setup. What specific issue are you experiencing?",
      timestamp: '2:32 PM',
      status: 'read'
    },
    {
      id: 3,
      sender: 'customer',
      message: "I can't seem to connect my email integration. It keeps giving me an authentication error.",
      timestamp: '2:35 PM',
      status: 'delivered'
    },
    {
      id: 4,
      sender: 'agent',
      message: "I see the issue. Let me walk you through the correct authentication process. First, make sure you're using the correct API key from your dashboard.",
      timestamp: '2:37 PM',
      status: 'read'
    }
  ];

  const quickReplies = [
    "Thanks for contacting us! How can I help you today?",
    "I'll look into this issue right away.",
    "Let me transfer you to a specialist.",
    "Is there anything else I can help you with?"
  ];

  const stats = [
    {
      name: 'Active Chats',
      value: '24',
      change: '+12%',
      icon: ChatBubbleLeftRightIcon,
      color: 'text-blue-600'
    },
    {
      name: 'Avg Response Time',
      value: '2.3m',
      change: '-15%',
      icon: ClockIcon,
      color: 'text-green-600'
    },
    {
      name: 'Customer Satisfaction',
      value: '98%',
      change: '+3%',
      icon: CheckCircleIcon,
      color: 'text-purple-600'
    },
    {
      name: 'Pending Requests',
      value: '8',
      change: '+2',
      icon: ExclamationTriangleIcon,
      color: 'text-orange-600'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'normal': return 'text-blue-600 bg-blue-100';
      case 'low': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConversationStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-blue-100 border-blue-300';
      case 'pending': return 'bg-orange-100 border-orange-300';
      case 'read': return 'bg-white border-gray-200';
      default: return 'bg-white border-gray-200';
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle send message logic
      console.log('Sending:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <DashboardLayout currentPage="chat">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Live Chat</h1>
            <p className="mt-1 text-gray-500">Manage customer conversations in real-time</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white hover:bg-gray-50">
              <FunnelIcon className="w-4 h-4 mr-2" />
              Filter
            </button>
            <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors flex items-center">
              <PlusIcon className="w-4 h-4 mr-2" />
              New Chat
            </button>
          </div>
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
              <p className="text-sm text-gray-500 mt-2">{stat.change} from yesterday</p>
            </div>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] text-sm"
                />
              </div>
              <div className="flex mt-3 space-x-2">
                {['all', 'unread', 'pending'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      filterStatus === status
                        ? 'bg-[#27214e] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedConversation?.id === conversation.id ? 'bg-[#c4e6ff]/20' : ''
                  } ${getConversationStatusColor(conversation.status)}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-[#27214e] rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {conversation.customer.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(conversation.customer.status)}`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{conversation.customer.name}</p>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(conversation.priority)}`}>
                            {conversation.priority}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-gray-400">{conversation.timestamp}</p>
                        <div className="flex space-x-1">
                          {conversation.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-[#27214e] rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {selectedConversation.customer.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(selectedConversation.customer.status)}`}></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{selectedConversation.customer.name}</p>
                      <p className="text-sm text-gray-500">{selectedConversation.customer.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <PhoneIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <VideoCameraIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'agent'
                            ? 'bg-[#27214e] text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'agent' ? 'text-[#c4e6ff]' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2 border-t border-gray-100">
                  <div className="flex space-x-2 overflow-x-auto">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => setNewMessage(reply)}
                        className="flex-shrink-0 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      rows="2"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] resize-none"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-[#27214e] text-white px-4 py-2 rounded-lg hover:bg-[#1a1735] transition-colors flex items-center"
                    >
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <ChatBubbleLeftRightIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">Select a conversation</p>
                  <p className="text-sm">Choose a conversation from the list to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardChat;