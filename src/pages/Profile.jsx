import Socials from "../components/Socials";
import Highlight from "../components/Highlights";
import Button from "../components/Button";

const highlights = [
  { title: "Clean Code*", pos: "pos-1" },
  { title: "Eco UX*", pos: "pos-2" },
  { title: "Eye Artistry*", pos: "pos-3" },
];

function Profile() {
  return (
    <div className="relative" style={{ height: "calc(100vh - 3rem)" }}>
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="left-6 h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-right-top"
      />
      <div className="absolute right-6 top-10 inline-flex items-center gap-4 rounded-[2rem] bg-white bg-opacity-20 p-2">
        <img
          src="https://placehold.co/400"
          alt="Recent Project"
          className="w-[6vw] rounded-3xl"
        />
        <div>
          <p className="text-sm">Recent Project</p>
          <h2 className="mb-1.5 w-3/4 font-bold leading-4">
            Recent Project Title
          </h2>
          <Button type="small" className="bg-white hover:bg-blue-200">
            View
          </Button>
        </div>
      </div>
      {highlights.map((highlight, index) => (
        <Highlight key={index} title={highlight.title} pos={highlight.pos} />
      ))}
      <Socials />
    </div>
  );
}

export default Profile;
