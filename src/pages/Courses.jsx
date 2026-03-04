import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  const defaultCourses = [
    { id: 1, name: "B.E Computer Science Engineering", cutoff: 170, totalSeats: 40, availableSeats: 25 },
    { id: 2, name: "B.E Mechanical Engineering", cutoff: 150, totalSeats: 40, availableSeats: 24 },
    { id: 3, name: "B.E Civil Engineering", cutoff: 140, totalSeats: 40, availableSeats: 25 },
    { id: 4, name: "B.E Electrical and Electronics Engineering", cutoff: 155, totalSeats: 40, availableSeats: 16 },
    { id: 5, name: "B.E Electronics and Communication Engineering", cutoff: 165, totalSeats: 40, availableSeats: 30 }
  ];

  const [courses, setCourses] = useState([]);
  const [mark, setMark] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("courses");
    if (saved) {
      const fixedCourses = JSON.parse(saved).map(c => ({
        ...c,
        availableSeats: Math.max(0, c.availableSeats)
      }));
      setCourses(fixedCourses);
      localStorage.setItem("courses", JSON.stringify(fixedCourses));
    } else {
      localStorage.setItem("courses", JSON.stringify(defaultCourses));
      setCourses(defaultCourses);
    }
  }, []);

  const checkEligibility = (course) => {
    if (course.availableSeats <= 0) {
      alert("Seats Full!");
      return;
    }
    if (mark >= course.cutoff) {
      const updatedCourses = courses.map(c =>
        c.id === course.id ? { ...c, availableSeats: Math.max(0, c.availableSeats - 1) } : c
      );
      setCourses(updatedCourses);
      localStorage.setItem("courses", JSON.stringify(updatedCourses));
      navigate("/register", { state: { selectedCourse: course, userMark: mark } });
    } else {
      alert("You are not eligible for this course");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Enter Your Mark (Out of 200)</h2>
      <input
        type="number"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      <h3>Courses</h3>
      {courses.map((course) => (
        <div key={course.id} style={{ marginTop: "15px", border: "1px solid gray", padding: "10px" }}>
          <p><strong>{course.name}</strong></p>
          <p>Cutoff: {course.cutoff}</p>
          <p>Available Seats: {course.availableSeats === 0 ? "Full" : course.availableSeats}</p>
          <button onClick={() => checkEligibility(course)} disabled={course.availableSeats === 0}>
            {course.availableSeats === 0 ? "Full" : "Apply"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Courses;