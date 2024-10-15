import React, { useState } from 'react';

function DashboardViewProfile() {
    const [demoRequests, setDemoRequests] = useState([
        {
            id: 1,
            name: 'Ramesh',
            email: 'Ramesh@example.com',
            activestatus: 'Active 2hr ago',
            status: 'Pending',
            info: 'Joined at 07 Sep 2024',
            joinedAt: '2024-09-07'
        },
        {
            id: 2,
            name: 'Suresh Nagpal',
            email: 'Snagpal@example.com',
            activestatus: 'Active 3hr ago',
            status: 'Accepted',
            info: 'Joined at 07 Jan 2024',
            joinedAt: '2024-01-07'
        },
        {
            id: 3,
            name: 'Micchel Joshi',
            email: 'Joshi@example.com',
            activestatus: 'Active yesterday',
            status: 'Declined',
            info: 'Joined at 07 Sep 2024',
            joinedAt: '2024-10-07'
        },
        {
            id: 4,
            name: 'Michael Sharma',
            email: 'Sharmam@example.com',
            activestatus: 'Active yesterday',
            status: 'Declined',
            info: 'Joined at 22 Sep 2024',
            joinedAt: '2024-09-22'
        },
        {
            id: 5,
            name: 'Sudhesh Agrawal',
            email: 'Sagrawal@example.com',
            activestatus: 'Active yesterday',
            status: 'Accepted',
            info: 'Joined at 07 Aug 2024',
            joinedAt: '2024-08-15'
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Items per page
    const [sortOption, setSortOption] = useState('');

    // Filter and sort demo requests based on search query and selected sort option
    const filteredRequests = demoRequests
        .filter(request =>
            request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            request.status.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === 'date') {
                return new Date(b.joinedAt) - new Date(a.joinedAt); // Sort by joined date
            } else if (sortOption === 'mentor') {
                return a.name.localeCompare(b.name); // Sort by mentor name
            } else if (sortOption === 'status') {
                return a.status.localeCompare(b.status); // Sort by status
            }
            return 0;
        });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRequests = filteredRequests.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

    const handleAccept = (id) => {
        const updatedRequests = demoRequests.map(request =>
            request.id === id ? { ...request, status: 'Accepted' } : request
        );
        setDemoRequests(updatedRequests);
    };

    const handleDecline = (id) => {
        const updatedRequests = demoRequests.map(request =>
            request.id === id ? { ...request, status: 'Declined' } : request
        );
        setDemoRequests(updatedRequests);
    };

    const handleSearch = (e) => setSearchQuery(e.target.value);
    const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const goToPrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    return (
        <div className='w-full p-4 space-y-5'>
            <h1 className="text-2xl font-semibold mb-4">View Demo Requests</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                <input
                    type="text"
                    placeholder="Search by name or status..."
                    className="p-2 border rounded-md w-full sm:w-auto mb-2 sm:mb-0"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                {/* Sort Filter */}
                <select
                    className="p-2 border rounded-md w-full sm:w-auto ml-0 sm:ml-4"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="date">Joined Date (ascending)</option>
                    <option value="mentor">Mentor Name (A to Z)</option>
                    <option value="status">Status (Accepted, Declined, Pending)</option>
                </select>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-black bg-white">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 hover:bg-gray-200">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Profile</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Information</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRequests.length > 0 ? (
                            currentRequests.map((request, index) => (
                                <tr
                                    key={request.id}
                                    className="bg-white border-b hover:bg-gray-200"
                                >
                                    <td className="px-6 py-4">{indexOfFirstItem + index + 1}</td>
                                    <td className="px-6 py-4 flex items-center space-x-4">
                                        {/* Profile Image */}
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${request.name}`}
                                            alt={`${request.name}`}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        {/* Name, Email, and Status */}
                                        <div>
                                            <p className="font-medium text-gray-900">{request.name}</p>
                                            <p className="text-sm text-gray-500">{request.email}</p>
                                            <p className="text-sm text-gray-500">{request.activestatus}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{request.status}</td>
                                    <td className="px-6 py-4">{request.info}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <div className='flex justify-start items-center gap-2'>
                                            <button
                                                className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700"
                                                onClick={() => handleAccept(request.id)}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                                                onClick={() => handleDecline(request.id)}
                                            >
                                                Decline
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b hover:bg-gray-200">
                                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                    No results found for "{searchQuery}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={goToPrevPage}
                    className={`px-4 py-2 border rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={goToNextPage}
                    className={`px-4 py-2 border rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default DashboardViewProfile;
