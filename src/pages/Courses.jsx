import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Courses.css";

function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [userMark, setUserMark] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log("Courses from backend:", data);
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleApply = (course) => {
    if (!userMark) {
      alert("Please enter your cutoff mark!");
      return;
    }

    if (parseInt(userMark) >= course.cutoff) {
      navigate("/register", { state: { selectedCourse: course, userMark } });
    } else {
      alert(`❌ Not Eligible. Required Cutoff: ${course.cutoff}`);
    }
  };

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <h1>Explore Our Engineering Programs</h1>
      </div>

      <button className="logout-btn" onClick={logout}>Logout</button>

      <div className="mark-wrapper">
        <div className="mark-box">
          <label>Enter Your Cutoff Mark</label>
          <input
            type="number"
            placeholder="Eg: 165"
            value={userMark}
            onChange={(e) => setUserMark(e.target.value)}
          />
        </div>
      </div>

      <div className="courses-container">
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          courses.map((course) => {
            const eligible = userMark && parseInt(userMark) >= course.cutoff;

            return (
              <div key={course.id} className="course-card">
                <h2>{course.name}</h2>
                <p>Fees: ₹{course.fees}</p>
                <p>Available Seats: {course.availableSeats}</p>
                <p><strong>Cutoff:</strong> {course.cutoff}</p>

                {userMark && (
                  <p style={{ fontWeight: "bold", color: eligible ? "green" : "red" }}>
                    {eligible ? "Eligible ✅" : "Not Eligible ❌"}
                  </p>
                )}

                <button
                  disabled={!eligible || course.availableSeats <= 0}
                  onClick={() => handleApply(course)}
                >
                  {course.availableSeats <= 0
                    ? "Seats Full"
                    : eligible
                    ? "Apply Now"
                    : "Not Eligible"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Courses;