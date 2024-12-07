import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

// Import new policy pages
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import TermsOfService from './pages/TermsOfServicePage';
import CookiePolicy from './pages/CookiePolicyPage';

// Import User and Admin Dashboards
import UserDash from './pages/UserDash';
import AdminDash from './pages/AdminDash';

// Navbar and Footer
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Simulated authentication context (you'll want to replace this with actual auth management)
const PrivateRoute = ({ children }) => {
  // Get token and role from localStorage
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Check if token exists and role matches
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  // Conditional routing based on role
  if (role === 'ROLE_ADMIN' && children.type.name === 'AdminDash') {
    return children;
  }

  if (role === 'ROLE_CUSTOMER' && children.type.name === 'UserDash') {
    return children;
  }

  // If roles don't match, redirect to appropriate dashboard
  return <Navigate 
    to={role === 'ROLE_ADMIN' ? '/admin-dashboard' : '/customer-dashboard'} 
    replace 
  />;
};

// Simple Not Found Page
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />

            {/* Policy Routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />

            {/* Authentication Routes */}
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />

            {/* Protected Routes */}
            <Route 
              path="/customer-dashboard" 
              element={
                <PrivateRoute>
                  <UserDash />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/admin-dashboard" 
              element={
                <PrivateRoute>
                  <AdminDash />
                </PrivateRoute>
              } 
            />

            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
