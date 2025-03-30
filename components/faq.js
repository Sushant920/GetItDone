import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How does GetItDone work?",
    answer:
      "GetItDone connects clients with freelancers. Clients can search, hire, and track projects, while freelancers receive tasks, submit work, and get paid securely via escrow.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Clients deposit funds into an escrow system. Payments are released to freelancers only after client approval.",
  },
  {
    question: "What if there's an issue with the project?",
    answer:
      "Clients can request revisions before approving work. If disputes arise, the admin panel handles resolution to ensure fairness.",
  },
  {
    question: "How does the rating & review system work?",
    answer: "Clients leave anonymous star ratings and written reviews.",
  },
  {
    question: "Is my data and payment secure?",
    answer:
      "Yes! GetItDone uses secure payment gateways and an escrow system, ensuring safety for both clients and freelancers.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="w-full px-6 md:px-12 py-12 font-poppins bg-mainBackground">
      {/* Container */}
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left Section - FAQ Header */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            FAQs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 mb-6">
            Get answers to your most pressing questions about GetItDone.
          </p>
          <motion.button
            onClick={handleContactClick}
            className="border border-black px-4 py-2 hover:bg-gray-300 transition"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Right Section - FAQ Items */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.h3
                className="text-lg sm:text-xl font-bold cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                whileHover={{ color: "#6a0dad" }}
              >
                {item.question}
                <motion.span
                  animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base"
                >
                  ▾
                </motion.span>
              </motion.h3>

              <AnimatePresence>
                {openIndexes.includes(index) && (
                  <motion.p
                    className="text-gray-600 mt-2 text-sm sm:text-base"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
