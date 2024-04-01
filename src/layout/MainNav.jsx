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
        className={`transition-all duration-300 ease-in-out ${sidebar ? "flex flex-col gap-2 px-4 py-3 text-white" : "flex items-center justify-between"}`}
      >
        {sidebar && (
          <>
            <div className="border-b-gray200 flex items-center gap-4 border-b border-opacity-45 pb-4">
              <img src="logo-xs.png" alt="Brand Logo" className="size-10" />
              <h1 className="text-gray200 font-bold leading-4">
                Mark Nelson Mamerto
              </h1>
            </div>
            <h2 className="text-gray200 mb-1 mt-4 text-xs font-bold uppercase opacity-60">
              Menu
            </h2>
          </>
        )}
        <li className="flex-grow">
          <NavLink to="/home" className={` ${!sidebar && "nav-links active"}`}>
            Home
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/projects" className={` ${!sidebar && "nav-links"}`}>
            Projects
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/archives" className={` ${!sidebar && "nav-links"}`}>
            Archives
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/about" className={` ${!sidebar && "nav-links"}`}>
            About Me
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="/contact" className={` ${!sidebar && "nav-links"}`}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
