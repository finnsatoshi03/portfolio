import Socials from "../components/Socials";
import Highlight from "../components/Highlights";

function Profile() {
  return (
    <div className="relative" style={{ height: "calc(100vh - 3rem)" }}>
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-top"
      />
      <Highlight title="Clean Code*" />
      {/* <div id="curved-corner-bottomleft"></div> */}
      <Socials />
    </div>
  );
}

export default Profile;
