import Link from 'next/link';
import React from 'react';

const PostsComponent = async () => {

    const res = await fetch('http://localhost:5000/post', { cache: 'no-store' })
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1>this is a posts components {data.length}</h1>
            {data.map(post => <Link key={post.id} href={`/posts/${post.id}`}> <button className='btn ml-3'>go</button></Link>)}
        </div>
    );
};

export default PostsComponent;