import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const [agree,setAgree]=useState(false)

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const navigate=useNavigate();

  const handleLogin= ()=>{
    navigate('/login');
  }

  if(user){
    console.log('user',user)
  }
  const handleRegister = async (event) =>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    // const agree =event.target.terms.checked;

    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName: name });
     console.log('Updated profile');
     navigate('/home')
  };

  return (
    <div className="mx-auto w-50">
      <h1 className="mt-5 mb-5 text-center text-primary">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name"  placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
          <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
          {/* <label className={agree ? "text-primary" : "text-danger"} htmlFor="terms">Accept Genius Car terms and Conditions</label> */}
          <label className={`ps-2 ${ agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car terms and Conditions</label>
        <input
        disabled={!agree} 
         className="w-50 btn btn-primary mx-auto d-block mb-2 p-2 "  type="submit" value="Register" />
        <p >Already Have a Account <Link className="text-danger text-decoration-none font-bold" to='/login' onClick={handleLogin} >Login</Link></p>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
