import RightSideBar from '@/components/Homepage/RightSideBar/RightSideBar';
import React from 'react';

const NewsDetailsLayout = ({ children }) => {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-12'>
            <div className='lg:col-span-3'>
                {children}
            </div>
            <div className='lg:col-span-1'>
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsDetailsLayout;