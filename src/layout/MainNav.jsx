import { useEffect, useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { Link, NavLink } from "react-router-dom";
import useVisibilityChange from "../hooks/useVisibilityChange";

function MainNav({ sidebar, setSidebar }) {
  const sidebarRef = useRef(null);

  useOutsideClick(sidebarRef, () => setSidebar(false));
  useVisibilityChange(sidebar);

  const navLinkClass = sidebar ? "" : "nav-links";

  return (
    <nav ref={sidebarRef}>
      <ul
        className={`transition-all duration-300 ease-in-out ${sidebar ? "flex flex-col gap-2 px-4 py-3 text-white" : "flex items-center justify-between"}`}
      >
        {sidebar && <Header />}
        <NavItem
          to="/home"
          className={navLinkClass}
          label="Home"
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        <NavItem
          to="/projects"
          className={navLinkClass}
          label="Projects"
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        <NavItem
          to="/archives"
          className={navLinkClass}
          label="Archives"
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        <NavItem
          to="/about"
          className={navLinkClass}
          label="About Me"
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        <NavItem
          to="/contact"
          className={navLinkClass}
          label="Contact"
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      </ul>
    </nav>
  );
}

const Header = () => (
  <>
    <div className="flex items-center gap-4 border-b border-b-gray200 border-opacity-45 pb-4">
      <img src="logo-xs.png" alt="Brand Logo" className="size-10" />
      <h1 className="font-bold leading-4 text-gray200">Mark Nelson Mamerto</h1>
    </div>
    <h2 className="mb-1 mt-4 text-xs font-bold uppercase text-gray200 opacity-60">
      Menu
    </h2>
  </>
);

const NavItem = ({ to, className, label, sidebar, setSidebar }) => (
  <li className="flex-grow">
    {sidebar ? (
      <Link to={to} className={className} onClick={() => setSidebar(false)}>
        {label}
      </Link>
    ) : (
      <NavLink to={to} className={className}>
        {label}
      </NavLink>
    )}
  </li>
);

export default MainNav;
