import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      {/* main nav */}
      <nav>
        <ul>
          <li>
            <NavLink to="/home" />
            Home
          </li>
          <li>
            <NavLink to="/projects" />
            Projects
          </li>
          <li>
            <NavLink to="/archives" />
            Archives
          </li>
          <li>
            <NavLink to="/about" />
            About Me
          </li>
          <li>
            <NavLink to="/contact" />
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
