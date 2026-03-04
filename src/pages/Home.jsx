import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      <div className="home-content">
        <h1>Engineering Admission Portal </h1>

        <p className="tagline">
          Empowering Future Engineers with Excellence in Education
        </p>

        <p className="description">
          Welcome to our smart and transparent online admission system.
          Apply for top engineering courses, track your admission status,
          and manage your application with ease. Our institution is committed
          to academic excellence, innovation, and career success.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => navigate("/dashboard")}
            className="main-btn"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/about")}
            className="secondary-btn"
          >
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;