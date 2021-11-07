import React, { useState } from 'react';
import './Contactus.css'
const CONTACTUS = () => {
    const[info,setInfo]=useState({
        email:'',
        Subject:'',
        Message:''
    })

    return (
        <div className='CONTACTUS'>
        
        <div style={{textAlign:'center'}} className='CONTACTUS-box margin'>
           <h4 style={{color:'#1CC7C1'}}><b>CONTACT US</b> </h4>
           <h2><b className='text-white'>Always Connect with us </b></h2>
         </div>
        
             <form action="" style={{textAlign:'center'}}>
             <input id='email' className='input-text' type="email" placeholder='Email Address*' required/>
             <br />
             <input id='Subject' className='input-text' type="text" placeholder='Subject*' required/>
             <br />
             <input id='Message' className='input-Message ' type="text" name="" id="" placeholder='Your Message*' required/>
             <br />
             <input className='submit btn' type="submit" value="submit" />
             </form>
            
        </div>
    );
};

export default CONTACTUS;