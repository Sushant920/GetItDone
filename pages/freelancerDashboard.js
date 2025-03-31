import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCheck, FaEdit, FaUpload, FaPaperclip } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import DashboardHeader from '@/components/DashboardHeader';

const ProfileDashboard = () => {
  // State for editable profile fields
  const [profile, setProfile] = useState({
    name: 'Agent001',
    title: 'Full-stack Developer',
    bio: 'Senior Full Stack Developer with 8+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies.',
    tags: ['Available', 'Featured', 'React', 'Node.js', 'MongoDB'],
    isEditing: false
  });

  // State for file upload
  const [files, setFiles] = useState([]);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const fileInputRef = useRef(null);

  // State for tasks
  const [tasks, setTasks] = useState({
    available: [
      {
        id: 1,
        title: 'E-commerce website Design',
        description: 'Need a modern e-commerce website design with 10-12 pages',
        price: '₹500',
        due: '2 days'
      }
    ],
    current: [
      {
        id: 1,
        title: 'My First Task',
        progress: 75,
        status: 'In Progress',
        due: 'Tomorrow'
      }
    ]
  });

  // State for messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'User001',
      time: '2 min ago',
      content: 'Can we discuss the project requirements?',
      read: false
    },
    {
      id: 2,
      user: 'User002',
      time: '7 min ago',
      content: 'I have some feedback on the initial design',
      read: false
    }
  ]);

  // Toggle edit mode
  const toggleEdit = () => {
    setProfile(prev => ({ ...prev, isEditing: !prev.isEditing }));
  };

  // Handle profile change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle task submission
  const handleSubmitWork = () => {
    setShowFileUpload(true);
  };

  // Handle file upload submission
  const submitFiles = () => {
    // Here you would typically upload files to server
    console.log('Files submitted:', files);
    setShowFileUpload(false);
    setFiles([]);
    
    // Remove the task after submission
    setTasks(prev => ({
      ...prev,
      current: prev.current.filter(t => t.id !== 1) // Assuming taskId 1 for demo
    }));
  };

  // Mark message as read
  const markAsRead = (messageId) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

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
    scale: 1.02,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  return (
    <>
      <DashboardHeader />
      <div className="relative">
        {/* Edit Profile Button - Top Right */}
        <motion.button 
          className="absolute top-4 right-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleEdit}
        >
          <FaEdit />
          {profile.isEditing ? 'Save Profile' : 'Edit Profile'}
        </motion.button>

        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 py-8"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {/* Profile Section */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 mb-6"
            variants={item}
            whileHover={hoverEffect}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-gray-100 p-3 rounded-lg"
                  whileHover={{ rotate: 5 }}
                >
                  <IoPersonSharp className="text-4xl text-gray-700" />
                </motion.div>
                <div className="flex-1">
                  {profile.isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="text-2xl font-bold font-Inter border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                      />
                      <input
                        type="text"
                        name="title"
                        value={profile.title}
                        onChange={handleProfileChange}
                        className="text-gray-700 font-Inter border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                      />
                      <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleProfileChange}
                        className="text-gray-700 border-b border-gray-300 focus:border-blue-500 outline-none w-full resize-none"
                        rows={3}
                      />
                    </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold font-Inter">{profile.name}</h1>
                      <p className="text-gray-700 font-Inter">{profile.title}</p>
                      <p className="text-gray-700 mt-2">{profile.bio}</p>
                    </>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile.tags.map((tag, i) => (
                      <motion.span 
                        key={i}
                        className={`px-3 py-1 text-white text-xs rounded-full ${
                          i === 0 ? 'bg-green-500' : 
                          i === 1 ? 'bg-pink-400' : 'bg-orange-400'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700">GetItDone Score</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <motion.div 
                  className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '95%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-gray-700 font-bold">95%</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
            variants={container}
          >
            {[
              { title: 'Active Projects', value: '04', change: '+1 this week', icon: null, color: 'text-blue-500' },
              { title: 'Total Earnings', value: '₹17,200', change: '+10% from last month', icon: null, color: 'text-blue-500' },
              { title: 'Ratings', value: '4.9', change: 'from 2 ratings', icon: <FaStar className="text-yellow-400" />, color: 'text-blue-500' },
              { title: 'Completed', value: '03', change: '100% success rate', icon: <FaCheck className="text-green-500" />, color: 'text-blue-500' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-xl shadow-sm p-6"
                variants={item}
                whileHover={hoverEffect}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-medium text-gray-700">{stat.title}</h2>
                  {stat.icon && (
                    <div className="bg-gray-100 p-1 rounded-full">
                      {stat.icon}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
                  <span className={`text-sm ${
                    i === 0 || i === 1 ? 'text-green-500' : 'text-blue-500'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tasks Sections */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
            variants={container}
          >
            {/* Available Tasks */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-6"
              variants={item}
              whileHover={hoverEffect}
            >
              <h2 className="font-medium text-gray-700 mb-4">Available Tasks</h2>
              {tasks.available.map(task => (
                <motion.div 
                  key={task.id}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-4"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{task.title}</h3>
                    <motion.button 
                      className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-bold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {task.price}
                    </motion.button>
                  </div>
                  <p className="text-sm mt-2 text-blue-100">{task.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
                    <span className="text-sm">Due in {task.due}</span>
                    <div className="flex gap-2">
                      <motion.button 
                        className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        Accept (+5)
                      </motion.button>
                      <motion.button 
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        Reject (-5)
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Current Tasks */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-6"
              variants={item}
              whileHover={hoverEffect}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium text-gray-700">Current Tasks</h2>
                <motion.button 
                  className="bg-purple-600 text-white px-4 py-1 rounded-md text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Task Manager
                </motion.button>
              </div>
              {tasks.current.map(task => (
                <motion.div 
                  key={task.id}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg mb-4"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{task.title}</h3>
                    <span className="bg-orange-400 text-white px-2 py-0.5 rounded-md text-xs">
                      {task.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="bg-blue-400 rounded-full h-2.5">
                      <motion.div 
                        className="bg-purple-200 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${task.progress}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-blue-100">{task.progress}%</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-2">
                    <span className="text-sm">Due {task.due}</span>
                    <motion.button 
                      className="bg-green-500 text-white px-4 py-1 rounded-md text-sm flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      onClick={handleSubmitWork}
                    >
                      <FaUpload />
                      Submit work
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Reviews and Messages */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={container}
          >
            {/* Recent Reviews */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-6"
              variants={item}
              whileHover={hoverEffect}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium text-gray-700">Recent Reviews</h2>
                <motion.button 
                  className="text-blue-500 text-sm hover:underline"
                  whileHover={{ x: 2 }}
                >
                  View All
                </motion.button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    project: 'E-commerce website Design',
                    rating: 5,
                    review: 'Excellent work! Delivered ahead of schedule with great attention to detail.',
                    client: 'User001'
                  },
                  {
                    id: 2,
                    project: 'Mobile App Development',
                    rating: 4,
                    review: 'Good communication and met all requirements. Would work with again.',
                    client: 'User002'
                  }
                ].map(review => (
                  <motion.div 
                    key={review.id}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-white mb-1">{review.project}</h2>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={i < review.rating ? "text-yellow-400" : "text-blue-300"} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-blue-100 mt-2">"{review.review}"</p>
                    <p className="text-xs text-blue-200 mt-2">- {review.client}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Messages */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-6"
              variants={item}
              whileHover={hoverEffect}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium text-gray-700">Messages</h2>
                <motion.button 
                  className="text-blue-500 text-sm hover:underline"
                  whileHover={{ x: 2 }}
                >
                  View All
                </motion.button>
              </div>
              <div className="space-y-4">
                {messages.map(msg => (
                  <motion.div 
                    key={msg.id}
                    className={`bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg cursor-pointer ${
                      !msg.read ? 'ring-2 ring-blue-300' : ''
                    }`}
                    whileHover={{ y: -2 }}
                    onClick={() => markAsRead(msg.id)}
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-orange-400 text-white p-1 rounded-full">
                          <IoPersonSharp />
                        </div>
                        <span className="font-medium text-white">{msg.user}</span>
                      </div>
                      <span className="text-xs text-blue-100">{msg.time}</span>
                    </div>
                    <p className="text-sm text-blue-100 mt-2">{msg.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* File Upload Modal */}
        {showFileUpload && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl p-6 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-xl font-bold mb-4">Upload Your Work</h3>
              
              <input 
                type="file" 
                multiple 
                onChange={handleFileChange}
                className="hidden" 
                id="file-upload"
                ref={fileInputRef}
              />
              
              <motion.div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4 cursor-pointer"
                whileHover={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
                onClick={triggerFileInput}
              >
                <FaPaperclip className="text-3xl text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Click to browse or drag files here</p>
                <p className="text-sm text-gray-500 mt-2">Accepted file types: .pdf, .doc, .zip, .jpg, .png</p>
              </motion.div>
              
              {files.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Selected Files:</h4>
                  <ul className="space-y-1 max-h-40 overflow-y-auto">
                    {Array.from(files).map((file, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <FaPaperclip className="text-gray-400" />
                        <span className="truncate">{file.name}</span>
                        <span className="text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex justify-end gap-3">
                <motion.button 
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowFileUpload(false);
                    setFiles([]);
                  }}
                >
                  Cancel
                </motion.button>
                <motion.button 
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    files.length > 0 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  whileHover={{ scale: files.length > 0 ? 1.05 : 1 }}
                  whileTap={{ scale: files.length > 0 ? 0.98 : 1 }}
                  onClick={files.length > 0 ? submitFiles : null}
                >
                  <FaUpload />
                  Submit {files.length > 0 ? `(${files.length})` : ''}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ProfileDashboard;