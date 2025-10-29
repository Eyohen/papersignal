import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { URL } from '../../url';
import axios from 'axios';
import io from 'socket.io-client';
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
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    activeChats: 0,
    avgResponseTime: '0m',
    satisfaction: '0%',
    pending: 0
  });
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Fetch chats from API
  useEffect(() => {
    fetchChats();
    connectSocket();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Connect to Socket.IO
  const connectSocket = () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    socketRef.current = io(URL, {
      transports: ['websocket', 'polling']
    });

    socketRef.current.on('connect', () => {
      console.log('Connected to Socket.IO');
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      socketRef.current.emit('authenticate', {
        merchantId: user.id,
        userType: 'merchant'
      });
    });

    socketRef.current.on('receive-chat-message', (data) => {
      console.log('Received message:', data);
      // Add message to current chat if it matches
      if (data.chatId === selectedConversation?.id) {
        setMessages(prev => [...prev, {
          id: data.message.id,
          sender: data.message.senderType,
          senderName: data.message.senderName,
          message: data.message.content,
          timestamp: new Date(data.message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'delivered'
        }]);
      }
      // Refresh chat list
      fetchChats();
    });

    socketRef.current.on('disconnect', () => {
      console.log('Disconnected from Socket.IO');
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchChats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${URL}/api/chats`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        const formattedChats = response.data.chats.map(chat => ({
          id: chat.id,
          customer: {
            name: chat.customerName,
            email: chat.customerEmail,
            avatar: getInitials(chat.customerName),
            status: 'online'
          },
          lastMessage: chat.messages?.[0]?.content || 'No messages yet',
          timestamp: formatTimestamp(chat.lastMessageAt || chat.createdAt),
          status: chat.status,
          priority: chat.priority,
          tags: chat.tags || [],
          subject: chat.subject
        }));
        setConversations(formattedChats);

        // Update stats
        const activeChats = formattedChats.filter(c => c.status === 'open').length;
        const pendingChats = formattedChats.filter(c => c.status === 'in-progress').length;
        setStats({
          activeChats: activeChats,
          avgResponseTime: '2.3m',
          satisfaction: '98%',
          pending: pendingChats
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chats:', error);
      setLoading(false);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${URL}/api/chats/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        const formattedMessages = response.data.chat.messages.map(msg => ({
          id: msg.id,
          sender: msg.senderType,
          senderName: msg.senderName,
          message: msg.content,
          timestamp: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: msg.isRead ? 'read' : 'delivered'
        }));
        setMessages(formattedMessages);

        // Join chat room for real-time updates
        if (socketRef.current) {
          socketRef.current.emit('join-chat', chatId);
        }
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / 60000);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hour${Math.floor(diffInMinutes / 60) > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  const quickReplies = [
    "Thanks for contacting us! How can I help you today?",
    "I'll look into this issue right away.",
    "Let me transfer you to a specialist.",
    "Is there anything else I can help you with?"
  ];

  const statsData = [
    {
      name: 'Active Chats',
      value: stats.activeChats.toString(),
      change: '+12%',
      icon: ChatBubbleLeftRightIcon,
      color: 'text-blue-600'
    },
    {
      name: 'Avg Response Time',
      value: stats.avgResponseTime,
      change: '-15%',
      icon: ClockIcon,
      color: 'text-green-600'
    },
    {
      name: 'Customer Satisfaction',
      value: stats.satisfaction,
      change: '+3%',
      icon: CheckCircleIcon,
      color: 'text-purple-600'
    },
    {
      name: 'Pending Requests',
      value: stats.pending.toString(),
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

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;

    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      const response = await axios.post(
        `${URL}/api/chats/${selectedConversation.id}/messages`,
        {
          content: newMessage,
          messageType: 'text'
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        const newMsg = {
          id: response.data.message.id,
          sender: 'agent',
          senderName: `${user.fname} ${user.lname}`,
          message: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'sent'
        };
        setMessages(prev => [...prev, newMsg]);
        setNewMessage('');

        // Emit socket event for real-time update
        if (socketRef.current) {
          socketRef.current.emit('send-chat-message', {
            chatId: selectedConversation.id,
            message: response.data.message
          });
        }

        // Refresh chat list
        fetchChats();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
    fetchMessages(conversation.id);
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
          {statsData.map((stat) => (
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
              {loading ? (
                <div className="p-4 text-center text-gray-500">Loading chats...</div>
              ) : conversations.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No chats yet</div>
              ) : (
                conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => handleConversationSelect(conversation)}
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
                ))
              )}
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
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-8">No messages yet</div>
                  ) : (
                    messages.map((message) => (
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
                          {message.sender === 'customer' && message.senderName && (
                            <p className="text-xs font-semibold mb-1 text-gray-600">{message.senderName}</p>
                          )}
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
                    ))
                  )}
                  <div ref={messagesEndRef} />
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
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      placeholder="Type your message..."
                      rows="2"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] resize-none"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-[#27214e] text-white px-4 py-2 rounded-lg hover:bg-[#1a1735] transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
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