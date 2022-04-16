import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} </p>
      </div>
    );
  }

  if (user) {
    console.log("working");
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
    else{
      toast('please enter Your Email')
    }
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container w-50 mx-auto text-primary mt-5">
      <h1 className="text-center mt-5 mb-5">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-50 d-block mx-auto mb-2 "
        >
          Login
        </Button>

        {errorElement}
        <p>
          New Genius Car
          <Link
            to="/register"
            className="text-danger text-decoration-none pe-auto"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <p>
          Forget Password
          <button
            className=" btn btn-link text-danger text-decoration-none pe-auto"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
      </Form>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
