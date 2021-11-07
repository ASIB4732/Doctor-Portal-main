import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import img from '../../../images/images.jpg'
import img2 from '../../../images/download (1).jpg'
import img3 from '../../../images/download (2).jpg'
const Blogs = () => {
    const BlogInfo=[
        {
            name:'Rashed Kabir',
            title:'Check at least a doctor in a year for your teeth',
            img:img,
            discription:'It is a long established fact thatby the readable content of a lotlayout. The point ',
            date:'22 Aug 2018'
        },
        {
            name:'Dr. Caudi',
            title:'2 times of brush in a day can Keep you healthy',
            img:img2,
            discription:'It is a long established fact thatby the readable content of a lotlayout. The point ',
            date:'23 April 2019'
        },
        {
            name:'Dr. John Mitchel',
            title:'The tooth cancer is taking a challenge',
            img:img3,
            discription:'It is a long established fact thatby the readable content of a lotlayout. The point ',
            date:'23 April 2019'
        }
        
    ]
    return (
        <div>
            <div style={{textAlign:'center',marginTop:'130px'}}>
            <h3 style={{color:'#1CC7C1'}}><b>Our Blog</b></h3>
            <h2>From Our Blog News</h2>
            </div>

            <div style={{marginTop:'70px',marginRight:'5%', marginLeft:'5%'}}  className='row'>
                {
                 BlogInfo.map(data=><BlogCard data={data}></BlogCard>)
                }
            </div>

        </div>
    );
};

export default Blogs;