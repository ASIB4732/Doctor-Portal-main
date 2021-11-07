import React from 'react';
import { Link } from 'react-router-dom';
import chsir from '../../../images/Mask Group 1.png'
const HeaderMain = () => {
    return (
            <main style={{height:'600px'}} className='row d-flex align-items-center'>
               <div className="col-md-4 offset-md-1">
                 <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here </h1>
                 <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla eaque accusamus minus molestias nam, quae delectus. Culpa sed quas sequi praesentium maiores ea, reprehenderit corrupti eveniet ipsam harum! Non totam culpa qui cum tempora eum sequi numquam ducimus facilis exercitationem dolore facere veniam dolorem et natus nihil, iusto itaque possimus</p>
                 <Link to='/Appointment'>
                 <button style={{backgroundColor:"#1CC7C1"}} className='btn'>GET APPOINTMENT</button>
                 </Link>
               </div>
               <div className="col-md-6">
                 <img src={chsir} className='img-fluid' alt="" />
               </div>
            </main>
    );
};

export default HeaderMain;