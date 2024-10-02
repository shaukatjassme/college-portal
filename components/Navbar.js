import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <nav className="container mx-auto relative px-4 py-4 flex justify-between items-center header-menu">
                    {/* Logo */}
                    <a className="text-3xl font-bold leading-none" href="#">
                        <Image src="/images/logo.jpg" width={50} height={50} alt="Logo" />
                    </a>

                    {/* Hamburger Icon for Mobile */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>

                    {/* Menu Items */}
                    <ul className={`lg:flex lg:mx-auto lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 absolute lg:static top-16 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                        <li className="group">
                            <Link href="/" className="text-sm text-black-500  font-bold group-hover:border-b-2 group-hover:border-custom-gray pb-1">
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li className="group">
                            <Link href="/blog" className="text-sm text-black-500  font-bold group-hover:border-b-2 group-hover:border-custom-gray pb-1">
                                Blog
                            </Link>
                        </li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li className="group">
                            <Link href="/instructors" className="text-sm text-black-500  font-bold group-hover:border-b-2 group-hover:border-custom-gray pb-1">
                                Instructors
                            </Link>
                        </li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li className="group">
                            <Link href="/courses" className="text-sm text-black-500  font-bold group-hover:border-b-2 group-hover:border-custom-gray pb-1">
                                Courses
                            </Link>
                        </li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li className="group">
                            <Link href="/contact" className="text-sm text-black-500  font-bold group-hover:border-b-2 group-hover:border-custom-gray pb-1">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Sign In / Sign Up Buttons for Large Screens */}
                    <div className="hidden lg:flex space-x-3">
                        <a className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200 " href="#">Sign In</a>
                        <a className="py-2 px-6 bg-blue-500  text-sm text-white font-bold rounded-xl transition duration-200 signup-button" href="#">Sign up</a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
