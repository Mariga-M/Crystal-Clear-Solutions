import React from 'react';
import { useState } from 'react';
import { Home, Building, Sparkles, Truck, Palette, Wrench } from 'lucide-react';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Comprehensive home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      features: ['Weekly/Bi-weekly/Monthly', 'Deep cleaning available', 'Eco-friendly products', 'Flexible scheduling'],
      price: 'Starting at Ksh. 800',
      detailedDescription: 'Our residential cleaning service transforms your home into a spotless sanctuary. We handle everything from dusting and vacuuming to deep cleaning kitchens and bathrooms, using only eco-friendly products that are safe for your family and pets.',
      included: [
        'All rooms cleaned thoroughly',
        'Kitchen appliances wiped down',
        'Bathroom sanitization',
        'Floor mopping and vacuuming',
        'Dusting of all surfaces',
        'Trash removal',
        'Eco-friendly products included'
      ],
      process: [
        'Initial walkthrough and assessment',
        'Declutter and organize surfaces',
        'Deep clean all rooms systematically',
        'Final inspection and touch-ups'
      ],
      duration: '2-4 hours',
      frequency: ['One-time', 'Weekly', 'Bi-weekly', 'Monthly']
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a productive work environment.',
      features: ['After-hours service', 'Customized plans', 'Sanitization included', 'Reliable staff'],
      price: 'Custom quotes',
      detailedDescription: 'Keep your business looking professional with our comprehensive commercial cleaning services. We work around your schedule to ensure minimal disruption to your operations while maintaining the highest standards of cleanliness.',
      included: [
        'Office spaces and workstations',
        'Conference rooms and common areas',
        'Restroom sanitization',
        'Kitchen/break room cleaning',
        'Floor care and maintenance',
        'Trash and recycling removal',
        'Window cleaning (interior)'
      ],
      process: [
        'Site assessment and custom plan creation',
        'Scheduled cleaning during off-hours',
        'Systematic cleaning of all areas',
        'Quality control and reporting'
      ],
      duration: 'Varies by size',
      frequency: ['Daily', 'Weekly', 'Bi-weekly', 'Monthly']
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that covers every corner, perfect for spring cleaning or special occasions.',
      features: ['Top to bottom clean', 'Inside appliances', 'Baseboards & windows', 'Detailed sanitization'],
      price: 'Starting at Ksh. 1,500',
      detailedDescription: 'Our deep cleaning service goes beyond regular maintenance to tackle every nook and cranny. Perfect for seasonal cleaning, preparing for special events, or getting your space back to pristine condition.',
      included: [
        'Inside appliances (oven, refrigerator, microwave)',
        'Baseboards and window sills',
        'Light fixtures and ceiling fans',
        'Cabinet fronts and interiors',
        'Detailed bathroom scrubbing',
        'Carpet and upholstery cleaning',
        'Organization and decluttering'
      ],
      process: [
        'Comprehensive space evaluation',
        'Room-by-room deep cleaning',
        'Appliance and fixture detailing',
        'Final walkthrough and touch-ups'
      ],
      duration: '4-8 hours',
      frequency: ['One-time', 'Seasonal', 'Bi-annual']
    },
    {
      icon: Truck,
      title: 'Move-In/Move-Out',
      description: 'Complete cleaning service for property transitions, ensuring spaces are move-in ready.',
      features: ['Empty property focus', 'All rooms included', 'Appliance cleaning', 'Same-day service'],
      price: 'Starting at Ksh. 1,200',
      detailedDescription: 'Make your move stress-free with our specialized move-in/move-out cleaning service. We ensure properties are spotless for new occupants or help you get your security deposit back.',
      included: [
        'Complete empty property cleaning',
        'All appliances cleaned inside and out',
        'Cabinet and closet interiors',
        'Window cleaning (interior)',
        'Floor deep cleaning and polishing',
        'Bathroom and kitchen sanitization',
        'Light fixture cleaning'
      ],
      process: [
        'Property walkthrough and documentation',
        'Systematic room-by-room cleaning',
        'Appliance and fixture deep cleaning',
        'Final inspection and photo documentation'
      ],
      duration: '3-6 hours',
      frequency: ['One-time', 'As needed']
    },
    {
      icon: Palette,
      title: 'Post-Construction',
      description: 'Specialized cleaning for newly constructed or renovated spaces, removing all construction debris.',
      features: ['Dust removal', 'Paint splatter cleanup', 'Fixture polishing', 'Floor refinishing'],
      price: 'Custom quotes',
      detailedDescription: 'Transform your newly constructed or renovated space from construction zone to move-in ready. Our specialized team handles all the dust, debris, and finishing touches that construction leaves behind.',
      included: [
        'Construction dust removal',
        'Paint splatter and residue cleanup',
        'Window and fixture polishing',
        'Floor cleaning and protection',
        'HVAC vent cleaning',
        'Debris and material removal',
        'Final detailing and inspection'
      ],
      process: [
        'Site assessment and safety check',
        'Debris removal and initial cleaning',
        'Detailed cleaning and polishing',
        'Final walkthrough with client'
      ],
      duration: 'Varies by project',
      frequency: ['One-time', 'Project-based']
    },
    {
      icon: Wrench,
      title: 'Maintenance Plans',
      description: 'Regular cleaning schedules tailored to your needs with discounted rates for consistent service.',
      features: ['Flexible frequency', 'Priority booking', 'Discounted rates', 'Quality guarantee'],
      price: '15% off regular rates',
      detailedDescription: 'Maintain a consistently clean space with our customized maintenance plans. Enjoy priority scheduling, discounted rates, and the peace of mind that comes with regular professional cleaning.',
      included: [
        'Customized cleaning checklist',
        'Priority booking and scheduling',
        'Consistent cleaning team',
        'Quality assurance program',
        'Flexible service adjustments',
        'Emergency cleaning availability',
        'Seasonal deep cleaning options'
      ],
      process: [
        'Initial consultation and plan creation',
        'Regular scheduled cleanings',
        'Ongoing quality monitoring',
        'Plan adjustments as needed'
      ],
      duration: 'Varies by plan',
      frequency: ['Weekly', 'Bi-weekly', 'Monthly', 'Custom']
    }
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
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
              
              <button 
                onClick={() => handleLearnMore(service)}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 inline-block border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              We create personalized cleaning plans to meet your unique requirements.
              <span className="block text-sm mt-2 text-blue-600 dark:text-blue-400 font-medium">
                ✨ Free consultation • Same-day quotes • Flexible scheduling
              </span>
            </p>
            <a
              href="#contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <ServiceModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      service={selectedService}
    />
    </>
  );
};

export default Services;