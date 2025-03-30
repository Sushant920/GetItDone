import { FaStar, FaCheck } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import DashboardHeader from '@/components/DashboardHeader';
import Footer from '@/components/header';

export default function ProfileDashboard() {
  return (
    <>
    <DashboardHeader />
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-2 rounded-lg">
              <IoPersonSharp className="text-4xl text-gray-700" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-Inter">Agent001</h1>
              <p className="text-gray-700 font-Inter">Full-stack Developer</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Available</span>
                <span className="px-3 py-1 bg-pink-400 text-white text-xs rounded-full">Featured</span>
                <span className="px-3 py-1 bg-orange-400 text-white text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-orange-400 text-white text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-orange-400 text-white text-xs rounded-full">React</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-purple text-white rounded-md hover:bg-purple-800">
            Edit Profile
          </button>
        </div>
        <p className="mt-4 text-gray-700">
          Senior Full Stack Developer with 8+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies.
        </p>
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700">GetItDone Score</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-gray-700 font-bold">95%</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Active Projects */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium text-gray-700">Active Projects</h2>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">04</h3>
              <span className="text-sm text-green-500">+1 this week</span>
            </div>
          </div>

          {/* Total Earnings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium text-gray-700">Total Earnings</h2>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500">₹17,200</h3>
            <span className="text-sm text-green-500">+10% from last month</span>
          </div>
        </div>

        {/* Ratings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium text-gray-700">Ratings</h2>
            <FaStar className="text-yellow-400" />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500">4.9</h3>
            <span className="text-sm text-blue-500">from 2 ratings</span>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-medium text-gray-700">Completed</h2>
            <div className="bg-green-100 p-1 rounded-full">
              <FaCheck className="text-green-500" />
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500">03</h3>
            <span className="text-sm text-blue-500">100% success rate</span>
          </div>
        </div>
      </div>

      {/* Tasks Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Available Tasks */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium text-gray-700">Available Tasks</h2>
              <button className="bg-orange-400 text-white px-4 py-1 rounded-md text-sm">
                View All
              </button>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">E-commerce website Design</h3>
                <button className="bg-purple text-white px-2 py-1 rounded-md text-sm font-bold">₹500</button>
              </div>
              <p className="text-sm mt-1">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
              <div className="flex justify-between mt-7">
              <span>Due in 2 days</span>
              <div className="flex gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">Accept (+5)</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">Reject (-5)</button>
              </div>
            </div>
          </div>
        </div>

          {/* Current Tasks */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-black">Current Tasks</h2>
            <button className="bg-purple text-white px-4 py-1 rounded-md text-sm">
              Task Manager
            </button>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">My First Task</h3>
              <span className="bg-orange-400 text-white px-2 py-0.5 rounded-md text-xs">
                In Progress
              </span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 mt-3">
              <div className="bg-purple h-2.5 rounded-full" style={{ width: '75%' }}></div>
              <div className="flex justify-end mt-1">
                <span className="text-white">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <span>Due Tomorrow</span>
              <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">
                Submit work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews and Messages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-700">Recent Reviews</h2>
            <button className="text-blue-500 text-sm">
              View All
            </button>
          </div>
          <div className="space-y-4">
            <div className="border-b bg-blue-500 rounded-lg pb-2 px-2">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-white mb-1">E-commerce website Design</h2>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-white mt-1">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
              <p className="text-sm text-white">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
            </div>
            <div className="bg-blue-500 rounded-lg pb-2 px-2">
              <div className="flex justify-between items-center">
              <h2 className="font-bold text-white mb-1">E-commerce website Design</h2>
              <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-white mt-1">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
              <p className="text-sm text-white">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-700">Messages</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-500 p-4 rounded-lg">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-400 text-white p-1 rounded-full">
                    <IoPersonSharp />
                  </div>
                  <span className="font-medium text-white">User001</span>
                </div>
                <span className="text-xs text-white">2 min ago</span>
              </div>
              <p className="text-sm text-white mt-2">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-400 text-white p-1 rounded-full">
                    <IoPersonSharp />
                  </div>
                  <span className="font-medium text-white">User001</span>
                </div>
                <span className="text-xs text-white">7 min ago</span>
              </div>
              <p className="text-sm text-white mt-2">Need a modern e-commerce website design with 10-12 pages, mtt do guyss...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}