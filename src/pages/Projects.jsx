function Projects() {
  const title = "Sample Long Long long";
  const elementsBase = "px-6 bg-white text-black";
  const roundedCorner = "rounded-tr-[2.5rem]";
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
      className={`${textStyle} relative z-10 font-montserrat leading-tight tracking-tighter`}
    >
      {text}
    </h1>
  );

  return (
    <div className="grid h-full grid-cols-[1fr_0.3fr] gap-3">
      {/* project */}
      <div className="relative h-[82.5vh]">
        <img
          src="https://placehold.co/600x400"
          alt="My Profile"
          className="left-6 h-full w-full rounded-[2.5rem] object-cover"
        />

        {/* project logo */}
        <div
          className={`${elementsBase} project-logo-inverted-border-top-right absolute left-0 top-0 rounded-br-[2.5rem] py-4 text-xl`}
        >
          <h1 className="relative z-10">Project Logo</h1>
        </div>

        {/* title */}
        <div className="title-container absolute bottom-0 left-0 flex flex-col justify-between">
          <div
            className={`${elementsBase} title-tag relative w-fit rounded-tr-3xl pt-4`}
          >
            <p className="relative z-10">Sample Tititietie titietietei</p>
          </div>
          <div
            className={`${elementsBase} ${roundedCorner} title-h1-p1 relative w-fit`}
          >
            {renderTitle(firstPart)}
          </div>
          {secondPart && (
            <div
              className={`${elementsBase} ${roundedCorner} title-h1-p2 relative w-fit`}
            >
              {renderTitle(secondPart)}
            </div>
          )}
        </div>
      </div>

      {/* scroller (recent projects) */}
      <div className="flex h-full flex-col gap-3 overflow-hidden">
        <h1 className="rounded-full border border-black py-2 text-center">
          Project Archives
        </h1>
        <div className="relative h-[20vh] w-full transition-all duration-300 ease-in-out hover:h-[35vh] hover:cursor-pointer">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="relative h-[20vh] w-full transition-all duration-300 ease-in-out hover:h-[35vh] hover:cursor-pointer">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="relative h-[20vh] w-full transition-all duration-300 ease-in-out hover:h-[35vh] hover:cursor-pointer">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="relative h-[20vh] w-full transition-all duration-300 ease-in-out hover:h-[35vh] hover:cursor-pointer">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
