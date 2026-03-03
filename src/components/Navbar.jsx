import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Engineering Admission
        </Link>

        <div>
          <Link className="btn btn-light mx-2" to="/register">
            Register
          </Link>

          <Link className="btn btn-light mx-2" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;