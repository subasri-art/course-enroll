import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function NewRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === formData.email);

    if (exists) {
      alert("User already registered! Please login.");
      navigate("/login");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Student Registration</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default NewRegister;