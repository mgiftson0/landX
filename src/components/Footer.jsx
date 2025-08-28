import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.footer-section', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <footer className="footer-section text-black py-8 md:py-12 bg-transparent border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Company Description */}
          <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-black mb-3 md:mb-4">landX</h1>
            <p className="text-gray-600 text-sm">
              Transforming the way people interact with land and property investments.
            </p>
          </div>

          {/* Main Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Company</h3>
            <nav className="flex flex-col space-y-2 md:space-y-3">
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                About Us
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Features
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Pricing
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Blog
              </a>
            </nav>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Support</h3>
            <nav className="flex flex-col space-y-2 md:space-y-3">
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Contact
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Careers
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Support Center
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Connect</h3>
            <nav className="flex flex-col space-y-2 md:space-y-3">
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Twitter
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                LinkedIn
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Facebook
              </a>
              <a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm md:text-base">
                Instagram
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm">
            <p className="text-center md:text-left mb-3 md:mb-0">
              © {new Date().getFullYear()} landX. Created by <a href="#" className="text-blue-500 hover:underline">manuel</a>. All rights reserved.
            </p>
            <p className="text-center md:text-right">English (Global)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;