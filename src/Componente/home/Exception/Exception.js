import React from 'react';
import img from '../../../images/Mask Group 3.png'

const Exception = () => {
    return (
        <section>
            <div className='mt-5 mb-5 row d-flex align-items-center justify-content-evenly'>
            <div className='col-md-6 col-sm-12'>
                <img style={{height:'800px'}} className='p-5' src={img} alt="" />
            </div>
            <div className='col-md-6 col-sm-12'>
                 <div className='ms-5'>
                 <h2 style={{marginBottom:'70px'}}>Exceptional Dental <br /> Care, onYour Terms</h2>
                <p className='mt-5 mb-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam atque autem nesciunt! Exercitationem natus quis maxime nostrum sint voluptate, omnis assumenda accusantium quod, corrupti quae alias mollitia inventore obcaecati nulla deserunt laudantium sapiente quam tempore dolorem eos libero cumque ad eaque! Molestias, doloremque vitae nam exercitationem culpa placeat. Officiis</p>
                <button style={{width:'130px',backgroundColor:'#1CC7C1',borderRadius:'4px',color:'white',marginTop:'70px',height:'35px'}} className='Learn-button btn'>Learn More</button>
                 </div>
            </div>
            </div>
        </section>
    );
};

export default Exception;