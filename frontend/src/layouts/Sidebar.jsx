import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRoad,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="logo-circle">
          <FaRocket />
        </div>

        <div>
          <h2>AI Career</h2>
          <p>Copilot</p>
        </div>

      </div>

      <nav className="sidebar-menu">

        <NavLink to="/" end>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/resume">
          <FaFileAlt />
          <span>Resume Analyzer</span>
        </NavLink>

        <NavLink to="/career">
          <FaBriefcase />
          <span>Career Recommendation</span>
        </NavLink>

        <NavLink to="/roadmap">
          <FaRoad />
          <span>Learning Roadmap</span>
        </NavLink>

      </nav>

      <div className="sidebar-footer">
        <h4>AI Career Copilot</h4>
        <p>Version 2.0</p>
      </div>

    </aside>
  );
}

export default Sidebar;