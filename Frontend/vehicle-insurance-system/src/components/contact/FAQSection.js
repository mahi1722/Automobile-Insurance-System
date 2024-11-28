// src/components/contact/FAQSection.js
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get a vehicle insurance quote?",
      answer: "You can get a quote by visiting our signup page, filling out a few details about your vehicle, and our system will provide you with a personalized insurance quote instantly."
    },
    {
      question: "What documents do I need to get insurance?",
      answer: "Typically, you'll need your driver's license, vehicle registration, and some basic personal information. For a more comprehensive quote, having your vehicle's VIN and current insurance details can be helpful."
    },
    {
      question: "How quickly can I get coverage?",
      answer: "Once you complete the signup process and payment, your coverage can be activated immediately. Our digital-first approach ensures quick and seamless insurance activation."
    },
    {
      question: "Do you offer discounts?",
      answer: "Yes! We offer various discounts including safe driver discounts, multi-vehicle discounts, and bundling discounts. The exact discount depends on your specific profile and vehicle."
    },
    {
      question: "How do I file a claim?",
      answer: "You can file a claim through our online portal, mobile app, or by calling our 24/7 claims support number. We strive to make the claims process as smooth and quick as possible."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-neutral-800">
                  {faq.question}
                </span>
                <span className="text-primary-600">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 text-neutral-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;