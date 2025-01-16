import heroImage from '../assets/heroImage.png';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ContactCard = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      reset: false,
    });
  }, []);

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center mt-24">
        {/* Left Side - Image */}
        <div className="md:w-1/3 flex justify-center md:mr-4 mb-8 md:mb-0 reveal">
          <img
            src={heroImage}
            alt="Contact Us"
            className="object-cover w-3/4 md:w-full h-auto"
          />
        </div>
        {/* Right Side - Content */}
        <div className="md:w-2/3 flex flex-col items-center text-center px-4 reveal">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">
            Explore the future with us. <br/> Feel free to get in touch.
          </p>

          {/* Contact Form */}
          <form className="space-y-6 w-full max-w-md">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1 text-left"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1 text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
