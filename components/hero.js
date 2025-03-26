import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-15 py-15">
      <div className="container mx-auto flex items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-left max-w-2xl">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 font-Poppins">
            Find the Perfect
          </h1>
          <h2 className="text-6xl font-bold text-gray-800 mb-6 font-Poppins">
            <span className="bg-gradient-to-r from-blue-500 to-headerPurple bg-clip-text text-transparent">
              Freelancer
            </span>{' '}
            for Your
          </h2>
          <h3 className="text-6xl font-bold text-gray-800 mb-10 font-Poppins">
            Work
          </h3>
          <p className="text-xl text-gray-600 mb-10 font-Inter">
            Connect with top talent from around the world to bring your ideas to
            life. Quality work, delivered on time.
          </p>
          <Link
            href="/freelancers"
            className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FF7F00] transition duration-300 shadow-lg"
          >
            Browse Freelancers
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-end">
          <img src="/Hero.svg" alt="Freelancers" className="w-full max-w-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;