// RightSidebar.js
import React, { useEffect, useRef } from 'react';

function RightSidebar({ isOpen, onClose, items }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose(); // Close sidebar if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        isOpen && (
            <div
                ref={sidebarRef}
                className="fixed top-20 lg:left-72 left-20 sm:left-16 z-10 rounded-md h-fit w-60 sm:w-48 bg-white shadow-lg p-4 transition-transform duration-300 transform translate-x-0 md:w-56"
            >
                <ul className="space-y-2 text-gray-500">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center p-2 hover:bg-gray-300 cursor-pointer rounded-md transition duration-300"
                            onClick={item.onClick}
                        >
                            <span className="mr-3">{item.icon}</span>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}

export default RightSidebar;
