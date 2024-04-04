import useVisibilityChange from "../hooks/useVisibilityChange";

// Title Component
const Title = ({ text }) => (
  <h1 className="relative z-10 font-montserrat text-[5.5rem] font-semibold leading-tight tracking-tighter">
    {text}
  </h1>
);

// Project Component
const Project = ({ index }) => (
  <div
    key={index}
    className="relative h-[20vh] w-full transition-all duration-300 ease-in-out hover:h-[35vh] hover:cursor-pointer"
  >
    <img
      src="https://placehold.co/600x400"
      alt=""
      className="h-full w-full rounded-3xl object-cover"
    />
  </div>
);

function Projects() {
  useVisibilityChange();

  const title = "Sample Long Long long";

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

  const projects = [1, 2, 3, 4].map((_, index) => (
    <Project key={index} index={index} />
  ));

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
        <div className="project-logo-inverted-border-top-right absolute left-0 top-0 rounded-br-[2.5rem] bg-white px-6 py-4 text-xl text-black">
          <h1 className="relative z-10">Project Logo</h1>
        </div>

        {/* title */}
        <div className="title-container absolute bottom-0 left-0 flex flex-col justify-between">
          <div className="title-tag relative w-fit rounded-tr-3xl bg-white px-6 pt-4 text-black">
            <p className="relative z-10">Sample Tititietie titietietei</p>
          </div>
          <div className="title-h1-p1 relative w-fit rounded-tr-[2.5rem] bg-white px-6 text-black">
            <Title text={firstPart} />
          </div>
          {secondPart && (
            <div className="title-h1-p2 relative w-fit rounded-tr-[2.5rem] bg-white px-6 text-black">
              <Title text={secondPart} />
            </div>
          )}
        </div>

        {/* inside */}
        {/* description */}
      </div>

      {/* scroller (recent projects) */}
      <div className="flex h-full flex-col gap-3 overflow-hidden">
        <h1 className="rounded-full border border-black py-2 text-center">
          Project Archives
        </h1>
        <div className="projects-container max-h-ful">
          <div
            className="inner-scroller flex flex-col gap-3"
            style={{ paddingBlock: "1em" }}
          >
            {projects}
            {projects}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
