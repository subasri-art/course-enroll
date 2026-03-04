import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Status from "./pages/Status";
import CheckStatus from "./pages/CheckStatus";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NewRegister from "./pages/NewRegister";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/status" element={<Status />} />
        <Route path="/check-status" element={<CheckStatus />} />
         <Route path="/newregister" element={<NewRegister />} />


        {/* Admin Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />

        {/* Info Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;