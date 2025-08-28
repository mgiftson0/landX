import heroImage from '../assets/heroImage.png';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ContactCard = () => {
  useEffect(() => {
    // Initialize ScrollReveal with different animations
    const sr = ScrollReveal();
    
    sr.reveal('.reveal-image', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-out',
      reset: false,
    });

    sr.reveal('.reveal-content', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 400,
      easing: 'ease-out',
      reset: false,
    });

    sr.reveal('.reveal-form', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 600,
      easing: 'ease-out',
      reset: false,
    });
  }, []);

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left Side - Image */}
        <div className="lg:w-2/5 flex justify-center reveal-image">
          <div className="relative">
            <img
              src={heroImage}
              alt="Contact Us"
              className="object-cover w-full max-w-xs md:max-w-md lg:max-w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -inset-2 bg-blue-100 rounded-2xl -z-10 opacity-60"></div>
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="lg:w-3/5 flex flex-col items-center text-center px-2 sm:px-4 reveal-content">
          <div className="w-full max-w-md lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 mb-8 text-lg md:text-xl">
              Explore the future with us. <br className="hidden sm:block" /> Feel free to get in touch.
            </p>

            {/* Contact Form */}
            <form className="space-y-6 w-full reveal-form">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;