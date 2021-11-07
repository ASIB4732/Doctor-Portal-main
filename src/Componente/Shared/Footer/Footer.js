import React from 'react';
import './Footer.css'
import Link1 from './Link1';
import Link2 from './Link2';
import Link3 from './Link3';
import Link4 from './Link4';
const Footer = () => {
    return (
        <footer className='row footer-Margin'>
            <div className="col-md-3 Link1">
              <Link1></Link1>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>Service</h5>
              <Link2></Link2>
            </div>
            <div className="col-md-3">
            <h5 style={{color:'#1CC7C1'}}>Oral Health</h5>
              <Link3></Link3>
            </div>
            <div className="col-md-3">
            <h5 style={{color:'#1CC7C1'}}>Our Address</h5>
              <Link4></Link4>
            </div>
        </footer>
    );
};

export default Footer;