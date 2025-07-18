import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Microscope } from 'lucide-react';

const ResearchPage: React.FC = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 100); // Trigger fade-in
  }, []);

  const researchAreas = [
    {
      title: 'Artificial Intelligence in Healthcare',
      lead: 'Dr. Arya Mehra',
      summary: 'Improving diagnostic accuracy using deep learning models.',
    },
    {
      title: 'Smart Agriculture',
      lead: 'Dr. Rohan Seth',
      summary: 'IoT sensors for precision farming and weather prediction.',
    },
    {
      title: 'Quantum Communications',
      lead: 'Dr. Neelam Rao',
      summary: 'Developing quantum-safe encryption for future networks.',
    },
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Campus Research Lab',
      description: 'Ranked #1 in AI Research across South Asia.',
    },
    {
      year: '2022',
      title: 'Innovation in Education Award',
      description: 'Noted contribution in e-learning research and LMS systems.',
    },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Research & Innovation</h1>
          <p className="text-gray-600 mt-1">Discover pioneering research from our campus labs and scholars</p>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Leading the Future with Knowledge</h2>
          <p className="text-lg text-orange-100 mb-6">
            Our research community focuses on solving real-world challenges across multiple domains.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Featured Research Areas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Microscope className="w-6 h-6 text-orange-600 mr-2" /> Featured Research Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">{area.title}</h3>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Lead Researcher:</strong> {area.lead}
                </p>
                <p className="text-gray-600">{area.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Recognitions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-6 h-6 text-orange-600 mr-2" /> Recognitions & Honors
          </h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg border p-4 shadow-sm hover:shadow transition-shadow">
                <span className="text-sm bg-orange-600 text-white px-3 py-1 rounded-full font-medium inline-block mb-2">{award.year}</span>
                <h3 className="text-lg font-bold text-gray-800">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Call to Action */}
        <section className="bg-orange-100 p-8 rounded-lg text-center">
          <Users className="mx-auto w-10 h-10 text-orange-700 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Collaborate With Us</h3>
          <p className="text-gray-700 mb-4">
            Whether you're a student or faculty, join our research initiatives and apply for grants, labs, and projects.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300">
            Explore Research Careers
          </button>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;
