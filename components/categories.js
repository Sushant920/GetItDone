import { motion } from "framer-motion";
import { useState } from "react";

const PopularCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(106, 13, 173, 0.2)",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  };

  const iconHover = {
    rotate: [0, -10, 10, 0],
    transition: { 
      duration: 0.6,
      ease: "easeInOut"
    }
  };

  return (
    <section id="popular-categories">
      <div className="w-full px-6 md:px-16 py-16 bg-[#f5f5f5] flex flex-col justify-start items-center gap-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-1xl text-center text-[#212529] text-2xl md:text-4xl font-bold font-Poppins leading-tight"
        >
          Popular Categories
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Development Category */}
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            onHoverStart={() => setHoveredCard("development")}
            onHoverEnd={() => setHoveredCard(null)}
            className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <motion.img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/HuF37qw7qL.png"
                alt="Development Icon"
                className="w-8 h-8"
                animate={hoveredCard === "development" ? iconHover : {}}
              />
              <div>
                <motion.h3 
                  className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]"
                  whileHover={{ color: "#6a0dad" }}
                >
                  Development
                </motion.h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  25+ Freelancers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Design Category */}
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            onHoverStart={() => setHoveredCard("design")}
            onHoverEnd={() => setHoveredCard(null)}
            className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <motion.img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/Mt5zhase0i.png"
                alt="Design Icon"
                className="w-8 h-8"
                animate={hoveredCard === "design" ? iconHover : {}}
              />
              <div>
                <motion.h3 
                  className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]"
                  whileHover={{ color: "#6a0dad" }}
                >
                  Design
                </motion.h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  10+ Freelancers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Media Category */}
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            onHoverStart={() => setHoveredCard("media")}
            onHoverEnd={() => setHoveredCard(null)}
            className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <motion.img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/EqRUUKL9zU.png"
                alt="Media Icon"
                className="w-8 h-8"
                animate={hoveredCard === "media" ? iconHover : {}}
              />
              <div>
                <motion.h3 
                  className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]"
                  whileHover={{ color: "#6a0dad" }}
                >
                  Media
                </motion.h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  7+ Freelancers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Branding Category */}
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            onHoverStart={() => setHoveredCard("branding")}
            onHoverEnd={() => setHoveredCard(null)}
            className="w-full bg-white rounded-md border border-[#6a0dad] flex items-center p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <motion.img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-03-30/p1OvfE1OBF.png"
                alt="Branding Icon"
                className="w-8 h-8"
                animate={hoveredCard === "branding" ? iconHover : {}}
              />
              <div>
                <motion.h3 
                  className="text-lg md:text-xl font-bold font-Poppins leading-tight text-[#212529]"
                  whileHover={{ color: "#6a0dad" }}
                >
                  Branding
                </motion.h3>
                <p className="text-sm md:text-base font-normal font-Inter text-[#212529]">
                  10+ Freelancers
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCategories;