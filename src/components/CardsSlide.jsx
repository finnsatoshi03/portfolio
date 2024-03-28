import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const cards = [
  { title: "Project 1" },
  { title: "Project 2" },
  { title: "Project 3" },
];

const icons = {
  arrow: (
    <img
      width="17"
      height="17"
      src="https://img.icons8.com/material-outlined/24/double-up.png"
      alt="double-up"
    />
  ),
  view: (
    <img
      width="15"
      height="15"
      src="https://img.icons8.com/ios-glyphs/60/sort-right.png"
      alt="sort-right"
    />
  ),
};

function CardsSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef(null);

  const startSlide = useCallback(() => {
    if (!isHovered) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
      }, 3000); // Change slide every 3 seconds
    }
  }, [isHovered, cards.length]);

  const stopSlide = useCallback(() => {
    clearInterval(slideInterval.current);
  }, []);

  useEffect(() => {
    startSlide();
    return () => {
      stopSlide();
    };
  }, [startSlide, stopSlide]);

  const base =
    "rounded-full border border-white bg-white px-0.5 py-1 sm:py-2 hover:border hover:border-black hover:bg-transparent";

  return (
    <>
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
            icon={icons.view}
            pos={`${pos} ${zIndex} ${transition}`}
            onMouseEnter={() => {
              setIsHovered(true);
              stopSlide();
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              startSlide();
            }}
          />
        );
      })}
      <div
        className="absolute bottom-4 left-[12.5rem] flex flex-col gap-2 sm:left-[19.5rem]"
        onMouseEnter={() => {
          setIsHovered(true);
          stopSlide();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          startSlide();
        }}
      >
        <Button
          className={base}
          onClick={() =>
            setCurrentSlide((currentSlide - 1 + cards.length) % cards.length)
          }
        >
          {icons.arrow}
        </Button>
        <Button
          className={`${base} rotate-180`}
          onClick={() => setCurrentSlide((currentSlide + 1) % cards.length)}
        >
          {icons.arrow}
        </Button>
      </div>
    </>
  );
}

export default CardsSlide;
