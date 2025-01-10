import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent fixed w-full top-0">
      {/* Logo */}
      <div className="text-2xl font-bold text-black ml-4"> {/* Added margin-left */}
        <Link to="/" className="text-black">LandX</Link>
      </div>

      {/* Navigation Menu */}
      <nav className="ml-0"> {/* Removed margin-left to align the menu closer to the logo */}
        <ul className="flex space-x-4 text-black"> {/* Space between links remains the same */}
          <li><Link to="/" className="text-black">Home</Link></li>
          <li><Link to="/pricing" className="text-black">Pricing</Link></li>
          <li><Link to="/about-us" className="text-black">About Us</Link></li>
          <li><Link to="/contact" className="text-black">Contact</Link></li>
        </ul>
      </nav>

      {/* Login/Sign Up */}
      <div className="flex space-x-4">
        <Link to="/login" className="text-black">Login</Link>
        <Link
          to="/signup"
          className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
