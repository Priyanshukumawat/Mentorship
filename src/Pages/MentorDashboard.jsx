import React, { useState } from 'react';
import Menubar from '../Components/MentorDashboard/Menubar';
import Navbar from '../Components/MentorDashboard/Navbar';
import AccountForm from '../Components/MentorDashboard/FormsAndMenuItems/AccountForm';
import KycForm from '../Components/MentorDashboard/FormsAndMenuItems/KycForm';

function Dashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null); // To track the active component

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleComponentChange = (component) => {
        setActiveComponent(component);
        setSidebarOpen(false); // Close sidebar on selection if needed
    };

    return (
        <>
            <div className="flex justify-center items-start bg-gray-200">
                {/* Sidebar Section */}
                <div className='z-10'>
                    <Menubar
                        isOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                        onComponentChange={handleComponentChange}
                    />
                </div>

                {/* Main Content Section */}
                <div className="w-full">
                    <Navbar toggleSidebar={toggleSidebar} />

                    {/* Render the active component based on selection */}
                    <div className="p-4 flex justify-center items-center">
                        {activeComponent === 'account' && <AccountForm />}
                        {activeComponent === 'kyc' && <KycForm />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
