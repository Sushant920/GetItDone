import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import logo from "../public/logo.svg";
import AuthModal from "./AuthModal";

const HeaderWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  const scrollToCategories = () => {
    const categoriesElement = document.getElementById("popular-categories");
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const openModalForSignup = () => {
    setIsModalOpen(true);
    setIsLoginMode(false);
    setIsMenuOpen(false);
  };

  const openModalForLogin = () => {
    setIsModalOpen(true);
    setIsLoginMode(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-mainBackground py-4 px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="ml-3 flex items-center">
            <Image src={logo} alt="GetItDone Logo" width={138} height={40} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-blue-600">
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition"
              onClick={scrollToCategories}
            >
              Features
            </a>
            <button
              onClick={openModalForSignup}
              className="border border-orange-500 text-gray-800 rounded-md px-5 py-2 hover:bg-orange-500 hover:text-white transition font-inter"
            >
              Sign Up
            </button>
            <button
              onClick={openModalForLogin}
              className="bg-[#FF8C00] text-white px-5 py-2 rounded-lg font-inter hover:bg-[#FF7F00] transition duration-300"
            >
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white shadow-md rounded-lg p-4 space-y-4 mt-4">
            <a
              href="#"
              className="text-blue-600 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition text-lg"
              onClick={scrollToCategories}
            >
              Features
            </a>
            <button
              onClick={openModalForSignup}
              className="border border-orange-500 text-gray-800 rounded-md px-5 py-2 hover:bg-orange-500 hover:text-white transition font-inter w-full"
            >
              Sign Up
            </button>
            <button
              onClick={openModalForLogin}
              className="bg-[#FF8C00] text-white px-5 py-2 rounded-lg font-inter hover:bg-[#FF7F00] transition duration-300 w-full"
            >
              Login
            </button>
          </div>
        )}

        <div className="border-t border-[#007BFF] my-4"></div>
      </header>

      {/* Modal Component */}
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
