// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent fixed w-full top-0">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        <Link to="/">LogoName</Link>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Login/Sign Up */}
      <div className="flex space-x-4">
        <Link to="/login" className="text-white">Login</Link>
        <Link
          to="/signup"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
