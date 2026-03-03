import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate("/courses");
  };

  const handleGoogleRegister = () => {
    alert("Google Registration clicked!");
  };

  return (
    <div className="register-page">
      <div className="register-overlay"></div>
      <div className="register-form-container text-center">
        <h2 className="mb-3">Student Registration</h2>
        <p className="mb-4">Fill in your details to register or use Google account.</p>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input 
            name="name" 
            placeholder="Name" 
            className="form-control input-field" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <input 
            name="email" 
            placeholder="Email" 
            className="form-control input-field" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
          <input 
            name="phone" 
            placeholder="Phone" 
            className="form-control input-field" 
            value={formData.phone} 
            onChange={handleChange} 
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="form-control input-field" 
            value={formData.password} 
            onChange={handleChange} 
            required
          />
          <button type="submit" className="btn btn-success btn-register">
            Register
          </button>
        </form>

        <button 
          className="btn btn-danger btn-google mt-3"
          onClick={handleGoogleRegister}
        >
          Register / Login with Google
        </button>

        <p className="mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;