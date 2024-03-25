import MainNav from "./MainNav";
import Logo from "../components/Logo";

function Sidebar() {
  return (
    <>
      {/* main nav */}
      <div className="flex items-center justify-between self-start">
        <Logo />
        <MainNav />
      </div>
    </>
  );
}

export default Sidebar;
