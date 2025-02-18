import Link from 'next/link';

const TopRatedFreelancers = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-28 px-16 flex flex-col items-center gap-20">
      {/* Section Title and Description */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-5xl font-bold text-[#212529] font-['Poppins'] leading-[57.60px] text-center">
          Top Rated Freelancers
        </h2>
        <p className="text-lg font-normal text-[#212529] font-['Inter'] leading-[27px] text-center">
          Discover talented freelancers who can bring your projects to life. Browse through their
          profiles and find the perfect match for your needs.
        </p>
      </div>

      {/* Freelancers Grid */}
      <div className="w-full max-w-[1282px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Freelancer 1 */}
        <div className="w-full h-[180px] bg-white rounded-lg relative">
          <div className="absolute top-[22px] left-0 w-full h-[135.92px]">
            <div className="flex items-center gap-4 p-4">
              <img
                className="w-[68.24px] h-[68.24px] rounded-full"
                src="/agent.svg"
                alt="Agent001"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#212529] font-['Poppins'] leading-[36.85px]">
                  Agent001
                </h3>
                <p className="text-xs font-normal text-[#212529] font-['Inter'] leading-[18.43px]">
                  Full Stack Developer
                </p>
                <p className="text-xs font-medium text-[#212529] font-['Inter'] leading-[18.43px]">
                  ⭐️ 4.9 (128 reviews)
                </p>
                <p className="text-xs font-normal text-[#212529] font-['Inter'] leading-[18.43px]">
                  Starting from{' '}
                  <span className="font-bold font-['Poppins']">₹500 (2 days)</span>
                </p>
              </div>
            </div>
            <div className="absolute right-4 bottom-4">
              <Link
                href="/profile/agent001"
                className="px-3 py-1 rounded border border-[#007bff] text-[#212529] text-[10.92px] font-normal font-['Inter'] leading-none hover:bg-[#007bff] hover:text-white transition duration-300"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Freelancer 2 */}
        <div className="w-full h-[180px] bg-white rounded-lg relative">
          <div className="absolute top-[22px] left-0 w-full h-[135.92px]">
            <div className="flex items-center gap-4 p-4">
              <img
                className="w-[68.24px] h-[68.24px] rounded-full"
                src="/agent.svg"
                alt="Agent041"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#212529] font-['Poppins'] leading-[36.85px]">
                  Agent041
                </h3>
                <p className="text-xs font-normal text-[#212529] font-['Inter'] leading-[18.43px]">
                  Full Stack Developer
                </p>
                <p className="text-xs font-medium text-[#212529] font-['Inter'] leading-[18.43px]">
                  ⭐️ 4.3 (128 reviews)
                </p>
                <p className="text-xs font-normal text-[#212529] font-['Inter'] leading-[18.43px]">
                  Starting from{' '}
                  <span className="font-bold font-['Poppins']">₹500 (2 days)</span>
                </p>
              </div>
            </div>
            <div className="absolute right-4 bottom-4">
              <Link
                href="/profile/agent041"
                className="px-3 py-1 rounded border border-[#007bff] text-[#212529] text-[10.92px] font-normal font-['Inter'] leading-none hover:bg-[#007bff] hover:text-white transition duration-300"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Freelancer 3 */}
        <div className="w-full h-[180px] bg-white rounded-lg relative">
          <div className="absolute top-[22px] left-0 w-full h-[135.92px]">
            <div className="flex items-center gap-4 p-4">
              <img
                className="w-[68.24px] h-[68.24px] rounded-full"
                src="/agent.svg"
                alt="Agent097"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#212529] font-['Poppins'] leading-[36.85px]">
                  Agent097
                </h3>
                <p className="text-xs font-normal text-[#212529] font-['Inter'] leading-[18.43px]">
                  Graphic Designer
                </p>
                <p className="text-xs font-medium text-[#212529] font-['Inter'] leading-[18.43px]">
                  ⭐️ 4.4 (37 reviews)
                </p>
                <p className="text-xs font-normal text-[#212529] font-['Inter'] leading-[18.43px]">
                  Starting from{' '}
                  <span className="font-bold font-['Poppins']">₹500 (2 days)</span>
                </p>
              </div>
            </div>
            <div className="absolute right-4 bottom-4">
              <Link
                href="/profile/agent097"
                className="px-3 py-1 rounded border border-[#007bff] text-[#212529] text-[10.92px] font-normal font-['Inter'] leading-none hover:bg-[#007bff] hover:text-white transition duration-300"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Request a Freelancer Button */}
      <div className="flex justify-center items-center gap-6">
        <Link
          href="/request-freelancer"
          className="bg-[#ff8c00] rounded-[5px] px-6 py-3 text-neutral-100 text-base font-normal font-['Inter'] leading-normal hover:bg-[#e67e00] transition duration-300"
        >
          Request a Freelancer
        </Link>
      </div>
    </div>
  );
};

export default TopRatedFreelancers;