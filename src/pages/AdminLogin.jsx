import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple Admin Authentication
    if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/Admin");
    } else {
      setError("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        <h1>Admin Portal</h1>
        <p className="subtitle">Secure Administrative Access</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Admin Username"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Login as Admin</button>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;