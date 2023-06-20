import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <nav>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
            </nav>
            {children}
        </div>
    );
};

export default WithLayout;