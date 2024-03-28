import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Profile from "../pages/Profile";

function AppLayout() {
  const location = useLocation();
  const onHome = location.pathname === "/home";

  return (
    <div
      className={`${onHome ? "grid min-h-screen w-screen grid-rows-[1fr_0.5fr] gap-10 lg:grid-cols-[1fr_auto] lg:grid-rows-1" : ""} px-8 py-6`}
    >
      <div className="flex flex-col gap-4">
        <Sidebar />
        <main className="h-full">
          <Outlet />
        </main>
      </div>
      {onHome ? <Profile /> : null}
    </div>
  );
}

export default AppLayout;
