import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          agreeTerms: false
        });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex items-center justify-center p-4 md:p-16"
    >
      <div className="w-full max-w-4xl bg-white flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Section: Contact Info */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-1 flex flex-col gap-6 md:gap-8"
        >
          {/* Title and Description */}
          <div className="flex flex-col gap-4">
            <div className="text-[#212529] text-base font-semibold leading-normal tracking-wider">
              CONTACT US
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-[#212529] text-3xl md:text-5xl font-bold leading-[40px] md:leading-[57.60px]">
                Need Help? <br className="hidden md:block" /> We're Here for You!
              </h1>
              <p className="text-[#212529] text-base md:text-lg font-normal leading-[24px] md:leading-[27px]">
                Whether you're a client looking for the perfect freelancer or a freelancer managing tasks, our support team is ready to assist.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-none border-l-4 border-[#007BFF]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
                  fill="#212529"
                />
              </svg>
              <p className="text-[#212529] text-base font-normal leading-normal">
                <a 
                  href="mailto:getitdone.sitehq@gmail.com" 
                  className="hover:underline hover:text-[#007BFF] transition-colors duration-300"
                >
                  getitdone.sitehq@gmail.com
                </a>
              </p>
            </motion.div>

            {/* Instagram */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-none border-l-4 border-[#007BFF]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                  fill="#212529"
                />
              </svg>
              <Link
                href="https://www.instagram.com/getitdone.site/"
                className="text-[#212529] text-base font-normal leading-normal hover:underline hover:text-[#007BFF] transition-colors duration-300"
              >
                Instagram
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.form 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[#212529] text-base font-medium leading-normal">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-[#007BFF] rounded-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[#212529] text-base font-medium leading-normal">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 border border-[#007BFF] rounded-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[#212529] text-base font-medium leading-normal">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-[#007BFF] rounded-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[#212529] text-base font-medium leading-normal">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-[#007BFF] rounded-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Select Topic */}
          <div className="flex flex-col gap-2">
            <label className="text-[#212529] text-base font-medium leading-normal">
              Select a Topic
            </label>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#007BFF] rounded-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300 appearance-none"
            >
              <option value="" disabled selected>
                Choose one...
              </option>
              <option value="Order & Payment Issues">Order & Payment Issues – Problems with payments, refunds, or disputes.</option>
              <option value="Service Issues">Service Issues – Delayed delivery, low-quality work, or freelancer concerns.</option>
              <option value="Client Issues">Client Issues – Unresponsive clients, unclear requirements, or disputes.</option>
              <option value="Technical Issues">Technical Issues – Bugs, errors, or trouble using the platform.</option>
              <option value="Account & Profile Support">Account & Profile Support – Login issues, verification, or profile setup.</option>
              <option value="Platform Fees & Payouts">Platform Fees & Payouts – Questions about pricing, commissions, or payments.</option>
              <option value="General Inquiry">General Inquiry – Any other concerns not listed above.</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#212529] text-base font-medium leading-normal">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full px-4 py-3 border border-[#007BFF] rounded-none focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all duration-300"
            ></textarea>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="terms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
              className="w-5 h-5 text-[#007BFF] border-[#007BFF] rounded focus:ring-[#007BFF] transition-all duration-300"
            />
            <label htmlFor="terms" className="text-[#212529] text-sm font-normal leading-[21px]">
              I agree to Terms and Conditions
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 bg-[#007BFF] text-white text-base font-medium leading-normal rounded-none hover:bg-[#0056b3] transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>

          {submitMessage && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center p-3 rounded-none ${submitMessage.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              {submitMessage}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactUs;