import Socials from "../components/Socials";
import Highlight from "../components/Highlights";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState } from "react";
import CardsSlide from "../components/CardsSlide";

const highlights = [
  { title: "Clean Code*", pos: "pos-1" },
  { title: "Eco UX*", pos: "pos-2" },
  { title: "Eye Artistry*", pos: "pos-3" },
];

function Profile() {
  return (
    <div
      className="relative"
      style={{
        height:
          window.innerWidth < 576 ? "calc(70vh - 6rem)" : "calc(100vh - 3rem)",
      }}
    >
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="left-6 h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-right-top"
      />
      <Card
        inProfile={true}
        label="Recent Project"
        title="Recent Project Title"
        buttonText="View"
        pos="topRight"
        type="primary"
      />
      {highlights.map((highlight, index) => (
        <Highlight key={index} title={highlight.title} pos={highlight.pos} />
      ))}
      <Socials />
      <CardsSlide />
    </div>
  );
}

export default Profile;
