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

// Navbar and Footer
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Simulated authentication context (you'll want to replace this with actual auth management)
const PrivateRoute = ({ children }) => {
  // TODO: Replace with actual authentication check
  const isAuthenticated = false; // This would come from your auth context/state

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
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

            {/* Protected Routes (example) */}
            {/* Uncomment and implement as you add more protected pages */}
            {/* <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            /> */}

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