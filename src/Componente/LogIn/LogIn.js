import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './LoginPage.css'
import Container from 'react-bootstrap/Container';
import img from '../../images/Group 140.png'
import { useHistory, useLocation } from 'react-router';
const LogIn = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/Home" } };

    const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
  const [logIn, setLogIn]=useState({
      name:'',
      email:'',
      photo:''
  })
   const handelClick=()=>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    const user = result.user;
    const {displayName,email,photoURL}=user;
    const IsSignIn={...logIn}
    IsSignIn.name=displayName
    IsSignIn.email=email
    IsSignIn.photo=photoURL
    localStorage.setItem('data', JSON.stringify(IsSignIn))
    setLogIn(IsSignIn)
    history.replace(from);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
   }

    return (
        <div className="body">
            <Container>
            <div className="row ">
            <div className="col-md-6 p-4 d-flex align-items-center button">
            <div className='box'>
            <button onClick={handelClick} className='btn btn-primary mt-5'>Sign in with gogle</button>
            </div>
            </div>

            <div className="col-md-6 p-4">
            <img className='LoginImg' src={img} alt="" />
            </div>
        </div>
        </Container>
        </div>
        
    );
};

export default LogIn;