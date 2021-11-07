import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Icon.css'
const Link4 = () => {
    return (
        <div>
           <Link className='text-secondary ' to='/'>New York - 101010 Hudson .</Link><br />
           <Link className='text-secondary ' to='/'>Yards .</Link><br />
           <div className='mt-5'>
               <Link className='text-secondary' to='/'><FontAwesomeIcon  style={{color:'#1CC7C1',width:'60px',fontSize:'40px'}} icon={faFacebookF} /></Link>
               <Link className='text-secondary ' to='/'><FontAwesomeIcon  style={{color:'#1CC7C1',width:'60px',fontSize:'40px'}} icon={faGooglePlusG} /></Link>
               <Link className='text-secondary ' to='/'><FontAwesomeIcon  style={{color:'#1CC7C1',width:'60px',fontSize:'40px'}} icon={faTwitter} /></Link>
           </div>
           
        </div>
    );
};

export default Link4;