import ProjectsHeader from "./ProjectsHeader";
import ProjectsDetail from "./ProjectsDetail";
import ProjectDescription from "./ProjectDescription";
import Scroller from "./Scroller";
import useMobileView from "../../hooks/useMobileView";
import LogoStack from "./LogoStack";

function Projects() {
  const techStacks = ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"];
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

        <ProjectsHeader />
        <ProjectsDetail techStacks={techStacks} />
        {isMobile && (
          <LogoStack position="right-4 bottom-[4.5rem]" className="" />
        )}
        <ProjectDescription />
      </div>

      <Scroller />
    </div>
  );
}

export default Projects;
