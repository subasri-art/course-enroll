import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const checkStatus = location.search.includes("checkStatus=true");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      if (checkStatus) {
        navigate("/check-status");
      } else {
        navigate("/courses");
      }
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="text-center mb-4">
          {checkStatus ? "Student Login to Check Status" : "Student Login"}
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="form-control input-field mt-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control input-field mt-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn login-btn mt-3 w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;