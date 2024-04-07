/* eslint-disable react/prop-types */
import { techStacksImageMapping } from "../../data/projects";
import TechStack from "./TechStack";

function LogoStack({
  isHovered,
  position,
  reverse,
  techStacks,
  parentStyle,
  onScroller,
}) {
  const logos = techStacks
    ? techStacks.map((tech) => techStacksImageMapping[tech])
    : [];
  // console.log(techStacks);
  const orderedLogos = reverse ? [...logos]?.reverse() : logos;

  return (
    <div className={`absolute ${position}`} style={parentStyle}>
      {orderedLogos?.map((logo, index) => (
        <div
          key={index}
          className={`absolute bottom-4 ${!onScroller ? "right-0" : "-right-4"} size-8 rounded-full transition-opacity duration-300`}
          style={{
            top: `${!onScroller ? index * 20 : index * 10}px`,
            zIndex: logos.length - index,
            opacity: isHovered !== undefined ? (isHovered ? 1 : 0) : 1,
            ...(isHovered && {
              transitionDelay: `${index * 100}ms`,
            }),
          }}
        >
          <TechStack logo={logo} onScroller={onScroller} />
        </div>
      ))}
    </div>
  );
}

export default LogoStack;
