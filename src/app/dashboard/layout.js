import React from 'react';
import Aside from './sideBar';

const DashboardLayout = ({children}) => {
    return (
        <div className=' container mx-auto'>
            <div>
                <Aside></Aside>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;