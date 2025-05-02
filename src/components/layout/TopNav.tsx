import React, { useState } from 'react';
import { Menu, Bell, MessageSquare, Search, User, Settings, X } from 'lucide-react';

interface TopNavProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const TopNav: React.FC<TopNavProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between">
      {/* Left side - Menu toggle and search */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          <Menu size={20} />
        </button>

        {/* Search bar */}
        <div className={`relative ${isSearchOpen ? 'w-64 md:w-96' : 'w-40 md:w-64'} transition-all duration-300 ease-in-out`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-1.5 text-sm text-slate-900 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200"
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Right side - Notifications and user */}
      <div className="flex items-center gap-1">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notifications dropdown */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-slate-200">
              <div className="px-4 py-2 border-b border-slate-200">
                <h3 className="font-semibold text-slate-800">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0">
                    <p className="text-sm font-medium text-slate-800">New course added</p>
                    <p className="text-xs text-slate-500 mt-0.5">Introduction to AI has been added to your courses</p>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-slate-200 text-center">
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Messages */}
        <button className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative">
          <MessageSquare size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 bg-indigo-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="relative ml-1">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center gap-2 p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User avatar"
            />
          </button>

          {/* Profile dropdown */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-slate-200">
              <div className="px-4 py-3 border-b border-slate-200">
                <p className="text-sm font-medium text-slate-800">Admin User</p>
                <p className="text-xs text-slate-500">admin@universe.edu</p>
              </div>
              <div className="py-1">
                <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  <User size={16} className="mr-3" />
                  Profile
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  <Settings size={16} className="mr-3" />
                  Settings
                </button>
                <div className="border-t border-slate-200 mt-1 pt-1">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;