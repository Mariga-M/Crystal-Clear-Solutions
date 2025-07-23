import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '15+', label: 'Team Members', icon: Users },
    { number: '24/7', label: 'Support', icon: Clock }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our work. Every space we clean meets our high standards.',
      icon: Award
    },
    {
      title: 'Eco-Friendly',
      description: 'We use environmentally safe products that are effective yet gentle on your family and pets.',
      icon: Heart
    },
    {
      title: 'Reliable Team',
      description: 'Our background-checked, trained professionals arrive on time and deliver consistent results.',
      icon: Users
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen to your needs and customize our services accordingly.',
      icon: Clock
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Crystal Clear Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that everyone deserves a spotless, healthy environment, 
            we've been transforming spaces and exceeding expectations since 2023.
            <span className="block mt-2 text-blue-600 dark:text-blue-400 font-semibold">
              🏆 Trusted by 50+ satisfied customers across the Nairobi area
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We believe that a clean space is more than just appearance—it's about creating 
              environments where people can thrive. Our mission is to provide thorough, 
              reliable cleaning services that give you more time to focus on what matters most.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With meticulous attention to detail and a commitment to eco-friendly practices, 
              we transform spaces into havens of cleanliness and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium text-center"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </a>
              <a
                href="#services"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 font-medium text-center border border-gray-200 dark:border-gray-600"
                onClick={(e) => {
                  e.preventDefault();
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Services
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4239151/pexels-photo-4239151.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Professional cleaning team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;