import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  
  // Determine active route
  const isUserDashboard = router.pathname === '/userDashboard';
  const isFreelancerDashboard = router.pathname === '/freelancerDashboard';

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener('click', closeMenu);
    
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-gray-900 flex-shrink-0">
            <span className="text-black">GetIt<span className="text-orange-500 border-b-2 border-orange-500">Done</span></span>
          </Link>
          
          {/* Search - Hidden on mobile, visible on tablets and up */}
          <div className="hidden md:block relative w-64 mx-4 flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search freelancers or role..." 
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
            <div className="flex">
            <Link href="/userDashboard">
                <button className={`${isUserDashboard ? 'bg-blue-500 text-white' : 'border border-gray-300 text-gray-700'} px-4 py-2 rounded-l-md text-sm font-medium`}>
                    User
                </button>
                </Link>

                <Link href="/freelancerDashboard">
                    <button className={`${isFreelancerDashboard ? 'bg-blue-500 text-white' : 'border border-gray-300 text-gray-700'} px-4 py-2 rounded-r-md text-sm font-medium`}>
                        Freelancer
                    </button>
                </Link>
            </div>

            <Link href="/browse" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Browse
            </Link>

            <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                How it works
            </Link>

            <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Contact Us
            </Link>

            <button className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              </svg>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Mobile search - only visible on small screens */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }} 
              className="text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-3 border-t border-gray-200" onClick={(e) => e.stopPropagation()}>
          {/* Mobile Search */}
          <div className="mb-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search freelancers or role..." 
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
        {/* Job/Freelancer toggle - Updated for mobile as well */}
          <div className="flex mb-4">
            <Link href="/userDashboard" className="flex-1">
              <button className={`${isUserDashboard ? 'bg-blue-500 text-white' : 'border border-gray-300 text-gray-700'} px-4 py-2 rounded-l-md text-sm font-medium w-full`}>
                User
              </button>
            </Link>

            <Link href="/freelancerDashboard" className="flex-1">
              <button className={`${isFreelancerDashboard ? 'bg-blue-500 text-white' : 'border border-gray-300 text-gray-700'} px-4 py-2 rounded-r-md text-sm font-medium w-full`}>
                Freelancer
              </button>
            </Link>
          </div>
                  
          {/* Navigation Links */}
          <div className="space-y-3">
            <Link href="/browse" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded-md text-sm font-medium">
              Browse
            </Link>
            <Link href="/how-it-works" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded-md text-sm font-medium">
              How it works
            </Link>
            <Link href="/contact-us" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded-md text-sm font-medium">
              Contact Us
            </Link>
          </div>
          
          {/* User Profile & Notifications */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <button className="text-gray-700 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span>Notifications</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">My Account</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardHeader;