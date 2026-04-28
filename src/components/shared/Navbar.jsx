import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import Navlinks from './Navlinks';
import { getCategories } from '@/lib/data-fetch';
import UserDetails from './UserDetails';

const Navbar = async () => {
    const categories = await getCategories();

    const links = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "About", href: "/about-us" },
        { id: 3, name: "Career", href: "/career" },
    ]

    return (
        <div className="navbar bg-base-100 px-5 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Navlinks categories={categories} />
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Navlinks categories={categories} />
                </ul>
            </div>
            <div className="navbar-end">
                {/* <ThemeToggle /> */}
                <UserDetails />
            </div>
        </div>
    );
};

export default Navbar;