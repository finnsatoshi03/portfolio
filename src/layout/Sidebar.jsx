import { NavLink } from "react-router-dom";
import Button from "../components/Button";

function Sidebar() {
  return (
    <>
      {/* main nav */}
      <div className="flex items-center justify-between border border-red-400">
        <div>
          <img src="/logo-sm.png" alt="Brand Logo" className="size-14" />
        </div>
        <nav>
          <ul className="flex items-center justify-between gap-8">
            <li>
              <Button type="primary">
                <NavLink to="/home" />
                Home
              </Button>
            </li>
            <li>
              <Button type="primary">
                <NavLink to="/projects" />
                Projects
              </Button>
            </li>
            <li>
              <Button type="primary">
                <NavLink to="/archives" />
                Archives
              </Button>
            </li>
            <li>
              <Button type="primary">
                <NavLink to="/about" />
                About Me
              </Button>
            </li>
            <li>
              <Button type="primary">
                <NavLink to="/contact" />
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
