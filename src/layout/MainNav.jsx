/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { Link, NavLink, useLocation } from "react-router-dom";
import useVisibilityChange from "../hooks/useVisibilityChange";
import Icons from "../assets/icons";

function MainNav({ sidebar, setSidebar }) {
  const sidebarRef = useRef(null);

  useOutsideClick(sidebarRef, () => setSidebar(false));
  useVisibilityChange(sidebar);

  const navLinkClass = sidebar ? "" : "nav-links";

  const navContent = (
    <nav ref={sidebarRef}>
      <ul
        className={`transition-all duration-300 ease-in-out ${sidebar ? "flex flex-col justify-between gap-2 px-4 py-3 text-white" : "flex items-center justify-between"}`}
      >
        {sidebar && <Header />}
        <NavItem
          to="/home"
          className={navLinkClass}
          label="Home"
          sidebar={sidebar}
          setSidebar={setSidebar}
          name={"home"}
          activeIcon={"homeActive"}
        />
        <NavItem
          to="/projects"
          className={navLinkClass}
          label="Projects"
          sidebar={sidebar}
          setSidebar={setSidebar}
          name={"projects"}
          activeIcon={"projectsActive"}
        />
        <NavItem
          to="/archives"
          className={navLinkClass}
          label="Archives"
          sidebar={sidebar}
          setSidebar={setSidebar}
          name={"archives"}
          activeIcon={"archivesActive"}
        />
        <NavItem
          to="/about"
          className={navLinkClass}
          label="About Me"
          sidebar={sidebar}
          setSidebar={setSidebar}
          name={"about"}
          activeIcon={"aboutActive"}
        />
        <NavItem
          to="/contact"
          className={navLinkClass}
          label="Contact"
          sidebar={sidebar}
          setSidebar={setSidebar}
          name={"contact"}
          activeIcon={"contactActive"}
        />
      </ul>
    </nav>
  );

  return sidebar ? (
    <div className="flex h-full flex-col justify-between">
      {navContent}
      <Footer />
    </div>
  ) : (
    navContent
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

const Footer = () => {
  return (
    <div className="my-3 justify-self-end px-1">
      <h2 className="mb-1 px-3 pb-1 text-xs font-bold uppercase text-gray200 opacity-60">
        My Team
      </h2>
      <div
        className="rounded-[2rem] bg-[#4b4b4b] px-1 py-0.5 text-center text-xl text-white hover:cursor-pointer"
        onClick={() => {}}
      >
        <img
          src="https://placehold.co/600x400/png"
          className="m-1 h-[4rem] rounded-[1.5rem] object-cover"
          style={{ width: "calc(100% - 0.5rem)" }}
        />

        <div className="py-2">
          <h3 className="font-montserrat font-black">ZAH</h3>
          <p className="mx-auto w-2/3 text-xs leading-3">
            For all your coding needs, we&apos;re Zah-tastic!
          </p>
        </div>
      </div>
      <p className="font-montserrat mt-4 text-right text-[0.6rem] text-white">
        &copy; {new Date().getFullYear()} Zah Nelson. All rights reserved.
      </p>
    </div>
  );
};

const NavItem = ({
  to,
  className,
  label,
  sidebar,
  setSidebar = () => {},
  name,
  activeIcon,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="flex-grow">
      {sidebar ? (
        <Link to={to} className={className} onClick={() => setSidebar(false)}>
          <div
            className={`${!isActive && "opacity-50"} flex items-center gap-3`}
          >
            <Icons
              name={name}
              activeIcon={activeIcon}
              isActive={isActive}
              size={24}
              fill="white"
            />
            {label}
          </div>
        </Link>
      ) : (
        <NavLink to={to} className={className}>
          {label}
        </NavLink>
      )}
    </li>
  );
};

export default MainNav;
