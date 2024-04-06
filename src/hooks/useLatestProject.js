import { useState, useEffect } from "react";

function useLatestProject(projects) {
  const [latestProject, setLatestProject] = useState(null);

  useEffect(() => {
    if (projects.length > 0) {
      const latest = projects.reduce((latest, project) => {
        return new Date(project.updated_at) > new Date(latest.updated_at)
          ? project
          : latest;
      }, projects[0]);
      setLatestProject(latest);
    }
  }, [projects]);

  return latestProject;
}

export { useLatestProject };
