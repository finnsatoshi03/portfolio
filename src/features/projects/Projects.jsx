import ProjectsHeader from "./ProjectsHeader";
import ProjectsDetail from "./ProjectsDetail";
import ProjectDescription from "./ProjectDescription";
import Scroller from "./Scroller";
import useMobileView from "../../hooks/useMobileView";
import TechStack from "./TechStack";

function Projects() {
  const techStacks = ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"];
  const isMobile = useMobileView();

  return (
    <div className="grid h-full gap-3 xl:grid-cols-[1fr_0.3fr]">
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
        <ProjectsDetail techStacks={techStacks} />
        {/* bottom right - techStacjs */}
        {isMobile && (
          <div className="absolute bottom-4 right-4">
            {techStacks.map((tech, index) => (
              <TechStack key={index} techs={tech} />
            ))}
          </div>
        )}
        {/* inside left - description */}
        <ProjectDescription />
      </div>

      {/* scroller (recent projects) */}
      <Scroller />
    </div>
  );
}

export default Projects;
