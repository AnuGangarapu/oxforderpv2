import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Library, Mail, Star } from 'lucide-react';

type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: string;
};

const books: Book[] = [
  { id: 1, title: "Introduction to Machine Learning", author: "Alpaydin", available: true, category: "Technology" },
  { id: 2, title: "Basic Electrical Engineering", author: "V.K. Mehta", available: false, category: "Engineering" },
  { id: 3, title: "Agricultural Science Handbook", author: "P.R. Pandey", available: true, category: "Science" },
  { id: 4, title: "Digital Logic Design", author: "Morris Mano", available: true, category: "Electronics" },
];

const LibraryPage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 transition-opacity duration-700 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Central Library</h1>
          <p className="text-gray-600 mt-1">Access digital and physical resources from your campus library</p>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-3">Your Gateway to Knowledge</h2>
          <p className="text-orange-100 text-lg">Explore thousands of books, journals, and learning resources anytime</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Featured Books */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-orange-600" /> Popular Books
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border rounded shadow-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Author</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id} className="border-t">
                    <td className="py-2 px-4">{book.title}</td>
                    <td className="py-2 px-4">{book.author}</td>
                    <td className="py-2 px-4">{book.category}</td>
                    <td className="py-2 px-4">
                      <span className={book.available ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {book.available ? "Available" : "Checked Out"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Library className="w-6 h-6 mr-2 text-orange-600" /> Library Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div className="bg-white shadow rounded-lg p-6 border hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Online Book Reservation</h3>
              <p>Reserve books directly through the portal and pick them up at your convenience.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 border hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">E-resources & Journals</h3>
              <p>Access thousands of digital journals, research papers, databases, and eBooks.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 border hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Reading Room Facility</h3>
              <p>Quiet air-conditioned reading spaces available for all registered students and faculty.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 border hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Book Return & Renewal</h3>
              <p>Easy systems in place for returning or extending your book borrowals online.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-orange-600" /> Contact Librarian
          </h2>
          <div className="bg-white rounded-lg shadow p-6 text-gray-700">
            <p><strong>Librarian:</strong> Mrs. Sunita Sharma</p>
            <p>Email: <a href="mailto:sunita.sharma@university.edu" className="text-orange-600 hover:underline">sunita.sharma@university.edu</a></p>
            <p>Location: Campus Central Library, Block B</p>
            <p>Timing: Mon - Sat, 9:00 AM - 6:00 PM</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LibraryPage;
