import Button from "../components/Button";
import Icons from "../assets/icons";

function Profile() {
  return (
    <div className="relative" style={{ height: "calc(100vh - 3rem)" }}>
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-top"
        style={{ height: "100%" }}
      />
      <div className="absolute bottom-0 right-0 z-10 flex gap-4 rounded-tl-3xl bg-white px-4 py-2">
        <Button type="rounded">
          <Icons name="github" size="30" />
        </Button>
        <Button>
          <Icons name="messenger" size="30" />
        </Button>
        <Button>
          <Icons name="gmail" size="30" />
        </Button>
      </div>
    </div>
  );
}

export default Profile;
