import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SingleBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://cycle-tools-server.onrender.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blog, id])

    const handleBack = () => {
        navigate('/blog')
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={blog.img} alt="Shoes" className="rounded-xl md:w-[500px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white text-2xl">{blog.question}</h2>
                <span className='underline'>Author: <span className='text-orange-500'>{blog.name}</span></span>
                <p className='md:w-[800px]'>{blog.description}</p>
                <div className="card-actions py-5">
                    <button onClick={handleBack} className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold border-2 border-orange-500">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;