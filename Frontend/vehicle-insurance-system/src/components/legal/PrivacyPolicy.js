import React from 'react';
import { ShieldCheck, Lock, Database, UserCog } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-blue-600 text-white p-8 text-center">
          <ShieldCheck className="mx-auto mb-4" size={64} />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-blue-100">Last Updated: November 2024</p>
        </div>
        
        <div className="p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Lock className="mr-3 text-blue-600" size={24} />
              Information We Collect
            </h2>
            <p>We are committed to protecting your personal information and maintaining your privacy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Database className="mr-3 text-blue-600" size={24} />
              Data Usage
            </h2>
            <p>Your data is used solely for providing and improving our vehicle insurance services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <UserCog className="mr-3 text-blue-600" size={24} />
              Your Rights
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to request data deletion</li>
              <li>Right to opt-out of data collection</li>
            </ul>
          </section>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600">
            If you have any questions, please contact our privacy team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;