import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaCircleInfo } from "react-icons/fa6";
import { HiMiniPhoto } from "react-icons/hi2";

function AccountForm() {
    const [formData, setFormData] = useState({
        profilePicture: null,
        coverPicture: null,
        name: '',
        phone: '',
        country: 'India',
        email: '',
        gender: '',
        timeZone: '',
        languages: '',
        about: '',
        responseTime: '',
        responseHours: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Validate images
        if (!formData.profilePicture) {
            newErrors.profilePicture = "Profile picture is required";
        }
        if (!formData.coverPicture) {
            newErrors.coverPicture = "Cover picture is required";
        }

        if (!formData.name) {
            newErrors.name = "Name is required";
        } else if (formData.name.length < 3 || formData.name.length > 50) {
            newErrors.name = "Name must be between 3 and 50 characters";
        }

        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be between 7 and 15 digits, and can only contain numbers.";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!formData.gender) {
            newErrors.gender = "Gender is required";
        }

        if (!formData.timeZone) {
            newErrors.timeZone = "Time zone is required";
        }

        if (!formData.languages) {
            newErrors.languages = "Language is required";
        }

        if (!formData.about) {
            newErrors.about = "About is required";
        }

        if (!formData.responseTime) {
            newErrors.responseTime = "Response time is required";
        }

        if (!formData.responseHours) {
            newErrors.responseHours = "Response hours are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        const isValid = validateForm(); // Validate the form

        if (isValid) {
            console.log("Form Data Submitted", formData);
            // Here you can handle your form submission logic (e.g., send data to the server)
        } else {
            console.log("Form has errors", errors);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const phoneNumberChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            // Remove any non-digit characters
            const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters
            setFormData((prevData) => ({
                ...prevData,
                [name]: numericValue
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            const file = files[0];
            setFormData((prev) => ({ ...prev, [name]: file }));

            // Clear any previous error for this field
            setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        }
    };

    const renderError = (field) => {
        return errors[field] ? (
            <p className="text-red-600 text-sm text-start mt-1">{errors[field]}</p>
        ) : null;
    };

    return (
        <div className=" p-4 w-full bg-white text-gray-500 shadow-lg rounded-md sm:w-[95%] md:w-[80%] lg:w-[70%] xl:w-[999px]">

            <h2 className="text-2xl font-semibold mb-6 text-gray-500">Account Settings</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                {/* Profile and Cover Photo Section */}
                <div className="flex space-x-6">
                    {/* Profile Photo Upload Section */}
                    <div className="flex flex-col items-center space-y-4 w-1/2 border p-4 rounded-lg">
                        {/* If no profile picture, show avatar icon */}
                        {formData.profilePicture ? (
                            <img
                                src={URL.createObjectURL(formData.profilePicture)}
                                alt="Profile"
                                className="h-32 w-32 rounded-full object-cover border"
                            />
                        ) : (
                            <FaUserCircle className="h-32 w-32 text-gray-400" /> // Default avatar icon
                        )}
                        <div className="w-full text-center">
                            <div className="relative flex items-center">
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    id="profilePicture"
                                    name="profilePicture"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                                />
                                {/* Styled input placeholder */}
                                <input
                                    type="text"
                                    placeholder="Upload profile photo"
                                    className="w-full border border-gray-300 rounded-l-md text-sm text-white p-2 cursor-pointer"
                                    readOnly
                                />
                                {/* Browse button */}
                                <label
                                    htmlFor="profilePicture"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-r-md text-sm cursor-pointer"
                                >
                                    Browse
                                </label>
                            </div>
                            <span className="flex flex-row items-center gap-2 text-xs text-start text-gray-500 mt-1"><FaCircleInfo />  For better view use 300 x 150px</span>
                            {renderError('profilePicture')}
                        </div>
                    </div>

                    {/* Cover Photo Upload Section */}
                    <div className="flex flex-col items-center space-y-4 w-1/2 border p-4 rounded-lg">
                        {/* If no cover picture, show default cover image */}
                        {formData.coverPicture ? (
                            <img
                                src={URL.createObjectURL(formData.coverPicture)} // Default cover image
                                alt="Cover"
                                className="h-32 w-full object-cover border"
                            />
                        ) : (
                            <div className="h-32 w-full bg-gray-200 flex items-center justify-center border">
                                <HiMiniPhoto className="h-16 w-16 text-gray-400" />
                            </div>
                        )}
                        <div className="w-full text-center">
                            <div className="relative flex items-center">
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    id="coverPicture"
                                    name="coverPicture"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                                />
                                {/* Styled input placeholder */}
                                <input
                                    type="text"
                                    placeholder="Upload cover photo"
                                    className="w-full border border-gray-300 rounded-l-md text-sm text-gray-500 p-2 cursor-pointer"
                                    readOnly
                                />
                                {/* Browse button */}
                                <label
                                    htmlFor="coverPicture"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-r-md text-sm cursor-pointer"
                                >
                                    Browse
                                </label>
                            </div>
                            <span className="flex flex-row items-center gap-2 text-xs text-start text-gray-500 mt-1"><FaCircleInfo />For better view use 1600 x 1000px</span>
                            {renderError('coverPicture')}
                        </div>
                    </div>
                </div>
                {/* Form Fields */}
                <div className="flex space-x-6">
                    <div className="flex flex-col space-y-4 w-1/2">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                maxLength={50}
                                value={formData.name}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                maxLength={15}
                                pattern="[0-9]*"
                                inputMode="numeric"
                                onChange={phoneNumberChange}
                                className="border rounded-md p-2 w-full"
                                required
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Country</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            >
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 w-1/2">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700">Time Zone</label>
                            <select
                                name="timeZone"
                                value={formData.timeZone}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            >
                                <option value="">Select Time Zone</option>
                                <option value="IST">IST (Indian Standard Time)</option>
                                <option value="EST">EST (Eastern Standard Time)</option>
                                <option value="PST">PST (Pacific Standard Time)</option>
                                <option value="CET">CET (Central European Time)</option>
                            </select>
                            {errors.timeZone && <p className="text-red-500 text-sm">{errors.timeZone}</p>}
                        </div>
                    </div>
                </div>
                {/* Language and About */}
                <div>
                    <label className="block text-gray-700">Language</label>
                    <input
                        type="text"
                        name="languages"
                        value={formData.languages}
                        onChange={handleInputChange}
                        maxLength={30}
                        className="border rounded-md p-2 w-full"
                        placeholder="Enter languages separated by commas"
                        required
                    />
                    {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
                </div>
                <div>
                    <label className="block text-gray-700">About</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleInputChange}
                        maxLength={2000}
                        className="border rounded-md p-2 w-full"
                        placeholder="Tell us about yourself"
                        rows="3"
                        required
                    ></textarea>
                    {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}
                </div>
                {/* Response Time and Hours */}
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-[450px]">
                    <div className="flex flex-col space-y-4 w-1/2">
                        <div>
                            <label className="block text-gray-700">Respond In</label>
                            <input
                                type="text"
                                name="responseTime"
                                value={formData.responseTime}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            />
                            {errors.responseTime && <p className="text-red-500 text-sm">{errors.responseTime}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 w-1/2">
                        <div>
                            <label className="block text-gray-700">Hours</label>
                            <select
                                name="responseHours"
                                value={formData.responseHours}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 w-full"
                                required
                            >
                                <option value="">Select Hours</option>
                                <option value="1">1 Hour</option>
                                <option value="2">2 Hours</option>
                                <option value="3">3 Hours</option>
                                <option value="4">4 Hours</option>
                                <option value="5">5 Hours</option>
                            </select>
                            {errors.responseHours && <p className="text-red-500 text-sm">{errors.responseHours}</p>}
                        </div>
                    </div>
                </div>

                {/* Save Changes Button */}
            </form>
            <div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-fit mt-10 bg-blue-500 text-white p-3 rounded-sm hover:bg-blue-600 transition duration-300"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default AccountForm;
