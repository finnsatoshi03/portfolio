import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Profile from "../pages/Profile";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 gap-10 px-8 py-6">
      <Sidebar />
      <Profile />
      {/* <main>
          <Outlet />
        </main> */}
    </div>
  );
}

export default AppLayout;
