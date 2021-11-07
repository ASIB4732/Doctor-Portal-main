import React from 'react';
import './MakeAppointment.css'
import img from '../../../images/5790-removebg.png'
const MakeAppointment = () => {
    return (
        <section className='make-appointment row'>
                    <div className='col-md-5 '>
                        <img src={img} alt="" />
                    </div>

                    <div className='col-md-7 text-box text-white pt-5'>
                         <h5 style={{color:'#1CC7C1'}} className='text-uppercase'>appointment</h5>
                         <h1 className='mt-4'>Make an appointment <br />Today</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae alias velit? Accusantium, officiis suscipit.</p>
                         <button style={{backgroundColor:'#1CC7C1'}} className='btn '> Learn more</button>
                    </div>            
        </section>
    );
};

export default MakeAppointment;