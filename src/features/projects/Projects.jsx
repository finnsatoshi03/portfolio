import useVisibilityChange from "../../hooks/useVisibilityChange";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsDetail from "./ProjectsDetail";
import ProjectDescription from "./ProjectDescription";
import Scroller from "./Scroller";

function Projects() {
  useVisibilityChange();

  return (
    <div className="grid h-full grid-cols-[1fr_0.3fr] gap-3">
      {/* project */}
      <div className="relative h-[82.5vh]">
        <img
          src="https://placehold.co/600x400"
          alt="My Profile"
          className="left-6 h-full w-full rounded-[2.5rem] object-cover"
        />

        {/* top left - Project Header */}
        <ProjectsHeader />

        {/* bottom left - Project Details */}
        <ProjectsDetail />

        {/* inside left - description */}
        <ProjectDescription />
      </div>

      {/* scroller (recent projects) */}
      <Scroller />
    </div>
  );
}

export default Projects;
