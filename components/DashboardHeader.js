import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBell, FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const router = useRouter();
  
  // Determine active route
  const isUserDashboard = router.pathname === '/userDashboard';
  const isFreelancerDashboard = router.pathname === '/freelancerDashboard';

  // Check screen size and set mobile state
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menus when clicking outside or route changes
  useEffect(() => {
    const closeMenus = () => {
      setIsMenuOpen(false);
      setShowProfileDropdown(false);
    };
    
    document.addEventListener('click', closeMenus);
    router.events.on('routeChangeComplete', closeMenus);
    
    return () => {
      document.removeEventListener('click', closeMenus);
      router.events.off('routeChangeComplete', closeMenus);
    };
  }, [router]);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Here you would typically clear auth state
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="h-10 w-40 relative">
              <Image 
                src="/logo.svg" 
                alt="GetItDone Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </Link>
          
          {/* Search - Hidden on mobile, visible on tablets and up */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:block relative w-64 mx-4 flex-grow max-w-md"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search freelancers or role..." 
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </form>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <Link href="/userDashboard">
                <button 
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isUserDashboard 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  User
                </button>
              </Link>
              <Link href="/freelancerDashboard">
                <button 
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isFreelancerDashboard 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Freelancer
                </button>
              </Link>
            </div>

            <div className="flex space-x-6">
              <Link href="/browse" className="text-gray-700 hover:text-gray-900 text-sm font-medium hover:underline flex items-center">
                Browse
              </Link>

              <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 text-sm font-medium hover:underline flex items-center">
                How it works
              </Link>

              <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 text-sm font-medium hover:underline flex items-center">
                Contact Us
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 p-1 relative">
                <FaBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="relative">
                <div 
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                >
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6 text-gray-600"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                </div>
                {showProfileDropdown && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FaSignOutAlt className="text-orange-500" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }} 
              className="text-gray-600 p-1"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden px-4 py-3 border-t border-gray-200 bg-white" 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mb-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search freelancers or role..." 
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </form>
          
          {/* User/Freelancer toggle */}
          <div className="flex mb-4 border border-gray-300 rounded-md overflow-hidden">
            <Link href="/userDashboard" className="flex-1">
              <button 
                className={`w-full px-4 py-2 text-sm font-medium transition-colors ${
                  isUserDashboard 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                User
              </button>
            </Link>
            <Link href="/freelancerDashboard" className="flex-1">
              <button 
                className={`w-full px-4 py-2 text-sm font-medium transition-colors ${
                  isFreelancerDashboard 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Freelancer
              </button>
            </Link>
          </div>
                  
          {/* Navigation Links */}
          <div className="space-y-2 mb-4">
            <Link 
              href="/browse" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Browse
            </Link>
            <Link 
              href="/how-it-works" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              How it works
            </Link>
            <Link 
              href="/contact-us" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Contact Us
            </Link>
          </div>
          
          {/* User Profile & Notifications */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <button className="text-gray-700 flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100">
              <FaBell className="h-5 w-5" />
              <span className="text-sm font-medium">Notifications</span>
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-500 bg-gray-100 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 text-gray-600"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaSignOutAlt className="text-orange-500" />
                Logout
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardHeader;