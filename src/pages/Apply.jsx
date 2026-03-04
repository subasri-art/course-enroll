import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Apply() {

  const location = useLocation();
  const navigate = useNavigate();

  const selectedCourse = location.state?.selectedCourse;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [admissionId, setAdmissionId] = useState("");

  if (!selectedCourse) {
    return <h3>Please select a course first.</h3>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    const generatedId = "ADM" + Math.floor(Math.random() * 10000);
    setAdmissionId(generatedId);
    setIsSuccess(true);
  };

  return (
    <div className="container mt-5">

      {!isSuccess ? (
        <>
          <h2>Student Registration</h2>
          <h4>Course: {selectedCourse.name}</h4>
          <p><strong>Fees:</strong> ₹{selectedCourse.fees}</p>

          <form onSubmit={handleSubmit}>
  
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              className="form-control mt-3"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mt-3"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control mt-3"
              onChange={handleChange}
            />

            <button className="btn btn-success mt-3">
              Confirm Admission
            </button>

          </form>
        </>
      ) : (
        <div className="alert alert-success">
          <h3>🎉 Admission Successful!</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Course:</strong> {selectedCourse.name}</p>
          <p><strong>Admission ID:</strong> {admissionId}</p>

          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Back to Courses
          </button>
        </div>
      )}

    </div>
  );
}

export default Apply;