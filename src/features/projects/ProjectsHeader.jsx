import { useState } from "react";

/* eslint-disable react/prop-types */
function ProjectsHeader({ collaborators, selectedProject }) {
  const [hoveredCollaborator, setHoveredCollaborator] = useState(null);
  if (selectedProject?.name === "Rms Company") {
    selectedProject.url = "https://rms-avisha.vercel.app/";
    // console.log(selectedProject);
  }

  return (
    <div className="project-logo-inverted-border-top-right absolute left-0 top-0 rounded-br-[2.5rem] bg-white px-6 py-4 text-xl text-black">
      {/* project logo */}
      <div
        className="relative z-10 rounded-full border border-black p-2 hover:cursor-pointer"
        onClick={() => window.open(selectedProject?.url, "_blank")}
      >
        <img
          className="size-8"
          src={`${selectedProject?.url.includes("github") ? "https://cdn-icons-png.flaticon.com/512/25/25231.png" : "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"}`}
          alt="GitHub Icon"
        />
      </div>
      {/* developers */}
      <div className="absolute -right-[170px] top-4 flex w-[150px]">
        {collaborators.slice(0, 4).map((collaborator, index) => (
          <div key={index}>
            <img
              src={collaborator.avatar_url}
              alt={collaborator.login}
              className="absolute left-[20px] size-8 rounded-full border-2 border-inherit"
              style={{ left: `${index * 20}px` }}
              onMouseEnter={() => setHoveredCollaborator(collaborator.login)}
              onMouseLeave={() => setHoveredCollaborator(null)}
            />
            {hoveredCollaborator === collaborator.login && (
              <div
                className="absolute -bottom-16 w-max rounded-md bg-black px-2 py-1 text-xs text-white"
                style={{ left: `${index * 20}px` }}
              >
                {collaborator.login}
              </div>
            )}
          </div>
        ))}
        {collaborators.length > 4 && (
          <div
            className="absolute left-[80px] flex size-8 items-center justify-center rounded-full border border-red-500 bg-red-500 text-xs text-white"
            style={{ left: "80px" }}
          >
            +{collaborators.length - 4}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsHeader;
