import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>
                sidebar
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;