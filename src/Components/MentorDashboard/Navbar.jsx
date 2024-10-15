import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import MentorDashboardNotifications from '../Common/MentorDashboardNotifications'; // Adjust the import based on your file structure

function Navbar({ toggleSidebar }) {
    return (
        <div className="flex items-center justify-between bg-white shadow-md text-gray-800 p-4 w-full z-0">
            {/* Left Side */}
            <div className="flex items-center">
                {/* Three Line Icon */}
                <div className="mr-4 cursor-pointer hover:text-gray-600" onClick={toggleSidebar}>
                    <FaBars size={24} />
                </div>
                {/* View Profile Button */}
                <button className="hidden sm:flex bg-blue-500 hover:bg-blue-600 text-white font-semibold sm:py-2 sm:px-4 py-1 px-2 rounded-md">
                    View Profile
                </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
                {/* Notification Component */}
                <MentorDashboardNotifications />
                {/* Profile Icon */}
                <div className="cursor-pointer hover:text-gray-600">
                    <FaUserCircle size={24} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
