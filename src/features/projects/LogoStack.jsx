import TechStack from "./TechStack";

function LogoStack({ isHovered, position, reverse }) {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png",
  ];
  const orderedLogos = reverse ? [...logos]?.reverse() : logos;

  return (
    <div className={`absolute ${position}`}>
      {orderedLogos?.map((logo, index) => (
        <div
          key={index}
          className="absolute bottom-4 right-0 size-8 rounded-full transition-opacity duration-300"
          style={{
            top: `${index * 20}px`,
            zIndex: logos.length - index,
            opacity: isHovered !== undefined ? (isHovered ? 1 : 0) : 1,
            ...(isHovered && {
              transitionDelay: `${index * 100}ms`,
            }),
          }}
        >
          <TechStack logo={logo} />
        </div>
      ))}
    </div>
  );
}

export default LogoStack;
