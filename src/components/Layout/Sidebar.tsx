import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home, User, Calendar, BookOpen, Users, CreditCard, Bell, BarChart3,
  Settings, GraduationCap, Clock, TrendingUp, ChevronRight, Menu,
  MessageCircle, Paperclip
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const getMenuItems = () => {
    const baseItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
      { id: 'profile', label: 'My Profile', icon: User, path: '/profile' },
      { id: 'timetable', label: 'Timetable', icon: Clock, path: '/timetable' },
    ];

    switch (user?.role) {
      case 'student':
        return [
          ...baseItems,
          { id: 'attendance', label: 'Attendance', icon: Calendar, path: '/attendance' },
          { id: 'marks', label: 'Marks', icon: BookOpen, path: '/marks' },
          { id: 'fees', label: 'Fees', icon: CreditCard, path: '/fees' },
          { id: 'documents', label: 'Documents', icon: Paperclip, path: '/documents' },
          { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ];

      case 'faculty':
        return [
          ...baseItems,
          { id: 'attendance', label: 'Mark Attendance', icon: Calendar, path: '/attendance' },
          { id: 'marks', label: 'Upload Marks', icon: BookOpen, path: '/marks' },
          { id: 'students', label: 'My Students', icon: Users, path: '/students' },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
          { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
          { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ];

      case 'hod':
        return [
          ...baseItems,
          { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
          { id: 'faculty', label: 'Faculty', icon: Users, path: '/faculty' },
          { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
          { id: 'real-time-analytics', label: 'Real-Time Analytics', icon: TrendingUp, path: '/real-time-analytics', isNew: true },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
          { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
          { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ];

      case 'principal':
      case 'director':
        return [
          ...baseItems,
          { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
          { id: 'faculty', label: 'Faculty', icon: Users, path: '/faculty' },
          { id: 'fees', label: 'Fee Management', icon: CreditCard, path: '/fees' },
          { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
          { id: 'real-time-analytics', label: 'Real-Time Analytics', icon: TrendingUp, path: '/real-time-analytics', isNew: true },
          { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
          { id: 'whatsapp', label: 'WhatsApp Center', icon: MessageCircle, path: '/whatsapp' },
          { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        ];

      default:
        return baseItems;
    }
  };

  const menuItems = getMenuItems();
  const isMobile = window.innerWidth < 768;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-slate-800 text-white p-2 rounded-md shadow-md md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-slate-800 text-white pt-16 transition-all duration-300
        ${isMobile ? (isMobileOpen ? "w-64" : "w-0 overflow-hidden") : (isExpanded ? "w-64" : "w-20")}`}
      >
        {/* Collapse Button (Desktop only) */}
        {!isMobile && (
          <button
            className={`absolute top-4 right-0 translate-x-1/2 bg-white text-slate-800 p-1.5 rounded-full shadow-md z-50 ${
              isExpanded ? "rotate-180" : ""
            } hover:bg-slate-100 transition-all`}
            onClick={toggleSidebar}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Menu Header */}
        <div className={`px-4 py-5 ${isExpanded ? "" : "flex justify-center"}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-r from-[#9A3412] to-[#EA580C] p-2 rounded-lg shadow-md">
              <Menu className="w-5 h-5 text-white" />
            </div>
            {isExpanded && <span className="font-medium text-white">Menu</span>}
          </div>
          {isExpanded && <div className="h-px bg-slate-700 mt-2" />}
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    if (isMobile) setIsMobileOpen(false);
                  }}
                  className={`w-full text-left group flex items-center px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#9A3412] to-[#EA580C] text-white'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  } ${isExpanded ? 'justify-start' : 'justify-center'}`}
                >
                  <Icon className="w-5 h-5 min-w-5" />
                  {isExpanded && <span className="ml-3 font-medium truncate">{item.label}</span>}
                  {item.isNew && isExpanded && (
                    <span className="ml-auto px-1.5 py-0.5 text-xs bg-[#EA580C] text-white rounded-full">New</span>
                  )}
                  {item.id === 'whatsapp' && (
                    <span className="ml-auto w-2 h-2 bg-[#EA580C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Status Card */}
        {isExpanded && (
          <div className="p-3 bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600/30 mx-3 mb-4 mt-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#9A3412] to-[#EA580C] rounded-lg flex items-center justify-center shadow-md">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Oxford ERP</p>
                <p className="text-xs text-slate-300">v2.1.0</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">Empowering minds with technology</p>
            <div className="mt-2 w-full bg-slate-600/50 rounded-full h-1">
              <div className="bg-gradient-to-r from-[#9A3412] to-[#EA580C] h-1 rounded-full w-3/4" />
            </div>
            <p className="text-xs text-slate-400 mt-1">Status: Online</p>
          </div>
        )}
      </div>

      {/* Spacer for Layout Shift */}
      <div className={`${isMobile ? 'w-0' : isExpanded ? 'w-64' : 'w-20'} transition-all duration-300`} />
    </>
  );
};

export default Sidebar;
