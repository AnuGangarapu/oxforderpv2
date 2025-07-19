import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users, BookOpen, Calendar, BarChart3, Clock, CheckCircle, Send, Plus, X, Activity, Sun, Moon
} from 'lucide-react';

const LiveBackground = () => (
  <div className="fixed inset-0 -z-10">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    >
      <source src="https://cdn.pixabay.com/video/2024/03/15/204243-923909579_large.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-orange-500/30" />
  </div>
);

const GlassCard = ({ children, className = "", hover = true }) => (
  <div className={`
    bg-white/80 border border-orange-200 backdrop-blur-sm rounded-xl shadow-lg
    ${hover ? 'hover:bg-orange-100 hover:shadow-xl' : ''}
    transition-all duration-300 ease-out
    ${className}
  `}>
    {children}
  </div>
);

const ProfileHeader = ({ toggleDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mb-6 p-6 rounded-xl shadow-lg bg-orange-600/90 border border-orange-800 backdrop-blur-md sticky top-0 z-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-800 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white">
            JD
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Dr. Jane Doe</h1>
            <div className="flex items-center gap-3 text-sm text-orange-100">
              <span className="px-3 py-1 rounded-full bg-orange-700">ID: FAC1001</span>
              <span>•</span>
              <span>Associate Professor</span>
              <span>•</span>
              <span>Computer Science</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-white">{currentTime.toLocaleDateString()}</div>
            <div className="text-lg font-semibold text-white">{currentTime.toLocaleTimeString()}</div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-orange-500 text-white hover:scale-110 transition-transform"
            aria-label="Toggle dark mode"
          >
            <Sun size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
const StatsCard = ({ title, value, icon: Icon }) => (
  <GlassCard className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-orange-500 mb-1">{title}</p>
        <p className="text-2xl font-bold text-orange-700">{value}</p>
      </div>
      <div className="p-3 rounded-xl bg-orange-600">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </GlassCard>
);

const QuickStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    <StatsCard title="Total Students" value="120" icon={Users} />
    <StatsCard title="Today's Classes" value="6" icon={Calendar} />
    <StatsCard title="Pending Reviews" value="23" icon={BookOpen} />
    <StatsCard title="Class Average" value="82%" icon={BarChart3} />
  </div>
);

const CreateAssignmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    dueDate: '',
    totalMarks: '',
    instructions: ''
  });

  const handleSubmit = () => {
    onClose();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-orange-100/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-orange-700">Create Assignment</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-orange-100 transition-colors">
              <X className="w-5 h-5 text-orange-700" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-orange-600 mb-2">Assignment Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={e => handleInputChange('title', e.target.value)}
                className="w-full p-3 rounded-lg border border-orange-300 text-orange-800 bg-white focus:ring-2 focus:ring-orange-500"
                placeholder="Enter assignment title"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-orange-600 mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={e => handleInputChange('subject', e.target.value)}
                  className="w-full p-3 rounded-lg border border-orange-300 text-orange-800 bg-white focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Subject</option>
                  <option value="Data Structures">Data Structures</option>
                  <option value="Algorithms">Algorithms</option>
                  <option value="Database Systems">Database Systems</option>
                  <option value="Software Engineering">Software Engineering</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-orange-600 mb-2">Total Marks</label>
                <input
                  type="number"
                  value={formData.totalMarks}
                  onChange={e => handleInputChange('totalMarks', e.target.value)}
                  className="w-full p-3 rounded-lg border border-orange-300 text-orange-800 bg-white focus:ring-2 focus:ring-orange-500"
                  placeholder="100"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-600 mb-2">Due Date</label>
              <input
                type="datetime-local"
                value={formData.dueDate}
                onChange={e => handleInputChange('dueDate', e.target.value)}
                className="w-full p-3 rounded-lg border border-orange-300 text-orange-800 bg-white focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-600 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={e => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full p-3 rounded-lg border border-orange-300 text-orange-800 bg-white focus:ring-2 focus:ring-orange-500"
                placeholder="Enter assignment description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-600 mb-2">Instructions</label>
              <textarea
                value={formData.instructions}
                onChange={e => handleInputChange('instructions', e.target.value)}
                rows={3}
                className="w-full p-3 rounded-lg border border-orange-300 text-orange-800 bg-white focus:ring-2 focus:ring-orange-500"
                placeholder="Enter special instructions"
              />
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <button onClick={onClose} className="px-6 py-2 rounded-lg bg-orange-100 text-orange-700 hover:bg-orange-200">Cancel</button>
              <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-orange-700 text-white hover:bg-orange-800">Create Assignment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickActions = () => {
  const navigate = useNavigate();
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);

  const actions = [
    { title: 'Mark Attendance', subtitle: 'Record student attendance', icon: Calendar, onClick: () => navigate('/attendance') },
    { title: 'Upload Marks', subtitle: 'Grade assignments & exams', icon: BarChart3, onClick: () => navigate('/marks') },
    { title: 'Create Assignment', subtitle: 'Set new tasks for students', icon: Plus, onClick: () => setShowAssignmentModal(true) },
    { title: 'Send Notice', subtitle: 'Share announcements', icon: Send, onClick: () => navigate('/notifications') }
  ];

  return (
    <>
      <GlassCard className="p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-orange-700">Quick Actions</h3>
          <Activity className="w-5 h-5 text-orange-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className="group p-4 rounded-xl bg-orange-500 text-white hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
            >
              <action.icon className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform text-white" />
              <div className="text-left">
                <h4 className="font-semibold mb-1">{action.title}</h4>
                <p className="text-sm opacity-90">{action.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </GlassCard>
      <CreateAssignmentModal isOpen={showAssignmentModal} onClose={() => setShowAssignmentModal(false)} />
    </>
  );
};

