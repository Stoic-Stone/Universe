import React from 'react';
import { AlertTriangle, TrendingDown } from 'lucide-react';

interface StudentAlertProps {
  name: string;
  course: string;
  riskFactor: 'High' | 'Medium' | 'Low';
  attendance: string;
}

const StudentAlert: React.FC<StudentAlertProps> = ({ 
  name, 
  course, 
  riskFactor, 
  attendance 
}) => {
  const getRiskColor = () => {
    switch (riskFactor) {
      case 'High':
        return 'text-red-600 bg-red-50';
      case 'Medium':
        return 'text-amber-600 bg-amber-50';
      case 'Low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="p-3 rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <AlertTriangle size={16} className="text-amber-500 mr-2" />
          <span className="text-sm font-medium text-slate-800">{name}</span>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getRiskColor()}`}>
          {riskFactor}
        </span>
      </div>
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Course: {course}</span>
        <div className="flex items-center">
          <TrendingDown size={12} className="text-red-500 mr-1" />
          <span>Attendance: {attendance}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentAlert;