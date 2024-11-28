import React from 'react';
import { FileText, BookOpen, Gavel, Globe } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-green-600 text-white p-8 text-center">
          <FileText className="mx-auto mb-4" size={64} />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-3 text-green-100">Last Updated: November 2024</p>
        </div>
        
        <div className="p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-3 text-green-600" size={24} />
              Agreement to Terms
            </h2>
            <p>By accessing our vehicle insurance platform, you agree to these terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Gavel className="mr-3 text-green-600" size={24} />
              Legal Disclaimer
            </h2>
            <p>Our platform provides insurance information and services subject to these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Globe className="mr-3 text-green-600" size={24} />
              Geographical Limitations
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Services may vary by region</li>
              <li>Legal jurisdiction applies based on your location</li>
              <li>Compliance with local regulations</li>
            </ul>
          </section>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600">
            By continuing to use our service, you accept these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;