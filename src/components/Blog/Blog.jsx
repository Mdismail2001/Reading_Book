import React from 'react';

const Blog = ({blog}) => {
    console.log(blog.books[0])
    return (
        <div className=' mt-5 '> 
            <div className="card-body bg-gray-950 ">
                <figure>
                    <img
                    className='h-90 w-full '
                    src={blog.books[0].book_image }
                    alt="Image Not Found" />
                </figure>

                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
                    
            
        </div>
    );
};

export default Blog;