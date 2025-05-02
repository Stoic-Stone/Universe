import React from 'react';
import { FileText, User, BookOpen, Clock, Edit, Plus, CheckCircle, Calendar } from 'lucide-react';

const RecentActivities: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: 'Dr. Sarah Johnson',
      action: 'added a new course',
      subject: 'Introduction to Artificial Intelligence',
      time: '2 hours ago',
      icon: <Plus size={16} className="text-green-500" />,
      imgUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      user: 'Prof. Michael Lee',
      action: 'updated grades for',
      subject: 'Advanced Database Systems',
      time: '4 hours ago',
      icon: <Edit size={16} className="text-blue-500" />,
      imgUrl: 'https://images.pexels.com/photos/8617944/pexels-photo-8617944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      user: 'Madison Smith',
      action: 'submitted assignment for',
      subject: 'Software Engineering Principles',
      time: 'Yesterday, 11:42 PM',
      icon: <FileText size={16} className="text-indigo-500" />,
      imgUrl: 'https://images.pexels.com/photos/3755839/pexels-photo-3755839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      user: 'Admin',
      action: 'scheduled exams for',
      subject: 'Fall Semester Final Week',
      time: 'Yesterday, 3:20 PM',
      icon: <Calendar size={16} className="text-purple-500" />,
      imgUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      user: 'Dr. Robert Chen',
      action: 'approved leave request for',
      subject: 'June 15-20, 2023',
      time: '2 days ago',
      icon: <CheckCircle size={16} className="text-green-500" />,
      imgUrl: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start p-3 border-b border-slate-100 last:border-0">
          <img
            src={activity.imgUrl}
            alt={activity.user}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-medium text-slate-800">{activity.user}</span>
              <span className="mx-1 text-slate-500">•</span>
              <span className="text-xs text-slate-500">{activity.time}</span>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {activity.icon && <span className="inline-block align-text-bottom mr-1">{activity.icon}</span>}
              {activity.action} <span className="font-medium">{activity.subject}</span>
            </p>
          </div>
          <button className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors">
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;