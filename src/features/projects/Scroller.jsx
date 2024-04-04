import { useState } from "react";
import useVisibilityChange from "../../hooks/useVisibilityChange";
import Archives from "./Archives";

function Scroller() {
  useVisibilityChange();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const projects = [1, 2, 3, 4].map((_, index) => <Archives key={index} />);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const roundedScrollPosition = Math.round(scrollPosition / 10) * 10;
    setScrollPosition(roundedScrollPosition);
    // Gradually reset scroll position
    const intervalId = setInterval(() => {
      setScrollPosition((prev) => {
        if (prev > 0) {
          return prev - 10;
        } else if (prev < 0) {
          return prev + 10;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 10);
  };

  const handleWheel = (e) => {
    setScrollPosition((prev) => {
      const newScrollPosition = prev - e.deltaY;
      // Limit scroll position to 1000px when scrolling up and -1000px when scrolling down
      if (newScrollPosition > 1000) {
        return 1000;
      } else if (newScrollPosition < -1000) {
        return -1000;
      } else {
        return newScrollPosition;
      }
    });
  };

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden">
      <h1 className="rounded-full border border-black py-2 text-center">
        Project Archives
      </h1>
      <div
        className="projects-container max-h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div
          className="inner-scroller flex flex-col gap-3"
          style={{
            paddingBlock: "1em",
            animationPlayState: isHovered ? "paused" : "running",
            transform: `translateY(${scrollPosition}px)`,
          }}
        >
          {projects}
          {projects}
        </div>
      </div>
    </div>
  );
}

export default Scroller;
