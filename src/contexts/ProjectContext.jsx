/* eslint-disable react/prop-types */
import { Octokit } from "@octokit/core";
import { createContext, useContext, useEffect, useReducer } from "react";

import { toTitleCase } from "../utils/helpers";

const initialState = {
  projects: [],
  isLoading: false,
  error: null,
};

const ProjectContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "projects/loaded":
      return { ...state, isLoading: false, projects: action.payload };

    case "rejected":
      return { ...state, isLoading: false, error: action.error };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchProjects() {
      dispatch({ type: "loading" });

      const octokit = new Octokit({
        auth: import.meta.env.VITE_REACT_APP_GITHUB_API_TOKEN,
      });
      const res = await octokit.request("GET /user/repos");

      const includedProjects = [
        "portfolio",
        "d3xtra-electron",
        "ProductivityApp",
        "recipe-website",
        "spotify-html-css",
      ];

      const projects = await Promise.all(
        res.data
          .filter((project) => includedProjects.includes(project.name))
          .map(async (project) => {
            const collaboratorsResponse = await octokit.request(
              "GET /repos/{owner}/{repo}/collaborators",
              {
                owner: project.owner.login,
                repo: project.name,
              },
            );

            return {
              name: toTitleCase(project.name),
              description: project.description,
              updated_at: project.updated_at,
              url: project.html_url,
              techStack: project.language,
              collaborators: collaboratorsResponse.data.map((collaborator) => ({
                login: collaborator.login,
                avatar_url: collaborator.avatar_url,
              })),
            };
          }),
      );

      dispatch({ type: "projects/loaded", payload: projects });
    }
    fetchProjects();
  }, []);

  //   console.log(state.projects);

  return (
    <ProjectContext.Provider value={state}>{children}</ProjectContext.Provider>
  );
}

function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }

  return context;
}

export { ProjectProvider, useProjects };
