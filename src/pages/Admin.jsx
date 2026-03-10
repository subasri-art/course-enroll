import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  // Fetch courses and all student applications
  const fetchData = async () => {
    try {
      const coursesRes = await fetch("http://localhost:8080/api/courses");
      const coursesData = await coursesRes.json();
      setCourses(coursesData);

      const appsRes = await fetch("http://localhost:8080/student"); // returns array
      const appsData = await appsRes.json();
      setApplications(appsData);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Approve / Reject handler
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:8080/student/${id}/status?action=${status}`, {
        method: "PUT",
      });

      if (!res.ok) {
        alert("Failed to update status");
        return;
      }

      const updatedApp = await res.json();
      alert(`Application ${status} successfully!`);

      // Update local state to reflect change
      setApplications(prev =>
        prev.map(app => (app.id === id ? updatedApp : app))
      );

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <button className="dashboard-btn" onClick={() => navigate("/dashboard")}>Go Dashboard</button>

      <h2>Courses</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Total Seats</th>
            <th>Available Seats</th>
            <th>Cutoff</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.totalSeats}</td>
              <td>{course.availableSeats}</td>
              <td>{course.cutoff}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Student Applications</h2>
      {applications.length === 0 && <p className="no-app">No applications yet</p>}

      {applications.map(app => (
        <div key={app.id} className="application-card">
          <div className="app-details">
            <p><b>ID:</b> {app.id}</p>
            <p><b>Name:</b> {app.name}</p>
            <p><b>Course:</b> {app.course}</p>
            <p><b>Status:</b> <span className={`status ${app.status.replace(/\s+/g, '')}`}>{app.status}</span></p>
          </div>
          <div className="action-buttons">
            <button className="approve-btn" onClick={() => updateStatus(app.id, "Approved")}>Approve</button>
            <button className="reject-btn" onClick={() => updateStatus(app.id, "Rejected")}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;