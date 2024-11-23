import { useState } from 'react';
import Icon from '../assets/Icon.svg'
import Icon1 from '../assets/Icon1.svg'
import User from '../assets/3-User.svg'
import Bag from '../assets/Bag.svg'
import Progress from '../assets/Progress.svg'

const Sidebar = () => {
  const [isVisible] = useState(true); // Toggle visibility state

  return (
    <div
      className={`flex flex-col ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 bg-white shadow-md h-[1024px] w-[225px]`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
            <span className="text-lg font-semibold">👨‍🍳</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Chucky</h1>
            <span className="text-sm text-gray-500">Admin Dashboard</span>
          </div>
        </div>
      </div>

      <nav className="mt-4 space-y-0">
        <ul>
          <li>
            <a
              href="#dashboard"
              className="flex items-center px-4 py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            >
              <img src={Icon} alt='dashboard icon'/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#orders" className="flex items-center px-4 py-3 text-gray-600 ">
              <img src={Bag} alt ='OrderIcon'/>
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a href="#analytics" className="flex items-center px-4 py-3 text-gray-600 ">
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#customer" className="flex items-center px-4 py-3 text-gray-600 ">
            <img src={User} alt='icon'/>
              <span>Customer</span>
            </a>
          </li>
          <li>
            <a href="#menu" className="flex items-center px-4 py-3 text-gray-600">
              <img src={Icon1} alt='icon'/>
              <span>Menu</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-gray-50 rounded-lg m-4 shadow">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 border-4 border-purple-500 rounded-full flex items-center justify-center">
              <img src={Progress} alt='icon'/>
            </div>
          </div>
          <div className="text-gray-600">
            <h3 className="text-sm font-semibold">Subscription Plan</h3>
            <p className="text-xs">Your Subscription plan will expire soon please upgrade!</p>
            <a href="#upgrade" className="text-xs text-purple-500 hover:underline">Upgrade</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

