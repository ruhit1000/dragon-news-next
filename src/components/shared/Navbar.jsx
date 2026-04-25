import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import Navlinks from './Navlinks';
import { getCategories } from '@/data/data-fetch';

const Navbar = async () => {
    const categories = await getCategories();

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
            <div className="navbar-end flex items-center gap-4">
                {/* <ThemeToggle /> */}
                <div className="avatar">
                    <div className="w-12">
                        <Image src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" alt="User" width={40} height={40} className='h-10 w-10 rounded-full' />
                    </div>
                </div>
                <Link
                    href={"/login"}
                    className='btn btn-neutral px-10 mb-1'
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;