import React from 'react';
import { Users, BookOpen, Calendar, AlertTriangle, TrendingUp, Activity, User, CheckCircle } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import StudentAlert from '../components/dashboard/StudentAlert';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentActivities from '../components/dashboard/RecentActivities';

const Dashboard: React.FC = () => {
  const stats = [
    { id: 1, title: 'Total Students', value: '3,240', icon: <Users className="h-6 w-6 text-blue-600" />, change: '+2.5%', bgColor: 'bg-blue-50' },
    { id: 2, title: 'Total Courses', value: '142', icon: <BookOpen className="h-6 w-6 text-purple-600" />, change: '+5.1%', bgColor: 'bg-purple-50' },
    { id: 3, title: 'Classes Today', value: '38', icon: <Calendar className="h-6 w-6 text-green-600" />, change: '', bgColor: 'bg-green-50' },
    { id: 4, title: 'Students at Risk', value: '24', icon: <AlertTriangle className="h-6 w-6 text-amber-600" />, change: '-18.2%', bgColor: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <div className="mt-2 sm:mt-0">
          <div className="inline-flex rounded-md">
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-l-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Export Report
            </button>
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-200 rounded-r-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Performance chart - takes 8 columns on large screens */}
        <div className="lg:col-span-8 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Academic Performance Trends</h2>
            <select className="text-sm border-slate-200 rounded-md">
              <option>This Semester</option>
              <option>Last Semester</option>
              <option>Academic Year</option>
            </select>
          </div>
          <PerformanceChart />
        </div>

        {/* Students at risk - takes 4 columns on large screens */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Students at Risk</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
          </div>
          <div className="space-y-3">
            <StudentAlert 
              name="James Wilson" 
              course="Data Structures" 
              riskFactor="High" 
              attendance="62%" 
            />
            <StudentAlert 
              name="Emma Thompson" 
              course="Calculus II" 
              riskFactor="Medium" 
              attendance="78%" 
            />
            <StudentAlert 
              name="Michael Chen" 
              course="Database Systems" 
              riskFactor="Medium" 
              attendance="80%" 
            />
            <StudentAlert 
              name="Sophia Garcia" 
              course="Computer Networks" 
              riskFactor="High" 
              attendance="55%" 
            />
          </div>
        </div>

        {/* Upcoming events - takes 4 columns on large screens */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Upcoming Events</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View Calendar</button>
          </div>
          <UpcomingEvents />
        </div>

        {/* Recent activity - takes 8 columns on large screens */}
        <div className="lg:col-span-8 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Recent Activities</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
          </div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;