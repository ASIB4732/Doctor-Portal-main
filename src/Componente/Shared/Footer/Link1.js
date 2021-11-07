import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'
const Link1 = () => {
    return (
        <div>
            <Link className='text-secondary' to='/'>Emergency Dental Care .</Link><br />
            <Link style={{marginBottom:'3px'}} className='text-secondary' to='/'>Check Up .</Link><br />
            <Link className='text-secondary' to='/'>Treatment of Personal Diseases .</Link><br />
            <Link className='text-secondary' to='/'>Tooth Extraction .</Link><br />
            <Link className='text-secondary' to='/'>Check Up .</Link>
        </div>
    );
};

export default Link1;