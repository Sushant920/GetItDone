import { useState } from 'react';

const faqData = [
  {
    question: 'How does GetItDone work?',
    answer: 'GetItDone connects clients with freelancers. Clients can search, hire, and track projects, while freelancers receive tasks, submit work, and get paid securely via escrow.'
  },
  {
    question: 'How are payments handled?',
    answer: 'Clients deposit funds into an escrow system. Payments are released to freelancers only after client approval.'
  },
  {
    question: "What if there's an issue with the project?",
    answer: 'Clients can request revisions before approving work. If disputes arise, the admin panel handles resolution to ensure fairness.'
  },
  {
    question: 'How does the rating & review system work?',
    answer: 'Clients leave anonymous star ratings and written reviews.'
  },
  {
    question: 'Is my data and payment secure?',
    answer: 'Yes! GetItDone uses secure payment gateways and an escrow system, ensuring safety for both clients and freelancers.'
  }
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

  return (
    <div className="mx-3 p-6 flex justify-between items-start space-x-8 font-poppins bg-mainBackground">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold mb-2 text-left">FAQs</h2>
        <p className="text-gray-600 max-w-xs mb-4 text-left text-base">Get answers to your most pressing questions about GetItDone.</p>
        <button
          onClick={handleContactClick} // Add onClick handler
          className="border border-black px-4 py-2 hover:bg-gray-200 transition"
        >
          Contact
        </button>
      </div>
      <div className="w-2/3">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <h3
              className="text-lg font-bold cursor-pointer flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="text-base">
                {openIndexes.includes(index) ? '▴' : '▾'}
              </span>
            </h3>
            {openIndexes.includes(index) && (
              <p className="text-gray-600 mt-2 transition-all">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const handleContactClick = () => {
  window.location.href = '/contact'; // Redirect to the contact page
};

export default FAQ;
