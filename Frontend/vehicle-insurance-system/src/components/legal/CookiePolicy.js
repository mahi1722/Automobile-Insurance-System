import React from 'react';
import { Cookie, PieChart, Settings, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-orange-600 text-white p-8 text-center">
          <Cookie className="mx-auto mb-4" size={64} />
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <p className="mt-3 text-orange-100">Last Updated: November 2024</p>
        </div>
        
        <div className="p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <PieChart className="mr-3 text-orange-600" size={24} />
              What Are Cookies
            </h2>
            <p>Cookies are small text files stored on your device to enhance user experience and collect analytics.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Settings className="mr-3 text-orange-600" size={24} />
              Cookie Types
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Essential Cookies: Required for basic site functionality</li>
              <li>Analytics Cookies: Help us understand site usage</li>
              <li>Preference Cookies: Remember your settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="mr-3 text-orange-600" size={24} />
              Your Cookie Preferences
            </h2>
            <p>You can manage your cookie preferences in your browser settings or through our consent management platform.</p>
          </section>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600">
            Your privacy is important to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;