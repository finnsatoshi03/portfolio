import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function MainNav({ sidebar, setSidebar }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar, setSidebar]);

  const sidebarStyles = `fixed right-0 top-0 z-50 h-full w-[60vw] rounded-s-[3rem] bg-black p-4 transition-transform duration-300 transform ${sidebar ? "translate-x-0" : "translate-x-full"}`;

  return (
    <nav ref={sidebarRef} className={sidebarStyles}>
      <ul
        className={`flex items-center justify-between ${sidebar && "w-full flex-col items-end justify-start text-white"}`}
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
