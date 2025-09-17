import React from 'react';
import { IoMdBookmarks } from "react-icons/io";

const Blog = ({blog, btnHandle}) => {
    // console.log(blog)
    return (
        <div className=' mt-5 '> 
            <div className="card-body bg-gray-950 ">
                <figure>
                    <img
                    className='h-90 w-full '
                    src={blog.books[0].book_image }
                    alt="Image Not Found" />
                </figure>

                <div className="flex gap-3 items-center">
                    <img className='w-10 h-10 rounded-full' src={blog.author_image} alt="Not found" />
                    <p>Name: {blog.name}</p>
                    <span>Death: {blog.death_year}</span>
                </div>
                <h4 className='text-2xl'>Book Name: {blog.books[0].title}</h4>
                <div className="card-actions  justify-between">
                    <button onClick={ () => btnHandle(blog)}><IoMdBookmarks size={50} /></button>  
                    <button className="btn btn-primary rounded-3xl">Mark as read</button>
                </div>
            </div>
                    
        
        </div>
    );
};

export default Blog;