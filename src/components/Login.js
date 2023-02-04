import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(true);
      navigate("/");
    } catch {
      setError("Failed login...");
    }
    setLoading(false);
  };
  return (
    <>
      <h1 className="text-center ">Login</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handelLogin}>
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
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={loading}
        >
          Login
        </Button>
      </Form>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
      <div className="mt-3 text-center">
        Need an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
