import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
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
