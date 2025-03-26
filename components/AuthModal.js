import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logo_white from '../public/logo_white.svg';
import ContactPageElement from '../public/ContactPageElement.svg';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  GoogleAuthProvider, 
  signInWithPopup,
  ActionCodeSettings,
  applyActionCode,
  sendEmailVerification as firebaseSendEmailVerification
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWzbMKo8KiYPN6230YtCjzWJvqIPYok54",
  authDomain: "getitdone-9f516.firebaseapp.com",
  projectId: "getitdone-9f516",
  storageBucket: "getitdone-9f516.firebasestorage.app",
  messagingSenderId: "679473786776",
  appId: "1:679473786776:web:f971e67833e4d79c3d85ed",
  measurementId: "G-5JLZS57P2C"
};

const AuthModal = ({ isModalOpen, setIsModalOpen, isLoginMode, setIsLoginMode }) => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [auth, setAuth] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState("");
  const modalRef = useRef(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [db, setDb] = useState(null);
  const [currentUserUid, setCurrentUserUid] = useState("");

  useEffect(() => {
    // Initialize Firebase only in client-side environment and if not already initialized
    if (typeof window !== 'undefined') {
      try {
        // Check if Firebase apps are already initialized
        if (getApps().length === 0) {
          const app = initializeApp(firebaseConfig);
          const authInstance = getAuth(app);
          setAuth(authInstance);
          
          // Add this line to initialize Firestore using the same app instance
          const dbInstance = getFirestore(app);
          setDb(dbInstance);
          
          // Only initialize analytics in production environment
          if (process.env.NODE_ENV === 'production') {
            try {
              const analyticsInstance = getAnalytics(app);
              setAnalytics(analyticsInstance);
            } catch (analyticsError) {
              console.error("Analytics initialization error:", analyticsError);
              // Continue without analytics if there's an error
            }
          }
        } else {
          // If Firebase is already initialized, just get the auth instance
          const authInstance = getAuth();
          setAuth(authInstance);
          // And also get the firestore instance
          const dbInstance = getFirestore();
          setDb(dbInstance);
        }
      } catch (firebaseError) {
        console.error("Firebase initialization error:", firebaseError);
        setError("Failed to initialize authentication. Please try again later.");
      }
    }
  }, []);

  const resetModalStates = () => {
    setShowEmailLogin(false);
    setShowEmailVerification(false);
    setShowPasswordReset(false);
    setError("");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetModalStates();
  };

  const handleEmailLoginClick = () => {
    setShowEmailLogin(true);
    setError("");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleGoogleSignIn = async () => {
    if (!auth) {
      setError("Authentication not initialized. Please try again later.");
      return;
    }

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // This gives you a Google Access Token which can be used to access the Google API
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      // The signed-in user info
      const user = result.user;
      console.log("Google sign-in successful!", user);
      
      // Close modal after successful login
      toggleModal();
    } catch (error) {
      console.error("Google sign-in error:", error);
      
      // Handle specific error codes
      if (error.code === 'auth/popup-closed-by-user') {
        setError("Sign-in cancelled. The popup was closed.");
      } else if (error.code === 'auth/popup-blocked') {
        setError("Popup was blocked by the browser. Please allow popups for this site.");
      } else {
        setError(`Google sign-in failed: ${error.message}`);
      }
    }
  };

  const sendEmailVerification = async (user) => {
    try {
      await firebaseSendEmailVerification(user);
      console.log('Email verification sent!');
    } catch (error) {
      console.error('Error sending email verification:', error);
      setError(error.message);
    }
  };

  const handleEmailVerificationClick = async () => {
    if (!auth || !db) {
      setError("Authentication not initialized. Please try again later.");
      return;
    }

    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    
    if (!emailInput || !passwordInput) {
      setError("Form elements not found. Please try again.");
      return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    setCurrentUserEmail(email); // Store the email for verification

    // Validate email and password
    if (!email) {
      setError("Please enter an email address.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (!isLoginMode && password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    try {
      if (isLoginMode) {
        // Login flow
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setCurrentUserUid(user.uid);
        
        if (!user.emailVerified) {
          await sendEmailVerification(user);
          setShowEmailVerification(true);
          setShowEmailLogin(false);
          setError("");
        } else {
          console.log("Login successful!");
          toggleModal();
        }
      } else {
        // Signup flow
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setCurrentUserUid(user.uid);
        
        // Create user document with emailVerified set to user.emailVerified value
        await setDoc(doc(db, "users", user.uid), {
          email: email,
          emailVerified: user.emailVerified,
          createdAt: new Date()
        });
        
        await sendEmailVerification(user);
        setError("Signup successful! Verification email sent. Please check your inbox.");
        setShowEmailVerification(true);
        setShowEmailLogin(false);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      
      // Handle specific error codes
      switch (error.code) {
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        case 'auth/user-not-found':
          setError('User not found. Please sign up.');
          break;
        case 'auth/invalid-credential':
          setError('Invalid credentials. Please check your email and password.');
          break;
        case 'auth/email-already-in-use':
          setError('Email is already in use. Please login or use a different email.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format. Please check your email.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Please use a stronger password.');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Please check your internet connection.');
          break;
        default:
          setError(`Authentication failed: ${error.message}`);
      }
    }
  };

  const handleVerifyEmail = async () => {
    setIsVerifyingEmail(true);
    try {
      // Use applyActionCode to verify the email using the code from the user
      const actionCodeSettings = {
        url: window.location.origin + "/auth/verify-email", //You will need to create this route.
        handleCodeInApp: true
      };
      
      await applyActionCode(auth, verificationCode, actionCodeSettings);
      console.log("Email verified successfully!");
      
      // Update the user document in Firestore
      if (currentUserUid && db) {
        await updateDoc(doc(db, "users", currentUserUid), {
          emailVerified: true
        });
      }
      
      toggleModal();
    } catch (error) {
      console.error("Email verification error:", error);
      setError(error.message);
    } finally {
      setIsVerifyingEmail(false);
    }
  };

  const handleForgotPassword = () => {
    setShowPasswordReset(true);
    setShowEmailLogin(false);
    setError("");
  };

  const handleSendResetEmail = async () => {
    if (!auth) {
      setError("Authentication not initialized. Please try again later.");
      return;
    }

    if (!resetEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!isValidEmail(resetEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert("Password reset email sent! Please check your inbox.");
      setShowPasswordReset(false);
      setShowEmailLogin(true);
      setResetEmail("");
    } catch (error) {
      console.error("Password reset error:", error);
      
      if (error.code === 'auth/user-not-found') {
        setError("No account exists with this email address.");
      } else {
        setError(`Failed to send reset email: ${error.message}`);
      }
    }
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    resetModalStates();
    setError("");
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
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

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
                  <Button 
                    className="w-full flex items-center justify-center gap-2 border-[#007BFF]" 
                    variant="outline"
                    onClick={handleGoogleSignIn}
                  >
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
                <input 
                  type="email" 
                  id="emailInput" 
                  placeholder={isLoginMode ? "email@example.com or UserID" : "abc@email.com"} 
                  className="w-full mb-4 p-2 border border-[#007BFF] rounded" 
                />
                <h3 className='font-medium pb-2'>Password</h3>
                <input 
                  type="password" 
                  id="passwordInput" 
                  placeholder="Password" 
                  className="w-full mb-4 p-2 border border-[#007BFF] rounded" 
                />

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
                <button onClick={() => { setShowEmailVerification(false); setShowEmailLogin(true); setError(""); }} className="text-sm text-gray-500 mb-2 hover:text-gray-700">← Back</button>
                <h2 className="text-2xl font-bold mb-4 text-purple-700">Verify Your Email</h2>
                <p className="text-sm mb-4">We've sent a verification code to {currentUserEmail}. Please check your inbox and enter the code below.</p>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Verification Code"
                  className="w-full mb-4 p-2 border border-[#007BFF] rounded"
                />
                <Button 
                  className="w-full bg-[#007BFF] text-white" 
                  onClick={handleVerifyEmail}
                  disabled={isVerifyingEmail}
                >
                  {isVerifyingEmail ? "Verifying..." : "Verify"}
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Didn't receive a code? 
                  <span className="text-[#007BFF] cursor-pointer" onClick={async () => {
                    try {
                      if (!currentUserUid || !db) {
                        throw new Error("User information not available");
                      }
                      
                      // Generate new OTP
                      const otp = generateOTP();
                      setGeneratedOTP(otp);
                      
                      // Update OTP in Firestore
                      await setDoc(doc(db, "otpVerification", currentUserUid), {
                        email: currentUserEmail,
                        otp: otp,
                        createdAt: new Date(),
                        attemptCount: 0
                      });
                      
                      // Send new OTP email
                      await sendOTPEmail(currentUserEmail, otp);
                      
                      setError("New verification code sent. Please check your inbox.");
                    } catch (error) {
                      setError(`Failed to resend: ${error.message}`);
                    }
                  }}> Resend code</span>
                </p>
              </div>
            )}

            {showPasswordReset && (
              <div>
                <button onClick={() => { setShowPasswordReset(false); setShowEmailLogin(true); setError(""); }} className="text-sm text-gray-500 mb-2 hover:text-gray-700">← Back</button>
                <h2 className="text-2xl font-bold mb-4 text-purple-700">Reset Password</h2>
                <p className="text-sm mb-4">Enter your email and we'll send you instructions to reset your password</p>
                <h3 className='font-medium pb-2'>Email</h3>
                <input 
                  type="email" 
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="email@example.com" 
                  className="w-full mb-4 p-2 border border-[#007BFF] rounded" 
                />
                <Button className="w-full bg-[#007BFF] text-white" onClick={handleSendResetEmail}>Send Reset Link</Button>
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
  );
};

export default AuthModal;