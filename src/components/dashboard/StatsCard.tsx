import React from 'react';

interface StatProps {
  stat: {
    id: number;
    title: string;
    value: string;
    icon: React.ReactNode;
    change: string;
    bgColor: string;
  };
}

const StatsCard: React.FC<StatProps> = ({ stat }) => {
  const isPositive = stat.change && !stat.change.startsWith('-');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>
          {stat.icon}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
          <p className="text-2xl font-semibold text-slate-800">{stat.value}</p>
        </div>
      </div>
      {stat.change && (
        <div className="mt-2">
          <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {stat.change}
          </span>
          <span className="text-xs font-medium text-slate-500 ml-1">from last month</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;