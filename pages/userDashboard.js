import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';

export default function UserDashboard() {
  // Mock data - in a real app, this would come from an API call
  const [userData] = useState({
    username: 'USER003',
    taskStats: {
      completed: 48,
      ongoing: 32,
      awaiting: 20
    },
    taskProgress: {
      stage: 4, // 1-6 representing the current stage
      stages: ['Initiated', 'Accepted', 'Started', 'In Progress', 'Almost Done', 'Completed']
    },
    completedProjects: [
      { id: 1, name: 'Website Redesign', status: 'Complete' },
      { id: 2, name: 'Website Redesign', status: 'Complete' },
      { id: 3, name: 'Website Redesign', status: 'Complete' }
    ],
    pendingProjects: [
      { 
        id: 1, 
        name: 'Mobile App UI', 
        status: 'InProgress',
        needChanges: true 
      }
    ],
    awaitingProjects: [
      { 
        id: 1, 
        name: 'Brand Guidelines', 
        status: 'New',
        postedTime: '1 hour ago' 
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <DashboardHeader />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* User Welcome */}
        <div className="flex items-center mb-8">
          <div className="mr-4 bg-white p-4 rounded-full shadow-sm">
            <svg className="h-12 w-12 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 21V20C4 17.7909 5.79086 16 8 16H16C18.2091 16 20 17.7909 20 20V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userData.username}!</h1>
        </div>
        
        {/* Task Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-gray-700 font-medium mb-2">Completed Tasks</h2>
            <div className="text-4xl font-bold text-blue-500 mb-2">{userData.taskStats.completed}%</div>
            <div className="w-full h-1 bg-blue-100 rounded">
              <div className="h-1 bg-blue-500 rounded" style={{ width: `${userData.taskStats.completed}%` }}></div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-gray-700 font-medium mb-2">Ongoing Tasks</h2>
            <div className="text-4xl font-bold text-blue-500 mb-2">{userData.taskStats.ongoing}%</div>
            <div className="w-full h-1 bg-blue-100 rounded">
              <div className="h-1 bg-blue-500 rounded" style={{ width: `${userData.taskStats.ongoing}%` }}></div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-gray-700 font-medium mb-2">Awaiting Acceptance</h2>
            <div className="text-4xl font-bold text-blue-500 mb-2">{userData.taskStats.awaiting}%</div>
            <div className="w-full h-1 bg-blue-100 rounded">
              <div className="h-1 bg-blue-500 rounded" style={{ width: `${userData.taskStats.awaiting}%` }}></div>
            </div>
          </div>
        </div>
        
        {/* Task Progress */}
<div className="bg-white p-6 rounded-lg shadow-sm mb-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-6">Task Progress</h2>
  <div className="relative flex items-center justify-between mb-2">
    {/* Steps with connecting lines */}
    <div className="w-full flex items-center">
      {userData.taskProgress.stages.map((stage, index) => {
        const isActive = index + 1 <= userData.taskProgress.stage;
        const isLast = index === userData.taskProgress.stages.length - 1;
        
        return (
          <div key={index} className={`flex items-center ${isLast ? '' : 'w-full'}`}>
            {/* Circle with number */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isActive ? 'bg-blue-500 text-white' : 'border border-gray-300 text-gray-500 bg-white'
            } z-10`}>
              {index + 1}
            </div>
            
            {/* Connecting line to next step */}
            {!isLast && (
              <div className="w-full h-0.5 mx-1">
                <div 
                  className={`h-full ${
                    isActive && index + 2 <= userData.taskProgress.stage 
                      ? 'bg-orange-400' 
                      : 'bg-gray-300'
                  }`} 
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
  
  {/* Step labels */}
  <div className="flex justify-between">
    {userData.taskProgress.stages.map((stage, index) => (
      <div key={index} className="text-sm text-gray-600" style={{
        width: index === 0 ? 'auto' : index === userData.taskProgress.stages.length - 1 ? 'auto' : '',
        textAlign: index === 0 ? 'left' : index === userData.taskProgress.stages.length - 1 ? 'right' : 'center',
        marginLeft: index === 0 ? '0' : '',
        marginRight: index === userData.taskProgress.stages.length - 1 ? '0' : '',
        flex: index === 0 || index === userData.taskProgress.stages.length - 1 ? '0 0 auto' : '1'
      }}>
        {stage}
      </div>
    ))}
  </div>
</div>
        
        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Completed Projects */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Completed Projects</h2>
              <Link href="/completed-projects" className="text-sm text-blue-500 hover:underline">View All</Link>
            </div>
            <div className="space-y-4">
              {userData.completedProjects.map(project => (
                <div key={project.id} className="bg-blue-500 text-white p-4 rounded-md">
                  <div className="flex justify-between">
                    <span>{project.name}</span>
                    <span className="text-green-300">{project.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pending Projects */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Pending Projects</h2>
              <Link href="/pending-projects" className="text-sm text-blue-500 hover:underline">View Project</Link>
            </div>
            <div className="space-y-4">
              {userData.pendingProjects.map(project => (
                <div key={project.id} className="bg-blue-500 text-white p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span>{project.name}</span>
                    <span className="text-yellow-300">{project.status}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white text-xs px-3 py-1 rounded">Accept Work</button>
                    {project.needChanges && (
                      <button className="bg-red-500 text-white text-xs px-3 py-1 rounded">Need Changes</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awaiting Acceptance */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Awaiting Acceptance</h2>
              <Link href="/awaiting-acceptance" className="text-sm text-blue-500 hover:underline">View all</Link>
            </div>
            <div className="space-y-4">
              {userData.awaitingProjects.map(project => (
                <div key={project.id} className="bg-blue-500 text-white p-4 rounded-md h-24 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <span>{project.name}</span>
                    <span className="text-pink-300">{project.status}</span>
                  </div>
                  <div className="text-green-300 text-sm">Posted {project.postedTime}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}