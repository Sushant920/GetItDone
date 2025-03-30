import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

const MAX_SKILLS = 5;

const categories = {
  'Android Developer': {
    name: 'Android Developer',
    services: {
      basic: { type: 'Basic', price: 300, days: 3, description: 'Ideal for those looking to create a simple app UI without backend complexities. Perfect for showcasing your design skills.' },
      standard: { type: 'Standard', price: 500, days: 5, description: 'A great choice for building a basic CRUD app, allowing users to interact with data seamlessly.' },
      premium: { type: 'Premium', price: 700, days: 7, description: 'For those ready to deliver a full-featured app with API integrations, ensuring a robust user experience.' }
    }
  },
  'iOS Developer': {
    name: 'iOS Developer',
    services: {
      basic: { type: 'Basic', price: 300, days: 3, description: 'A great starting point for creating a basic UI tailored for iOS, showcasing your design flair.' },
      standard: { type: 'Standard', price: 500, days: 5, description: 'Build a functional iOS app that meets user needs and expectations, enhancing your portfolio.' },
      premium: { type: 'Premium', price: 700, days: 7, description: 'Deliver an advanced iOS app with robust API integration, perfect for impressing clients with your technical skills.' }
    }
  },
  'Frontend Developer': {
    name: 'Frontend Developer',
    services: {
      basic: { type: 'Basic', price: 300, days: 3, description: 'Launch a sleek one-page website that effectively communicates your brand message.' },
      standard: { type: 'Standard', price: 500, days: 5, description: 'Create a multi-page site that showcases your work and engages visitors.' },
      premium: { type: 'Premium', price: 700, days: 7, description: 'Bring your vision to life with a custom UI featuring engaging animations, perfect for captivating users.' }
    }
  },
  'Backend Developer': {
    name: 'Backend Developer',
    services: {
      basic: { type: 'Basic', price: 300, days: 3, description: 'Set up a simple API to handle basic data requests, laying the groundwork for your projects.' },
      standard: { type: 'Standard', price: 500, days: 5, description: 'Create an API with database integration, enabling dynamic data handling for your applications.' },
      premium: { type: 'Premium', price: 700, days: 7, description: 'Build a scalable backend that can grow with your application needs, ensuring long-term success.' }
    }
  },
  'Full Stack Developer': {
    name: 'Full Stack Developer',
    services: {
      basic: { type: 'Basic', price: 400, days: 4, description: 'Get a basic web app up and running, showcasing your ability to handle both front and back end.' },
      standard: { type: 'Standard', price: 700, days: 7, description: 'Develop a full application with database support, demonstrating your comprehensive skill set.' },
      premium: { type: 'Premium', price: 1000, days: 10, description: 'Launch a fully functional app with deployment support, ready to impress clients and users alike.' }
    }
  },
  'Blockchain Developer': {
    name: 'Blockchain Developer',
    services: {
      basic: { type: 'Basic', price: 500, days: 5, description: 'Start your blockchain journey with a basic smart contract, perfect for showcasing your innovative skills.' },
      standard: { type: 'Standard', price: 800, days: 8, description: 'Create a token that can be used in various applications, demonstrating your understanding of blockchain technology.' },
      premium: { type: 'Premium', price: 1000, days: 10, description: 'Develop a full decentralized application (DApp) complete with a user-friendly interface, ready for real-world use.' }
    }
  },
  'ML Developer': {
    name: 'ML Developer',
    services: {
      basic: { type: 'Basic', price: 400, days: 4, description: 'Clean and prepare your data for analysis, setting the stage for insightful machine learning models.' },
      standard: { type: 'Standard', price: 700, days: 7, description: 'Train a model that provides valuable insights and predictions based on your data, enhancing decision-making.' },
      premium: { type: 'Premium', price: 1000, days: 10, description: 'Deploy your model to make it accessible for real-world applications, showcasing your expertise in machine learning.' }
    }
  },
  'UI/UX Designer': {
    name: 'UI/UX Designer',
    services: {
      basic: { type: 'Basic', price: 150, days: 3, description: 'Start with a wireframe that outlines your app’s structure, helping you visualize the user journey.' },
      standard: { type: 'Standard', price: 500, days: 5, description: 'Design a full UI that enhances user experience across your app or website, making it visually appealing.' },
      premium: { type: 'Premium', price: 700, days: 7, description: 'Create an interactive prototype that brings your design to life for user testing, ensuring usability.' }
    }
  },
  'Poster Designer': {
    name: 'Poster Designer',
    services: {
      basic: { type: 'Basic', price: 100, days: 1, description: 'Get a static poster designed to effectively convey your message and attract attention.' },
      standard: { type: 'Standard', price: 200, days: 2, description: 'Enhance your poster with illustrations for a more engaging look, perfect for events or promotions.' },
      premium: { type: 'Premium', price: 500, days: 5, description: 'Receive custom artwork that captures the essence of your brand, making a lasting impression.' }
    }
  },
  'PPT Designer': {
    name: 'PPT Designer',
    services: {
      basic: { type: 'Basic', price: 100, days: 1, description: 'Create a simple PPT with up to 15 slides to get your ideas across effectively.' },
      standard: { type: 'Standard', price: 200, days: 2, description: 'Design a comprehensive PPT with 15+ slides for detailed presentations that engage your audience.' },
      premium: { type: 'Premium', price: 300, days: 3, description: 'Craft a fully animated PPT that captivates your audience and enhances your presentation.' }
    }
  },
  'Logo Designer': {
    name: 'Logo Designer',
    services: {
      basic: { type: 'Basic', price: 200, days: 2, description: 'Design a basic logo that represents your brand identity and sets you apart.' },
      standard: { type: 'Standard', price: 300, days: 3, description: 'Create a logo with variants to suit different applications, ensuring versatility.' },
      premium: { type: 'Premium', price: 500, days: 5, description: 'Develop a full brand kit that includes your logo and brand guidelines, establishing a cohesive brand image.' }
    }
  },
  'Brochure Designer': {
    name: 'Brochure Designer',
    services: {
      basic: { type: 'Basic', price: 200, days: 2, description: 'Design a brochure that effectively communicates your message and engages your audience.' },
    }
  },
  'Video Editor': {
    name: 'Video Editor',
    services: {
      basic: { type: 'Basic', price: 200, days: 2, description: 'Edit a short clip (reel) to highlight your best moments and attract viewers.' },
      standard: { type: 'Standard', price: 300, days: 3, description: 'Create a 1-2 minute video that tells your story and engages your audience.' },
      premium: { type: 'Premium', price: 500, days: 5, description: 'Produce a full YouTube video that captivates your audience and showcases your skills.' }
    }
  },
  'Voiceover Artist (Male)': {
    name: 'Voiceover Artist (Male)',
    services: {
      basic: { type: 'Basic', price: 200, days: 2, description: 'Provide a 30-second voiceover to enhance your project and add a professional touch.' },
      standard: { type: 'Standard', price: 300, days: 3, description: 'Deliver a 1-minute voiceover that captures your message and engages listeners.' },
      premium: { type: 'Premium', price: 500, days: 5, description: 'Offer a 2-minute+ voiceover with professional editing for a polished finish that stands out.' }
    }
  },
  'Voiceover Artist (Female)': {
    name: 'Voiceover Artist (Female)',
    services: {
      basic: { type: 'Basic', price: 200, days: 2, description: 'Provide a 30-second voiceover to enhance your project and add a professional touch.' },
      standard: { type: 'Standard', price: 300, days: 3, description: 'Deliver a 1-minute voiceover that captures your message and engages listeners.' },
      premium: { type: 'Premium', price: 500, days: 5, description: 'Offer a 2-minute+ voiceover with professional editing for a polished finish that stands out.' }
    }
  },
};

