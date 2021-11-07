import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointments = ({date}) => {
    const BookingData=[
        {
            id:1,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10
        },
        {
            id:2,
            subject:'Cosmetic Dentistry',
            visitingHour:'10:05 am – 11:30 am',
            totalSpace:10
        },
        {
            id:3,
            subject:'Teeth Cleaning',
            visitingHour:'5:00 pm – 6:30 pm',
            totalSpace:10
        },
        {
            id:4,
            subject:'Cavity Protection',
            visitingHour:'7:00 am – 8:30 am',
            totalSpace:10
        },
        {
            id:5,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10
        },
        {
            id:6,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10
        }
    ]
    return (
        <div>
            <h2 style={{textAlign:'center',color:'#1CC7C1'}} className='mb-5'><b>Available Appointment on {date.toDateString()}</b> </h2>
            <div className="row">
                {
                    BookingData.map(data=><BookingCard booking={data} key={data.id} date={date}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookAppointments;