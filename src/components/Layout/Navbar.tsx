import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const canSearchStudents =
    user?.role && ['faculty', 'hod', 'principal', 'director'].includes(user.role);

  const mockStudents = [
    {
      id: '1',
      name: 'Anusha Kumar',
      rollNumber: '21CS001',
      year: '3rd Year',
      department: 'CSE',
      cgpa: 9.2,
      attendancePercentage: 95,
      avatar: '',
    },
    {
      id: '2',
      name: 'Ravi Teja',
      rollNumber: '21EC002',
      year: '2nd Year',
      department: 'ECE',
      cgpa: 8.4,
      attendancePercentage: 88,
      avatar: '',
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = mockStudents.filter((student) =>
        [student.name, student.rollNumber, student.department].some((field) =>
          field.toLowerCase().includes(term.toLowerCase())
        )
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleStudentSelect = (student) => {
    setShowSearchResults(false);
    setSearchTerm('');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-lg border-b border-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="bg-orange-800 p-2 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Oxford College</h1>
              <p className="text-xs text-orange-200">Student Management</p>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-orange-200 hover:text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {canSearchStudents && (
              <div ref={searchRef} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-200 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-orange-700 border border-orange-500 rounded-lg text-white placeholder-orange-200"
                />

                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-orange-700 border border-orange-600 rounded-lg shadow-lg z-50 text-white">
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.map((student) => (
                        <div
                          key={student.id}
                          onClick={() => handleStudentSelect(student)}
                          className="p-4 hover:bg-orange-800 cursor-pointer border-b border-orange-600 last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={
                                student.avatar ||
                                `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=EA580C&color=fff`
                              }
                              alt={student.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{student.name}</h4>
                              <p className="text-sm text-orange-200">{student.rollNumber} - {student.department}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => navigate('/notifications')}
              className="p-2 rounded hover:bg-orange-700 text-orange-200 hover:text-white"
            >
              <Bell className="w-5 h-5" />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 hover:bg-orange-700 px-2 py-1 rounded"
              >
                <img
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=EA580C&color=fff`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs capitalize text-orange-200">{user?.role}</p>
                </div>
              </button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-1 z-50"
                  >
                    <button 
                      onClick={() => {
                        setShowUserMenu(false);
                        navigate('/profile');
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </button>
                    <button 
                      onClick={() => {
                        setShowUserMenu(false);
                        navigate('/settings');
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <hr className="my-1 border-slate-700" />
                  <button
                   onClick={() => {
                     logout();
                    navigate('/');
                    }}
                     className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-400 hover:bg-slate-700/50"
                    >
                    <LogOut className="w-4 h-4" />
                    <span>Sign out</span>
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        </div>
    </nav>
  );
};

export default Navbar;
