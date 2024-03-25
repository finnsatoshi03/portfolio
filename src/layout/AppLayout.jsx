import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { globalStyles } from "../styles/globalStyles";

function AppLayout() {
  const container = globalStyles();

  return (
    <div className={`${container}`}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
