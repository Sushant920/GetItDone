import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardHeader from '../components/DashboardHeader';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
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
  scale: 1.03,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: { 
    type: "spring",
    stiffness: 300,
    damping: 10
  }
};

export default function UserDashboard() {
  const [userData] = useState({
    username: 'USER003',
    taskStats: {
      completed: 48,
      ongoing: 32,
      awaiting: 20
    },
    taskProgress: {
      stage: 4,
      stages: ['Initiated', 'Accepted', 'Started', 'In Progress', 'Almost Done', 'Completed']
    },
    completedProjects: [
      { id: 1, name: 'Website Redesign', status: 'Complete' },
      { id: 2, name: 'Mobile App UI', status: 'Complete' },
      { id: 3, name: 'Brand Guidelines', status: 'Complete' }
    ],
    pendingProjects: [
      { 
        id: 1, 
        name: 'Mobile App UI', 
        status: 'In Progress',
        needChanges: true 
      }
    ],
    awaitingProjects: [
      { 
        id: 1, 
        name: 'E-commerce Site', 
        status: 'New',
        postedTime: '1 hour ago' 
      }
    ]
  });

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navigation */}
      <DashboardHeader />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* User Welcome */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center mb-8 gap-4"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-white p-4 rounded-full shadow-sm"
            whileHover={{ rotate: 5 }}
          >
            <svg className="h-12 w-12 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 21V20C4 17.7909 5.79086 16 8 16H16C18.2091 16 20 17.7909 20 20V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold text-gray-800"
            whileHover={{ x: 5 }}
          >
            Welcome back, {userData.username}!
          </motion.h1>
        </motion.div>
        
        {/* Task Statistics */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          variants={containerVariants}
        >
          {Object.entries(userData.taskStats).map(([key, value]) => (
            <motion.div 
              key={key}
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              <h2 className="text-gray-700 font-medium mb-2 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()} Tasks
              </h2>
              <motion.div 
                className="text-4xl font-bold text-blue-500 mb-2"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {value}%
              </motion.div>
              <div className="w-full h-1 bg-blue-100 rounded">
                <motion.div 
                  className="h-1 bg-blue-500 rounded" 
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ delay: 0.7, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
{/* Task Progress */}
<motion.div 
  className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-6 sm:mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Task Progress</h2>
  
  {/* Mobile-friendly vertical layout */}
  <div className="block sm:hidden space-y-4">
    {userData.taskProgress.stages.map((stage, index) => {
      const isCompleted = index < userData.taskProgress.stage;
      const isCurrent = index === userData.taskProgress.stage - 1;
      
      return (
        <motion.div 
          key={index}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Step indicator */}
          <div className="flex flex-col items-center mt-1">
            <motion.div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                isCompleted 
                  ? 'bg-green-500 text-white' 
                  : isCurrent 
                    ? 'border-2 border-blue-500 bg-white text-blue-500' 
                    : 'border border-gray-300 bg-white text-gray-500'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {index + 1}
            </motion.div>
            {index < userData.taskProgress.stages.length - 1 && (
              <motion.div
                className={`w-0.5 h-8 ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-200'
                }`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.3 }}
              />
            )}
          </div>
          
          {/* Stage info */}
          <div className="flex-1">
            <p className={`text-sm font-medium ${
              isCurrent ? 'text-blue-600' : 'text-gray-600'
            }`}>
              {stage}
            </p>
            {isCurrent && (
              <motion.p 
                className="text-xs text-gray-500 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Current stage
              </motion.p>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
  
  {/* Desktop-friendly horizontal layout */}
  <div className="hidden sm:block">
    <div className="relative mb-10">
      
      {/* Progress steps */}
      <div className="relative flex justify-between">
        {userData.taskProgress.stages.map((stage, index) => {
          const isCompleted = index < userData.taskProgress.stage;
          const isCurrent = index === userData.taskProgress.stage - 1;
          
          return (
            <motion.div 
              key={index}
              className="relative z-10 flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step indicator */}
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  isCompleted 
                    ? 'bg-green-500 text-white' 
                    : isCurrent 
                      ? 'border-2 border-blue-500 bg-white text-blue-500' 
                      : 'border border-gray-300 bg-white text-gray-500'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {index + 1}
              </motion.div>
              
              {/* Connecting line (left side) */}
              {index > 0 && (
                <motion.div
                  className={`absolute top-4 -left-1/2 w-1/2 h-1 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
              
              {/* Stage label */}
              <motion.span 
                className={`text-xs font-medium ${
                  isCurrent ? 'text-blue-600 font-semibold' : 'text-gray-600'
                } text-center max-w-[100px]`}
              >
                {stage}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
  
  {/* Progress summary (shown on both layouts) */}
  <motion.div 
    className="mt-6 sm:mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm text-gray-600">Overall progress</span>
      <span className="text-sm font-bold text-blue-600">
        {Math.round((userData.taskProgress.stage / userData.taskProgress.stages.length) * 100)}%
      </span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ 
          width: `${(userData.taskProgress.stage / userData.taskProgress.stages.length) * 100}%` 
        }}
        transition={{ delay: 0.6, duration: 1 }}
      />
    </div>
  </motion.div>
</motion.div>
        
        {/* Projects */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8"
          variants={containerVariants}
        >
          {/* Completed Projects */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Completed Projects</h2>
              <Link href="/completed-projects" className="text-sm text-blue-500 hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {userData.completedProjects.map(project => (
                <motion.div 
                  key={project.id}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-md"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between">
                    <span>{project.name}</span>
                    <span className="text-green-300">{project.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Pending Projects */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Pending Projects</h2>
              <Link href="/pending-projects" className="text-sm text-blue-500 hover:underline">View Project</Link>
            </div>
            <div className="space-y-3">
              {userData.pendingProjects.map(project => (
                <motion.div 
                  key={project.id}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-md"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span>{project.name}</span>
                    <span className="text-yellow-300">{project.status}</span>
                  </div>
                  <div className="flex gap-2">
                    <motion.button 
                      className="bg-green-500 text-white text-xs px-3 py-1 rounded"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Accept Work
                    </motion.button>
                    {project.needChanges && (
                      <motion.button 
                        className="bg-red-500 text-white text-xs px-3 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Need Changes
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Awaiting Acceptance */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Awaiting Acceptance</h2>
              <Link href="/awaiting-acceptance" className="text-sm text-blue-500 hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {userData.awaitingProjects.map(project => (
                <motion.div 
                  key={project.id}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-md flex flex-col justify-between"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between">
                    <span>{project.name}</span>
                    <span className="text-pink-300">{project.status}</span>
                  </div>
                  <div className="text-green-300 text-sm">Posted {project.postedTime}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
