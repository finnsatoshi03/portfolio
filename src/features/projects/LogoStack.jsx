import TechStack from "./TechStack";

function LogoStack({ logos, isHovered, position, reverse }) {
  const orderedLogos = reverse ? [...logos].reverse() : logos;

  return (
    <div className={`absolute ${position}`}>
      {orderedLogos.map((logo, index) => (
        <div
          key={index}
          className="absolute bottom-4 right-0 size-8 rounded-full transition-opacity duration-300"
          style={{
            top: `${index * 20}px`,
            zIndex: logos.length - index,
            ...(isHovered && {
              opacity: 1,
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
