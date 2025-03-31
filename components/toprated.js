import Link from 'next/link';

const TopRatedFreelancers = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-20 px-6 sm:px-10 lg:px-16 flex flex-col items-center gap-16">
      {/* Section Title and Description */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#212529] font-Poppins leading-tight">
          Top Rated Freelancers
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#212529] font-Inter leading-[1.6]">
          Discover talented freelancers who can bring your projects to life. Browse through their profiles and find the perfect match for your needs.
        </p>
      </div>

      {/* Freelancers Grid */}
      <div className="w-full max-w-[1282px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Agent001", "Agent041", "Agent097"].map((agent, index) => (
          <div key={index} className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full" src="/agent.svg" alt={agent} />
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-[#212529] font-Poppins">
                  {agent}
                </h3>
                <p className="text-sm text-[#212529] font-Inter">Full Stack Developer</p>
                <p className="text-sm font-medium text-[#212529] font-Inter">⭐️ {index === 0 ? "4.9" : index === 1 ? "4.3" : "4.4"} (128 reviews)</p>
                <p className="text-sm text-[#212529] font-Inter">
                  Starting from <span className="font-bold font-Poppins">₹500 (2 days)</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                href="/profile"
                className="px-4 py-2 rounded border border-[#007bff] text-[#212529] text-sm font-normal font-Inter leading-none hover:bg-[#007bff] hover:text-white transition duration-300"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Request a Freelancer Button */}
      <div className="flex justify-center items-center">
        <Link
          href="/request-freelancer"
          className="bg-[#ff8c00] rounded-md px-6 py-3 text-white text-base font-medium font-Inter hover:bg-[#e67e00] transition duration-300"
        >
          Request a Freelancer
        </Link>
      </div>
    </div>
  );
};

export default TopRatedFreelancers;
