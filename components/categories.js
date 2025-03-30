const PopularCategories = () => {
  return (
    <section id="popular-categories">
      <div className="w-full px-6 md:px-16 py-16 bg-[#f5f5f5] flex flex-col justify-start items-center gap-10">
        {/* Section Title */}
        <div className="w-full max-w-1xl text-center text-[#212529] text-2xl md:text-4xl font-bold font-Poppins leading-tight">
          Popular Categories
        </div>

        {/* Categories Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Development Category */}
          <div className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/HuF37qw7qL.png"
                alt="Development Icon"
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]">
                  Development
                </h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  25+ Freelancers
                </p>
              </div>
            </div>
          </div>

          {/* Design Category */}
          <div className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/Mt5zhase0i.png"
                alt="Design Icon"
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]">
                  Design
                </h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  10+ Freelancers
                </p>
              </div>
            </div>
          </div>

          {/* Media Category */}
          <div className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/EqRUUKL9zU.png"
                alt="Media Icon"
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]">
                  Media
                </h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  7+ Freelancers
                </p>
              </div>
            </div>
          </div>

          {/* Branding Category */}
          <div className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/p1OvfE1OBF.png"
                alt="Branding Icon"
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]">
                  Branding
                </h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  10+ Freelancers
                </p>
              </div>
            </div>
          </div>

          {/* Add more categories as needed */}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;