import React from 'react';

const FeaturedPolicies = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4">
          Why Choose Our Insurance?
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Experience a new era of vehicle protection with intelligent, flexible, and compassionate insurance solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: '🛡️',
            title: 'Comprehensive Coverage',
            description: 'Cutting-edge protection that adapts to your unique vehicle needs.',
            color: 'bg-primary-50',
            textColor: 'text-primary-600'
          },
          {
            icon: '💸',
            title: 'Affordable Rates',
            description: 'Premium protection without compromising your budget.',
            color: 'bg-secondary-50',
            textColor: 'text-secondary-600'
          },
          {
            icon: '🤝',
            title: 'Seamless Claims',
            description: 'Lightning-fast claim processing with transparent communication.',
            color: 'bg-accent-50',
            textColor: 'text-accent-600'
          }
        ].map((service, index) => (
          <div 
            key={index} 
            className={`${service.color} p-8 rounded-xl shadow-medium hover:shadow-hard transform hover:-translate-y-2 transition duration-300 ease-in-out`}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>{service.title}</h3>
            <p className="text-neutral-600">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedPolicies;