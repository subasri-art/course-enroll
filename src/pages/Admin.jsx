import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  // 15 Default Courses
  const defaultCourses = [
    { id: 1, name: "B.E Computer Science Engineering", totalSeats: 60, availableSeats: 22, cutoff: 170 },
    { id: 2, name: "B.E Information Technology", totalSeats: 60, availableSeats: 18, cutoff: 165 },
    { id: 3, name: "B.E Electronics & Communication Engineering", totalSeats: 60, availableSeats: 20, cutoff: 160 },
    { id: 4, name: "B.E Electrical & Electronics Engineering", totalSeats: 60, availableSeats: 25, cutoff: 155 },
    { id: 5, name: "B.E Mechanical Engineering", totalSeats: 60, availableSeats: 30, cutoff: 150 },
    { id: 6, name: "B.E Civil Engineering", totalSeats: 60, availableSeats: 28, cutoff: 145 },
    { id: 7, name: "B.Tech Artificial Intelligence & Data Science", totalSeats: 60, availableSeats: 15, cutoff: 175 },
    { id: 8, name: "B.Tech Cyber Security", totalSeats: 60, availableSeats: 17, cutoff: 172 },
    { id: 9, name: "B.Tech Biotechnology", totalSeats: 60, availableSeats: 35, cutoff: 140 },
    { id: 10, name: "B.Tech Chemical Engineering", totalSeats: 60, availableSeats: 40, cutoff: 138 },
    { id: 11, name: "B.E Aeronautical Engineering", totalSeats: 60, availableSeats: 16, cutoff: 168 },
    { id: 12, name: "B.E Automobile Engineering", totalSeats: 60, availableSeats: 27, cutoff: 148 },
    { id: 13, name: "B.E Mechatronics Engineering", totalSeats: 60, availableSeats: 19, cutoff: 158 },
    { id: 14, name: "B.Tech Robotics & Automation", totalSeats: 60, availableSeats: 14, cutoff: 173 },
    { id: 15, name: "B.E Biomedical Engineering", totalSeats: 60, availableSeats: 32, cutoff: 142 }
  ];

  useEffect(() => {
    // Always sync full course list
    localStorage.setItem("courses", JSON.stringify(defaultCourses));
    setCourses(defaultCourses);

    const savedApps =
      JSON.parse(localStorage.getItem("studentApplications")) || [];
    setApplications(savedApps);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedApps = applications.map((app) =>
      app.applicationId === id ? { ...app, status: newStatus } : app
    );

    localStorage.setItem("studentApplications", JSON.stringify(updatedApps));
    setApplications(updatedApps);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* Dashboard Button */}
      <button
        className="dashboard-btn"
        onClick={() => navigate("/Dashboard")}
        style={{ marginBottom: "20px" }}
      >
        Go to Dashboard
      </button>

      {/* ================= COURSES SECTION ================= */}
      <div className="courses-section">
        <h2>Courses & Seat Details</h2>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Total Seats</th>
              <th>Available Seats</th>
              <th>Cutoff</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.totalSeats}</td>
                <td>{course.availableSeats}</td>
                <td>{course.cutoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= APPLICATION SECTION ================= */}
      <div className="applications-section">
        <h2>Student Applications</h2>

        {applications.length === 0 ? (
          <p>No applications found</p>
        ) : (
          applications.map((app) => (
            <div key={app.applicationId} className="application-card">
              <div>
                <p><strong>ID:</strong> {app.applicationId}</p>
                <p><strong>Name:</strong> {app.name}</p>
                <p><strong>Course:</strong> {app.course}</p>
                <p><strong>Status:</strong> {app.status}</p>
              </div>

              <div className="action-buttons">
                <button
                  className="approve-btn"
                  onClick={() => updateStatus(app.applicationId, "Approved")}
                >
                  Approve
                </button>

                <button
                  className="reject-btn"
                  onClick={() => updateStatus(app.applicationId, "Rejected")}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;