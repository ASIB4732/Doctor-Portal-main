import React from 'react';
import img from '../../../images/5790-removebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone } from '@fortawesome/free-solid-svg-icons'
const OurDoctors = () => {
    return (
        <div>
            <h4 style={{color:'#1CC7C1',textAlign:'center',marginTop:'110px',marginBottom:'70px'}}>Our Doctors</h4>
            <div className='row'>

                <div style={{textAlign:'center'}} className="col-md-4">
                <img style={{width:'100%'}} src={img} alt="" />
                <h5 style={{marginBottom:'10px',marginTop:'20px'}}>Dr. Caudi</h5>
                <p><FontAwesomeIcon icon={faPhone} />+61 452 200 126</p>
                </div>

                <div style={{textAlign:'center'}} className="col-md-4">
                <img style={{width:'100%'}} src={img} alt="" />
                <h5 style={{marginBottom:'10px',marginTop:'20px'}}>Dr. Caudi</h5>
                <p><FontAwesomeIcon icon={faPhone} />+61 452 200 126</p>
                </div>

                <div style={{textAlign:'center'}} className="col-md-4">
                <img style={{width:'100%'}} src={img} alt="" />
                <h5 style={{marginBottom:'10px',marginTop:'20px'}}>Dr. Caudi</h5>
                <p><FontAwesomeIcon icon={faPhone} />+61 452 200 126</p>
                </div>
            </div>
        </div>
    );
};

export default OurDoctors;