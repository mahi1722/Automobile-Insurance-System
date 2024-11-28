import React from 'react';

const AboutContent = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Our Vehicle Insurance</h2>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neutral-800">Our Mission</h3>
        <p className="text-neutral-600">
          At our insurance company, we're committed to providing comprehensive and affordable vehicle insurance that protects what matters most to you. Our mission is to offer peace of mind through innovative, personalized insurance solutions.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neutral-800">Who We Are</h3>
        <p className="text-neutral-600">
          With years of experience in the insurance industry, we understand the unique challenges drivers face. Our team of experts is dedicated to creating insurance products that are transparent, fair, and tailored to individual needs.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-neutral-800">Our Values</h3>
        <ul className="list-disc list-inside text-neutral-600 space-y-2">
          <li>Transparency in all our processes</li>
          <li>Customer-first approach</li>
          <li>Innovative and adaptive insurance solutions</li>
          <li>Commitment to fair and quick claims processing</li>
          <li>Continuous improvement and learning</li>
        </ul>
      </div>
      
      <div className="text-center italic text-neutral-700 mt-8">
        "Protecting your journey, one vehicle at a time."
      </div>
    </div>
  );
};

export default AboutContent;