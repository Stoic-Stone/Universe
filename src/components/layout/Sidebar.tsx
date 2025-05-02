import React from 'react';
import { GraduationCap as Graduation, LogOut } from 'lucide-react';
import { MenuItem } from '../../types/menu';

interface SidebarProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  menuItems, 
  currentPage, 
  onPageChange 
}) => {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => onPageChange(currentPage)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-30 w-64 h-full bg-white border-r border-slate-200
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo and branding */}
        <div className="flex items-center justify-center h-16 px-6 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Graduation className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-semibold text-slate-800">UniVerse</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`
                  flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg
                  transition-colors duration-200
                  ${currentPage === item.id
                    ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }
                `}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Profile section */}
        <div className="absolute bottom-0 w-full border-t border-slate-200 p-4">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full bg-indigo-100 object-cover"
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="User avatar"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-800">Admin User</p>
              <p className="text-xs text-slate-500">administrator</p>
            </div>
          </div>
          <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200">
            <LogOut size={18} className="mr-3" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;