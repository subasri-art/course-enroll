import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Courses.css";

function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [userMark, setUserMark] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // Always load fresh course list (no old localStorage problem)
    const defaultCourses = [
      { id: 1, name: "B.E Computer Science Engineering", fees: 75000, availableSeats: 10, cutoff: 150 },
      { id: 2, name: "B.E Mechanical Engineering", fees: 65000, availableSeats: 15, cutoff: 130 },
      { id: 3, name: "B.E Civil Engineering", fees: 60000, availableSeats: 20, cutoff: 120 },
      { id: 4, name: "B.E Electrical & Electronics Engineering", fees: 70000, availableSeats: 12, cutoff: 140 },
      { id: 5, name: "B.Tech Artificial Intelligence & Data Science", fees: 80000, availableSeats: 8, cutoff: 160 },
      { id: 6, name: "B.Tech Information Technology", fees: 72000, availableSeats: 18, cutoff: 145 },
      { id: 7, name: "B.E Electronics & Communication Engineering", fees: 73000, availableSeats: 14, cutoff: 150 },
      { id: 8, name: "B.Tech Cyber Security", fees: 82000, availableSeats: 10, cutoff: 165 },
      { id: 9, name: "B.Tech Data Science", fees: 81000, availableSeats: 9, cutoff: 158 },
      { id: 10, name: "B.E Biomedical Engineering", fees: 68000, availableSeats: 12, cutoff: 135 },
      { id: 11, name: "B.E Aeronautical Engineering", fees: 90000, availableSeats: 6, cutoff: 175 },
      { id: 12, name: "B.E Automobile Engineering", fees: 67000, availableSeats: 16, cutoff: 125 },
      { id: 13, name: "B.Tech Robotics & Automation", fees: 88000, availableSeats: 7, cutoff: 170 },
      { id: 14, name: "B.Tech Cloud Computing", fees: 85000, availableSeats: 11, cutoff: 168 },
      { id: 15, name: "B.Tech Internet of Things (IoT)", fees: 83000, availableSeats: 13, cutoff: 155 }
    ];

    setCourses(defaultCourses);
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
      navigate("/register", {
        state: { selectedCourse: course, userMark }
      });
    } else {
      alert(`❌ Not Eligible. Required Cutoff: ${course.cutoff}`);
    }
  };

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <h1>Explore Our Engineering Programs</h1>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
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
        {courses.map((course) => {
          const eligible =
            userMark && parseInt(userMark) >= course.cutoff;

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
        })}
      </div>
    </div>
  );
}

export default Courses;