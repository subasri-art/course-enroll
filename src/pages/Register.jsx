import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse;
  const userMark = location.state?.userMark;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      return alert("Fill all fields");
    }

    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseData = courses.find((c) => c.id === selectedCourse.id);
    if (!courseData || courseData.availableSeats <= 0) return alert("Seats Full!");

    const applicationId = "ADM" + Math.floor(Math.random() * 100000);
    const studentData = { ...formData, course: selectedCourse.name, mark: userMark, status: "Under Review", applicationId };
    localStorage.setItem("studentApplication", JSON.stringify(studentData));

    const updatedCourses = courses.map((c) =>
      c.id === selectedCourse.id ? { ...c, availableSeats: c.availableSeats - 1 } : c
    );
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    navigate("/status");
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        {selectedCourse && (
          <div className="mb-3 text-success">
            <h5>Eligible for: {selectedCourse.name}</h5>
            <p>Your Marks: {userMark}</p>
            <p>Available Seats: {selectedCourse.availableSeats}</p>
          </div>
        )}
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" maxLength="10" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button className="btn-register">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default Register;