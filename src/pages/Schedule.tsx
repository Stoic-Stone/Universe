import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar, Clock, MapPin, User, Download, Share2 } from 'lucide-react';

const Schedule: React.FC = () => {
  const [viewMode, setViewMode] = useState<'week' | 'day'>('week');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  
  const events = [
    {
      id: 1,
      title: 'CS101: Intro to Computer Science',
      day: 'Monday',
      startHour: 10,
      endHour: 11.5,
      location: 'Science Hall 101',
      instructor: 'Dr. Sarah Johnson',
      color: 'bg-blue-100 border-blue-500 text-blue-800',
    },
    {
      id: 2,
      title: 'BUS250: Business Management',
      day: 'Monday',
      startHour: 14,
      endHour: 16,
      location: 'Business Building 205',
      instructor: 'Prof. Michael Lee',
      color: 'bg-purple-100 border-purple-500 text-purple-800',
    },
    {
      id: 3,
      title: 'MATH220: Calculus III',
      day: 'Tuesday',
      startHour: 9,
      endHour: 11,
      location: 'Math Center 120',
      instructor: 'Prof. James Wilson',
      color: 'bg-green-100 border-green-500 text-green-800',
    },
    {
      id: 4,
      title: 'ENG310: Technical Writing',
      day: 'Wednesday',
      startHour: 14,
      endHour: 15.5,
      location: 'Liberal Arts 305',
      instructor: 'Dr. Emma Thompson',
      color: 'bg-amber-100 border-amber-500 text-amber-800',
    },
    {
      id: 5,
      title: 'CS101: Intro to Computer Science',
      day: 'Wednesday',
      startHour: 10,
      endHour: 11.5,
      location: 'Science Hall 101',
      instructor: 'Dr. Sarah Johnson',
      color: 'bg-blue-100 border-blue-500 text-blue-800',
    },
    {
      id: 6,
      title: 'MATH220: Calculus III',
      day: 'Thursday',
      startHour: 9,
      endHour: 11,
      location: 'Math Center 120',
      instructor: 'Prof. James Wilson',
      color: 'bg-green-100 border-green-500 text-green-800',
    },
    {
      id: 7,
      title: 'BUS250: Business Management',
      day: 'Friday',
      startHour: 14,
      endHour: 16,
      location: 'Business Building 205',
      instructor: 'Prof. Michael Lee',
      color: 'bg-purple-100 border-purple-500 text-purple-800',
    },
    {
      id: 8,
      title: 'Faculty Meeting',
      day: 'Friday',
      startHour: 11,
      endHour: 12,
      location: 'Admin Building 302',
      instructor: 'Dean Roberts',
      color: 'bg-red-100 border-red-500 text-red-800',
    },
  ];

  const getEventPosition = (event: typeof events[0]) => {
    const dayIndex = days.indexOf(event.day);
    const topPercentage = (event.startHour - hours[0]) * 100 / (hours[hours.length - 1] - hours[0] + 1);
    const heightPercentage = (event.endHour - event.startHour) * 100 / (hours[hours.length - 1] - hours[0] + 1);
    
    return {
      gridColumnStart: dayIndex + 2,
      gridColumnEnd: dayIndex + 3,
      top: `${topPercentage}%`,
      height: `${heightPercentage}%`,
    };
  };

  const formatHour = (hour: number) => {
    const isPM = hour >= 12;
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${isPM ? 'PM' : 'AM'}`;
  };
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Schedule</h1>
          <p className="text-sm text-slate-500 mt-1">May 1 - May 7, 2023</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus size={16} className="mr-2" />
            Add Event
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
            <Download size={16} className="mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
            <Share2 size={16} className="mr-2" />
            Share
          </button>
        </div>
      </div>

      {/* Calendar navigation and view controls */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-lg font-semibold text-slate-800">May 2023</h2>
            <button className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <ChevronRight size={20} />
            </button>
            <button className="ml-2 px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-800">
              Today
            </button>
          </div>
          
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-md">
            <button
              onClick={() => setViewMode('day')}
              className={`px-3 py-1 text-sm font-medium rounded ${
                viewMode === 'day' 
                  ? 'bg-white text-slate-800 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-1 text-sm font-medium rounded ${
                viewMode === 'week' 
                  ? 'bg-white text-slate-800 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Week
            </button>
          </div>
        </div>
      </div>

      {/* Weekly calendar view */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col h-[800px]">
          {/* Header - Days of week */}
          <div className="flex border-b border-slate-200">
            {/* Time column header */}
            <div className="w-20 shrink-0 border-r border-slate-200"></div>
            
            {/* Day columns */}
            {days.map((day) => (
              <div key={day} className="flex-1 p-4 text-center border-r border-slate-200 last:border-r-0">
                <p className="font-semibold text-slate-800">{day}</p>
                <p className="text-xs text-slate-500">May {days.indexOf(day) + 1}</p>
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="flex flex-1 overflow-y-auto">
            {/* Time labels */}
            <div className="w-20 shrink-0 border-r border-slate-200">
              {hours.map((hour) => (
                <div key={hour} className="h-24 border-b border-slate-200 text-xs text-slate-500 pr-2 text-right pt-2">
                  {formatHour(hour)}
                </div>
              ))}
            </div>
            
            {/* Week grid */}
            <div className="flex-1 relative">
              {/* Horizontal hour dividers */}
              <div className="absolute inset-0">
                {hours.map((hour) => (
                  <div key={hour} className="h-24 border-b border-slate-200"></div>
                ))}
              </div>
              
              {/* Vertical day dividers */}
              <div className="absolute inset-0 flex">
                {days.map((day) => (
                  <div key={day} className="flex-1 border-r border-slate-200 last:border-r-0"></div>
                ))}
              </div>
              
              {/* Events */}
              {events.map((event) => {
                const style = getEventPosition(event);
                return (
                  <div
                    key={event.id}
                    className={`absolute ${event.color} p-2 rounded-md border-l-4 text-xs mx-1 hover:shadow-md transition-shadow duration-200 overflow-hidden`}
                    style={{
                      gridColumnStart: style.gridColumnStart,
                      gridColumnEnd: style.gridColumnEnd,
                      top: style.top,
                      height: style.height,
                      left: `${(days.indexOf(event.day)) * 20}%`,
                      width: 'calc(20% - 8px)',
                    }}
                  >
                    <div className="font-semibold truncate">{event.title}</div>
                    <div className="flex items-center mt-1">
                      <Clock size={12} className="mr-1" />
                      <span>{formatHour(event.startHour)} - {formatHour(event.endHour)}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin size={12} className="mr-1" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <User size={12} className="mr-1" />
                      <span className="truncate">{event.instructor}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;