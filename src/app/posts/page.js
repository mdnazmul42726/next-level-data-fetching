import React from 'react';

const PostsComponent = async () => {

    const res = await fetch('http://localhost:5000/post', { next: { revalidate: 5 } });
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1>this is a posts components {data.length}</h1>
        </div>
    );
};

export default PostsComponent;