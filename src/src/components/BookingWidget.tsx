import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    frequency: 'one-time',
    address: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Deep Cleaning',
    'Move-In/Move-Out',
    'Post-Construction',
    'Maintenance Plan'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `New Booking Request:

Service: ${bookingData.service}
Date: ${bookingData.date}
Time: ${bookingData.time}
Frequency: ${bookingData.frequency}

Customer Details:
Name: ${bookingData.name}
Phone: ${bookingData.phone}
${bookingData.email ? `Email: ${bookingData.email}` : ''}

Address: ${bookingData.address}

${bookingData.notes ? `Special Instructions: ${bookingData.notes}` : ''}

Please confirm this booking. Thank you!`;

    const whatsappUrl = `https://wa.me/+24713380803?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setBookingData({
      service: '', date: '', time: '', frequency: 'one-time',
      address: '', name: '', email: '', phone: '', notes: ''
    });
    setStep(1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return bookingData.service && bookingData.date && bookingData.time;
      case 2:
        return bookingData.address;
      case 3:
        return bookingData.name && bookingData.phone;
      default:
        return false;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Booking
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Book your cleaning service in just 3 easy steps. We'll confirm your appointment within 2 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  step >= stepNumber
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-gray-300 dark:border-gray-600 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-0.5 transition-all duration-300 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service & Schedule */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Calendar className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Select Service & Schedule
                    </h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Type *
                    </label>
                    <select
                      value={bookingData.service}
                      onChange={(e) => setBookingData(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Frequency
                    </label>
                    <select
                      value={bookingData.frequency}
                      onChange={(e) => setBookingData(prev => ({ ...prev, frequency: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="one-time">One-time</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData(prev => ({ ...prev, time: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Service Location
                    </h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Address *
                    </label>
                    <textarea
                      value={bookingData.address}
                      onChange={(e) => setBookingData(prev => ({ ...prev, address: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your complete address including apartment/unit number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      value={bookingData.notes}
                      onChange={(e) => setBookingData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Any special instructions, access codes, or areas of focus..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <User className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Contact Information
                    </h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Booking Summary</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <p><strong>Service:</strong> {bookingData.service}</p>
                      <p><strong>Date:</strong> {bookingData.date}</p>
                      <p><strong>Time:</strong> {bookingData.time}</p>
                      <p><strong>Frequency:</strong> {bookingData.frequency}</p>
                      <p><strong>Location:</strong> {bookingData.address}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Back
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`ml-auto px-6 py-3 rounded-lg transition-colors duration-200 ${
                      isStepValid()
                        ? 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className={`ml-auto px-6 py-3 rounded-lg transition-colors duration-200 ${
                      isStepValid()
                        ? 'bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Book Service
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;