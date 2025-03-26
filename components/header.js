import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import AuthModal from './AuthModal';

const HeaderWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const scrollToCategories = () => {
    const categoriesElement = document.getElementById('popular-categories');
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModalForSignup = () => {
    setIsModalOpen(true);
    setIsLoginMode(false);
  };

  const openModalForLogin = () => {
    setIsModalOpen(true);
    setIsLoginMode(true);
  };

  return (
    <>
      <header className="bg-mainBackground py-4">
        <div className="flex justify-between items-center px-4">
          <div className="ml-3 flex items-center space-x-2">
            <Image src={logo} alt="GetItDone Logo" width={138} height={40} />
          </div>

          <nav className="flex items-center mr-4 space-x-6">
            <a href="#" className="text-blue-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition" onClick={scrollToCategories}>Features</a>
            <button onClick={openModalForSignup} className="border border-orange-500 text-gray-800 rounded-md px-5 py-2 hover:bg-orange-500 hover:text-white transition font-inter">Sign Up</button>
            <button onClick={openModalForLogin} className="bg-[#FF8C00] text-white px-5 py-2 rounded-lg font-inter hover:bg-[#FF7F00] transition duration-300">Login</button>
          </nav>
        </div>

        <div className="border-t border-[#007BFF] my-4"></div>
      </header>

      {isModalOpen && (
        <AuthModal 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen}
          isLoginMode={isLoginMode}
          setIsLoginMode={setIsLoginMode}
        />
      )}
    </>
  );
};

export default HeaderWithModal;