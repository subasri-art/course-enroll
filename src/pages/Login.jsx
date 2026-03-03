import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css"; // Custom CSS for styling

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with real authentication later
    if (username === "admin" && password === "1234") {
      navigate("/courses");
    } else {
      alert("Invalid Login Details");
    }
  };

  const handleGoogleLogin = () => {
    // TODO: integrate Google OAuth
    alert("Google Login/Register clicked!");
  };

  return (
    <div className="login-page">
      <div className="login-form-container text-center">
        <h2 className="mb-4">ESEC College Portal</h2>
        <p className="mb-4">Login to access your courses and admissions.</p>

        <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary login-btn">
            Login
          </button>
        </form>

        <button 
          className="btn btn-danger w-100 mt-3 google-btn"
          onClick={handleGoogleLogin}
        >
          Login / Register with Google
        </button>

        <p className="mt-3">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;