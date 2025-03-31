import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 sm:px-8 py-16 relative overflow-hidden">
      {/* Subtle animated background element (non-intrusive) */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
        {/* Text Content - Preserved exactly as you had it */}
        <motion.div 
          className="text-center lg:text-left max-w-2xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 font-Poppins"
            variants={textVariants}
          >
            Find the Perfect
          </motion.h1>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 font-Poppins"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-500 to-headerPurple bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Freelancer
            </motion.span>{' '}
            for Your
          </motion.h2>
          
          <motion.h3 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 sm:mb-10 font-Poppins"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Work
          </motion.h3>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 font-Inter"
            variants={textVariants}
            transition={{ delay: 0.3 }}
          >
            Connect with top talent from around the world to bring your ideas to
            life. Quality work, delivered on time.
          </motion.p>
          
          <motion.div
            variants={textVariants}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/freelancers"
              className="inline-block bg-[#FF8C00] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#FF7F00] transition duration-300 shadow-lg"
            >
              Browse Freelancers
            </Link>
          </motion.div>
        </motion.div>

        {/* Image - Hidden on mobile as requested */}
        <motion.div 
          className="hidden lg:flex flex-1 justify-center lg:justify-end mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              stiffness: 60,
              delay: 0.5
            }
          }}
          whileHover={{
            rotate: 1,
            transition: { duration: 0.3 }
          }}
        >
          <img 
            src="/Hero.svg" 
            alt="Freelancers" 
            className="w-full max-w-md lg:max-w-xl hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Mobile-only subtle animation (non-intrusive) */}
      <motion.div
        className="lg:hidden absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M12 19l-7-7m7 7l7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;