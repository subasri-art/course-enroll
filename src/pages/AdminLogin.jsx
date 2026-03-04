import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") navigate("/admin");
    else alert("Invalid Admin Credentials");
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="btn login-btn mt-3 w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;