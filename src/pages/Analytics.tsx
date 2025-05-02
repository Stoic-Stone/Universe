import React, { useState } from 'react';
import { Calendar, Download, Filter, ChevronDown, TrendingUp, BarChart2, PieChart, BookOpen, Users, AlertTriangle, Award } from 'lucide-react';

const Analytics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('performance');
  
  const metrics = [
    { id: 'performance', label: 'Academic Performance', icon: <TrendingUp size={20} className="mr-2" /> },
    { id: 'distribution', label: 'Grade Distribution', icon: <BarChart2 size={20} className="mr-2" /> },
    { id: 'departments', label: 'Department Analytics', icon: <PieChart size={20} className="mr-2" /> },
    { id: 'risks', label: 'Risk Assessment', icon: <AlertTriangle size={20} className="mr-2" /> },
  ];

  const kpis = [
    { id: 1, title: 'Average GPA', value: '3.42', change: '+0.08', trend: 'up', icon: <Award className="h-6 w-6 text-indigo-600" /> },
    { id: 2, title: 'Courses with >90% Pass Rate', value: '86', change: '+12', trend: 'up', icon: <BookOpen className="h-6 w-6 text-green-600" /> },
    { id: 3, title: 'Students at Risk', value: '24', change: '-6', trend: 'down', icon: <AlertTriangle className="h-6 w-6 text-amber-600" /> },
    { id: 4, title: 'Graduation Rate', value: '94%', change: '+2%', trend: 'up', icon: <Users className="h-6 w-6 text-blue-600" /> },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Academic Analytics</h1>
        <div className="mt-3 sm:mt-0 flex space-x-3">
          <div className="relative">
            <select className="appearance-none pl-10 pr-10 py-2 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
              <option>Current Semester</option>
              <option>Previous Semester</option>
              <option>Academic Year 2022-2023</option>
              <option>Academic Year 2021-2022</option>
            </select>
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-slate-100 mr-4">
                {kpi.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <p className="text-2xl font-semibold text-slate-800">{kpi.value}</p>
              </div>
            </div>
            <div className="mt-2">
              <span className={`text-xs font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change}
              </span>
              <span className="text-xs font-medium text-slate-500 ml-1">from last semester</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Filter tabs */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  selectedMetric === metric.id 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {metric.icon}
                {metric.label}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
              <Filter size={16} className="mr-2 text-slate-500" />
              Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Charts section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Main chart - 8 columns */}
        <div className="lg:col-span-8 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Performance Trends by Department</h2>
          
          {/* Placeholder for actual chart - in a real app, use Chart.js or similar */}
          <div className="h-80 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="w-full px-6">
              <div className="space-y-6">
                {/* Computer Science */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Computer Science</span>
                    <span className="text-sm font-medium text-indigo-600">3.75</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                    <div style={{ width: "88%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                  </div>
                </div>
                
                {/* Engineering */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Engineering</span>
                    <span className="text-sm font-medium text-indigo-600">3.42</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                    <div style={{ width: "76%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                  </div>
                </div>
                
                {/* Business */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Business</span>
                    <span className="text-sm font-medium text-indigo-600">3.56</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                    <div style={{ width: "82%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                  </div>
                </div>
                
                {/* Science */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Science</span>
                    <span className="text-sm font-medium text-indigo-600">3.28</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                  </div>
                </div>
                
                {/* Humanities */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Humanities</span>
                    <span className="text-sm font-medium text-indigo-600">3.64</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                    <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pie chart - 4 columns */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Grade Distribution</h2>
          
          {/* Placeholder for pie chart */}
          <div className="h-80 flex items-center justify-center">
            <div className="w-52 h-52 rounded-full border-8 border-indigo-100 relative">
              {/* A segment */}
              <div className="absolute inset-0 border-[16px] border-transparent border-t-blue-500 border-r-blue-500 rounded-full rotate-45"></div>
              {/* B segment */}
              <div className="absolute inset-0 border-[16px] border-transparent border-t-green-500 rounded-full rotate-[135deg]"></div>
              {/* C segment */}
              <div className="absolute inset-0 border-[16px] border-transparent border-t-amber-500 rounded-full rotate-[225deg]"></div>
              {/* D and F segment */}
              <div className="absolute inset-0 border-[16px] border-transparent border-t-red-500 rounded-full rotate-[290deg]"></div>
              
              {/* Center circle */}
              <div className="absolute inset-[16px] bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">3,240</div>
                  <div className="text-xs text-slate-500">Students</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-slate-600">A (42%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-slate-600">B (28%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
              <span className="text-sm text-slate-600">C (18%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-slate-600">D/F (12%)</span>
            </div>
          </div>
        </div>
        
        {/* Risk factors - 6 columns */}
        <div className="lg:col-span-6 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Risk Factors</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Low Attendance (&lt;70%)</span>
                <span className="text-sm font-medium text-red-600">42 Students</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Missing Assignments ({'>'}3)</span>
                <span className="text-sm font-medium text-red-600">38 Students</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                <div style={{ width: "58%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Failed Midterms</span>
                <span className="text-sm font-medium text-red-600">24 Students</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                <div style={{ width: "36%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">GPA Below 2.0</span>
                <span className="text-sm font-medium text-red-600">18 Students</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                <div style={{ width: "28%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Multiple Risk Factors</span>
                <span className="text-sm font-medium text-red-600">12 Students</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200">
                <div style={{ width: "18%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
          </div>
          
          <button className="mt-6 w-full text-center text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
            View Detailed Risk Analysis
          </button>
        </div>
        
        {/* Department performance comparison - 6 columns */}
        <div className="lg:col-span-6 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Comparison to Previous Semester</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="min-w-[120px]">
                <span className="text-sm font-medium text-slate-700">Computer Science</span>
              </div>
              <div className="relative flex-1 ml-4">
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center text-xs">
                    <span className="font-medium text-white">3.75</span>
                    <TrendingUp size={12} className="ml-1 text-green-400" />
                    <span className="ml-1 font-medium text-green-400">+0.12</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="min-w-[120px]">
                <span className="text-sm font-medium text-slate-700">Business</span>
              </div>
              <div className="relative flex-1 ml-4">
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center text-xs">
                    <span className="font-medium text-white">3.56</span>
                    <TrendingUp size={12} className="ml-1 text-green-400" />
                    <span className="ml-1 font-medium text-green-400">+0.05</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="min-w-[120px]">
                <span className="text-sm font-medium text-slate-700">Engineering</span>
              </div>
              <div className="relative flex-1 ml-4">
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '68%' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center text-xs">
                    <span className="font-medium text-white">3.42</span>
                    <TrendingUp size={12} className="ml-1 text-green-400" />
                    <span className="ml-1 font-medium text-green-400">+0.08</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="min-w-[120px]">
                <span className="text-sm font-medium text-slate-700">Humanities</span>
              </div>
              <div className="relative flex-1 ml-4">
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '72%' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center text-xs">
                    <span className="font-medium text-white">3.64</span>
                    <TrendingUp size={12} className="ml-1 text-green-400" />
                    <span className="ml-1 font-medium text-green-400">+0.10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="min-w-[120px]">
                <span className="text-sm font-medium text-slate-700">Science</span>
              </div>
              <div className="relative flex-1 ml-4">
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center text-xs">
                    <span className="font-medium text-white">3.28</span>
                    <TrendingUp size={12} className="ml-1 text-green-400" />
                    <span className="ml-1 font-medium text-green-400">+0.06</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;