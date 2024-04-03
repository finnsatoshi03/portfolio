function Projects() {
  const title = "Sample Long Title";
  const elementsBase = "px-6 bg-white text-black";
  const roundedCorner = "rounded-tr-[2.5rem]";
  const relativePosition = "relative";
  const textStyle = "text-[5.5rem]";

  const splitTitle = (title) => {
    let firstPart = "";
    let secondPart = title;

    title.split(" ").some((word) => {
      let tempFirstPart = firstPart + ` ${word}`;
      let tempSecondPart = secondPart.substr(word.length).trim();

      if (tempFirstPart.length < tempSecondPart.length) {
        firstPart = tempFirstPart;
        secondPart = tempSecondPart;
      } else {
        return true; // break the loop
      }
    });

    return [firstPart.trim(), secondPart.trim()];
  };

  const [firstPart, secondPart] = splitTitle(title);

  const renderTitle = (text) => (
    <h1
      className={`${elementsBase} ${relativePosition} ${roundedCorner} ${textStyle} w-fit leading-tight`}
    >
      {text}
    </h1>
  );

  return (
    <div className="grid h-full grid-cols-[1fr_0.3fr]">
      <div className="relative h-[82.5vh]">
        <img
          src="/profile.jpg"
          alt="My Profile"
          className="left-6 h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-right-top"
        />

        <div
          className={`${elementsBase} project-logo-inverted-border-top-right absolute left-0 top-0 rounded-br-[2.5rem] py-4 text-xl`}
        >
          <h1 className="relative z-10">Project Logo</h1>
        </div>

        <div className="project-title-container-inverted-border-bottom-left absolute bottom-0 left-0">
          <p
            className={`${elementsBase} ${relativePosition} w-fit ${roundedCorner} pt-4`}
          >
            Sample Tititietie
          </p>
          {renderTitle(firstPart)}
          {secondPart && renderTitle(secondPart)}
        </div>
      </div>
      <div className="bg-blue-600">Scroller</div>
    </div>
  );
}

export default Projects;
