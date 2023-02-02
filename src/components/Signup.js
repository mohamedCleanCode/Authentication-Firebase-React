import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control id="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="password-confermation">
            Password Confermation
          </Form.Label>
          <Form.Control
            id="password-confermation"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
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
