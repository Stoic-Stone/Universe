import React from 'react';
import { Calendar, Clock, User, Users } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Faculty Meeting',
      date: 'Today',
      time: '11:00 AM - 12:30 PM',
      type: 'meeting',
    },
    {
      id: 2,
      title: 'Database Systems Exam',
      date: 'Tomorrow',
      time: '9:00 AM - 11:00 AM',
      type: 'exam',
    },
    {
      id: 3,
      title: 'New Student Orientation',
      date: 'June 10',
      time: '10:00 AM - 2:00 PM',
      type: 'event',
    },
    {
      id: 4,
      title: 'Department Heads Meeting',
      date: 'June 15',
      time: '2:00 PM - 3:30 PM',
      type: 'meeting',
    },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting':
        return <Users size={16} className="text-indigo-500" />;
      case 'exam':
        return <Clock size={16} className="text-red-500" />;
      case 'event':
        return <User size={16} className="text-green-500" />;
      default:
        return <Calendar size={16} className="text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-start p-3 rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-200">
          <div className="p-2 rounded-full bg-slate-100 mr-3">
            {getEventIcon(event.type)}
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800">{event.title}</h3>
            <div className="flex items-center mt-1 text-xs text-slate-500">
              <Calendar size={12} className="mr-1" />
              <span className="mr-2">{event.date}</span>
              <Clock size={12} className="mr-1" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      ))}
      
      <button className="w-full text-center text-sm text-indigo-600 mt-2 py-2 hover:text-indigo-800 transition-colors duration-200">
        + Add New Event
      </button>
    </div>
  );
};

export default UpcomingEvents;