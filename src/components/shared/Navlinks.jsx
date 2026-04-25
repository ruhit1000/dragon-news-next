'use client'
import { getCategories } from '@/lib/data-fetch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = ({ categories }) => {

    const links = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "About", href: "/about-us" },
        { id: 3, name: "Career", href: "/career" },
    ]

    const pathname = usePathname();

    return (
        <>
            {
                links.map(link => (
                    <li key={link.id}><Link className={pathname === link.href ? 'text-blue-500 underline' : ''} href={link.href}>{link.name}</Link></li>
                ))
            }
            <li className='lg:hidden'>
                <a>Categories:</a>
                <ul className="p-2 space-y-2">
                    {
                        categories.map(category => <li key={category.category_id}>{category.category_name}</li>)
                    }
                </ul>
            </li>
        </>
    );
};

export default Navlinks;