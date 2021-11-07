import React from 'react';
 import img from '../../../images/001-dental.png'
 import img1 from '../../../images/tooth (1).png'
 import img2 from '../../../images/tooth.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const serviceData=[ 
        {
            name:'Fluride treatment',
            img:img
        },
        {
            name:'Cavity Filling',
            img:img1
        },
        {
            name:'Teeth Whitening',
            img:img2
        }
    ]
    return (
        <section>
            <div className='text-center mt-5'>
            <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
            <h2>Services We Provide</h2>
        </div>

        <div className='d-flex justify-content-center'>
            <div className='w-75 row mt-5 pt-5'>
            {
                serviceData.map(data=><ServiceDetail service={data}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;