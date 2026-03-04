import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Our Institution</h1>
        <p>Building Future Engineers with Excellence & Innovation</p>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Our Engineering Institution is committed to delivering world-class 
          education with strong academic foundations and industry exposure. 
          We focus on innovation, research, and skill-based learning to prepare 
          students for global career opportunities.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="vision-mission">
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To become a center of excellence in engineering education,
            fostering innovation, leadership, and social responsibility.
          </p>
        </div>

        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality education, promote research and
            innovation, and empower students with practical knowledge
            and ethical values.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> 123 Engineering Campus, Tamil Nadu, India</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> admissions@engineeringcollege.edu</p>
      </div>

    </div>
  );
}

export default About;