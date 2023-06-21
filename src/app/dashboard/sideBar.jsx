import Link from 'next/link';
import React from 'react';
const sidebarLinks = [
    {
        path : "/dashboard",
        title : "Dashboard"
    },

    {
        path : "/dashboard/add-cart",
        title : "Add cart"
    },

    {
        path : "/dashboard/manage-product",
        title : "Manage product"
    },
    {
        path : "/",
        title : "Home"
    },

]


const Aside = () => {
    return (
       <aside>
        <h2 className='text-3xl font-medium'>Sidebar</h2>
        <ul className='flex-col'>
            {
                sidebarLinks.map(({path, title}) => <li className='my-5 ' key={path}>
                    <Link href={path}>{title}</Link>
                </li>)
            }
        </ul>
       </aside>
    );
};

export default Aside;