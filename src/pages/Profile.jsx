import Socials from "../components/Socials";
import Highlight from "../components/Highlights";

const highlights = [
  { title: "Clean Code*", left: "12", top: "2/3" },
  { title: "Eco UX*", left: "24", top: "1/3" },
  { title: "Eye Artistry*", right: "10", top: "[30%]" },
];

function Profile() {
  return (
    <div className="relative" style={{ height: "calc(100vh - 3rem)" }}>
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-top"
      />
      {highlights.map((highlight, index) => (
        <Highlight
          key={index}
          title={highlight.title}
          top={highlight.top}
          left={highlight.left}
          right={highlight.right}
        />
      ))}
      {/* <Highlight title="Clean Code*" top="2/3" left="12" />
      <Highlight title="Eco UX*" top="1/3" left="24" />
      <Highlight title="Green Design*" top="1/4" right="10" /> */}
      <Socials />
    </div>
  );
}

export default Profile;
