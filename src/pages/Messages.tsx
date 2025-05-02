import React, { useState } from 'react';
import { Search, Edit, User, Users, Star, Clock, ChevronDown, Send, Paperclip as PaperClip, MoreVertical, Phone, Video } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');
  
  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastMessage: 'I\'ll send you the updated course materials.',
      time: '10:42 AM',
      unread: true,
      online: true,
      role: 'Professor, Computer Science',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/8617944/pexels-photo-8617944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastMessage: 'Thank you for the feedback on my project.',
      time: 'Yesterday',
      unread: false,
      online: false,
      role: 'Student, Junior',
    },
    {
      id: 3,
      name: 'Academic Advisors',
      avatar: 'https://images.pexels.com/photos/3755839/pexels-photo-3755839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastMessage: 'Registration for Fall semester opens next Monday.',
      time: 'Yesterday',
      unread: true,
      online: true,
      role: 'Group, 4 members',
    },
    {
      id: 4,
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastMessage: 'Can I reschedule our meeting to Wednesday?',
      time: 'Tuesday',
      unread: false,
      online: false,
      role: 'Student, Senior',
    },
    {
      id: 5,
      name: 'CS Department',
      avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastMessage: 'New AI workshop will be held next Friday.',
      time: 'Monday',
      unread: false,
      online: true,
      role: 'Department, 28 members',
    },
  ];
  
  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Johnson',
      senderAvatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Hello! I wanted to discuss the upcoming CS101 syllabus changes.',
      time: '10:30 AM',
      isMe: false,
    },
    {
      id: 2,
      sender: 'Me',
      content: 'Of course. I\'ve been reviewing the changes. What specific aspects do you want to discuss?',
      time: '10:32 AM',
      isMe: true,
    },
    {
      id: 3,
      sender: 'Dr. Sarah Johnson',
      senderAvatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'I\'m considering adding a new section on emerging AI technologies. Do you think the students have enough background knowledge for that?',
      time: '10:35 AM',
      isMe: false,
    },
    {
      id: 4,
      sender: 'Me',
      content: 'That\'s a great addition. Most of our students have completed the Python programming requirements, so they should have the necessary foundation. We might want to include some introductory materials for those who need a refresher.',
      time: '10:38 AM',
      isMe: true,
    },
    {
      id: 5,
      sender: 'Dr. Sarah Johnson',
      senderAvatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Excellent point. I\'ll prepare some supplementary materials for students who might need additional support. I\'ll send you the updated course materials.',
      time: '10:42 AM',
      isMe: false,
    },
  ];
  
  const renderConversationList = () => {
    return conversations.map((conversation) => (
      <div
        key={conversation.id}
        onClick={() => setSelectedConversation(conversation.id)}
        className={`flex items-center p-4 border-b border-slate-200 hover:bg-slate-50 cursor-pointer ${
          selectedConversation === conversation.id ? 'bg-indigo-50' : ''
        }`}
      >
        <div className="relative">
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {conversation.online && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="ml-4 flex-1 min-w-0">
          <div className="flex justify-between items-baseline">
            <h3 className="text-sm font-semibold text-slate-800 truncate">{conversation.name}</h3>
            <span className="text-xs text-slate-500">{conversation.time}</span>
          </div>
          <p className="text-xs text-slate-500 truncate">{conversation.role}</p>
          <p className="text-xs text-slate-600 truncate mt-1">{conversation.lastMessage}</p>
        </div>
        {conversation.unread && (
          <div className="ml-2 w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
        )}
      </div>
    ));
  };
  
  const renderMessages = () => {
    return messages.map((message) => (
      <div
        key={message.id}
        className={`mb-4 flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
      >
        {!message.isMe && (
          <img
            src={message.senderAvatar}
            alt={message.sender}
            className="w-10 h-10 rounded-full object-cover mr-3 mt-1"
          />
        )}
        <div
          className={`max-w-[70%] rounded-xl p-3 ${
            message.isMe
              ? 'bg-indigo-600 text-white rounded-tr-none'
              : 'bg-slate-100 text-slate-800 rounded-tl-none'
          }`}
        >
          <p className="text-sm">{message.content}</p>
          <div className={`text-xs mt-1 ${message.isMe ? 'text-indigo-200' : 'text-slate-500'}`}>
            {message.time}
          </div>
        </div>
      </div>
    ));
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim() === '') return;
    
    // In a real app, this would send the message to a backend
    setMessageText('');
  };
  
  const activeConversation = conversations.find(c => c.id === selectedConversation);
  
  return (
    <div className="h-[calc(100vh-9rem)] flex flex-col">
      <div className="flex-1 flex overflow-hidden rounded-lg shadow-sm border border-slate-200">
        {/* Sidebar - conversations list */}
        <div className="w-80 border-r border-slate-200 bg-white flex flex-col">
          {/* Search header */}
          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
          </div>
          
          {/* Filter tabs */}
          <div className="px-4 py-2 border-b border-slate-200 flex">
            <button className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-md mr-2">
              All
            </button>
            <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-md mr-2">
              Unread
            </button>
            <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 rounded-md">
              Important
            </button>
          </div>
          
          {/* Conversations list */}
          <div className="flex-1 overflow-y-auto">
            {renderConversationList()}
          </div>
          
          {/* Compose new message */}
          <div className="p-4 border-t border-slate-200">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              <Edit size={16} className="mr-2" />
              New Message
            </button>
          </div>
        </div>
        
        {/* Main chat area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat header */}
          {activeConversation && (
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div className="flex items-center">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h2 className="text-sm font-semibold text-slate-800">{activeConversation.name}</h2>
                  <div className="flex items-center">
                    <span className={`h-1.5 w-1.5 rounded-full ${activeConversation.online ? 'bg-green-500' : 'bg-slate-300'} mr-1.5`}></span>
                    <span className="text-xs text-slate-500">
                      {activeConversation.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                  <Phone size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                  <Video size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                  <Star size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          )}
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
            {renderMessages()}
          </div>
          
          {/* Message input */}
          <div className="p-4 border-t border-slate-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
              <button type="button" className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                <PaperClip size={20} />
              </button>
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 py-2 px-4 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                className={`p-2 rounded-full ${
                  messageText.trim() === ''
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
                disabled={messageText.trim() === ''}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;