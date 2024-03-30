import { useState } from "react";
import MainNav from "./MainNav";
import Logo from "../components/Logo";
import useMobileView from "../hooks/useMobileView";

function Sidebar() {
  const isMobile = useMobileView();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
            onClick={handleMenuClick}
          />
        ) : (
          <MainNav sidebar={isSidebarOpen} />
        )}
      </div>
      {isMobile && isSidebarOpen && (
        <MainNav sidebar={true} setSidebar={setIsSidebarOpen} />
      )}
    </>
  );
}

export default Sidebar;
