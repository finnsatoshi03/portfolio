import ProjectsHeader from "./ProjectsHeader";
import ProjectsDetail from "./ProjectsDetail";
import ProjectDescription from "./ProjectDescription";
import Scroller from "./Scroller";
import useMobileView from "../../hooks/useMobileView";
import LogoStack from "./LogoStack";

function Projects() {
  const techStacks = ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"];
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png",
  ];
  const isMobile = useMobileView();

  return (
    <div className="grid h-full min-w-0 grid-rows-[1fr_0.4fr] gap-10 xl:grid-cols-[1fr_0.3fr] xl:grid-rows-1 xl:gap-3">
      {/* project */}
      <div className="relative">
        <img
          src="https://placehold.co/600x400"
          alt="My Profile"
          className="left-6 h-full w-full rounded-[2.5rem] object-cover"
        />

        {/* top left - Project Header */}
        <ProjectsHeader />

        {/* bottom left - Project Details */}
        <ProjectsDetail techStacks={techStacks} />
        {/* bottom right - techStacjs */}
        {isMobile && <LogoStack logos={logos} position="right-4 bottom-16" />}
        {/* inside left - description */}
        <ProjectDescription />
      </div>

      {/* scroller (recent projects) */}
      <Scroller />
    </div>
  );
}

export default Projects;
