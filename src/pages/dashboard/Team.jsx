import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboardLayout';
import {
  UserGroupIcon,
  UserPlusIcon,
  ShieldCheckIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, FunnelIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const DashboardTeam = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    email: '',
    role: 'member',
    departments: []
  });

  const teamStats = [
    {
      name: 'Total Members',
      value: '24',
      change: '+3 this month',
      icon: UserGroupIcon,
      color: 'text-blue-600'
    },
    {
      name: 'Active Now',
      value: '18',
      change: '75% online',
      icon: CheckCircleIcon,
      color: 'text-green-600'
    },
    {
      name: 'Pending Invites',
      value: '2',
      change: 'Sent this week',
      icon: EnvelopeIcon,
      color: 'text-orange-600'
    },
    {
      name: 'Avg Response Time',
      value: '2.4m',
      change: '15% faster',
      icon: ClockIcon,
      color: 'text-purple-600'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      role: 'Admin',
      department: 'Engineering',
      avatar: 'JD',
      status: 'online',
      lastActive: 'Now',
      joinedDate: '2023-01-15',
      permissions: ['all'],
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      performance: {
        messagesHandled: 1247,
        avgResponseTime: '1.8m',
        satisfaction: 98,
        tasksCompleted: 45
      }
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@company.com',
      role: 'Manager',
      department: 'Customer Success',
      avatar: 'SW',
      status: 'online',
      lastActive: '5 min ago',
      joinedDate: '2023-02-20',
      permissions: ['chat', 'email', 'analytics'],
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      performance: {
        messagesHandled: 2156,
        avgResponseTime: '2.1m',
        satisfaction: 96,
        tasksCompleted: 62
      }
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@company.com',
      role: 'Member',
      department: 'Support',
      avatar: 'MJ',
      status: 'away',
      lastActive: '1 hour ago',
      joinedDate: '2023-03-10',
      permissions: ['chat', 'email'],
      phone: '+1 (555) 345-6789',
      location: 'Austin, TX',
      performance: {
        messagesHandled: 892,
        avgResponseTime: '3.2m',
        satisfaction: 94,
        tasksCompleted: 38
      }
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma@company.com',
      role: 'Member',
      department: 'Marketing',
      avatar: 'ED',
      status: 'offline',
      lastActive: '2 days ago',
      joinedDate: '2023-04-05',
      permissions: ['email', 'analytics'],
      phone: '+1 (555) 456-7890',
      location: 'Chicago, IL',
      performance: {
        messagesHandled: 567,
        avgResponseTime: '2.8m',
        satisfaction: 92,
        tasksCompleted: 28
      }
    },
    {
      id: 5,
      name: 'Alex Chen',
      email: 'alex@company.com',
      role: 'Developer',
      department: 'Engineering',
      avatar: 'AC',
      status: 'online',
      lastActive: '15 min ago',
      joinedDate: '2023-05-12',
      permissions: ['api', 'settings'],
      phone: '+1 (555) 567-8901',
      location: 'Seattle, WA',
      performance: {
        messagesHandled: 234,
        avgResponseTime: '4.1m',
        satisfaction: 89,
        tasksCompleted: 15
      }
    }
  ];

  const pendingInvites = [
    {
      id: 1,
      email: 'jane.smith@company.com',
      role: 'Manager',
      department: 'Sales',
      invitedBy: 'John Doe',
      inviteDate: '2024-03-10',
      status: 'pending'
    },
    {
      id: 2,
      email: 'robert.brown@company.com',
      role: 'Member',
      department: 'Support',
      invitedBy: 'Sarah Wilson',
      inviteDate: '2024-03-08',
      status: 'pending'
    }
  ];

  const roles = [
    {
      id: 'admin',
      name: 'Admin',
      description: 'Full access to all features and settings',
      permissions: ['all'],
      memberCount: 2,
      color: 'text-red-600 bg-red-100'
    },
    {
      id: 'manager',
      name: 'Manager',
      description: 'Manage team members and access most features',
      permissions: ['chat', 'email', 'analytics', 'team'],
      memberCount: 5,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 'member',
      name: 'Member',
      description: 'Standard access to communication features',
      permissions: ['chat', 'email'],
      memberCount: 15,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 'developer',
      name: 'Developer',
      description: 'Access to API and technical settings',
      permissions: ['api', 'settings', 'analytics'],
      memberCount: 2,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  const departments = ['Engineering', 'Customer Success', 'Support', 'Marketing', 'Sales'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getRoleColor = (role) => {
    const roleData = roles.find(r => r.name === role);
    return roleData ? roleData.color : 'text-gray-600 bg-gray-100';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleInvite = (e) => {
    e.preventDefault();
    console.log('Inviting:', inviteForm);
    setShowInviteModal(false);
    setInviteForm({ email: '', role: 'member', departments: [] });
  };

  const renderMembers = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search team members..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] text-sm"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
            <option value="">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
            <option value="">All Roles</option>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors flex items-center"
        >
          <UserPlusIcon className="w-4 h-4 mr-2" />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#27214e] rounded-full flex items-center justify-center text-white font-medium">
                    {member.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.email}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMember(member)}
                className="text-gray-400 hover:text-gray-600"
              >
                <EllipsisVerticalIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Role</span>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${getRoleColor(member.role)}`}>
                  {member.role}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Department</span>
                <span className="text-sm font-medium text-gray-900">{member.department}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Active</span>
                <span className="text-sm text-gray-900">{member.lastActive}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Location</span>
                <span className="text-sm text-gray-900">{member.location}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Performance</span>
                <span className="text-[#27214e] font-medium">{member.performance.satisfaction}% satisfaction</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-[#27214e] text-white px-3 py-2 rounded text-sm font-medium hover:bg-[#1a1735] transition-colors">
                View Profile
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                <EnvelopeIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInvites = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Pending Invitations</h3>
          <p className="text-gray-500 text-sm">Manage outstanding team invitations</p>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors flex items-center"
        >
          <UserPlusIcon className="w-4 h-4 mr-2" />
          Send Invite
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invited By</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingInvites.map((invite) => (
              <tr key={invite.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {invite.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getRoleColor(invite.role)}`}>
                    {invite.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invite.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invite.invitedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(invite.inviteDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-[#27214e] hover:text-[#1a1735] font-medium">
                      Resend
                    </button>
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Cancel
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

  const renderRoles = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Team Roles</h3>
          <p className="text-gray-500 text-sm">Manage roles and permissions for your team</p>
        </div>
        <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1735] transition-colors">
          Create Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{role.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${role.color}`}>
                    {role.memberCount} members
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-gray-900">Permissions:</p>
              <div className="flex flex-wrap gap-1">
                {role.permissions.map((permission) => (
                  <span key={permission} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {permission === 'all' ? 'All permissions' : permission}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm font-medium hover:bg-gray-50">
                Edit Role
              </button>
              {role.id !== 'admin' && (
                <button className="px-3 py-2 text-red-600 hover:text-red-800 text-sm">
                  <TrashIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'members', name: 'Team Members', icon: UserGroupIcon },
    { id: 'invites', name: 'Invitations', icon: EnvelopeIcon },
    { id: 'roles', name: 'Roles & Permissions', icon: ShieldCheckIcon }
  ];

  return (
    <DashboardLayout currentPage="team">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <p className="mt-1 text-gray-500">Manage your team members, roles, and permissions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamStats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <p className="text-sm text-gray-500 mt-2">{stat.change}</p>
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
            {activeTab === 'members' && renderMembers()}
            {activeTab === 'invites' && renderInvites()}
            {activeTab === 'roles' && renderRoles()}
          </div>
        </div>

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Invite Team Member</h2>
                  <button 
                    onClick={() => setShowInviteModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={inviteForm.email}
                    onChange={(e) => setInviteForm({...inviteForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
                    placeholder="colleague@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={inviteForm.role}
                    onChange={(e) => setInviteForm({...inviteForm, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]"
                  >
                    {roles.map(role => (
                      <option key={role.id} value={role.name.toLowerCase()}>{role.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e]">
                    <option value="">Select department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="bg-[#c4e6ff]/20 rounded-lg p-4 border border-[#c4e6ff]/50">
                  <p className="text-sm text-gray-700">
                    An invitation email will be sent with instructions to join your team.
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex space-x-3">
                <button
                  onClick={handleInvite}
                  className="flex-1 bg-[#27214e] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#1a1735] transition-colors"
                >
                  Send Invitation
                </button>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#27214e] rounded-full flex items-center justify-center text-white text-xl font-medium">
                        {selectedMember.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${getStatusColor(selectedMember.status)}`}></div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{selectedMember.name}</h2>
                      <p className="text-gray-600">{selectedMember.email}</p>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getRoleColor(selectedMember.role)}`}>
                        {selectedMember.role}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                        <span>{selectedMember.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="w-4 h-4 text-gray-400" />
                        <span>{selectedMember.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-gray-400">📍</span>
                        <span>{selectedMember.location}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Team Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Department</span>
                        <span className="font-medium">{selectedMember.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Joined Date</span>
                        <span className="font-medium">{formatDate(selectedMember.joinedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Active</span>
                        <span className="font-medium">{selectedMember.lastActive}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Performance Metrics</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#27214e]">{selectedMember.performance.messagesHandled}</div>
                      <div className="text-xs text-gray-600">Messages Handled</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#27214e]">{selectedMember.performance.avgResponseTime}</div>
                      <div className="text-xs text-gray-600">Avg Response Time</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#27214e]">{selectedMember.performance.satisfaction}%</div>
                      <div className="text-xs text-gray-600">Satisfaction Score</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#27214e]">{selectedMember.performance.tasksCompleted}</div>
                      <div className="text-xs text-gray-600">Tasks Completed</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Permissions</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.permissions.map((permission) => (
                      <span key={permission} className="px-3 py-1 bg-[#c4e6ff] text-[#27214e] text-sm rounded-full">
                        {permission === 'all' ? 'All Permissions' : permission}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex space-x-3">
                <button className="bg-[#27214e] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a1735] transition-colors">
                  Edit Member
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
                  Send Message
                </button>
                <button className="text-red-600 hover:text-red-800 px-4 py-2">
                  Remove Member
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardTeam;