import React from 'react';

const SinglePostComponent = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/post/${params.id}`);
    const data = await res.json();

    return (
        <div>
            <p>this is single post</p>
            <h1 className='text-3xl'>{data.name}</h1>
        </div>
    );
};

export default SinglePostComponent;