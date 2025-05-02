import React, { useState } from 'react';
import { Search, Filter, Plus, Download, ChevronDown, Clock, Calendar, Users, BookOpen } from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All Courses', count: 142 },
    { id: 'active', label: 'Active', count: 98 },
    { id: 'upcoming', label: 'Upcoming', count: 44 },
  ];

  const courses = [
    {
      id: 1,
      code: 'CS101',
      title: 'Introduction to Computer Science',
      department: 'Computer Science',
      instructor: 'Dr. Sarah Johnson',
      students: 64,
      credits: 3,
      schedule: 'MWF 10:00 - 11:30 AM',
      status: 'Active',
    },
    {
      id: 2,
      code: 'BUS250',
      title: 'Business Management Principles',
      department: 'Business Administration',
      instructor: 'Prof. Michael Lee',
      students: 48,
      credits: 4,
      schedule: 'TR 1:00 - 3:00 PM',
      status: 'Active',
    },
    {
      id: 3,
      code: 'ENG310',
      title: 'Advanced Technical Writing',
      department: 'English',
      instructor: 'Dr. Emma Thompson',
      students: 32,
      credits: 3,
      schedule: 'MWF 2:00 - 3:30 PM',
      status: 'Active',
    },
    {
      id: 4,
      code: 'MATH220',
      title: 'Calculus III',
      department: 'Mathematics',
      instructor: 'Prof. James Wilson',
      students: 56,
      credits: 4,
      schedule: 'TR 9:00 - 11:00 AM',
      status: 'Active',
    },
    {
      id: 5,
      code: 'AI401',
      title: 'Fundamentals of Artificial Intelligence',
      department: 'Computer Science',
      instructor: 'Dr. Robert Chen',
      students: 36,
      credits: 4,
      schedule: 'MW 3:30 - 5:30 PM',
      status: 'Upcoming',
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Courses</h1>
        <div className="mt-3 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus size={16} className="mr-2" />
            Add Course
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Filters and search */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search courses..."
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
              <Filter size={16} className="mr-2 text-slate-500" />
              Filters
              <ChevronDown size={16} className="ml-1 text-slate-500" />
            </button>
            
            <button className="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
              Department
              <ChevronDown size={16} className="ml-1 text-slate-500" />
            </button>
            
            <button className="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
              Semester
              <ChevronDown size={16} className="ml-1 text-slate-500" />
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-slate-200 mt-4">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${selectedTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
                `}
              >
                {tab.label}
                <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  selectedTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id}
            className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className={`h-2 ${course.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-medium text-slate-500">{course.code}</span>
                  <h3 className="text-lg font-semibold text-slate-800 mt-1">{course.title}</h3>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  course.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {course.status}
                </span>
              </div>
              
              <p className="text-sm text-slate-500 mt-2">{course.department}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Users size={16} className="text-slate-400 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="text-slate-400 mr-2" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center text-sm">
                  <BookOpen size={16} className="text-slate-400 mr-2" />
                  <span>{course.credits} Credits</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users size={16} className="text-slate-400 mr-2" />
                  <span>{course.students} Students</span>
                </div>
              </div>
              
              <div className="mt-5 flex items-center justify-between">
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  View Details
                </button>
                <button className="text-sm text-slate-500 font-medium hover:text-slate-700 transition-colors">
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add "Load more" button */}
      <div className="text-center">
        <button className="px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Courses;