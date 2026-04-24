import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-10 text-neutral-600'>
            <Image src={logo} alt="Logo" width={471} height={60} className='mx-auto mb-4' />
            <p className='mb-2.5'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;