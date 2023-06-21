import Navbar from '@/components/Navbar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default WithLayout;