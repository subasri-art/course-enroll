import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Status.css";

function Status() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    navigate("/login");
    return;
  }

  const applicationId = localStorage.getItem("applicationId"); // get latest ID
  if (!applicationId) return;

  const fetchApplication = async () => {
    try {
      const res = await fetch(`http://localhost:8080/student/${applicationId}`);
      if (!res.ok) throw new Error("Failed to fetch application");
      const data = await res.json();
      setData(data); // set latest student data
    } catch (err) {
      console.error(err);
      alert("Could not fetch application details.");
    }
  };

  fetchApplication();
}, [navigate]);
  if (!data) {
    return (
      <div className="status-page">
        <div className="status-card">
          <h2>No Application Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="status-page">
      <div className="status-card">

        <h1 className="status-title">
          🎓 Admission Submitted Successfully!
        </h1>

        <div className="status-details">
          <p><strong>Admission ID:</strong> 
            <span className="highlight"> {data.applicationId}</span>
          </p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Course:</strong> {data.course}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </div>

        <div className="success-badge">
          Welcome to Our Institution ✅
          <button
  className="dashboard-btn"
  onClick={() => navigate("/Dashboard")}
>
  Go to Dashboard
</button>
        </div>

      </div>
    </div>
  );
}

export default Status;