'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = () => {

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
                    <li key={link.id}><Link className={pathname === link.href && 'text-blue-500'} href={link.href}>{link.name}</Link></li>
                ))
            }
        </>
    );
};

export default Navlinks;