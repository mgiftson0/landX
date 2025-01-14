import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center p-4 bg-transparent fixed w-full top-0 z-10">
      {/* Logo and Navigation Container */}
      <div className="flex items-center flex-1">
        {/* Logo */}
        <div className="text-2xl font-bold text-black ml-4 sm:ml-12 lg:ml-24">
          <Link to="/" className="text-black">landX</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-4" onClick={toggleMenu}>
          <button className="text-black focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block 
          absolute md:relative 
          top-16 md:top-0 
          left-0 md:left-auto 
          right-0 md:right-auto 
          bg-white md:bg-transparent 
          p-4 md:p-0 
          shadow-lg md:shadow-none
          ml-0 md:ml-16 lg:ml-32
        `}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-black">
            {['/', '/pricing', '/about-us', '/contact'].map((path, index) => (
              <li key={index} className="text-center md:text-left">
                <Link
                  to={path}
                  className={`text-black hover:text-blue-500 block py-2 md:py-0 ${
                    location.pathname === path ? 'font-bold border-b-2 border-blue-500' : ''
                  }`}
                >
                  {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Login/Sign Up */}
      <div className="hidden md:flex items-center space-x-6 mr-4 sm:mr-12 lg:mr-24">
        <Link to="/login" className="text-gray-800 hover:text-blue-600 transition duration-300">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
