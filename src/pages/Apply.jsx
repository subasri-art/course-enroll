import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Apply() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedCourse = location.state?.selectedCourse;

  // formData now has name, email, phone, marks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    marks: ""
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

    if (!formData.name || !formData.email || !formData.phone || !formData.marks) {
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

          {/* Cutoff Marks Display */}
          {selectedCourse.cutoff && (
            <div className="alert alert-info w-50 mx-auto">
              Minimum Cutoff Required: {selectedCourse.cutoff} marks
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center gap-3 mt-3 w-50 mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="marks"
              placeholder="Enter Your Marks"
              className="form-control"
              value={formData.marks}
              onChange={handleChange}
              required
            />

            <button className="btn btn-success mt-2 w-100">
              Confirm Admission
            </button>
          </form>
        </>
      ) : (
        <div className="alert alert-success text-center">
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
