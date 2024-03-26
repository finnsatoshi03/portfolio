import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Profile from "../pages/Profile";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div
      className={`${isHome ? "grid min-h-screen grid-cols-[1fr_0.8fr] gap-10" : ""} px-8 py-6`}
    >
      <div className="flex flex-col gap-4">
        <Sidebar />
        <main className="">
          <Outlet />
        </main>
      </div>
      {isHome ? <Profile /> : null}
    </div>
  );
}

export default AppLayout;
