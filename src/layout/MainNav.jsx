import { useEffect, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { NavLink } from "react-router-dom";
import useVisibilityChange from "../hooks/useVisibilityChange";

function MainNav({ sidebar, setSidebar }) {
  const sidebarRef = useRef(null);

  useOutsideClick(sidebarRef, () => setSidebar(false));
  useVisibilityChange(sidebar);

  return (
    <nav ref={sidebarRef}>
      <ul
        className={`transition-all duration-300 ease-in-out ${sidebar ? "w-full flex-col items-end justify-start px-2 py-3 text-white" : "flex items-center justify-between"}`}
      >
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
