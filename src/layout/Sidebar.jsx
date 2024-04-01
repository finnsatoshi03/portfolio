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
            className="cursor-pointer"
            onClick={handleMenuClick}
          />
        ) : (
          <MainNav />
        )}
      </div>
      {isMobile && (
        <>
          <div
            className={`fixed right-0 top-0 z-[999999] h-full w-[60vw] transform rounded-s-[3rem] bg-black p-4 transition-all duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <MainNav sidebar={isSidebarOpen} setSidebar={setIsSidebarOpen} />
          </div>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 z-[999998] opacity-80 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </>
      )}
    </>
  );
}

export default Sidebar;
