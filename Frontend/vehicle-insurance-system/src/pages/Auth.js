import React, { useState } from 'react';
import LoginModal from '../components/auth/LoginModal';
import SignupModal from '../components/auth/SignupModal';

const Auth = () => {
  const [activeModal, setActiveModal] = useState('login');

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-xl p-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {activeModal === 'login' ? 'Log in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {activeModal === 'login' 
              ? 'Or ' 
              : 'Already have an account? '}
            <button 
              onClick={() => setActiveModal(activeModal === 'login' ? 'signup' : 'login')}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {activeModal === 'login' ? 'create a new account' : 'log in instead'}
            </button>
          </p>
        </div>

        {activeModal === 'login' ? (
          <LoginModal />
        ) : (
          <SignupModal />
        )}
      </div>
    </div>
  );
};

export default Auth;