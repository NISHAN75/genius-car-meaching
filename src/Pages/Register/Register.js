import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate();

  const handleLogin= ()=>{
    navigate(`/login`)
  }
  const handleRegister = event =>{
    event.preventDefault();
    console.log(event.target.email.value)
  }


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

        <input className="w-100 p-2"  type="submit" value="Register" />
        <p >Already Have a Account <Link className="text-danger text-decoration-none font-bold" to='/login' onClick={handleLogin} >Login</Link></p>
      </Form>
    </div>
  );
};

export default Register;
