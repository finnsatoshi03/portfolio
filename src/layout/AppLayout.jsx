import { Outlet } from "react-router-dom";
import { globalStyles } from "../styles/globalStyles";

import Sidebar from "./Sidebar";
import Profile from "../pages/Profile";

function AppLayout() {
  const container = globalStyles();

  return (
    <div className={`${container} grid grid-cols-2 gap-10`}>
      <Sidebar />
      <Profile />
      {/* <main>
          <Outlet />
        </main> */}
    </div>
  );
}

export default AppLayout;
