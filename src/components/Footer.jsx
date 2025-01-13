import { FaGlobe } from "react-icons/fa"; // Importing Globe Icon

const Footer = () => {
  return (
    <footer className="text-black py-8 bg-transparent">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-black">landX</h1>
        </div>

        {/* Links Section */}
        <nav className="flex flex-wrap gap-4 text-sm">
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Support
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200 flex items-center"
          >
            <FaGlobe className="mr-2" /> English (US)
          </a>
        </nav>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} landX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
