import React from 'react';
import { ArrowRight, Shield, Leaf, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Clean modern home interior"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Sparkling Clean Spaces,
            <span className="text-blue-600 dark:text-blue-400 block">Every Time!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional, eco-friendly cleaning services for homes and offices. 
            We bring the shine back to your space with meticulous attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group animate-pulse hover:animate-none"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#services"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-200 dark:border-gray-600"
            >
              Our Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">Fully Insured</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Licensed & Bonded</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">Eco-Friendly</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Safe Products</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <Clock className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">Always On Time</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reliable Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;