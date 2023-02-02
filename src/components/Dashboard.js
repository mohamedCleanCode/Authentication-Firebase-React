import React, { useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const handelLogout = async (e) => {
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed logout...");
    }
  };
  return (
    <>
      <Card className="border-0">
        <h1 className="text-center ">Profile</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <strong>Email:</strong> {currentUser && currentUser.email}
        </Card.Body>
        <Link className="btn btn-primary" to="/update-profile">
          Update Profile
        </Link>
      </Card>
      <div className="mt-3 text-center">
        <button onClick={handelLogout} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Dashboard;
