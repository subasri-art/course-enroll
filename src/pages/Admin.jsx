import { useEffect, useState } from "react";

function Admin() {
  const [applications, setApplications] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedApp = localStorage.getItem("studentApplication");
    const savedCourses = localStorage.getItem("courses");
    if (savedApp) setApplications([JSON.parse(savedApp)]);
    if (savedCourses) setCourses(JSON.parse(savedCourses));
  }, []);

  const updateStatus = (newStatus) => {
    if (!applications.length) return;
    const updatedApp = { ...applications[0], status: newStatus };

    if (newStatus === "Approved") {
      const updatedCourses = courses.map((c) =>
        c.name === updatedApp.course && c.availableSeats > 0
          ? { ...c, availableSeats: c.availableSeats - 1 }
          : c
      );
      localStorage.setItem("courses", JSON.stringify(updatedCourses));
      setCourses(updatedCourses);
    }

    localStorage.setItem("studentApplication", JSON.stringify(updatedApp));
    setApplications([updatedApp]);
    alert(`Application ${newStatus}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <h3>Available Courses & Seats</h3>
      {courses.map((c) => (
        <p key={c.id}>
          {c.name} - Seats Available: {c.availableSeats}
        </p>
      ))}

      <h3>Student Applications</h3>
      {!applications.length && <p>No applications found</p>}
      {applications.map((app) => (
        <div key={app.applicationId} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <p><strong>Admission ID:</strong> {app.applicationId}</p>
          <p><strong>Name:</strong> {app.name}</p>
          <p><strong>Course:</strong> {app.course}</p>
          <p><strong>Mark:</strong> {app.mark}</p>
          <p><strong>Status:</strong> {app.status}</p>
          <button style={btnStyle} onClick={() => updateStatus("Approved")}>Approve</button>
          <button style={{ ...btnStyle, backgroundColor: "red" }} onClick={() => updateStatus("Rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  margin: "5px",
  fontWeight: "bold",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Admin;