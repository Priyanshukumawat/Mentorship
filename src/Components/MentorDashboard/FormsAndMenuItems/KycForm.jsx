import React, { useState } from 'react';

function KycForm() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedCountry || !documentType || !file) {
            setErrorMessage('All fields are required. Please fill them in.');
            return;
        }

        // Prepare the form data for submission
        const formData = new FormData();
        formData.append('country', selectedCountry);
        formData.append('documentType', documentType);
        formData.append('file', file);

        try {
            // Example: Send the data to a backend endpoint
            // Please Enter The Correct API. 
            const response = await fetch('https://your-backend-api/kyc-submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('KYC submission successful!');
                console.log('Data submitted successfully!');
                // Optional: Reset form fields after submission
                setSelectedCountry('');
                setDocumentType('');
                setFile(null);
                setErrorMessage('');
            } else {
                const errorData = await response.json();
                setErrorMessage(`Submission failed: ${errorData.message}`);
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
            console.error('Submission error:', error);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 5 * 1024 * 1024) { // Max size: 5MB
            setErrorMessage('File size exceeds the limit of 5MB.');
            setFile(null);
        } else {
            setFile(selectedFile);
            setErrorMessage('');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-center">KYC Verification</h2>
            <p className="text-gray-600 mb-4 text-center">
                Requires a valid government-issued ID (National ID, Passport, Driver's License).
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Country Dropdown */}
                <div>
                    <label className="block font-medium mb-2">Issuing Country/Region</label>
                    <select
                        className="w-full p-2 border rounded-md"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        required
                    >
                        <option value="">Select Country/Region</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>

                {/* Document Type Dropdown */}
                <div>
                    <label className="block font-medium mb-2">Document Type</label>
                    <select
                        className="w-full p-2 border rounded-md"
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                        required
                    >
                        <option value="">Select Document Type</option>
                        <option value="National ID">National ID</option>
                        <option value="Passport">Passport</option>
                        <option value="Driver's License">Driver's License</option>
                    </select>
                </div>

                {/* File Upload Input */}
                <div>
                    <label className="block font-medium mb-2">Upload Document</label>
                    <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        onChange={handleFileChange}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div className="text-red-600 text-sm mb-2">{errorMessage}</div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Select and Continue
                </button>
            </form>
        </div>
    );
}

export default KycForm;
