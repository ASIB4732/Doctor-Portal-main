import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData=[
        {
            title:'Openimg Hours',
            description:'we are open 7 days',
            icon:faClock,
            background:'primary'
        },
        {
            title:'Visit Our Location',
            description:'Brooklyn, NY 10003 USA',
            icon:faMapMarker,
            background:'dark'
        },
        {
            title:'Call Us Now',
            description:'+8801731154562',
            icon:faPhone,
            background:'primary'
        }
    ]
    return (
            <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
            {
                infosData.map(data=><InfoCard info={data}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;