function Onboarding() {
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [serviceType, setServiceType] = useState('standard');
  const [agreed, setAgreed] = useState(false);
  const [customPrice, setCustomPrice] = useState('');
  const [customDays, setCustomDays] = useState('');
  const [formData, setFormData] = useState({
    bio: '',
    portfolio: '',
    experience: '',
    upiId: '',
  });

  const [currentPricing, setCurrentPricing] = useState(null);

  useEffect(() => {
    if (selectedRole && serviceType !== 'custom') {
      const category = categories[selectedRole];
  
      if (category?.services && category.services[serviceType]) {
        setCurrentPricing(category.services[serviceType]);
      }
    }
  }, [selectedRole, serviceType]);
  
  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && newSkill.trim() && skills.length < MAX_SKILLS) {
      setSkills([...skills, { id: Date.now().toString(), name: newSkill.trim() }]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillId) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalPrice = serviceType === 'custom' ? parseInt(customPrice) : currentPricing?.price;
    const finalDays = serviceType === 'custom' ? parseInt(customDays) : currentPricing?.days;
    
    console.log({
      selectedRole,
      skills,
      ...formData,
      serviceType,
      price: finalPrice,
      days: finalDays,
      agreed,
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-[#F5F5F5] rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-[#212529] mb-8">Freelancer Onboarding</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Role Selection */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                Select Role <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-[#f5f5f5] border border-[#212529] rounded-lg py-2 px-3 text-left font-medium focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] hover:bg-gray-200 transition-all duration-200 flex justify-between items-center"
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                >
                  {selectedRole || 'Select a role'}
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>

                {showRoleDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-md rounded-lg py-1 max-h-60 overflow-auto border border-gray-200">
                    {Object.keys(categories).map((role) => (
                      <div
                        key={role}
                        className="px-4 py-2 text-[#212529] hover:bg-gray-200 hover:text-[#007BFF] cursor-pointer transition-all duration-300 ease-in-out rounded-md"
                        onClick={() => {
                          setSelectedRole(role);
                          setShowRoleDropdown(false);
                        }}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                Skills <span className="text-[#EF4444]">*</span>
                <span className="text-sm text-gray-500 ml-1">
                  ({MAX_SKILLS - skills.length} remaining)
                </span>
              </label>
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleAddSkill}
                placeholder="Type a skill and press Enter"
                disabled={skills.length >= MAX_SKILLS}
                className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <div className="flex flex-wrap gap-2 mt-2 ">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="bg-[#007bff] text-white border border-[#212529] px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center hover:bg-[#0056b3] transition-all duration-200 shadow-md"
                  >
                    {skill.name}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill.id)}
                      className="ml-2 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                Short Bio <span className="text-[#EF4444]">*</span>
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
                className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF]"
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Portfolio Link */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                Portfolio Link (Optional)
              </label>
              <input
                type="url"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF]"
                placeholder="yourportfolio.com"
              />
            </div>

            {/* Work Experience */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                Work Experience (Optional)
              </label>
              <input
                type="number"
                min="1"
                max="15"
                value={formData.experience}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 1 && value <= 15) {
                    setFormData({ ...formData, experience: value });
                  }
                }}
                className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF]"
                placeholder="Enter your work experience in years"
              />
            </div>
    
            {/* Service Type */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                Service Type <span className="text-[#EF4444]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['basic', 'standard', 'premium', 'custom'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 text-sm font-medium rounded-lg focus:outline-none ${
                      serviceType === type
                        ? 'bg-[#007BFF] text-white'
                        : 'bg-white border border-[#212529]-300 text-[#212529] hover:bg-gray-50'
                    }`}
                    onClick={() => setServiceType(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Price and Days */}
            {serviceType === 'custom' && (
              <>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#212529]">
                    Custom Price (₹) <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="number"
                    min="50"
                    max="50000"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF]"
                    placeholder="Enter custom price"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-[#212529]">
                    Delivery Days <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="15"
                    value={customDays}
                    onChange={(e) => setCustomDays(e.target.value)}
                    className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF]"
                    placeholder="Enter number of days (1 - 15)"
                  />
                </div>
              </>
            )}

            {/* Pricing & Deadline */}
            {selectedRole && serviceType !== 'custom' && currentPricing && currentPricing.price > 0 && currentPricing.days > 0 && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-[#212529]">Pricing & Deadline:</p>
                <p className="text-lg font-bold text-[#007BFF]">
                  ₹{currentPricing.price} ({currentPricing.days} days)
                </p>
                <p className="text-sm text-gray-600 mt-1">{currentPricing.description}</p>
              </div>
            )}

            {/* UPI ID */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-[#212529]">
                UPI Number/ID <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                value={formData.upiId}
                onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                className="w-full font-medium border border-[#212529] rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF]"
                placeholder="UPI ID (example@upi)"
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 text-[#007BFF] focus:ring-[#007BFF] border-[#212529] rounded mt-1.5"
              />
              <div className="font-semibold">
                <label className="text-sm text-[#212529]">
                  I agree to the{' '}
                  <a href="#" className="text-[#007BFF] hover:underline">
                    terms of services
                  </a>
                </label>
                <p className="text-xs font-normal text-[#212529] mt-1">
                  By proceeding, you confirm that you will not share personal data with users
                  and will abide by the platform privacy <br /> policy.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-semibold bg-[#007BFF] text-[#f5f5f5] py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:ring-offset-2 transition-colors"
            >
              Submit Onboarding Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;