import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';

const notificationsData = [
    {
        id: 1,
        message: "Your demo request has been accepted.",
        time: "2 minutes ago",
        read: false,
    },
    {
        id: 2,
        message: "Your demo request has been declined.",
        time: "10 minutes ago",
        read: true,
    },
    {
        id: 3,
        message: "A new demo request has been submitted.",
        time: "1 hour ago",
        read: false,
    },
    // Add more notifications as needed
];

function MentorDashboardNotifications() {
    const [notifications, setNotifications] = useState(notificationsData);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for the dropdown

    const markAsRead = (id) => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notification =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const clearAllNotifications = () => {
        setNotifications([]);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Notification Icon */}
            <div className="cursor-pointer hover:text-gray-800" title="Notifications" onClick={toggleDropdown}>
                <FaBell size={24} />
                {notifications.some(notification => !notification.read) && (
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                )}
            </div>

            {/* Dropdown Notification List */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white shadow-lg rounded-md z-10">
                    <div className="p-4 border-b">
                        <h2 className="font-semibold text-lg text-gray-500">Notifications</h2>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-4 text-gray-500 text-center">No notifications.</div>
                        ) : (
                            notifications.map(notification => (
                                <div
                                    key={notification.id}
                                    className={`p-4 flex justify-between items-start text-gray-500 ${notification.read ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}
                                    onClick={() => markAsRead(notification.id)}
                                >
                                    <div>
                                        <p className="text-sm sm:text-base">{notification.message}</p>
                                        <p className="text-xs text-gray-500">{notification.time}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="p-2 text-right">
                        <button
                            className="text-gray-500 hover:text-gray-800 text-sm sm:text-base"
                            onClick={clearAllNotifications} // Clear all notifications
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MentorDashboardNotifications;
