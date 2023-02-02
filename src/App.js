import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-100 border p-3" style={{ maxWidth: "400px" }}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
