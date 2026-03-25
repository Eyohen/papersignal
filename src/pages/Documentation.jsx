// Documentation.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";

const CodeBlock = ({ label, children }) => (
  <div className="rounded-lg overflow-hidden border border-[#e5e7eb] mb-5">
    <div className="bg-[#f3f4f6] px-3.5 py-2 text-[12px] font-medium text-[#6b7280] border-b border-[#e5e7eb]">
      {label}
    </div>
    <pre className="bg-[#0d1117] p-4 overflow-x-auto m-0 text-[13px] leading-[1.5]">
      <code className="text-[#e6edf3]" style={{ fontFamily: "'JetBrains Mono', monospace", textShadow: 'none' }}>{children}</code>
    </pre>
  </div>
);

const MethodBadge = ({ method }) => {
  const styles = {
    GET: 'bg-[#ecfdf5] text-[#065f46]',
    POST: 'bg-[#eff6ff] text-[#1e40af]',
    DELETE: 'bg-[#fef2f2] text-[#991b1b]',
    PATCH: 'bg-[#fffbeb] text-[#92400e]',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wide ${styles[method]}`}>
      {method}
    </span>
  );
};

const UrlBlock = ({ children }) => (
  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-3.5 py-2.5 mb-6 text-[13px] text-[#1a1a1a]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
    {children}
  </div>
);

const ParamTable = ({ columns, rows }) => (
  <div className="border border-[#e5e7eb] rounded-lg overflow-hidden mb-6 text-[13px]">
    <table className="w-full" style={{ borderSpacing: 0 }}>
      <thead className="bg-[#f9fafb]">
        <tr>
          {columns.map((col, i) => (
            <th key={i} className="text-left px-4 py-2.5 text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide border-b border-[#e5e7eb]">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className={`px-4 py-2.5 text-[#4b5563] ${i < rows.length - 1 ? 'border-b border-[#f3f4f6]' : ''} ${j === 0 ? 'font-medium text-[#1a1a1a]' : ''}`}
                style={j === 0 ? { fontFamily: "'JetBrains Mono', monospace" } : {}}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Callout = ({ type, title, children }) => {
  const styles = {
    warn: { border: '#f59e0b', bg: '#fffbeb', text: '#92400e' },
    info: { border: '#3b82f6', bg: '#eff6ff', text: '#1e40af' },
  };
  const s = styles[type];
  return (
    <div className="rounded-r-md mb-6 px-4 py-3" style={{ borderLeft: `3px solid ${s.border}`, background: s.bg }}>
      <div className="text-[13px] font-semibold mb-0.5" style={{ color: s.text }}>{title}</div>
      <div className="text-[13px]" style={{ color: s.text }}>{children}</div>
    </div>
  );
};

const Divider = () => <hr className="border-[#e5e7eb] border-t mb-0 mt-0" />;

const EndpointRow = ({ method, path, desc }) => (
  <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#f9fafb] border border-[#e5e7eb] rounded-md text-[13px]">
    <MethodBadge method={method} />
    <code className="text-[13px] text-[#1a1a1a]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{path}</code>
    <span className="text-[#9ca3af] text-[13px]">{desc}</span>
  </div>
);

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sidebarSections = [
    {
      label: 'Getting Started',
      items: [
        { id: 'introduction', name: 'Introduction' },
        { id: 'authentication', name: 'Authentication' },
        { id: 'quick-start', name: 'Quick Start' },
      ]
    },
    {
      label: 'Conversations',
      items: [
        { id: 'create-room', name: 'Create Room' },
        { id: 'direct-conversation', name: 'Get/Create Direct' },
        { id: 'user-conversations', name: 'User Conversations' },
        { id: 'get-rooms', name: 'Get Rooms' },
        { id: 'get-room', name: 'Get Room by ID' },
        { id: 'delete-room', name: 'Delete Room' },
      ]
    },
    {
      label: 'Messages',
      items: [
        { id: 'send-message', name: 'Send Message' },
        { id: 'edit-message', name: 'Edit Message' },
        { id: 'delete-message', name: 'Delete Message' },
        { id: 'read-receipts', name: 'Read Receipts' },
      ]
    },
    {
      label: 'Reactions',
      items: [
        { id: 'add-reaction', name: 'Add Reaction' },
        { id: 'remove-reaction', name: 'Remove Reaction' },
        { id: 'get-reactions', name: 'Get Reactions' },
      ]
    },
    {
      label: 'Presence',
      items: [
        { id: 'update-presence', name: 'Update Presence' },
        { id: 'get-presence', name: 'Get Presence' },
        { id: 'bulk-presence', name: 'Bulk Presence' },
      ]
    },
    {
      label: 'Participants',
      items: [
        { id: 'add-participant', name: 'Add Participant' },
        { id: 'remove-participant', name: 'Remove Participant' },
      ]
    },
    {
      label: 'Webhooks',
      items: [
        { id: 'create-webhook', name: 'Create Webhook' },
        { id: 'list-webhooks', name: 'List Webhooks' },
        { id: 'webhook-events', name: 'Webhook Events' },
      ]
    },
    {
      label: 'Real-Time',
      items: [
        { id: 'socket-io', name: 'Socket.IO Events' },
        { id: 'real-time-example', name: 'Integration Example' },
      ]
    },
  ];

  const Required = () => <span className="text-[11px] font-medium text-[#dc2626]">Required</span>;
  const Optional = () => <span className="text-[11px] text-[#9ca3af]">Optional</span>;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Link to="/" className="flex items-center gap-2 text-[15px] font-semibold text-[#1a1a1a] no-underline">
              <IoMailOutline size={18}/>
              Papersignal
            </Link>
            <span className="text-[13px] text-[#9ca3af] font-normal">Docs</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#quick-start" className="text-[13px] font-medium text-[#6b7280] hover:text-[#1a1a1a] no-underline">Quick Start</a>
            <a href="#real-time-example" className="text-[13px] font-medium text-[#6b7280] hover:text-[#1a1a1a] no-underline">Examples</a>
            <Link to="/dashboard" className="bg-[#1a1a1a] text-white px-3.5 py-1.5 rounded-md text-[13px] font-medium hover:bg-[#333] no-underline">Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[240px] flex-shrink-0 border-r border-[#e5e7eb] h-[calc(100vh-56px)] sticky top-[56px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
          <nav className="py-6">
            {sidebarSections.map((section, si) => (
              <div key={si} className="mb-6">
                <div className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide px-5 mb-1">
                  {section.label}
                </div>
                {section.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block px-5 py-[5px] text-[13px] no-underline ${
                      activeSection === item.id
                        ? 'text-[#1a1a1a] font-medium'
                        : 'text-[#6b7280] hover:text-[#1a1a1a]'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-12 py-10">
          <div className="space-y-14">

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-[72px]">
              <h1 className="text-[32px] font-semibold text-[#1a1a1a] leading-[1.2] mb-3">In-App Messaging API</h1>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                Build real-time chat into your application with Papersignal's messaging API. Support for direct messages, group conversations, channels, reactions, presence, and webhooks.
              </p>

              <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-4 py-3 mb-8">
                <div className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">Base URL</div>
                <code className="text-[14px] text-[#1a1a1a]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>https://mailserver-production.up.railway.app</code>
              </div>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Features</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  'Direct Messages, Groups & Channels',
                  'Read Receipts & Unread Counts',
                  'Typing Indicators & Presence',
                  'Message Edit & Delete',
                  'Emoji Reactions',
                  'Webhooks for Server Notifications',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[14px] text-[#4b5563]">
                    <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            {/* Authentication */}
            <section id="authentication" className="scroll-mt-[72px]">
              <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-3">Authentication</h2>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                All API requests require authentication using your API key. Get your key from the Papersignal dashboard.
              </p>

              <Callout type="warn" title="Keep your API key secure">
                Never expose it in client-side code or public repositories. Use environment variables and backend proxies.
              </Callout>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Include in Headers</h3>
              <CodeBlock label="HTTP Headers">{`x-api-key: YOUR_API_KEY_HERE
Content-Type: application/json`}</CodeBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Example Request</h3>
              <CodeBlock label="JavaScript">{`fetch('https://mailserver-production.up.railway.app/api/external-chat/rooms', {
  headers: {
    'x-api-key': 'your-api-key-here',
    'Content-Type': 'application/json'
  }
});`}</CodeBlock>
            </section>

            <Divider />

            {/* Quick Start */}
            <section id="quick-start" className="scroll-mt-[72px]">
              <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-3">Quick Start</h2>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                Get up and running with the messaging API in four steps.
              </p>

              <div className="flex flex-col gap-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f3f4f6] text-[#4b5563] text-[13px] font-semibold flex items-center justify-center">1</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">Start a Direct Conversation</h3>
                    <CodeBlock label="JavaScript">{`// Get or create a direct conversation between two users
const response = await fetch('https://mailserver-production.up.railway.app/api/external-chat/conversations/direct', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    user1Id: 'alice_123',
    user1Name: 'Alice',
    user2Id: 'bob_456',
    user2Name: 'Bob'
  })
});

const { room, created } = await response.json();
console.log(created ? 'New conversation' : 'Existing conversation', room.id);`}</CodeBlock>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f3f4f6] text-[#4b5563] text-[13px] font-semibold flex items-center justify-center">2</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">Send Messages</h3>
                    <CodeBlock label="JavaScript">{`await fetch(\`https://mailserver-production.up.railway.app/api/external-chat/rooms/\${roomId}/messages\`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    userId: 'alice_123',
    userName: 'Alice',
    content: 'Hey Bob! How are you?',
    messageType: 'text'
  })
});`}</CodeBlock>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f3f4f6] text-[#4b5563] text-[13px] font-semibold flex items-center justify-center">3</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">Get User's Conversations with Unread Counts</h3>
                    <CodeBlock label="JavaScript">{`const response = await fetch('https://mailserver-production.up.railway.app/api/external-chat/users/bob_456/conversations', {
  headers: { 'x-api-key': 'YOUR_API_KEY' }
});

const { conversations } = await response.json();
// Each conversation includes unreadCount and lastMessage
conversations.forEach(conv => {
  console.log(\`\${conv.name}: \${conv.unreadCount} unread\`);
});`}</CodeBlock>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f3f4f6] text-[#4b5563] text-[13px] font-semibold flex items-center justify-center">4</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">Connect Socket.IO for Real-Time</h3>
                    <CodeBlock label="JavaScript">{`import io from 'socket.io-client';

const socket = io('https://mailserver-production.up.railway.app');

socket.emit('join-room', {
  roomId: 'room-id',
  userId: 'bob_456',
  userName: 'Bob'
});

socket.on('receive-room-message', (data) => {
  console.log('New message:', data.message);
});

socket.on('reaction-added', (data) => {
  console.log('Reaction added:', data.emoji);
});`}</CodeBlock>
                  </div>
                </div>
              </div>
            </section>

            <Divider />

            {/* Get/Create Direct Conversation */}
            <section id="direct-conversation" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get or Create Direct Conversation</h2>
              </div>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                Find an existing direct conversation between two users, or create one if it doesn't exist. This is the recommended way to start 1:1 chats.
              </p>

              <UrlBlock>POST /api/external-chat/conversations/direct</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <ParamTable
                columns={['Parameter', 'Type', 'Required', 'Description']}
                rows={[
                  ['user1Id', 'string', <Required />, 'First user\'s ID'],
                  ['user1Name', 'string', <Required />, 'First user\'s display name'],
                  ['user1Avatar', 'string', <Optional />, 'First user\'s avatar URL'],
                  ['user2Id', 'string', <Required />, 'Second user\'s ID'],
                  ['user2Name', 'string', <Required />, 'Second user\'s display name'],
                  ['user2Avatar', 'string', <Optional />, 'Second user\'s avatar URL'],
                  ['metadata', 'object', <Optional />, 'Custom metadata'],
                ]}
              />

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Response</h3>
              <CodeBlock label="JSON Response">{`{
  "success": true,
  "room": {
    "id": "room_abc123",
    "type": "direct",
    "participants": [...],
    "lastMessageAt": "2024-01-15T10:30:00Z"
  },
  "created": true,
  "msg": "New conversation created"
}`}</CodeBlock>
            </section>

            <Divider />

            {/* User Conversations */}
            <section id="user-conversations" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="GET" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get User's Conversations</h2>
              </div>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                Get all conversations for a specific user, including unread counts and last message.
              </p>

              <UrlBlock>GET /api/external-chat/users/:userId/conversations</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Query Parameters</h3>
              <ParamTable
                columns={['Parameter', 'Type', 'Description']}
                rows={[
                  ['type', 'string', 'Filter by type (direct/group/channel)'],
                  ['page', 'integer', 'Page number (default: 1)'],
                  ['limit', 'integer', 'Results per page (default: 20)'],
                ]}
              />

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Response</h3>
              <CodeBlock label="JSON Response">{`{
  "success": true,
  "conversations": [
    {
      "id": "room_abc123",
      "name": "Project Chat",
      "type": "group",
      "participants": [...],
      "unreadCount": 5,
      "lastMessage": {
        "id": "msg_xyz",
        "content": "See you tomorrow!",
        "userName": "Alice",
        "createdAt": "2024-01-15T10:30:00Z"
      },
      "lastMessageAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 12,
    "page": 1,
    "limit": 20,
    "totalPages": 1
  }
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Create Room */}
            <section id="create-room" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Create Room</h2>
              </div>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                Create a new chat room (direct, group, or channel).
              </p>

              <UrlBlock>POST /api/external-chat/rooms</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "name": "Project Discussion",
  "type": "group",  // "direct", "group", or "channel"
  "participants": [
    { "userId": "user_123", "userName": "John Doe", "role": "admin" },
    { "userId": "user_456", "userName": "Jane Smith", "role": "member" }
  ],
  "metadata": { "projectId": "proj_789" }
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Get Rooms */}
            <section id="get-rooms" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="GET" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get Rooms</h2>
              </div>
              <UrlBlock>GET /api/external-chat/rooms?type=group&page=1&limit=20</UrlBlock>
            </section>

            <Divider />

            {/* Get Room by ID */}
            <section id="get-room" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="GET" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get Room by ID</h2>
              </div>
              <UrlBlock>GET /api/external-chat/rooms/:roomId?limit=50&before=timestamp</UrlBlock>
              <p className="text-[13px] text-[#6b7280]">Returns room details with message history. Use the <code className="bg-[#f3f4f6] px-1 py-0.5 rounded text-[12px]">before</code> parameter for pagination.</p>
            </section>

            <Divider />

            {/* Delete Room */}
            <section id="delete-room" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="DELETE" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Delete Room</h2>
              </div>
              <UrlBlock>DELETE /api/external-chat/rooms/:roomId</UrlBlock>
            </section>

            <Divider />

            {/* Send Message */}
            <section id="send-message" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Send Message</h2>
              </div>
              <UrlBlock>POST /api/external-chat/rooms/:roomId/messages</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_123",
  "userName": "John Doe",
  "userAvatar": "https://example.com/avatar.jpg",
  "content": "Hello everyone!",
  "messageType": "text",  // "text", "image", "file", "system"
  "metadata": {}
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Edit Message */}
            <section id="edit-message" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="PATCH" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Edit Message</h2>
              </div>
              <UrlBlock>PATCH /api/external-chat/rooms/:roomId/messages/:messageId</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_123",  // Must be the original sender
  "content": "Updated message content"
}`}</CodeBlock>
              <p className="text-[13px] text-[#6b7280]">Response includes <code className="bg-[#f3f4f6] px-1 py-0.5 rounded text-[12px]">editedAt</code> timestamp.</p>
            </section>

            <Divider />

            {/* Delete Message */}
            <section id="delete-message" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="DELETE" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Delete Message</h2>
              </div>
              <UrlBlock>DELETE /api/external-chat/rooms/:roomId/messages/:messageId</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_123"  // Must be the original sender
}`}</CodeBlock>
              <p className="text-[13px] text-[#6b7280]">Messages are soft-deleted and marked with <code className="bg-[#f3f4f6] px-1 py-0.5 rounded text-[12px]">isDeleted: true</code>.</p>
            </section>

            <Divider />

            {/* Read Receipts */}
            <section id="read-receipts" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Mark Messages as Read</h2>
              </div>
              <UrlBlock>POST /api/external-chat/rooms/:roomId/read</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_123",
  "messageId": "msg_xyz"  // Optional - if omitted, marks all as read
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Add Reaction */}
            <section id="add-reaction" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Add Reaction</h2>
              </div>
              <UrlBlock>POST /api/external-chat/rooms/:roomId/messages/:messageId/reactions</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_123",
  "userName": "John Doe",
  "emoji": "thumbsup"  // or any emoji identifier
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Remove Reaction */}
            <section id="remove-reaction" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="DELETE" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Remove Reaction</h2>
              </div>
              <UrlBlock>DELETE /api/external-chat/rooms/:roomId/messages/:messageId/reactions</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_123",
  "emoji": "thumbsup"
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Get Reactions */}
            <section id="get-reactions" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="GET" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get Reactions</h2>
              </div>
              <UrlBlock>GET /api/external-chat/rooms/:roomId/messages/:messageId/reactions</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Response</h3>
              <CodeBlock label="JSON Response">{`{
  "success": true,
  "reactions": {
    "thumbsup": [
      { "userId": "user_123", "userName": "John" },
      { "userId": "user_456", "userName": "Jane" }
    ],
    "heart": [
      { "userId": "user_789", "userName": "Bob" }
    ]
  },
  "total": 3
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Update Presence */}
            <section id="update-presence" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Update User Presence</h2>
              </div>
              <UrlBlock>POST /api/external-chat/users/:userId/presence</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "status": "online",  // "online", "away", or "offline"
  "userName": "John Doe",
  "metadata": { "device": "mobile" }
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Get Presence */}
            <section id="get-presence" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="GET" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get User Presence</h2>
              </div>
              <UrlBlock>GET /api/external-chat/users/:userId/presence</UrlBlock>
            </section>

            <Divider />

            {/* Bulk Presence */}
            <section id="bulk-presence" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Get Bulk Presence</h2>
              </div>
              <UrlBlock>POST /api/external-chat/users/presence/bulk</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userIds": ["user_123", "user_456", "user_789"]
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Add Participant */}
            <section id="add-participant" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Add Participant</h2>
              </div>
              <UrlBlock>POST /api/external-chat/rooms/:roomId/participants</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "userId": "user_789",
  "userName": "Alice Johnson",
  "userAvatar": "https://example.com/alice.jpg",
  "role": "member"  // "admin" or "member"
}`}</CodeBlock>
            </section>

            <Divider />

            {/* Remove Participant */}
            <section id="remove-participant" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="DELETE" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Remove Participant</h2>
              </div>
              <UrlBlock>DELETE /api/external-chat/rooms/:roomId/participants/:userId</UrlBlock>
            </section>

            <Divider />

            {/* Create Webhook */}
            <section id="create-webhook" className="scroll-mt-[72px]">
              <div className="flex items-center gap-3 mb-3">
                <MethodBadge method="POST" />
                <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Create Webhook</h2>
              </div>
              <UrlBlock>POST /api/external-chat/webhooks</UrlBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Request Body</h3>
              <CodeBlock label="JSON">{`{
  "url": "https://your-server.com/webhook",
  "events": [
    "message.created",
    "message.updated",
    "message.deleted",
    "room.created",
    "participant.added",
    "participant.removed",
    "reaction.added",
    "reaction.removed"
  ]
}`}</CodeBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Response</h3>
              <Callout type="info" title="Save the webhook secret">
                The secret is only returned once at creation time. Store it securely for signature verification.
              </Callout>
              <CodeBlock label="JSON Response">{`{
  "success": true,
  "webhook": {
    "id": "webhook_abc123",
    "url": "https://your-server.com/webhook",
    "events": [...],
    "secret": "a1b2c3d4e5f6...",
    "isActive": true
  }
}`}</CodeBlock>
            </section>

            <Divider />

            {/* List Webhooks */}
            <section id="list-webhooks" className="scroll-mt-[72px]">
              <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4">List & Manage Webhooks</h2>

              <div className="flex flex-col gap-2 mb-6">
                <EndpointRow method="GET" path="/api/external-chat/webhooks" desc="List all webhooks" />
                <EndpointRow method="PATCH" path="/api/external-chat/webhooks/:webhookId" desc="Update webhook" />
                <EndpointRow method="DELETE" path="/api/external-chat/webhooks/:webhookId" desc="Delete webhook" />
              </div>
            </section>

            <Divider />

            {/* Webhook Events */}
            <section id="webhook-events" className="scroll-mt-[72px]">
              <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-3">Webhook Payload Format</h2>
              <p className="text-[15px] text-[#4b5563] mb-6 max-w-[640px]">
                When events occur, we send a POST request to your webhook URL with the following format.
              </p>

              <CodeBlock label="Webhook Payload">{`{
  "event": "message.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "roomId": "room_abc123",
    "message": {
      "id": "msg_xyz",
      "userId": "user_123",
      "userName": "John",
      "content": "Hello!",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  }
}`}</CodeBlock>

              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-2">Verifying Webhook Signatures</h3>
              <CodeBlock label="Node.js">{`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  return signature === expectedSignature;
}

// In your webhook handler:
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-webhook-signature'];
  const event = req.headers['x-webhook-event'];

  if (!verifyWebhook(req.body, signature, WEBHOOK_SECRET)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the event
  console.log(\`Received \${event}:\`, req.body.data);
  res.status(200).json({ received: true });
});`}</CodeBlock>
            </section>

            <Divider />

            {/* Socket.IO Events */}
            <section id="socket-io" className="scroll-mt-[72px]">
              <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4">Socket.IO Real-Time Events</h2>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-[13px] font-semibold text-[#1a1a1a] mb-2">Emit Events (Client &rarr; Server)</h4>
                  <ul className="flex flex-col gap-1">
                    {['join-room', 'leave-room', 'send-room-message', 'typing-in-room', 'message-updated', 'message-deleted', 'reaction-added', 'reaction-removed', 'messages-read', 'presence-update'].map(e => (
                      <li key={e}><code className="bg-[#f3f4f6] px-1.5 py-0.5 rounded text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{e}</code></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-[#1a1a1a] mb-2">Listen Events (Server &rarr; Client)</h4>
                  <ul className="flex flex-col gap-1">
                    {['receive-room-message', 'user-joined-room', 'user-left-room', 'user-typing-in-room', 'message-updated', 'message-deleted', 'reaction-added', 'reaction-removed', 'messages-read', 'presence-updated'].map(e => (
                      <li key={e}><code className="bg-[#f3f4f6] px-1.5 py-0.5 rounded text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{e}</code></li>
                    ))}
                  </ul>
                </div>
              </div>

              <CodeBlock label="Connection Example">{`import io from 'socket.io-client';

const socket = io('https://mailserver-production.up.railway.app');

// Join a room
socket.emit('join-room', {
  roomId: 'room_abc123',
  userId: 'user_123',
  userName: 'John Doe'
});

// Listen for messages
socket.on('receive-room-message', (data) => {
  console.log('New message:', data.message);
});

// Listen for reactions
socket.on('reaction-added', (data) => {
  console.log(\`\${data.userName} reacted with \${data.emoji}\`);
});

// Listen for presence updates
socket.on('presence-updated', (data) => {
  console.log(\`\${data.userId} is now \${data.status}\`);
});

// Listen for read receipts
socket.on('messages-read', (data) => {
  console.log(\`\${data.userId} read messages at \${data.lastReadAt}\`);
});`}</CodeBlock>
            </section>

            <Divider />

            {/* Complete Integration Example */}
            <section id="real-time-example" className="scroll-mt-[72px]">
              <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-4">Complete Integration Example</h2>

              <CodeBlock label="PapersignalChat Class">{`import io from 'socket.io-client';

class PapersignalChat {
  constructor(apiKey, userId, userName) {
    this.apiKey = apiKey;
    this.userId = userId;
    this.userName = userName;
    this.baseURL = 'https://mailserver-production.up.railway.app';
    this.socket = null;
    this.currentRoom = null;
  }

  connect() {
    this.socket = io(this.baseURL);

    this.socket.on('connect', () => console.log('Connected!'));
    this.socket.on('receive-room-message', (d) => this.onMessage(d));
    this.socket.on('reaction-added', (d) => this.onReaction(d));
    this.socket.on('presence-updated', (d) => this.onPresence(d));
  }

  async startDirectChat(otherUserId, otherUserName) {
    const res = await fetch(\`\${this.baseURL}/api/external-chat/conversations/direct\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': this.apiKey },
      body: JSON.stringify({
        user1Id: this.userId, user1Name: this.userName,
        user2Id: otherUserId, user2Name: otherUserName
      })
    });
    const { room } = await res.json();
    this.joinRoom(room.id);
    return room;
  }

  joinRoom(roomId) {
    this.currentRoom = roomId;
    this.socket.emit('join-room', { roomId, userId: this.userId, userName: this.userName });
  }

  async sendMessage(content) {
    const res = await fetch(\`\${this.baseURL}/api/external-chat/rooms/\${this.currentRoom}/messages\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': this.apiKey },
      body: JSON.stringify({ userId: this.userId, userName: this.userName, content, messageType: 'text' })
    });
    const { message } = await res.json();
    this.socket.emit('send-room-message', { roomId: this.currentRoom, message });
    return message;
  }

  async addReaction(messageId, emoji) {
    await fetch(\`\${this.baseURL}/api/external-chat/rooms/\${this.currentRoom}/messages/\${messageId}/reactions\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': this.apiKey },
      body: JSON.stringify({ userId: this.userId, userName: this.userName, emoji })
    });
    this.socket.emit('reaction-added', { roomId: this.currentRoom, messageId, userId: this.userId, userName: this.userName, emoji });
  }

  async markAsRead() {
    await fetch(\`\${this.baseURL}/api/external-chat/rooms/\${this.currentRoom}/read\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': this.apiKey },
      body: JSON.stringify({ userId: this.userId })
    });
  }

  // Override these in your implementation
  onMessage(data) { console.log('Message:', data); }
  onReaction(data) { console.log('Reaction:', data); }
  onPresence(data) { console.log('Presence:', data); }
}

// Usage
const chat = new PapersignalChat('YOUR_API_KEY', 'user_123', 'John');
chat.connect();

const room = await chat.startDirectChat('user_456', 'Jane');
await chat.sendMessage('Hey Jane!');
await chat.addReaction('msg_xyz', 'wave');`}</CodeBlock>
            </section>

            {/* Footer */}
            <div className="border-t border-[#e5e7eb] pt-8 mt-14 text-center">
              <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-1">Need help?</h3>
              <p className="text-[13px] text-[#6b7280] mb-4">Check out the dashboard or contact support.</p>
              <div className="flex justify-center gap-3">
                <Link to="/dashboard" className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md text-[13px] font-medium hover:bg-[#333] no-underline">Dashboard</Link>
                <a href="mailto:support@papersignal.com" className="bg-[#f3f4f6] text-[#4b5563] px-4 py-2 rounded-md text-[13px] font-medium hover:bg-[#e5e7eb] no-underline">Contact Support</a>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
