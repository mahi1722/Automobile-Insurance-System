import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturedPolicies from '../components/home/FeaturedPolicies';


const Home = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Policies Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FeaturedPolicies />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Vehicle?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get personalized insurance quotes in minutes. No hassle, no stress, just protection.
          </p>
          <Link 
            to="/signup" 
            className="px-10 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-100 transition duration-300 shadow-hard"
          >
            Start Your Quote Now
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default Home;