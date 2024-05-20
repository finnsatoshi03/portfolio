import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Profile from "../pages/Profile";
import useMobileView from "../hooks/useMobileView";
import { useProjects } from "../contexts/ProjectContext";
import Loader from "../components/Loader";

function AppLayout() {
  const { isLoading } = useProjects();
  // console.log(isLoading);

  const location = useLocation();
  const isMobile = useMobileView();
  const onHome = location.pathname === "/home";

  if (isLoading) return <Loader />;

  return (
    // <Loader />
    <div
      className={`${onHome ? "grid h-screen w-full grid-rows-[1fr_0.5fr] gap-10 xl:grid-cols-[1fr_auto] xl:grid-rows-1" : ""} px-8 py-6`}
    >
      <div className={`flex flex-col gap-4 ${isMobile && "min-w-0"}`}>
        <Sidebar />
        <main
          className={`flex-grow ${location.pathname === "/archives" && "overflow-hidden"}`}
          style={{ height: !onHome && "calc(82.5vh)" }}
        >
          <Outlet />
        </main>
      </div>
      {onHome ? <Profile /> : null}
    </div>
  );
}

export default AppLayout;
