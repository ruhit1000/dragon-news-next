import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <FadeLoader />
        </div>
    );
};

export default Loading;