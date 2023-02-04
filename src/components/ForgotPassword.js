import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      setLoading(true);
      setMessage("Check your inbox!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch {
      setError("Failed to reset password...");
    }
    setLoading(false);
  };
  return (
    <>
      <h1 className="text-center ">Reset Password</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Button
          disabled={loading}
          variant="primary"
          type="submit"
          className="w-100"
        >
          Reset Password
        </Button>
      </Form>
      <div className="w-100 text-center mt-3">
        <Link to="/login">Login</Link>
      </div>
      <div className="mt-3 text-center">
        Need an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
