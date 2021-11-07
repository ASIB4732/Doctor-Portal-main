import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nevber from '../../Shared/navber/Nevber';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointments from '../BookAppointments/BookAppointments';

const Appointment = () => {
    const [setDateAndTime, setSetDateAndTime]=useState(new Date())

    const handelDateChange=date=>{
        setSetDateAndTime(date)
    }
    
    
    return (
        <div>
            <Nevber></Nevber>
            <AppointmentHeader handelDateChange={handelDateChange}></AppointmentHeader>
            <BookAppointments date={setDateAndTime}></BookAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;