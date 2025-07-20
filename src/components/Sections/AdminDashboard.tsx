import React, { useState, useEffect } from 'react';
import { 
  Users, GraduationCap, Building2, DollarSign, TrendingUp, Activity, Award, Filter,
  ChevronRight, Clock, FileText, Bell, User, CheckCircle, AlertCircle, Sun, Moon,
  BookOpen, MapPin, Settings, Shield, Calendar, BarChart3, UserCheck, Briefcase,
  School, Target, Globe, Zap, Star, PieChart, LineChart, Eye, EyeOff
} from 'lucide-react';
import { 
  PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart as RechartsLineChart, Line,
  AreaChart, Area
} from 'recharts';

const GeometricPattern = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      >
        <source src="https://cdn.pixabay.com/video/2024/03/15/204243-923909579_large.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Updated translucent gradient */}
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900/40 via-slate-800/35 to-orange-900/10' 
          : 'bg-gradient-to-br from-white/20 via-orange-50/25 to-orange-100/10'
      }`} />

      {/* Geometric accents — unchanged */}
      <div className="absolute inset-0 opacity-20">
        {/* Top right */}
        <div className={`absolute top-20 right-20 w-32 h-32 rounded-full border-2 ${
          darkMode ? 'border-orange-400/20' : 'border-orange-300/30'
        }`} />
        <div className={`absolute top-32 right-32 w-16 h-16 rounded-full border-2 ${
          darkMode ? 'border-orange-300/15' : 'border-orange-400/25'
        }`} />
        {/* Bottom left */}
        <div className={`absolute bottom-20 left-20 w-24 h-24 transform rotate-45 border-2 ${
          darkMode ? 'border-orange-400/15' : 'border-orange-300/25'
        } rounded-lg`} />
      </div>
    </div>
  );
};

const ProfessionalCard = ({ children, className = "", hover = true, darkMode, variant = "default" }) => {
  const variants = {
    default: darkMode 
      ? 'bg-slate-800/90 border-slate-700/30 shadow-lg backdrop-blur-sm' 
      : 'bg-white/85 border-orange-200/40 shadow-lg backdrop-blur-sm',
    accent: darkMode 
      ? 'bg-gradient-to-br from-slate-800/85 to-orange-900/20 border-orange-400/20 shadow-lg backdrop-blur-sm' 
      : 'bg-gradient-to-br from-white/90 to-orange-50/80 border-orange-300/30 shadow-lg backdrop-blur-sm',
    elevated: darkMode 
      ? 'bg-slate-800/95 border-orange-400/25 shadow-xl backdrop-blur-md' 
      : 'bg-white/95 border-orange-300/40 shadow-xl backdrop-blur-md'
  };

  return (
    <div className={`
      ${variants[variant]}
      rounded-xl border
      ${hover ? (darkMode ? 'hover:bg-slate-800/95 hover:border-orange-400/40 hover:shadow-xl hover:shadow-orange-900/20' : 'hover:bg-white/95 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-200/30') : ''}
      transition-all duration-300 ease-out
      ${className}
    `}>
      {children}
    </div>
  );
};

const PrincipalHeader = ({ darkMode, toggleDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ProfessionalCard 
      className="mb-8 p-6 relative overflow-hidden" 
      darkMode={darkMode} 
      variant="elevated"
      hover={false}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Principal Dashboard
          </h1>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-orange-600'} font-medium`}>
            Educational Excellence Management System
          </p>
        </div>
        <button 
          onClick={toggleDarkMode}
          className={`p-3 rounded-lg transition-all duration-300 ${
            darkMode 
              ? 'bg-orange-400/10 text-orange-300 hover:bg-orange-400/20' 
              : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-lg flex items-center justify-center border ${
            darkMode 
              ? 'border-orange-400/30 bg-gradient-to-br from-orange-400/20 to-orange-600/10' 
              : 'border-orange-300/40 bg-gradient-to-br from-orange-200/40 to-orange-400/20'
          }`}>
            <Shield className={`w-8 h-8 ${darkMode ? 'text-orange-300' : 'text-orange-600'}`} />
          </div>
          <div>
            <h2 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              Dr. Sarah Johnson
            </h2>
            <div className="flex items-center gap-4 text-sm">
              <span className={`px-3 py-1 rounded-full font-medium text-xs ${
                darkMode 
                  ? 'bg-orange-400/20 text-orange-300 border border-orange-400/30' 
                  : 'bg-orange-100 text-orange-700 border border-orange-200'
              }`}>
                Principal
              </span>
              <span className={`${darkMode ? 'text-slate-300' : 'text-orange-600/80'}`}>
                Oxford College
              </span>
            </div>
          </div>
        </div>
        <div className={`text-right p-3 rounded-lg ${
          darkMode 
            ? 'bg-slate-700/40 border border-slate-600/30' 
            : 'bg-orange-50/60 border border-orange-200/40'
        }`}>
          <div className={`text-xs font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-orange-600/80'}`}>
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </div>
          <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </ProfessionalCard>
  );
};

const KeyMetrics = ({ darkMode }) => {
  const metrics = [
    { title: "Total Students", value: "2,847", icon: GraduationCap, trend: "+8.2%", color: "emerald" },
    { title: "Faculty Members", value: "142", icon: Users, trend: "+3.1%", color: "blue" },
    { title: "Departments", value: "12", icon: Building2, trend: "0%", color: "purple" },
    { title: "Monthly Revenue", value: "$485K", icon: DollarSign, trend: "+12.5%", color: "green" },
    { title: "Academic Score", value: "94.2%", icon: Award, trend: "+2.3%", color: "amber" },
    { title: "Employment Rate", value: "96.8%", icon: Target, trend: "+1.7%", color: "orange" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <ProfessionalCard key={index} className="p-4 group" darkMode={darkMode}>
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-orange-400/10 text-orange-300 group-hover:bg-orange-400/15' 
                : 'bg-orange-100/80 text-orange-600 group-hover:bg-orange-200/80'
            }`}>
              <metric.icon className="w-5 h-5" />
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              metric.trend.includes('+')
                ? (darkMode ? 'bg-emerald-400/10 text-emerald-300' : 'bg-emerald-100 text-emerald-700')
                : (darkMode ? 'bg-slate-400/10 text-slate-300' : 'bg-slate-100 text-slate-600')
            }`}>
              {metric.trend}
            </span>
          </div>
          <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            {metric.value}
          </div>
          <div className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {metric.title}
          </div>
        </ProfessionalCard>
      ))}
    </div>
  );
};

const StudentEnrollmentChart = ({ darkMode }) => {
  const enrollmentData = [
    { month: 'Aug', students: 2650, faculty: 138 },
    { month: 'Sep', students: 2720, faculty: 139 },
    { month: 'Oct', students: 2780, faculty: 140 },
    { month: 'Nov', students: 2810, faculty: 141 },
    { month: 'Dec', students: 2835, faculty: 142 },
    { month: 'Jan', students: 2847, faculty: 142 },
  ];

  return (
    <ProfessionalCard className="p-6" darkMode={darkMode} variant="accent">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Enrollment Trends
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Students</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-orange-300' : 'bg-orange-400'}`}></div>
            <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Faculty</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={enrollmentData}>
            <defs>
              <linearGradient id="studentsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F97316" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="facultyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={darkMode ? "#FCD34D" : "#FB923C"} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={darkMode ? "#FCD34D" : "#FB923C"} stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#475569' : '#E5E7EB'} strokeWidth={0.5} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: darkMode ? '#94a3b8' : '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: darkMode ? '#94a3b8' : '#6B7280', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
                border: darkMode ? '1px solid #374151' : '1px solid #E5E7EB',
                borderRadius: '8px',
                color: darkMode ? '#F9FAFB' : '#111827',
                fontSize: '12px'
              }}
            />
            <Area
              type="monotone"
              dataKey="students"
              stroke="#F97316"
              strokeWidth={2}
              fill="url(#studentsGradient)"
            />
            <Area
              type="monotone"
              dataKey="faculty"
              stroke={darkMode ? "#FCD34D" : "#FB923C"}
              strokeWidth={2}
              fill="url(#facultyGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ProfessionalCard>
  );
};

