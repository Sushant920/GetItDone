import Image from 'next/image';
import logo from '../public/logo.svg';
import instagram from '../public/instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-mainBackground py-4 w-full">
      <div className="mx-12 px-4 flex justify-between items-start">
        {/* Logo and Description - unchanged */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="GetItDone Logo" width={138} height={40} />
          </div>
          <p className="text-gray-600 mt-2 max-w-xs">
            Connect with the best freelance talent <br/> from around the world.
          </p>
        </div>

        {/* Improved Instagram CTA */}
        <div className="text-gray-800">
          <h2 className="font-bold mb-3">Connect With Us</h2>
          <a 
            href="https://www.instagram.com/getitdone.site/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 hover:text-[#007BFF] transition-colors duration-200"
          >
            <div className="relative w-5 h-5">
              <Image 
                src={instagram} 
                alt="Instagram" 
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="border-t border-[#007BFF] max-w-[calc(100%-8rem)] my-4 mx-auto"></div>



      {/* Copyright - unchanged */}
      <div className="text-center text-gray-600">
        © 2025 GetItDone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;