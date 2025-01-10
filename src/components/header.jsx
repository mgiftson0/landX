import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center p-4 bg-transparent fixed w-full top-0">
      {/* Logo and Navigation Container */}
      <div className="flex items-center flex-1">
        {/* Logo */}
        <div className="text-2xl font-bold text-black ml-24">
          <Link to="/" className="text-black">LandX</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ml-4" onClick={toggleMenu}>
          <button className="text-black focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Menu - Further increased spacing */}
        <nav className={`ml-32 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-black">
            {['/', '/pricing', '/about-us', '/contact'].map((path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`text-black hover:text-blue-500 ${
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

      {/* Login/Sign Up - Added right margin */}
      <div className="flex items-center space-x-6 mr-24">
        <Link to="/login" className="text-gray-800 hover:text-blue-600 transition duration-300">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;