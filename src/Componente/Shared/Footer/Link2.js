import React from 'react';
import {Link} from "react-router-dom";

const Link2 = () => {
    return (
        <div>
            <Link className='text-secondary ' to='/'>Emergency Dental Care .</Link><br />
            <Link className='text-secondary ' to='/'>Check Up</Link><br />
            <Link className='text-secondary ' to='/'>Treatment of Personal Diseases .</Link><br />
            <Link className='text-secondary ' to='/'>Tooth Extraction .</Link><br />
            <Link className='text-secondary ' to='/'>Check Up .</Link><br />
            <Link className='text-secondary ' to='/'>Check Up .</Link><br />
            <Link className='text-secondary ' to='/'>Check Up .</Link>
            
        </div>
    );
};

export default Link2;