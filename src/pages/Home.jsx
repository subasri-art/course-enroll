import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-overlay"></div>

      <div className="home-content text-center">
        <h1 className="home-title">🎓 Engineering Admission Portal</h1>
        <p className="home-subtitle">
          Welcome to our online admission system.
          Apply for top engineering courses easily and securely.
        </p>

        <div className="mt-4">
          <button
            className="btn btn-primary btn-home m-2"
            onClick={() => navigate("/login")}
          >
            Student Login
          </button>

          <button
            className="btn btn-success btn-home m-2"
            onClick={() => navigate("/login?checkStatus=true")}
          >
            Check Status
          </button>

          <button
            className="btn btn-danger btn-home m-2"
            onClick={() => navigate("/admin-login")}
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;