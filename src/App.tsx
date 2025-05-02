import React, { useState, Suspense } from 'react';
import { Menu, ChevronDown, LogOut, LayoutDashboard, Users, BookOpen, Calendar, BarChart2, MessageSquare, Bell, User, Settings } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';
import Dashboard from './pages/Dashboard';
import Loading from './components/common/Loading';

// Lazy load pages to improve initial load time
const Students = React.lazy(() => import('./pages/Students'));
const Courses = React.lazy(() => import('./pages/Courses'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Messages = React.lazy(() => import('./pages/Messages'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'students', label: 'Students', icon: <Users size={20} /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={20} /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return (
          <Suspense fallback={<Loading />}>
            <Students />
          </Suspense>
        );
      case 'courses':
        return (
          <Suspense fallback={<Loading />}>
            <Courses />
          </Suspense>
        );
      case 'schedule':
        return (
          <Suspense fallback={<Loading />}>
            <Schedule />
          </Suspense>
        );
      case 'analytics':
        return (
          <Suspense fallback={<Loading />}>
            <Analytics />
          </Suspense>
        );
      case 'messages':
        return (
          <Suspense fallback={<Loading />}>
            <Messages />
          </Suspense>
        );
      default:
        return <Dashboard />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        menuItems={menuItems} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={isSidebarOpen} 
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;