import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you bring your own cleaning supplies?',
      answer: 'Yes, we bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products that are safe for your family and pets. If you have specific product preferences or allergies, just let us know!'
    },
    {
      question: 'Are your cleaners background-checked and insured?',
      answer: 'Absolutely! All our team members undergo thorough background checks and are fully insured and bonded. We take your security and peace of mind seriously.'
    },
    {
      question: 'What if I\'m not satisfied with the cleaning?',
      answer: 'Your satisfaction is our guarantee! If you\'re not completely happy with our service, contact us within 24 hours and we\'ll return to re-clean any missed areas at no extra charge.'
    },
    {
      question: 'How do I prepare for a cleaning service?',
      answer: 'Just pick up any valuable items and personal belongings. We\'ll handle the rest! For deep cleaning services, we recommend clearing surfaces and floors of clutter to maximize our efficiency.'
    },
    {
      question: 'What\'s included in a standard cleaning?',
      answer: 'Our standard cleaning includes all rooms: dusting, vacuuming, mopping, cleaning bathrooms (toilets, sinks, showers), kitchen (counters, appliances, sink), and general tidying. We can customize based on your needs.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 48 hours in advance for regular cleaning and 1 week for deep cleaning or move-in/out services. However, we often accommodate same-day requests based on availability.'
    },
    {
      question: 'Do you offer weekend and evening appointments?',
      answer: 'Yes! We offer flexible scheduling including evenings and weekends. Weekend appointments may have a small surcharge, but we\'re happy to work around your schedule.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. Payment is due upon completion of service. For recurring services, we can set up automatic billing for your convenience.'
    },
    {
      question: 'Can you clean while I\'m not home?',
      answer: 'Yes, many of our clients prefer this option. We can arrange for secure key pickup or you can provide access codes. Our insured and bonded team ensures your property is safe and secure.'
    },
    {
      question: 'Do you offer discounts for regular service?',
      answer: 'Yes! We offer significant discounts for weekly, bi-weekly, and monthly recurring services. The more frequently you schedule, the more you save. Contact us for custom pricing.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            our clients ask about our cleaning services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-4 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're here to help! Contact us for personalized answers to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </a>
              <a
                href="tel:+254713380803"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 font-medium border border-gray-200 dark:border-gray-600"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;