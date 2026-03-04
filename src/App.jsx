import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";   
import Status from "./pages/Status"; // after register
import CheckStatus from "./pages/CheckStatus"; // check status anytime
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Student pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/status" element={<Status />} /> 
        <Route path="/check-status" element={<CheckStatus />} />

        {/* Admin pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;