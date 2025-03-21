import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import logo_white from '../public/logo_white.svg';
import ContactPageElement from '../public/ContactPageElement.svg';
import GetStarted from '../public/GetStarted.svg';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeaderWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false); // Track if we're in login or signup mode
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const modalRef = useRef(null);

  const scrollToCategories = () => {
    document.getElementById('popular-categories').scrollIntoView({ behavior: 'smooth' });
  };

  const openModalForSignup = () => {
    setIsModalOpen(true);
    setIsLoginMode(false);
    resetModalStates();
  };

  const openModalForLogin = () => {
    setIsModalOpen(true);
    setIsLoginMode(true);
    resetModalStates();
  };

  const resetModalStates = () => {
    setShowEmailLogin(false);
    setShowEmailVerification(false);
    setShowPasswordReset(false);
    setShowGetStarted(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetModalStates();
  };

  const handleEmailLoginClick = () => {
    setShowEmailLogin(true);
  };

  const handleEmailVerificationClick = () => {
    if (isLoginMode) {
      // If in login mode, proceed directly (or handle login logic)
      console.log("Login submitted");
      // Add your login submission logic here
    } else {
      // If in signup mode, show email verification
      setShowEmailVerification(true);
    }
  };

  const handleForgotPassword = () => {
    setShowPasswordReset(true);
  };

  const handleGetStartedClick = () => {
    setShowGetStarted(true);
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    resetModalStates();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white rounded-2xl shadow-lg w-[768px]" ref={modalRef}>
            <div className="flex">
              <div className="w-1/2 bg-[#007BFF] text-white p-8 rounded-l-2xl flex flex-col items-center">
                <Image src={logo_white} alt="GetItDone Logo" width={360} height={180} className="mb-6" />
                <ul className="space-y-2 font list-disc list-inside text-left text-sm">
                  <li>Freelance with privacy.</li>
                  <li>Freelancers are 'Agents,' clients are 'Users'.</li>
                  <li>Focus on skills, not identities.</li>
                </ul>
                <div className="mt-6">
                  <Image src={ContactPageElement} alt="Contact Page Element" width={360} height={225} className='pt-10 pb-5' />
                </div>
              </div>

              <div className="w-1/2 p-8 flex flex-col justify-between">
                {!showEmailLogin && !showEmailVerification && !showPasswordReset && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-purple-700">
                      {isLoginMode ? "Sign in to your account" : "Create a new account"}
                    </h2>
                    <p className="mb-4">
                      {isLoginMode ? (
                        <>Don't have an account? <span className="underline text-[#007BFF] cursor-pointer" onClick={switchMode}>Join here</span></>
                      ) : (
                        <>Already have an account? <span className="underline text-[#007BFF] cursor-pointer" onClick={switchMode}>Sign in</span></>
                      )}
                    </p>
                    <div className="space-y-4">
                      <Button className="w-full flex items-center justify-center gap-2 border-[#007BFF]" variant="outline">
                        <FcGoogle size={20} /> Continue with Google
                      </Button>
                      <Button className="w-full flex items-center justify-center gap-2 border-[#007BFF]" variant="outline" onClick={handleEmailLoginClick}>
                        <MdEmail size={20} /> Continue with email{isLoginMode ? " or User ID" : ""}
                      </Button>
                    </div>
                  </div>
                )}

                {showEmailLogin && !showEmailVerification && !showPasswordReset && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-purple-700">
                      {isLoginMode ? "Sign in to your account" : "Continue with your email"}
                    </h2>
                    <h3 className='font-medium pb-2'>{isLoginMode ? "Email or User ID" : "Email"}</h3>
                    <input type="email" placeholder={isLoginMode ? "email@example.com or UserID" : "abc@email.com"} className="w-full mb-4 p-2 border border-[#007BFF] rounded" />
                    <h3 className='font-medium pb-2'>Password</h3>
                    <input type="password" placeholder="Password" className="w-full mb-4 p-2 border border-[#007BFF] rounded" />
                    
                    {isLoginMode && (
                      <div className="text-right mb-4">
                        <span className="text-[#007BFF] cursor-pointer text-sm" onClick={handleForgotPassword}>Forgot password?</span>
                      </div>
                    )}
                    
                    <Button className="w-full bg-[#007BFF] text-white" onClick={handleEmailVerificationClick}>
                      {isLoginMode ? "Sign In" : "Continue"}
                    </Button>
                  </div>
                )}

                {showEmailVerification && !showPasswordReset && (
                  <div>
                    <button onClick={() => { setShowEmailVerification(false); setShowEmailLogin(true); }} className="text-sm text-gray-500 mb-2 hover:text-gray-700">← Back</button>
                    <h2 className="text-2xl font-bold mb-4 text-purple-700">Confirm your email</h2>
                    <p className="text-sm mb-4">Enter the verification code we emailed to: <strong>example@email.com</strong></p>
                    <div className="flex gap-2 mb-4">
                      {Array(6).fill().map((_, i) => (
                        <input key={i} type="text" maxLength="1" className="w-12 h-12 text-center border border-[#007BFF] rounded" />
                      ))}
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-blue-500 cursor-pointer">Resend code</span>
                    </div>
                    <Button className="w-full bg-[#007BFF] text-white">Submit</Button>
                  </div>
                )}

                {showPasswordReset && (
                  <div>
                    <button onClick={() => { setShowPasswordReset(false); setShowEmailLogin(true); }} className="text-sm text-gray-500 mb-2 hover:text-gray-700">← Back</button>
                    <h2 className="text-2xl font-bold mb-4 text-purple-700">Reset Password</h2>
                    <p className="text-sm mb-4">Enter your email and we'll send you instructions to reset your password</p>
                    <h3 className='font-medium pb-2'>Email</h3>
                    <input type="email" placeholder="email@example.com" className="w-full mb-4 p-2 border border-[#007BFF] rounded" />
                    <Button className="w-full bg-[#007BFF] text-white">Send Reset Link</Button>
                  </div>
                )}

                <div className="text-xs text-gray-500 mt-4">
                  By joining, you agree to the GetItDone 
                  <Link href="/termsofservice">
                      <span className="underline cursor-pointer"> Terms of Service </span>
                  </Link> 
                  and consent to receiving occasional emails from us. Please review our 
                  <Link href="/privacypolicy">
                      <span className="underline cursor-pointer"> Privacy Policy </span>
                  </Link>
                  to understand how we collect and use your personal data.
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default HeaderWithModal;