const facultySchedule = [
  { time: '09:00', subject: 'Data Structures', section: 'CS-301', room: 'A-101', students: 45 },
  { time: '11:00', subject: 'Algorithms', section: 'CS-302', room: 'A-102', students: 38 },
  { time: '14:00', subject: 'Database Systems', section: 'CS-401', room: 'B-201', students: 42 },
  { time: '16:00', subject: 'Software Engineering', section: 'CS-402', room: 'B-202', students: 35 },
];

function isCurrentPeriod(time) {
  const now = new Date();
  const [h, m] = time.split(':').map(Number);
  const start = new Date(now);
  start.setHours(h, m, 0, 0);
  const end = new Date(start);
  end.setMinutes(start.getMinutes() + 60);
  return now >= start && now < end;
}

const TeachingSchedule = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-orange-700">Today's Schedule</h3>
        <Clock className="w-5 h-5 text-orange-400" />
      </div>
      <div className="space-y-4">
        {facultySchedule.map((item, index) => {
          const current = isCurrentPeriod(item.time);
          return (
            <div
              key={index}
              className={`p-4 rounded-xl border-l-4 transition-all duration-300 ${
                current ? 'bg-orange-100 border-orange-500' : 'bg-orange-50 border-orange-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-orange-700">{item.subject}</h4>
                  <div className="text-sm text-orange-500 mt-1">{item.section} • Room {item.room} • {item.students} students</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-orange-700">{item.time}</div>
                  {current && (
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                      <span className="text-xs text-orange-700 font-medium">Live</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>

    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-orange-700">Recent Activities</h3>
        <CheckCircle className="w-5 h-5 text-orange-400" />
      </div>
      <div className="space-y-4">
        {[
          { action: 'Marked attendance', subject: 'Data Structures', time: '2 hours ago' },
          { action: 'Assignment graded', subject: 'Algorithms', time: '4 hours ago' },
          { action: 'Notice sent', subject: 'Database Systems', time: '1 day ago' },
          { action: 'Marks uploaded', subject: 'Software Engineering', time: '2 days ago' }
        ].map((activity, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-orange-50">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-orange-700">{activity.action}</p>
              <p className="text-xs text-orange-500">{activity.subject} • {activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  </div>
);

const FacultyDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen relative bg-white">
      <LiveBackground />
      <div className="relative z-10 p-4 md:p-6 max-w-7xl mx-auto">
        <ProfileHeader toggleDarkMode={toggleDarkMode} />
        <QuickStats />
        <QuickActions />
        <div className="my-8 border-t border-orange-200" />
        <TeachingSchedule />
      </div>
    </div>
  );
};

export default FacultyDashboard;
