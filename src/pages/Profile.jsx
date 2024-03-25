import Socials from "../components/Socials";
import Highlight from "../components/Highlights";

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
        className="left-6 h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-top"
      />
      {highlights.map((highlight, index) => (
        <Highlight key={index} title={highlight.title} pos={highlight.pos} />
      ))}
      <Socials />
    </div>
  );
}

export default Profile;
