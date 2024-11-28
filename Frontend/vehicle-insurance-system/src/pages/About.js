import React from 'react';
import Navbar from '../components/common/Navbar';
import AboutContent from '../components/about/AboutContent';


const About = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Vehicle Insurance</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Committed to providing comprehensive, reliable, and innovative vehicle insurance solutions
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AboutContent />
        </div>
      </section>
     
    </div>
  );
};

export default About;