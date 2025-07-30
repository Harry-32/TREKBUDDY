import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Tamil Nadu Tourism
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/preferences" className="text-gray-700 hover:text-blue-600">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;