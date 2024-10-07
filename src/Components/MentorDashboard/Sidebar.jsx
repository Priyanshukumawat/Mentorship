import React, { useState, useEffect, useRef } from 'react';
import { FaCog, FaUserCheck, FaMoneyCheckAlt, FaCalendarAlt, FaBook, FaRegListAlt, FaRegClock, FaRegEnvelope, FaHeart, FaRegSun, FaGraduationCap, FaTicketAlt, FaChartBar, FaSignOutAlt, FaHome, FaElementor } from 'react-icons/fa';
// import AccountForm from './Forms/AccountForm';

function Sidebar({ isOpen, toggleSidebar, onComponentChange }) {
    const [isSubSidebarOpen, setRightSidebarOpen] = useState(false);
    // const [activeForm, setActiveForm] = useState(null);
    const subSidebarRef = useRef(null);

    const menuItems = [
        { name: "Mentorship", icon: <FaElementor /> },
        { name: "Dashboard", icon: <FaHome /> },
        { name: "Setting", icon: <FaCog />, onClick: () => setRightSidebarOpen(true) },
        { name: "KYC", icon: <FaUserCheck />, onClick: () => onComponentChange('kyc') },
        { name: "Payouts", icon: <FaMoneyCheckAlt /> },
        { name: "Sessions", icon: <FaCalendarAlt /> },
        { name: "Booking", icon: <FaBook /> },
        { name: "Calendar", icon: <FaRegListAlt /> },
        { name: "Transactions", icon: <FaMoneyCheckAlt /> },
        { name: "Holiday", icon: <FaRegSun /> },
        { name: "Message", icon: <FaRegEnvelope /> },
        { name: "Favourite", icon: <FaHeart /> },
        { name: "Experience", icon: <FaRegClock /> },
        { name: "Education", icon: <FaGraduationCap /> },
        { name: "Coupon", icon: <FaTicketAlt /> },
        { name: "Report", icon: <FaChartBar /> },
        { name: "Logout", icon: <FaSignOutAlt /> }
    ];

    // Close the sidebar if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subSidebarRef.current && !subSidebarRef.current.contains(event.target)) {
                setRightSidebarOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const rightSidebarItems = [
        { name: "Account", icon: <FaUserCheck />, onClick: () => { onComponentChange('account'); setRightSidebarOpen(false); } },
        { name: "Mentorship", icon: <FaRegClock /> },
        { name: "Schedule", icon: <FaRegListAlt /> },
        { name: "Online Meeting", icon: <FaRegEnvelope /> },
        { name: "Change Password", icon: <FaHeart /> }
    ];

    return (

        <div
            className={`flex flex-col h-full bg-gray-800 text-white p-4
    fixed md:relative md:block ${isOpen ? 'block' : 'hidden'} md:w-64 transition-width duration-300`}
        >


            {/* Left Sidebar */}
            <div className="flex flex-col h-full">
                <ul className="space-y-2">
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition duration-300 border-b border-gray-600">
                        <span className="mr-3">{menuItems[0].icon}</span>
                        <span className={`${isOpen ? '' : 'hidden'} md:block`}>{menuItems[0].name}</span>
                    </li>
                    {menuItems.slice(1).map((item, index) => (
                        <li
                            key={index + 1}
                            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md transition duration-300"
                            onClick={item.onClick || (() => { })}
                        >
                            <span className="mr-3">{item.icon}</span>
                            <span className={`${isOpen ? '' : 'hidden'} md:block`}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sub Sidebar */}
            {isSubSidebarOpen && (
                <div
                    ref={subSidebarRef}
                    className="fixed top-20 lg:left-72 left-20 sm:left-16 z-10 rounded-md h-fit w-60 sm:w-48 bg-white shadow-lg p-4 transition-transform duration-300 transform translate-x-0 md:w-56"
                >
                    <ul className="space-y-2 text-gray-500">
                        {rightSidebarItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center p-2 hover:bg-gray-300 cursor-pointer rounded-md transition duration-300"
                                onClick={item.onClick} // Handle item click
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
