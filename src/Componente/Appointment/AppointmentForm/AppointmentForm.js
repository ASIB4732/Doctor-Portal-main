import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      data.name=info.name
      data.phone=info.phone
      data.email=info.email
      data.age=info.age
      data.weight=info.weight
      data.gender=info.gender
      data.service=appointmentOn;
      data.date =date;
      data.created=new Date();
      console.log(data);
      fetch('http://localhost:8080/addAppointment',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(success=>{
          if(success){
            closeModal()
          alert('Appointment crieated successfully')
          }
          
        
      })
      
    }


    const [info,SetInfo]=useState({
      name:'',
      phone:'',
      email:'',
      age:'',
      weight:'',
      gender:''
    })

    const HandelChinge=(e)=>{
      const addInfo={...info}
    if(e.target.name === 'name'){
      addInfo.name=e.target.value
      SetInfo(addInfo)
    }
    if(e.target.name === 'phone'){
      addInfo.phone=e.target.value
      SetInfo(addInfo)
    }
    if(e.target.name === 'email'){
      addInfo.email=e.target.value
      SetInfo(addInfo)
    }
    if(e.target.name === 'age'){
      addInfo.age=e.target.value
      SetInfo(addInfo)
    }
    if(e.target.name === 'weight'){
      addInfo.weight=e.target.value
      SetInfo(addInfo)
    }
    if(e.target.name === 'gender'){
      addInfo.gender=e.target.value
      SetInfo(addInfo)
    }
    }
    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-brand text-center'>{appointmentOn}</h2>
        <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>
        <form  onSubmit={handleSubmit(onSubmit)} className="p-5">
                    <div className="form-group">
                        <input required onChange={HandelChinge} type="text" name="name" placeholder="Your Name" className="form-control" />
                    </div>

                    <div className="form-group">
                        <input onChange={HandelChinge} required type="text" name="phone" placeholder="Phone Number" className="form-control" />
                    </div>

                    <div className="form-group">
                        <input onChange={HandelChinge} required type="text" name="email" placeholder="Email" className="form-control" />
                    </div>

                    <div className="form-group row">
                        <div className="col-4">

                            <select onChange={HandelChinge} className="form-control" name="gender" >
                                <option required disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                        </div>

                        <div className="col-4">
                            <input onChange={HandelChinge} className="form-control" name="age" placeholder="Your Age" type="number" />
                        </div>
                        
                        <div className="col-4">
                            <input onChange={HandelChinge} className="form-control" name="weight" placeholder="Weight" type="number" />
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">submit</button>
                    </div>
                
        </form>
      </Modal>
        </div>
    );
};

export default AppointmentForm;