import React from 'react';
import './BlogPart.css'
const BlogCard = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className="boxs">
            <div className='header-Part align-items-center'>
                <img src={data.img} alt="" />
                <div>
                <h4>{data.name}</h4>
                <p>{data.date}</p>
                </div>
            </div>

            <div className="discriptions">
                <h4>{data.title}</h4>
                <p>{data.discription}</p>
            </div>
            </div>
        </div>
    );
};

export default BlogCard;