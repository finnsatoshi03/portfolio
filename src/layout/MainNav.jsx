import { NavLink } from "react-router-dom";

function MainNav({ sidebar }) {
  return (
    <nav>
      <ul className={`flex items-center justify-between`}>
        <li className="flex-grow">
          <NavLink to="/home" className="nav-links">
            Home
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/projects" className="nav-links">
            Projects
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/archives" className="nav-links">
            Archives
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/about" className="nav-links">
            About Me
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/contact" className="nav-links">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
