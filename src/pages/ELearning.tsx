import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, MonitorPlay, Video, MessageSquareText, Mail } from "lucide-react";

// Type and Dummy Data
type Course = {
  id: number;
  name: string;
  faculty: string;
  enrolled: number;
  access: boolean;
};

const courses: Course[] = [
  {
    id: 1,
    name: "Data Structures",
    faculty: "Prof. Radhika Singh",
    enrolled: 60,
    access: true,
  },
  {
    id: 2,
    name: "Digital Signal Processing",
    faculty: "Dr. Mahesh Kumar",
    enrolled: 45,
    access: false,
  },
  {
    id: 3,
    name: "Plant Physiology",
    faculty: "Dr. Neelam Roy",
    enrolled: 35,
    access: true,
  },
];

const ELearningPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-opacity duration-700 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">E-Learning Portal</h1>
          <p className="text-gray-600 mt-1">
            Interactive lectures, assignments, and resources—accessible anywhere.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-orange-700 mb-3">Learn Smarter, Anywhere</h2>
          <p className="text-orange-900 text-lg">
            Your classroom is wherever you are. Access real-time and recorded lectures and stay connected.
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-orange-600" />
          Your Courses
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-bold text-orange-700 mb-1">{course.name}</h4>
              <p className="text-gray-700 mb-2 text-sm">
                Faculty: <span className="font-medium">{course.faculty}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Enrolled:</strong> {course.enrolled} students
              </p>
              <div className="mt-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    course.access
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.access ? "Open Access" : "Restricted"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MonitorPlay className="w-6 h-6 mr-2 text-orange-600" />
            Learning Tools
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
            <div className="border rounded-lg p-6 bg-orange-50 hover:bg-orange-100 transition">
              <Video className="w-8 h-8 text-orange-600 mb-3" />
              <h4 className="font-semibold text-lg mb-1">Video Lectures</h4>
              <p className="text-sm">
                On-demand recordings, interactive whiteboard sessions included.
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-orange-50 hover:bg-orange-100 transition">
              <MessageSquareText className="w-8 h-8 text-orange-600 mb-3" />
              <h4 className="font-semibold text-lg mb-1">Assignments</h4>
              <p className="text-sm">Submit coursework directly and view feedback in real-time.</p>
            </div>
            <div className="border rounded-lg p-6 bg-orange-50 hover:bg-orange-100 transition">
              <MessageSquareText className="w-8 h-8 text-orange-600 mb-3" />
              <h4 className="font-semibold text-lg mb-1">Live Forums</h4>
              <p className="text-sm">Collaborate, ask doubts, and attend mentoring sessions live.</p>
            </div>
            <div className="border rounded-lg p-6 bg-orange-50 hover:bg-orange-100 transition">
              <Mail className="w-8 h-8 text-orange-600 mb-3" />
              <h4 className="font-semibold text-lg mb-1">Faculty Q&A</h4>
              <p className="text-sm">Message instructors directly or schedule discussion slots.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="py-16 bg-orange-600 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
        <p className="mb-4">
          Having trouble accessing content or need technical help?
        </p>
        <a
          href="mailto:elearning.support@university.edu"
          className="bg-white text-orange-700 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition"
        >
          Contact E-Learning Support
        </a>
      </div>
    </div>
  );
};

export default ELearningPage;
