import React from 'react';
import { Home, Building, Sparkles, Truck, Palette, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Comprehensive home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      features: ['Weekly/Bi-weekly/Monthly', 'Deep cleaning available', 'Eco-friendly products', 'Flexible scheduling'],
      price: 'Starting at Ksh 2,000'
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a productive work environment.',
      features: ['After-hours service', 'Customized plans', 'Sanitization included', 'Reliable staff'],
      price: 'Custom quotes'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that covers every corner, perfect for spring cleaning or special occasions.',
      features: ['Top to bottom clean', 'Inside appliances', 'Baseboards & windows', 'Detailed sanitization'],
      price: 'Starting at Ksh. 2,000'
    },
    {
      icon: Truck,
      title: 'Move-In/Move-Out',
      description: 'Complete cleaning service for property transitions, ensuring spaces are move-in ready.',
      features: ['Empty property focus', 'All rooms included', 'Appliance cleaning', 'Same-day service'],
      price: 'Starting at Ksh. 1,800'
    },
    {
      icon: Palette,
      title: 'Post-Construction',
      description: 'Specialized cleaning for newly constructed or renovated spaces, removing all construction debris.',
      features: ['Dust removal', 'Paint splatter cleanup', 'Fixture polishing', 'Floor refinishing'],
      price: 'Custom quotes'
    },
    {
      icon: Wrench,
      title: 'Maintenance Plans',
      description: 'Regular cleaning schedules tailored to your needs with discounted rates for consistent service.',
      features: ['Flexible frequency', 'Priority booking', 'Discounted rates', 'Quality guarantee'],
      price: '15% off regular rates'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From regular maintenance to deep cleaning, we offer comprehensive solutions 
            tailored to your specific needs and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We create personalized cleaning plans to meet your unique requirements.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;