import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        // Save user info in local storage if needed for session
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("studentEmail", user.email);
        navigate("/Courses");
      } else {
        const data = await response.json();
        alert(data.message || "Invalid credentials! Please register first.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Student Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
            <button type="submit">Login</button>
            <button
              type="button"
              style={{ backgroundColor: "#28a745", color: "#fff" }}
              onClick={() => navigate("/NewRegister")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;