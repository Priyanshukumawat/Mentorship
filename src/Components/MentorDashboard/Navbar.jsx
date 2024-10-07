import React from 'react';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
    return (
        <div className="flex items-center justify-between bg-white shadow-md text-gray-200 p-4 w-full z-0">
            {/* Left Side */}
            <div className="flex items-center">
                {/* Three Line Icon */}
                <div className="mr-4 cursor-pointer hover:text-gray-800" onClick={toggleSidebar}>
                    <FaBars size={24} />
                </div>
                {/* View Profile Button */}
                <button className="flex bg-blue-500 hover:bg-blue-600 text-white font-semibold sm:py-2 sm:px-4 py-1 px-2 rounded-md">
                    View Profile
                </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
                {/* Notification Icon with Red Dot */}
                <div className="relative sm:mr-4 cursor-pointer hover:text-gray-800">
                    <FaBell size={24} />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </div>
                {/* Profile Icon */}
                <div className="cursor-pointer hover:text-gray-800">
                    <FaUserCircle size={24} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
