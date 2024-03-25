import Button from "../components/Button";
import Socials from "../components/Socials";

function Profile() {
  return (
    <div className="relative" style={{ height: "calc(100vh - 3rem)" }}>
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-top"
      />
      <div className="absolute left-12 top-1/2 z-10">
        <Button type="secondary">
          <p className="text-sm">Clean Code*</p>
        </Button>
      </div>
      {/* <div id="curved-corner-bottomleft"></div> */}
      <Socials />
    </div>
  );
}

export default Profile;
