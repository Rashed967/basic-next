import React from 'react';

const SinglePage = ({params}) => {
    const [year, id] = params.segments || []
    console.log(year, id)
    return (
        <div>
            <h1>Single page {year || new Date().getFullYear()} for {id}</h1>
        </div>
    );
};

export default SinglePage;