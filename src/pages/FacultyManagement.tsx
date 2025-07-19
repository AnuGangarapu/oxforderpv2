import React, { useState } from 'react';
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
} from 'lucide-react';

const FacultyManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const facultyList = [
    {
      id: 1,
      name: 'Dr. Anjali Mehta',
      department: 'Computer Science',
      email: 'anjali.mehta@example.com',
      phone: '+91 9876543210',
      subjects: ['AI', 'ML'],
    },
    {
      id: 2,
      name: 'Prof. Rajiv Sharma',
      department: 'Mechanical',
      email: 'rajiv.sharma@example.com',
      phone: '+91 9123456780',
      subjects: ['Thermodynamics', 'Mechanics'],
    },
    {
      id: 3,
      name: 'Dr. Kavita Rao',
      department: 'Electrical',
      email: 'kavita.rao@example.com',
      phone: '+91 9988776655',
      subjects: ['Circuits', 'Signals'],
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    phone: '',
    subjects: '',
  });

  const handleAddFaculty = () => {
    console.log('Adding faculty:', formData);
    setShowAddModal(false);
    setFormData({
      name: '',
      department: '',
      email: '',
      phone: '',
      subjects: '',
    });
  };

  return (
    <div className="p-4 md:p-6 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <h2 className="text-2xl font-semibold text-orange-600">Faculty Management</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Faculty</span>
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute top-3 left-3 text-orange-500" />
          <input
            type="text"
            placeholder="Search by name, department..."
            className="w-full pl-10 pr-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Faculty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyList
          .filter((faculty) =>
            faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faculty.department.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((faculty) => (
            <div key={faculty.id} className="bg-orange-50 border border-orange-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3 space-x-3">
                <User className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-semibold text-orange-700">{faculty.name}</h3>
              </div>
              <div className="space-y-2 text-sm text-orange-700">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{faculty.department}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{faculty.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{faculty.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hash className="w-4 h-4" />
                  <span>Subjects:</span>
                  <div className="flex flex-wrap gap-1">
                    {faculty.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="px-3 py-1 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="px-3 py-1 bg-white border border-orange-500 text-orange-500 rounded-lg text-sm hover:bg-orange-50">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Add Faculty Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-orange bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Add New Faculty</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subjects (comma-separated)"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={formData.subjects}
                onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
              />
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-white border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFaculty}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Add Faculty
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyManagement;
