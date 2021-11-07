import React from 'react';
import MakeAppointment from '../Appointment/MakeAppointment';
import Exception from '../Exception/Exception';
import Header from '../header/Header';
import TESTIMONIAL from '../TESTIMONIAL/TESTIMONIAL';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import OurDoctors from '../OurDoctors/OurDoctors';
import CONTACTUS from '../CONTACTUS/CONTACTUS';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exception></Exception>
            <MakeAppointment></MakeAppointment>
            <TESTIMONIAL></TESTIMONIAL>
            <Blogs></Blogs>
            <OurDoctors></OurDoctors>
            <CONTACTUS></CONTACTUS>
            <Footer></Footer>
        </div>
    );
};

export default Home;