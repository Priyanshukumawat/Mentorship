import React, { useState } from 'react';
import Menubar from '../Components/MentorDashboard/Menubar';
import Navbar from '../Components/MentorDashboard/Navbar';
import AccountForm from '../Components/MentorDashboard/FormsAndMenuItems/AccountForm';
import KycForm from '../Components/MentorDashboard/FormsAndMenuItems/KycForm';
import DashboardViewProfile from '../Components/MentorDashboard/FormsAndMenuItems/DashboardViewProfile';

function Dashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null); // Track the active component

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const handleComponentChange = (component) => {
        setActiveComponent(component);
        setSidebarOpen(false); // Optional: Close sidebar after selection
    };

    return (
        <div className="flex bg-gray-200 h-full">
            {/* Sidebar Section */}
            <Menubar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                onComponentChange={handleComponentChange}
            />

            {/* Main Content Section */}
            <div className="w-full">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="p-4 flex justify-center items-start w-full">
                    {/* Render the active component */}
                    {activeComponent === 'dashboardViewProfile' && <DashboardViewProfile />}
                    {activeComponent === 'account' && <AccountForm />}
                    {activeComponent === 'kyc' && <KycForm />}
                    {!activeComponent && (
                        <div className="text-center">
                            <h2 className="text-lg font-semibold">Select an option from the sidebar</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
