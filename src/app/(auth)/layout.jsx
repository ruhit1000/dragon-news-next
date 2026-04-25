import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className='py-5'>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;