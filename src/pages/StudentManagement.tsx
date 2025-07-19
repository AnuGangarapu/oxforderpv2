import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Mail,
  Phone,
  User,
  GraduationCap,
  Calendar,
  MapPin,
  Hash,
  X,
} from 'lucide-react';

const mockStudents = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    department: 'Computer Science',
    course: 'B.Tech',
    batch: '2020-2024',
    location: 'Hyderabad',
    rollNumber: 'CS001',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '234-567-8901',
    department: 'Mechanical Engineering',
    course: 'B.Tech',
    batch: '2019-2023',
    location: 'Delhi',
    rollNumber: 'ME001',
  },
];

const departments = [
  'Computer Science',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil Engineering',
];

const StudentManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === 'all' || student.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Student Management</h1>
          <p className="text-gray-500 text-sm">Manage student records and information</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Student</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600 px-1">
            Showing {filteredStudents.length} of {mockStudents.length} students
          </div>
        </div>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/70 rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <User className="w-10 h-10 text-orange-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.course} - {student.department}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center space-x-2"><Mail className="w-4 h-4" /><span>{student.email}</span></p>
              <p className="flex items-center space-x-2"><Phone className="w-4 h-4" /><span>{student.phone}</span></p>
              <p className="flex items-center space-x-2"><GraduationCap className="w-4 h-4" /><span>{student.course}</span></p>
              <p className="flex items-center space-x-2"><Calendar className="w-4 h-4" /><span>{student.batch}</span></p>
              <p className="flex items-center space-x-2"><MapPin className="w-4 h-4" /><span>{student.location}</span></p>
              <p className="flex items-center space-x-2"><Hash className="w-4 h-4" /><span>{student.rollNumber}</span></p>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="text-orange-600 hover:text-orange-700"><Edit className="w-4 h-4" /></button>
              <button className="text-red-600 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 rounded-xl shadow-xl p-6 w-full max-w-md relative"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setShowAddModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Student</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
              <div className="flex flex-col sm:flex-row sm:space-x-2 gap-2 sm:gap-0">
                <button type="submit" className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700">Add</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;
