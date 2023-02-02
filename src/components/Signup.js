import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRefConfermationeRef = useRef();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      passwordRef.current.value !== passwordRefConfermationeRef.current.value
    ) {
      return setError("Password dosn't matche");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to create");
    }
    setLoading(false);
  };
  return (
    <>
      <h1 className="text-center mb-3">Sign Up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confermation</Form.Label>
          <Form.Control
            ref={passwordRefConfermationeRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          disabled={loading}
          variant="primary"
          type="submit"
          className="w-100"
        >
          Submit
        </Button>
      </Form>
      <div className="mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Signup;
