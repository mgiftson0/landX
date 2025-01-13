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
    <footer className="footer-section text-black py-12 bg-transparent border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Description */}
          <div className="md:col-span-1">
            <h1 className="text-2xl font-bold text-black mb-4">landX</h1>
            <p className="text-gray-600 text-sm">
              Transforming the way people interact with land and property investments.
            </p>
          </div>

          {/* Main Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Blog
              </a>
            </nav>
          </div>

          {/* Support Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Careers
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Support Center
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                Instagram
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} landX. Created by <a href="#" className="text-blue-500 hover:underline">manuel</a>. All rights reserved.</p>
            <p className="mt-4 md:mt-0">English (Global)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;