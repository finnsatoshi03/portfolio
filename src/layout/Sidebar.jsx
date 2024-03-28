import MainNav from "./MainNav";
import Logo from "../components/Logo";
import useMobileView from "../hooks/useMobileView";
import Icons from "../assets/icons";

function Sidebar() {
  const isMobile = useMobileView();

  return (
    <>
      {/* main nav */}
      <div className="flex w-full items-center justify-between self-start">
        <Logo />
        {isMobile ? (
          <img
            width="30"
            src="https://img.icons8.com/material-rounded/300/menu--v1.png"
            alt="menu--v1"
          />
        ) : (
          <MainNav />
        )}
      </div>
    </>
  );
}

export default Sidebar;
