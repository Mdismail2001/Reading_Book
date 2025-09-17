import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch("/public/data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <h1 className='text-2xl text-center mt-2 font-bold'>Total Books: {blogs.length}</h1>
            <div className="all-blogs grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}> </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;