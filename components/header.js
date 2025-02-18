import Image from 'next/image';
import logo from '../public/logo.svg'; // Adjust the path according to your file structure

const Header = () => {
  return (
    <header className="bg-mainBackground py-4">
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <div className="ml-3 flex items-center space-x-2">
          <Image src={logo} alt="GetItDone Logo" width={138} height={40} />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center mr-4 space-x-6">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition">Features</a>
          <a href="#" className="border border-orange-500 text-orange-500 rounded-md px-5 py-2 hover:bg-orange-50 transition font-inter">
            Sign Up
          </a>
          <a href="#" className="bg-orange-500 text-white rounded-md px-6 py-2 hover:bg-orange-600 transition font-inter">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
