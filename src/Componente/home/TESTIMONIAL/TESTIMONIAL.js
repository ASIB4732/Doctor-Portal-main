import React from 'react';
import img from '../../../images/Screenshot .png'
import img1 from '../../../images/Ellipse 1.png'
import img2 from '../../../images/Ellipse 2.png'
import img3 from '../../../images/Ellipse 3.png'
import Card from '../Card/Card';
import '../Card/Card.css'
const user=[
    {
        img:img1,
        name:'Winson Herry',
        city:'California'
    },
    {
        img:img2,
        name:'Winson Herry',
        city:'New York'
    },
    {
        img:img3,
        name:'Winson Herry',
        city:'Holiwood'
    }
]
const TESTIMONIAL = () => {
    
    return (
        <div >
            <div className='d-flex TESTIMONIAL d-flex justify-content-evenly align-items-center'>
                <div>
                    <h4 style={{color:'#1CC7C1'}}><b>TESTIMONIAL</b></h4>
                    <h2>What’s Our Patients
                        <br />
                    Says</h2>
                </div>
                <img style={{width:'20em'}} src={img} alt="" />
            </div>


            <div style={{marginRight:'5%', marginLeft:'5%'}} className='row cards d-flex justify-content-evenly'>
            {
                user.map(data=><Card user={data}></Card>)
            }
            </div>
        </div>
    );
};

export default TESTIMONIAL;