import { useState, useEffect, useRef } from "react";
import useVisibilityChange from "../../hooks/useVisibilityChange";
import Archives from "./Archives";

function Scroller({ onProjectSelect, projects }) {
  useVisibilityChange();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 1280);
  const containerRef = useRef(null);

  const projectComponents = projects.map((project, index) => (
    <Archives
      key={index}
      project={project}
      onSelect={() => onProjectSelect(index)}
    />
  ));

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 1280);
    };

    const handleWheel = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

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
    e.preventDefault();

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
    <div className="full flex h-full w-full flex-col gap-3">
      <h1 className="rounded-full border border-black py-2 text-center">
        Project Archives
      </h1>
      <div
        ref={containerRef}
        className="projects-container max-w-[85vw] overflow-hidden sm:max-w-[92vw] xl:w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div
          className="inner-scroller flex flex-wrap gap-3 xl:flex-col"
          style={{
            paddingBlock: "1em",
            animationPlayState: isHovered ? "paused" : "running",
            transform: isHorizontal
              ? `translateX(${scrollPosition}px)`
              : `translateY(${scrollPosition}px)`,
          }}
        >
          {projectComponents}
          {projectComponents}
        </div>
      </div>
    </div>
  );
}

export default Scroller;
