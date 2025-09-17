import React, { useEffect } from 'react';

const Blogs = () => {

    useEffect(()=>{
        fetch("/public/data.json")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;