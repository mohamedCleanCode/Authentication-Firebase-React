import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            controlId="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            controlId="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
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
