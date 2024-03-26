import Socials from "../components/Socials";
import Highlight from "../components/Highlights";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState } from "react";

const highlights = [
  { title: "Clean Code*", pos: "pos-1" },
  { title: "Eco UX*", pos: "pos-2" },
  { title: "Eye Artistry*", pos: "pos-3" },
];

const cards = [
  { title: "Project 1", pos: "bottom-[1rem] left-[1rem]" },
  { title: "Project 2", pos: "bottom-[2rem] scale-90 left-[1rem] opacity-90" },
  { title: "Project 3", pos: "bottom-[3rem] scale-75 left-[1rem] opacity-50" },
];

function Profile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative" style={{ height: "calc(100vh - 3rem)" }}>
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
      {cards.map((card, index) => {
        const isCurrentSlide = index === currentSlide;
        const isNextSlide = index === (currentSlide + 1) % cards.length;
        const isPreviousSlide =
          index === (currentSlide - 1 + cards.length) % cards.length;

        let pos, zIndex;
        const transition = "transition-all duration-300 ease-in-out";
        if (isCurrentSlide) {
          pos = "bottom-[1rem] left-[1rem]";
          zIndex = "z-50";
        } else if (isNextSlide) {
          pos = "bottom-[2rem] scale-90 left-[1rem] opacity-90";
          zIndex = "z-40";
        } else if (isPreviousSlide) {
          pos = "bottom-[3rem] scale-75 left-[1rem] opacity-50";
          zIndex = "z-30";
        } else {
          pos = "bottom-[4rem] scale-50 left-[1rem] opacity-0";
          zIndex = "z-20";
        }

        return (
          <Card
            key={index}
            inProfile={true}
            title={card.title}
            type="secondary"
            icon={
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/ios-glyphs/60/sort-right.png"
                alt="sort-right"
              />
            }
            pos={`${pos} ${zIndex} ${transition}`}
          />
        );
      })}
      <div className="absolute bottom-4 left-[12.5rem] flex flex-col gap-2">
        <Button
          className="rounded-full bg-white px-0.5 py-2"
          onClick={() =>
            setCurrentSlide((currentSlide - 1 + cards.length) % cards.length)
          }
        >
          <img
            width="17"
            height="17"
            src="https://img.icons8.com/material-outlined/24/double-up.png"
            alt="double-up"
          />
        </Button>
        <Button
          className="rounded-full bg-white px-0.5 py-2"
          onClick={() => setCurrentSlide((currentSlide + 1) % cards.length)}
        >
          <img
            width="17"
            height="17"
            src="https://img.icons8.com/material-outlined/24/double-up.png"
            alt="double-up"
            className="rotate-180"
          />
        </Button>
      </div>
    </div>
  );
}

export default Profile;
