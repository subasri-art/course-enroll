// CheckStatus.jsx
import { useState, useEffect } from "react";

function CheckStatus() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("studentApplication");
    if (saved) {
      setStudent(JSON.parse(saved));
    }
  }, []);

  if (!student) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2>No Application Found</h2>
      </div>
    );
  }

  const statusMessage =
    student.status === "Approved"
      ? "✅ Your application is approved! Our management will reach you in 1 day."
      : student.status === "Rejected"
      ? "❌ Your application is rejected."
      : "⏳ Your application is under review.";

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Application Status</h2>
      <p><strong>Admission ID:</strong> {student.applicationId}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Status:</strong> {student.status}</p>
      <p style={{ marginTop: "20px" }}>{statusMessage}</p>
    </div>
  );
}

export default CheckStatus;