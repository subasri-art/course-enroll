import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      name: "B.E Computer Science Engineering",
      details: "Focuses on programming, software development, AI, and modern technologies."
    },
    {
      id: 2,
      name: "B.E Information Technology",
      details: "Covers networking, cloud computing, and enterprise IT solutions."
    },
    {
      id: 3,
      name: "B.E Electronics & Communication Engineering",
      details: "Studies communication systems, embedded systems, and VLSI design."
    },
    {
      id: 4,
      name: "B.E Electrical & Electronics Engineering",
      details: "Focuses on power systems, renewable energy, and automation."
    },
    {
      id: 5,
      name: "B.E Mechanical Engineering",
      details: "Covers machine design, robotics, thermodynamics, and manufacturing."
    },
    {
      id: 6,
      name: "B.E Civil Engineering",
      details: "Focuses on construction, structures, and environmental engineering."
    },
    {
      id: 7,
      name: "B.Tech Artificial Intelligence & Data Science",
      details: "Specializes in AI, machine learning, and big data technologies."
    },
    {
      id: 8,
      name: "B.Tech Cyber Security",
      details: "Focuses on ethical hacking, security systems, and cyber defense."
    },
    {
      id: 9,
      name: "B.Tech Biotechnology",
      details: "Covers genetics, pharmaceuticals, and bioinformatics."
    },
    {
      id: 10,
      name: "B.Tech Chemical Engineering",
      details: "Focuses on chemical processes and industrial production."
    },
    {
      id: 11,
      name: "B.E Aeronautical Engineering",
      details: "Studies aircraft design and aerospace technology."
    },
    {
      id: 12,
      name: "B.E Automobile Engineering",
      details: "Focuses on vehicle systems and automotive technology."
    },
    {
      id: 13,
      name: "B.E Mechatronics Engineering",
      details: "Combination of mechanical, electronics, and automation systems."
    },
    {
      id: 14,
      name: "B.Tech Robotics & Automation",
      details: "Specializes in robotics systems and industrial automation."
    },
    {
      id: 15,
      name: "B.E Biomedical Engineering",
      details: "Focuses on medical devices and healthcare technology."
    }
  ];

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="dashboard-header">
        <h1>Admission Dashboard</h1>
        <p>Manage admissions, track applications, and explore courses</p>
      </div>

      {/* Quick Actions (UNCHANGED) */}
      <div className="dashboard-actions">
        <button onClick={() => navigate("/login")}>Student Login</button>
        <button onClick={() => navigate("/admin-login")}>Admin Login</button>
        <button onClick={() => navigate("/check-status")}>Check Status</button>
      </div>

      {/* Course Section (UPDATED ONLY HERE) */}
      <div className="course-section">
        <h2>Our Engineering Programs</h2>

        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              <p>{course.details}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;