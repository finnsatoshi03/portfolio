import { useState } from "react";
import { useProjects } from "../../contexts/ProjectContext";
import { useLatestProject } from "../../hooks/useLatestProject";
import {
  techStacksDescriptionMapping,
  techStacksMapping,
} from "../../data/projects";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsDetail from "./ProjectsDetail";
import ProjectDescription from "./ProjectDescription";
import Scroller from "./Scroller";
import useMobileView from "../../hooks/useMobileView";
import LogoStack from "./LogoStack";

function Projects() {
  const isMobile = useMobileView();
  const { projects } = useProjects();

  const [selectedProject, setSelectedProject] = useState(null);
  const latestProject = useLatestProject(projects);
  const projectToDisplay = selectedProject || latestProject;

  const title = projectToDisplay ? projectToDisplay.name : "Sample Long Long";
  const description = projectToDisplay
    ? techStacksDescriptionMapping[
        projectToDisplay.name.trim().toLowerCase()
      ] || ""
    : "";
  const collaborators = projectToDisplay ? projectToDisplay.collaborators : [];
  const techStacks = projectToDisplay
    ? techStacksMapping[projectToDisplay.name.trim().toLowerCase()] || [
        projectToDisplay.techStack,
      ]
    : ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"];

  const handleProjectSelect = (index) => {
    setSelectedProject(projects[index]);
  };

  return (
    <div className="grid h-full min-w-0 grid-rows-[1fr_0.4fr] gap-10 xl:grid-cols-[1fr_0.3fr] xl:grid-rows-1 xl:gap-3">
      {/* project */}
      <div className="relative">
        <img
          src="https://placehold.co/600x400"
          alt="My Profile"
          className="left-6 h-full w-full rounded-[2.5rem] object-cover"
        />

        <ProjectsHeader collaborators={collaborators} />
        <ProjectsDetail techStacks={techStacks} title={title} />
        {isMobile && (
          <LogoStack
            parentStyle={{
              right: "1rem",
              bottom: `${4.5 + techStacks.length * 0.5}rem`,
            }}
            techStacks={techStacks}
          />
        )}
        <ProjectDescription description={description} />
      </div>

      <Scroller onProjectSelect={handleProjectSelect} projects={projects} />
    </div>
  );
}

export default Projects;