const DepartmentPerformance = ({ darkMode }) => {
  const departmentData = [
    { name: 'Computer Science', value: 680, performance: 96, icon: '💻' },
    { name: 'Engineering', value: 520, performance: 94, icon: '⚙️' },
    { name: 'Business', value: 450, performance: 92, icon: '💼' },
    { name: 'Medicine', value: 380, performance: 98, icon: '🏥' },
    { name: 'Arts', value: 320, performance: 89, icon: '🎨' },
    { name: 'Sciences', value: 497, performance: 91, icon: '🔬' }
  ];

  const colors = ['#F97316', '#FB923C', '#FDBA74', '#FED7AA', '#EA580C', '#C2410C'];

  return (
    <ProfessionalCard className="p-6" darkMode={darkMode}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Department Overview
        </h3>
        <button className={`flex items-center text-xs font-medium px-3 py-2 rounded-lg transition-all ${
          darkMode 
            ? 'text-orange-300 hover:text-orange-200 hover:bg-orange-400/10' 
            : 'text-orange-600 hover:text-orange-700 hover:bg-orange-100'
        }`}>
          View Report <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
                  border: darkMode ? '1px solid #374151' : '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3">
          {departmentData.map((dept, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                darkMode ? 'bg-slate-700/30 hover:bg-slate-700/50' : 'bg-orange-50/50 hover:bg-orange-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{dept.icon}</span>
                <div>
                  <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    {dept.name}
                  </span>
                  <div className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {dept.value} students
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold text-sm ${
                  darkMode ? 'text-orange-300' : 'text-orange-600'
                }`}>
                  {dept.performance}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfessionalCard>
  );
};

const RecentActivities = ({ darkMode }) => {
  const activities = [
    {
      title: 'Faculty Recruitment Drive',
      department: 'Human Resources',
      time: '2h ago',
      icon: '👥',
      status: 'active'
    },
    {
      title: 'Academic Review Completed',
      department: 'Academic Affairs',
      time: '4h ago',
      icon: '📋',
      status: 'completed'
    },
    {
      title: 'Infrastructure Upgrade',
      department: 'Administration',
      time: '6h ago',
      icon: '🏗️',
      status: 'approved'
    },
    {
      title: 'Placement Drive Results',
      department: 'Career Services',
      time: '1d ago',
      icon: '🎯',
      status: 'reviewed'
    }
  ];

  return (
    <ProfessionalCard className="p-6" darkMode={darkMode} variant="accent">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Recent Activities
        </h3>
        <button className={`flex items-center text-xs font-medium px-3 py-2 rounded-lg transition-all ${
          darkMode 
            ? 'text-orange-300 hover:text-orange-200 hover:bg-orange-400/10' 
            : 'text-orange-600 hover:text-orange-700 hover:bg-orange-100'
        }`}>
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
              darkMode 
                ? 'bg-slate-800/50 border-slate-700/30 hover:bg-slate-800/70' 
                : 'bg-white/60 border-orange-200/20 hover:bg-white/80'
            }`}
          >
            <span className="text-lg flex-shrink-0 mt-1">{activity.icon}</span>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                {activity.title}
              </p>
              <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {activity.department} • {activity.time}
              </p>
            </div>
            <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
              darkMode ? 'bg-orange-400' : 'bg-orange-500'
            }`} />
          </div>
        ))}
      </div>
    </ProfessionalCard>
  );
};

const FinancialOverview = ({ darkMode }) => {
  const financialData = [
    { month: 'Aug', revenue: 420, expenses: 380 },
    { month: 'Sep', revenue: 445, expenses: 395 },
    { month: 'Oct', revenue: 465, expenses: 410 },
    { month: 'Nov', revenue: 470, expenses: 420 },
    { month: 'Dec', revenue: 480, expenses: 435 },
    { month: 'Jan', revenue: 485, expenses: 440 },
  ];

  return (
    <ProfessionalCard className="p-6" darkMode={darkMode}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Financial Performance
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-slate-400' : 'bg-slate-500'}`}></div>
            <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Expenses</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={financialData} barCategoryGap="25%">
            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#475569' : '#E5E7EB'} strokeWidth={0.5} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: darkMode ? '#94a3b8' : '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: darkMode ? '#94a3b8' : '#6B7280', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
                border: darkMode ? '1px solid #374151' : '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar dataKey="revenue" fill="#F97316" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill={darkMode ? '#64748B' : '#94A3B8'} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ProfessionalCard>
  );
};

const PrincipalDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen relative">
      <GeometricPattern darkMode={darkMode} />
      
      <div className="relative z-10 p-4 md:p-6 max-w-7xl mx-auto">
        <PrincipalHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <KeyMetrics darkMode={darkMode} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <StudentEnrollmentChart darkMode={darkMode} />
          <DepartmentPerformance darkMode={darkMode} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <FinancialOverview darkMode={darkMode} />
          <RecentActivities darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;