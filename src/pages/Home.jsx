import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // import the CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-overlay"></div>
      <div className="home-content text-center">
        <h1 className="home-title">Welcome to Engineering Admission Portal</h1>
        <p className="home-subtitle mt-3">
          Access your courses and manage admissions easily. Please login or register to continue.
        </p>

        <div className="mt-4 d-flex flex-column gap-3 align-items-center home-buttons">
          <button 
            className="btn btn-primary btn-home"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button 
            className="btn btn-success btn-home"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

          <button 
            className="btn btn-danger btn-home"
            onClick={() => navigate("/google-login")}
          >
            Register / Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;