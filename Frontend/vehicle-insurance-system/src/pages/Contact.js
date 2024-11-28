import React from 'react';
import Navbar from '../components/common/Navbar';
import ContactForm from '../components/contact/ContactForm';
import FAQSection from '../components/contact/FAQSection';


const Contact = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Navbar />
      
      {/* Contact Hero */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We're here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FAQSection />
        </div>
      </section>
      
    </div>
  );
};

export default Contact;