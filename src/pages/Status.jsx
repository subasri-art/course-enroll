// Status.jsx
import { useLocation, useNavigate } from "react-router-dom";

function Status() {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  if (!student) {
    navigate("/"); // If no student data, go home
    return null;
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Application Submitted</h2>
      <p><strong>Admission ID:</strong> {student.applicationId}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Status:</strong> ⏳ Under Review</p>

      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Status;