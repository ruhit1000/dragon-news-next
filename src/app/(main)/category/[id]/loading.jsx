import React from 'react';
import { GridLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-100 flex items-center justify-center'>
            <GridLoader />
        </div>
    );
};

export default loading;