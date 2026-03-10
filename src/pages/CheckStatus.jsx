import { useState } from "react";
import "../styles/CheckStatus.css"; // create this CSS file

function CheckStatus() {
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStudent(null);

    try {
      const res = await fetch(`http://localhost:8080/student/email?email=${email}`);
      if (!res.ok) {
        setError("Student not found");
        return;
      }

      const data = await res.json();
      setStudent(data);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="checkstatus-container">
      <h2 className="page-title">Check Your Application Status</h2>

      <form onSubmit={handleSubmit} className="checkstatus-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <button type="submit" className="submit-btn">Check Status</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {student && (
        <div className="status-card">
          <h3>Application Details</h3>
          <p><b>ID:</b> {student.id}</p>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Status:</b> <span className={`status ${student.status.toLowerCase()}`}>{student.status}</span></p>
        </div>
      )}
    </div>
  );
}

export default CheckStatus;