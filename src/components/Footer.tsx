import React from 'react';
import { useState } from 'react';
import { Sparkles, Facebook, Instagram, Mail, Phone, MapPin, X } from 'lucide-react';
import ServiceModal from './ServiceModal';

const Footer: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Comprehensive home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      features: ['Weekly/Bi-weekly/Monthly', 'Deep cleaning available', 'Eco-friendly products', 'Flexible scheduling'],
      price: 'Starting at Ksh.800',
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

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: X, href: '#', label: 'X' }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <a 
              href="#home"
               className="text-2xl font-bold">Crystal Clear Solutions</a>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional cleaning services that transform your space into a sparkling clean environment. 
              Trusted by hundreds of satisfied customers across the metro area.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 dark:bg-gray-900 p-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Call us</p>
                <p className="text-white font-medium">+254 713380803</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email us</p>
                <p className="text-white font-medium">caroline.mariga77@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Service Area</p>
                <p className="text-white font-medium">Greater Nairobi Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Crystal Clear Solutions. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
    
    <ServiceModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      service={selectedService}
    />
    </>
  );
};

export default Footer;