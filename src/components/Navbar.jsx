import Link from 'next/link';
import React from 'react';

const navLinks = [
    {
        path : "/",
        title : "Home",
    },
    {
        path : "/about",
        title : "About",
    },
    {
        path : "/blogs",
        title : "Blogs",
    },
    {
        path : "/contact",
        title : "Contact",
    },
    {
        path : "/dashboard",
        title : "Dashboard",
    },
]


const Navbar = () => {

    return (
        <nav className='flex items-center justify-between container mx-auto'>
            <h3>Basic Next</h3>
        
            <ul className='flex items-center justify-center gap-x-4'>
                {
                    navLinks.map(({path, title}) => 
                        <li key={path}>
                            <Link href={path}>{title}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navbar;