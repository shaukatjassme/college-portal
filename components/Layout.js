import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaBook, FaCog, FaChevronDown, FaGraduationCap, FaCalendarAlt, FaLaptop, FaTools, FaBell, FaUserCircle } from 'react-icons/fa';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set to true by default
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleCourses = () => {
        setIsCoursesOpen(!isCoursesOpen);
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white h-full w-64 transition-transform duration-100 ease-in-out transform ${isSidebarOpen ? 'translate-x-0 relative' : '-translate-x-full fixed'}`}>
            <div className="p-4 text-lg font-bold flex justify-between items-center mt-4">
                    <span>Dashboard</span>
                </div>

                <ul className="mt-6">
                    {/* Courses Menu Item with Submenu */}
                    <li>
                        <div className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={toggleCourses}>
                            <FaBook className="mr-2" />
                            <span>Classes</span>
                            <FaChevronDown className={`ml-auto transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isCoursesOpen && (
                            <ul className="pl-8 mt-2">
                                <Link href="/classes/firstyear" className="py-1 hover:bg-gray-700 cursor-pointer flex items-center">
                                    <FaGraduationCap className="mr-2" /> 1st Year
                                </Link>
                                <li className="py-1 hover:bg-gray-700 cursor-pointer flex items-center">
                                    <FaCalendarAlt className="mr-2" /> 2nd Year
                                </li>
                                <li className="py-1 hover:bg-gray-700 cursor-pointer flex items-center">
                                    <FaLaptop className="mr-2" /> Ms Office
                                </li>
                                <li className="py-1 hover:bg-gray-700 cursor-pointer flex items-center">
                                    <FaTools className="mr-2" /> DIT
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Settings Menu Item with Submenu */}
                    <li>
                        <div className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={toggleSettings}>
                            <FaCog className="mr-2" />
                            <span>Settings</span>
                            <FaChevronDown className={`ml-auto transition-transform ${isSettingsOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isSettingsOpen && (
                            <ul className="pl-8 mt-2">
                                <li className="py-1 hover:bg-gray-700 cursor-pointer">Profile</li>
                                <li className="py-1 hover:bg-gray-700 cursor-pointer">Account Settings</li>
                                <li className="py-1 hover:bg-gray-700 cursor-pointer">Privacy</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            {/* Main Content Wrapper */}
            <div className={`flex flex-col flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-0' : 'ml-0'}`}>
                {/* Header */}
                <header className="flex items-center justify-between mb-4 bg-gray-800 text-white p-4 shadow-md  w-full z-10">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 bg-gray-700 rounded focus:outline-none hover:bg-gray-600"
                    >
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-400 rounded p-2 w-64 focus:outline-none focus:border-blue-500"
                        />
                        <button className="ml-4 p-2 hover:text-gray-300 focus:outline-none">
                            <FaBell />
                        </button>
                        <button className="ml-4 p-2 hover:text-gray-300 focus:outline-none">
                            <FaUserCircle />
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mt-1 flex-grow transition-all duration-300 ease-in-out">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
