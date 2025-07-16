import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
      text: 'Crystal Clear Solutions transformed my home! Their attention to detail is incredible, and I love that they use eco-friendly products. My family feels safe and our home has never looked better.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      rating: 5,
      text: 'We\'ve been using their commercial cleaning services for over two years. They\'re reliable, professional, and our office always looks spotless. Highly recommend for any business.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      rating: 5,
      text: 'Their move-out cleaning service is exceptional. Every unit is left pristine for new tenants. They\'ve made property management so much easier for our team.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Thompson',
      role: 'Homeowner',
      rating: 5,
      text: 'After our kitchen renovation, Crystal Clear Solutions did an amazing post-construction cleanup. They removed every trace of dust and debris. Professional and thorough!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Park',
      role: 'Busy Parent',
      rating: 5,
      text: 'As a working mom, their weekly cleaning service is a lifesaver. The team is trustworthy, efficient, and always does an excellent job. I can focus on my family instead of cleaning.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Robert Adams',
      role: 'Senior Citizen',
      rating: 5,
      text: 'The team is respectful, gentle with my belongings, and incredibly thorough. They\'ve been helping me maintain my home for years. I trust them completely.',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it—hear from our satisfied customers 
            who trust us with their homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-blue-900/20 dark:via-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 inline-block border border-blue-100 dark:border-blue-800 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Experience the Crystal Clear difference for yourself.
              <span className="block text-sm mt-2 text-green-600 dark:text-green-400 font-medium">
                💯 100% Satisfaction Guarantee • No contracts required
              </span>
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white px-8 py-3 rounded-full hover:from-green-700 hover:to-blue-700 dark:hover:from-green-600 dark:hover:to-blue-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;