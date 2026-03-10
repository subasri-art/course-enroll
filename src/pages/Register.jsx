import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    roll12: "",
    marks10: "",
    marks12: "",
    group12: "",
    cutoff: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!selectedCourse) {
      alert("No course selected");
      return;
    }

    // Prepare the full student application data
    const applicationData = {
      ...formData,
      course: selectedCourse.name,
      status: "Pending" // Default status stored in DB
    };
    fetch("http://localhost:8080/student/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(applicationData)
})

    try {
      const res = await fetch("http://localhost:8080/student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationData)
      });

      if (!res.ok) {
        alert("Failed to submit application");
        return;
      }

      const data = await res.json();

      // Save application ID locally if needed for CheckStatus
      localStorage.setItem("applicationId", data.id);

      alert("Application Submitted Successfully!");
      navigate("/status"); // redirect to CheckStatus page

    } catch (err) {
      console.log(err);
      alert("Something went wrong while submitting your application");
    }
  };

  return (
    <div className="register-page">

      <div className="register-form">

        <h2>Apply for {selectedCourse?.name}</h2>

        <form onSubmit={handleRegister}>

          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
          <input type="text" name="schoolName" placeholder="School Name" onChange={handleChange} required />
          <input type="text" name="roll12" placeholder="12th Roll Number" onChange={handleChange} required />
          <input type="number" name="marks10" placeholder="10th Marks" onChange={handleChange} required />
          <input type="number" name="marks12" placeholder="12th Marks" onChange={handleChange} required />

          <select name="group12" onChange={handleChange} required>
            <option value="">Select Group</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
          </select>

          <input type="number" name="cutoff" placeholder="Cutoff Marks" onChange={handleChange} required />

          <button type="submit">Submit Application</button>

        </form>

      </div>

    </div>
  );
}

export default Register;