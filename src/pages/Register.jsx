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
    cutoff: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      schoolName,
      roll12,
      marks10,
      marks12,
      group12,
      cutoff,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !schoolName ||
      !roll12 ||
      !marks10 ||
      !marks12 ||
      !group12 ||
      !cutoff
    ) {
      return alert("Please fill all fields");
    }

    if (!selectedCourse) {
      return alert("No course selected");
    }

    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseData = courses.find((c) => c.id === selectedCourse.id);

    if (!courseData || courseData.availableSeats <= 0) {
      return alert("Seats Full!");
    }

    // Generate unique Admission ID
    const applicationId = "ADM" + Math.floor(Math.random() * 100000);

    // Save student application
    const studentData = {
      ...formData,
      course: selectedCourse.name,
      status: "Under Review",
      applicationId,
    };

    localStorage.setItem("studentApplication", JSON.stringify(studentData));

    // Update available seats
    const updatedCourses = courses.map((c) =>
      c.id === selectedCourse.id
        ? { ...c, availableSeats: c.availableSeats - 1 }
        : c
    );
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    // Navigate to Status page
    navigate("/Status");
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Apply for {selectedCourse?.name || "Selected Course"}</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={formData.schoolName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="roll12"
            placeholder="12th Roll Number"
            value={formData.roll12}
            onChange={handleChange}
          />
          <input
            type="number"
            name="marks10"
            placeholder="10th Marks (%)"
            value={formData.marks10}
            onChange={handleChange}
          />
          <input
            type="number"
            name="marks12"
            placeholder="12th Marks (%)"
            value={formData.marks12}
            onChange={handleChange}
          />
          <select name="group12" value={formData.group12} onChange={handleChange}>
            <option value="">Select 12th Group</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
          </select>
          <input
            type="number"
            name="cutoff"
            placeholder="Cutoff Marks"
            value={formData.cutoff}
            onChange={handleChange}
          />

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default Register;