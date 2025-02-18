import Image from 'next/image';
import logo from '../public/logo.svg'; // Adjust the path according to your file structure
import instagram from '../public/instagram.svg'; // Adjust the path according to your file structure

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="mx-12 px-4 flex justify-between items-start">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="GetItDone Logo" width={138} height={40} />
          </div>
          <p className="text-gray-600 mt-2 max-w-xs">
            Connect with the best freelance talent from around the world.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-gray-800">
          <h2 className="font-bold mb-2">Connect With Us</h2>
          <ul className="space-y-2">
            <li className="flex ml-2 space-x-1">
                <Image src={instagram} alt="Instagram" width={15} />
              <div className="text-xl" />
              <span>Instagram</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-blue-300 mx-16 my-4"></div>

      {/* Copyright */}
      <div className="text-center text-gray-600">
        © 2025 GetItDone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
