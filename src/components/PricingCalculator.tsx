import React, { useState } from 'react';
import { Calculator, Home, Building, Clock, Users } from 'lucide-react';
import Modal from './Modal';

const PricingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    propertyType: 'residential',
    size: '',
    frequency: 'one-time',
    extras: [] as string[],
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
      kitchens: 1,
      livingRooms: 1
    }
  });

  const [estimate, setEstimate] = useState<number | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const basePrices = {
    residential: {
      'one-time': 25,
      weekly: 20,
      biweekly: 22,
      monthly: 28
    },
    commercial: {
      'one-time': 35,
      weekly: 30,
      biweekly: 32,
      monthly: 38
    }
  };

  const roomMultipliers = {
    bedrooms: 15,
    bathrooms: 20,
    kitchens: 25,
    livingRooms: 18
  };

  const extras = [
    { id: 'deep-clean', name: 'Deep Cleaning', price: 500 },
    { id: 'inside-oven', name: 'Inside Oven Cleaning', price: 250 },
    { id: 'inside-fridge', name: 'Inside Refrigerator', price: 200 },
    { id: 'windows', name: 'Window Cleaning (Interior)', price: 300 },
    { id: 'garage', name: 'Garage Cleaning', price: 400 },
    { id: 'basement', name: 'Basement Cleaning', price: 350 }
  ];

  const calculateEstimate = () => {
    const baseRate = basePrices[formData.propertyType as keyof typeof basePrices][formData.frequency as keyof typeof basePrices.residential];
    
    let roomTotal = 0;
    Object.entries(formData.rooms).forEach(([room, count]) => {
      roomTotal += count * roomMultipliers[room as keyof typeof roomMultipliers];
    });

    const extrasTotal = formData.extras.reduce((total, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);

    const total = roomTotal + extrasTotal;
    setEstimate(total);
  };

  const handleBookService = () => {
    if (estimate) {
      setShowBookingModal(true);
    }
  };

  const handleBookingChoice = (method: 'whatsapp' | 'email') => {
    if (!estimate) return;

    const serviceDetails = `Service Type: ${formData.propertyType}
Frequency: ${formData.frequency}
Rooms: ${Object.entries(formData.rooms).map(([room, count]) => `${count} ${room}`).join(', ')}
${formData.extras.length > 0 ? `Additional Services: ${formData.extras.map(id => extras.find(e => e.id === id)?.name).join(', ')}` : ''}
Estimated Price: Ksh.${estimate}`;

    if (method === 'whatsapp') {
      const message = `Hi! I'd like to book a cleaning service based on my pricing estimate:

${serviceDetails}

Please help me schedule this service. Thank you!`;
      
      const whatsappUrl = `https://wa.me/+254713380803?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const subject = `Booking Request - ${formData.propertyType} Cleaning`;
      const body = `Hi! I'd like to book a cleaning service based on my pricing estimate:

${serviceDetails}

Please help me schedule this service. Thank you!`;
      
      const mailtoUrl = `mailto:caroline.mariga77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }

    setShowBookingModal(false);
  };

  const handleRoomChange = (room: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      rooms: {
        ...prev.rooms,
        [room]: Math.max(0, value)
      }
    }));
  };

  const handleExtraToggle = (extraId: string) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter(id => id !== extraId)
        : [...prev.extras, extraId]
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Pricing Calculator
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get an instant estimate for your cleaning service. Customize based on your specific needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFormData(prev => ({ ...prev, propertyType: 'residential' }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.propertyType === 'residential'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                      }`}
                    >
                      <Home className="h-6 w-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Residential</span>
                    </button>
                    <button
                      onClick={() => setFormData(prev => ({ ...prev, propertyType: 'commercial' }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.propertyType === 'commercial'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                      }`}
                    >
                      <Building className="h-6 w-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Commercial</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Cleaning Frequency
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="one-time">One-time Cleaning</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                {formData.propertyType === 'residential' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Number of Rooms
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(formData.rooms).map(([room, count]) => (
                        <div key={room} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                            {room.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleRoomChange(room, count - 1)}
                              className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{count}</span>
                            <button
                              onClick={() => handleRoomChange(room, count + 1)}
                              className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Additional Services
                  </label>
                  <div className="space-y-2">
                    {extras.map((extra) => (
                      <label key={extra.id} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.extras.includes(extra.id)}
                          onChange={() => handleExtraToggle(extra.id)}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">{extra.name}</span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">+Ksh. {extra.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculateEstimate}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Calculate Estimate
                </button>
              </div>

              {/* Estimate Display */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Your Estimate
                </h3>
                
                {estimate !== null ? (
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      Ksh.{estimate}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Estimated cost for your {formData.frequency} {formData.propertyType} cleaning
                    </p>
                    
                    <div className="space-y-3 text-left bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Base service:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          Ksh.{Object.values(formData.rooms).reduce((total, count, index) => 
                            total + count * Object.values(roomMultipliers)[index], 0
                          )}
                        </span>
                      </div>
                      {formData.extras.length > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Additional services:</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            Ksh.{formData.extras.reduce((total, extraId) => {
                              const extra = extras.find(e => e.id === extraId);
                              return total + (extra?.price || 0);
                            }, 0)}
                          </span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-2 flex justify-between font-semibold">
                        <span className="text-gray-900 dark:text-white">Total:</span>
                        <span className="text-blue-600 dark:text-blue-400">Ksh.{estimate}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        onClick={handleBookService}
                        className="block w-full bg-green-600 dark:bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 font-medium text-center cursor-pointer"
                      >
                        Book This Service
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        * This is an estimate. Final pricing may vary based on specific requirements and property condition.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Configure your cleaning needs above and click "Calculate Estimate" to see your personalized quote.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Choice Modal */}
      <Modal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} title="Book Your Service">
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Summary</h4>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <p><strong>Service:</strong> {formData.propertyType} cleaning</p>
              <p><strong>Frequency:</strong> {formData.frequency}</p>
              <p><strong>Rooms:</strong> {Object.entries(formData.rooms).map(([room, count]) => `${count} ${room}`).join(', ')}</p>
              {formData.extras.length > 0 && (
                <p><strong>Extras:</strong> {formData.extras.map(id => extras.find(e => e.id === id)?.name).join(', ')}</p>
              )}
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400"><strong>Estimated Price: Ksh.{estimate}</strong></p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              How would you like to proceed with booking this service?
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleBookingChoice('whatsapp')}
                className="w-full bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <span className="mr-2">📱</span>
                Book via WhatsApp
              </button>
              
              <button
                onClick={() => handleBookingChoice('email')}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <span className="mr-2">✉️</span>
                Book via Email
              </button>
            </div>
            
            <button
              onClick={() => setShowBookingModal(false)}
              className="w-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default PricingCalculator;