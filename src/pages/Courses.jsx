import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {

  const navigate = useNavigate();

  const [courses, setCourses] = useState([
    { id: 1, name: "B.E Computer Science Engineering", fees: 75000, totalSeats: 60, availableSeats: 10 },
    { id: 2, name: "B.E Mechanical Engineering", fees: 65000, totalSeats: 60, availableSeats: 8 },
    { id: 3, name: "B.E Civil Engineering", fees: 60000, totalSeats: 60, availableSeats: 12 },
    { id: 4, name: "B.E Electrical and Electronics Engineering", fees: 70000, totalSeats: 60, availableSeats: 5 },
    { id: 5, name: "B.E Electronics and Communication Engineering", fees: 72000, totalSeats: 60, availableSeats: 9 },
    { id: 6, name: "B.Tech Artificial Intelligence and Data Science", fees: 85000, totalSeats: 60, availableSeats: 4 },
    { id: 7, name: "B.Tech Information Technology", fees: 73000, totalSeats: 60, availableSeats: 7 },
    { id: 8, name: "B.Tech Cyber Security", fees: 90000, totalSeats: 60, availableSeats: 3 },
    { id: 9, name: "B.E Automobile Engineering", fees: 68000, totalSeats: 60, availableSeats: 6 },
    { id: 10, name: "B.E Biomedical Engineering", fees: 80000, totalSeats: 60, availableSeats: 2 }
  ]);

  return (
    <div className="container mt-5">
      <h2>Engineering Courses</h2>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mt-3" key={course.id}>
            <div className="card shadow">
              <div className="card-body">

                <h5>{course.name}</h5>
                <p><strong>Course Fees:</strong> ₹{course.fees}</p>

                <p>
                  <strong>Available Seats:</strong>{" "}
                  <span className={
                    course.availableSeats === 0
                      ? "text-danger"
                      : "text-success"
                  }>
                    {course.availableSeats}
                  </span>
                </p>

                {course.availableSeats === 0 ? (
                  <button className="btn btn-danger" disabled>
                    Full
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      navigate("/apply", {
                        state: { selectedCourse: course }
                      })
                    }
                  >
                    Register
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;