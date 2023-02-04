import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { changeEmail, changePassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRefConfermationeRef = useRef();
  const handelSubmit = (e) => {
    console.log(currentUser);
    e.preventDefault();
    if (
      passwordRef.current.value !== passwordRefConfermationeRef.current.value
    ) {
      return setError("Password dosn't matche");
    }
    const promises = [];
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(changeEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(changePassword(passwordRef.current.value));
    }
    console.log(promises);
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError("Faield to update profile...", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <h1 className="text-center mb-3">Update Profile</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            defaultValue={currentUser?.email}
          />
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
          Update
        </Button>
      </Form>
      <div className="mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default UpdateProfile;
