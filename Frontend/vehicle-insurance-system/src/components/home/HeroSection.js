import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div 
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: '85vh',
        background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-primary-600 opacity-75"></div>
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Secure Your Journey, Protect Your Future
          </h1>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Comprehensive vehicle insurance with cutting-edge protection and personalized care.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/signup" 
              className="px-8 py-3 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-100 transition duration-300 shadow-medium hover:shadow-hard"
            >
              Get a Quote
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 text-lg font-semibold text-white border border-white rounded-lg hover:bg-white/20 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;