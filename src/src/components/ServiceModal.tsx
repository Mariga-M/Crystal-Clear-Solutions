import React from 'react';
import { X, Check, Phone, Mail } from 'lucide-react';
import Modal from './Modal';

interface Service {
  title: string;
  description: string;
  features: string[];
  price: string;
  detailedDescription: string;
  included: string[];
  process: string[];
  duration: string;
  frequency: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  const handleBookService = () => {
    const message = `Hi! I'm interested in booking ${service.title}. Could you please provide more information and help me schedule a service?`;
    const whatsappUrl = `https://wa.me/+24713380803?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      onClose();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Starting Price
              </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {service.price}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Duration: {service.duration}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              What's Included
            </h3>
            <ul className="space-y-2">
              {service.included.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Our Process
            </h3>
            <ol className="space-y-2">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-sm font-medium rounded-full mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Available Frequencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.frequency.map((freq, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {freq}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleBookService}
            className="flex-1 bg-green-600 dark:bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 font-medium flex items-center justify-center"
          >
            <Phone className="h-4 w-4 mr-2" />
            Book via WhatsApp
          </button>
          <button
            onClick={handleGetQuote}
            className="flex-1 bg-blue-600 dark:bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium flex items-center justify-center"
          >
            <Mail className="h-4 w-4 mr-2" />
            Get Quote
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;