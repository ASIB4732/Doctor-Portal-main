import React from 'react';
import './Card.css'
const Card = ({user}) => {
    return (
        <div style={{padding:'8px', borderRadius:'10px'}} className='col-md-4'>
           <div className='boxs'>
           <p>It is a long established fact that
                by the readable content of a lot
               layout. The point of using Lorem
               a more-or-less normal distribu
               to using ‘Content here, content</p>
            
            <div style={{marginTop:'80px'}} className='d-flex'>
                <img className='img' src={user.img} alt="" />
                <div>
                    <h6 style={{color:'#1CC7C1'}}>{user.name}</h6>
                    <p>{user.city}</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Card;