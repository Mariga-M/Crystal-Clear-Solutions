import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  const serviceAreas = [
    {
      area: 'East & South-East Nairobi (Embakasi Cluster)',
      neighborhoods: ['Embakasi South', 'Embakasi North', 'Embakasi Central', 'Embakasi East', 'Embakasi West'],
      responseTime: '45 minutes',
      featured: true
    },
    {
      area: 'West & Central-West Nairobi',
      neighborhoods: ['Westlands', 'Dagoretti North', 'Dagoretti South', 'Langata'],
      responseTime: '60 minutes',
      featured: true
    },
    {
      area: 'North & North-East Nairobi',
      neighborhoods: ['Roysambu', 'Kasarani', 'Ruaraka '],
      responseTime: '75 minutes',
      featured: false
    },
    {
      area: 'Central & East-Central Nairobi',
      neighborhoods: ['Starehe', 'Kamukunji', 'Makadara'],
      responseTime: '60 minutes',
      featured: false
    },
    {
      area: 'Informal Settlements Near the City Center',
      neighborhoods: ['Mathare', 'Kibra'],
      responseTime: '75 minutes',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Service Areas
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We proudly serve the greater Nairobi area with fast, reliable cleaning services. 
            Check if we service your neighborhood below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                area.featured
                  ? 'bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-2 border-blue-200 dark:border-blue-700'
                  : 'bg-white dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {area.area}
                </h3>
                {area.featured && (
                  <span className="bg-blue-600 dark:bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                  <span>Response time: {area.responseTime}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Neighborhoods:
                </h4>
                <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 dark:text-gray-400">
                  {area.neighborhoods.map((neighborhood, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {neighborhood}
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                Book Service
              </button>
            </div>
          ))}
        </div>

        {/* Coverage Map Placeholder */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Complete Nairobi Coverage
          </h3>
          <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-12 mb-6">
            <MapPin className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            {/* <p className="text-gray-500 dark:text-gray-400">
              Interactive service area map coming soon
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Neighborhoods</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">50 mi²</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Coverage Area</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* Contact for Unlisted Areas */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 inline-block border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              We're always expanding our service areas. Contact us to check if we can serve your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:++24713380803"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
              <a
                href="#contact"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 font-medium border border-gray-200 dark:border-gray-600"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;