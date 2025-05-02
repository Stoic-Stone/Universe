import React from 'react';

const PerformanceChart: React.FC = () => {
  // This is a placeholder for an actual chart component
  // In a real application, you would use a library like Chart.js or Recharts
  return (
    <div className="w-full h-80">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="h-full w-full flex items-end justify-between gap-2 pb-6 pt-10 px-4">
          {/* Placeholder bars for chart */}
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[70%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">CS</div>
          </div>
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[90%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">Math</div>
          </div>
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[60%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">Phys</div>
          </div>
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[75%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">Eng</div>
          </div>
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[82%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">His</div>
          </div>
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[65%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">AI</div>
          </div>
          <div className="relative h-[70%] w-6 bg-blue-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[85%] bg-blue-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">Bio</div>
          </div>
          <div className="relative h-[70%] w-6 bg-purple-100 rounded-t-md">
            <div className="absolute bottom-0 w-full h-[78%] bg-purple-500 rounded-t-md"></div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-500">Avg</div>
          </div>
        </div>
        {/* Y-axis labels */}
        <div className="absolute left-0 h-full flex flex-col justify-between py-10">
          <span className="text-xs text-slate-400">100%</span>
          <span className="text-xs text-slate-400">75%</span>
          <span className="text-xs text-slate-400">50%</span>
          <span className="text-xs text-slate-400">25%</span>
          <span className="text-xs text-slate-400">0%</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;