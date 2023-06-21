import Link from 'next/link';
import React from 'react';

const blogs = [
    {
        id : 1,
        year : 2011,
        title : "blog 1",
    },
    {
        id : 2,
        year : 2012,
        title : "blog 2",
    },
    {
        id : 3,
        year : 2013,
        title : "blog 3",
    },
    {
        id : 4,
        year : 2014,
        title : "blog 4",
    },
    {
        id : 5,
        year : 2015,
        title : "blog 5",
    },
    {
        id : 6,
        year : 2016,
        title : "blog 6",
    },
]


const BlogsPage = () => {
    return (
        <div className='container mx-auto'>
            <h1>blog page</h1>
            <div className=' mt-7 flex gap-6'>
                {
                    blogs.map(({id, year, title}) => <Link className='m-6 p-6 border border-2 rounded-md text-3xl font-semibold' href={{
                        pathname : `/blogs/${year}/${id}`,
                        query : {
                            title : title
                        }
                    }} key={id}>{title}</Link>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;