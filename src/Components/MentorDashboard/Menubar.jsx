import React, { useState } from 'react';
import {
    FaCog, FaUserCheck, FaMoneyCheckAlt, FaCalendarAlt, FaBook, FaRegListAlt,
    FaRegClock, FaRegEnvelope, FaHeart, FaRegSun, FaGraduationCap, FaTicketAlt,
    FaChartBar, FaSignOutAlt, FaHome, FaElementor
} from 'react-icons/fa';
import { VscAccount } from "react-icons/vsc";
import RightSidebar from './RightSidebar';

function Menubar({ isOpen, toggleSidebar, onComponentChange }) {
    const [isSubSidebarOpen, setRightSidebarOpen] = useState(false);
    const [sidebarItems, setSidebarItems] = useState([]);

    const menuItems = [
        { name: "Mentorship", icon: <FaElementor /> },
        {
            name: "Dashboard", icon: <FaHome />,
            onClick: () => openRightSidebar(DashboardSidebarItems)
        },
        {
            name: "Setting", icon: <FaCog />,
            onClick: () => openRightSidebar(SettingSidebarItems)
        },
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

    const DashboardSidebarItems = [
        {
            name: "View Profile", icon: <VscAccount />,
            onClick: () => {
                onComponentChange('dashboardViewProfile');
                setRightSidebarOpen(false);
            }
        },
    ];

    const SettingSidebarItems = [
        {
            name: "Account", icon: <FaUserCheck />,
            onClick: () => {
                onComponentChange('account');
                setRightSidebarOpen(false);
            }
        },
        { name: "Mentorship", icon: <FaRegClock /> },
        { name: "Schedule", icon: <FaRegListAlt /> },
        { name: "Online Meeting", icon: <FaRegEnvelope /> },
        { name: "Change Password", icon: <FaHeart /> }
    ];

    const openRightSidebar = (items) => {
        setSidebarItems(items);
        setRightSidebarOpen(true);
    };

    return (
        <div
            className={`flex flex-col h-full bg-gray-800 text-white p-4
        fixed overflow-x-hidden md:relative z-10 
        ${isOpen ? 'block' : 'hidden'} lg:block md:w-64 transition-width duration-300`}
        >
            {/* Mentorship Section */}
            {/* Left Menubar */}
            <div className="flex flex-col h-full">
                <ul className="space-y-2">
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition duration-300 border-b border-gray-600">
                        <span className="mr-3">{menuItems[0].icon}</span>
                        <span className={`${isOpen ? '' : 'hidden'} md:block `}>{menuItems[0].name}</span>
                    </li>
                    {menuItems.slice(1).map((item, index) => (
                        <li
                            key={index + 1}
                            className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md transition duration-300"
                            onClick={item.onClick || (() => { })}
                        >
                            <span className="mr-3">{item.icon}</span>
                            <span className={`${isOpen ? '' : 'hidden'} md:block `}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sub Sidebar */}
            <RightSidebar
                isOpen={isSubSidebarOpen}
                onClose={() => setRightSidebarOpen(false)}
                items={sidebarItems}
            />
        </div>
    );
}

export default Menubar;
