/* eslint-disable react/prop-types */
import { memo, useState } from "react";
import {
  projectImagesMapping,
  techStacksDescriptionMapping,
  techStacksMapping,
} from "../../data/projects";

import useMobileView from "../../hooks/useMobileView";
import Icons from "../../assets/icons";
import LogoStack from "./LogoStack";

function Archives({ onSelect, project }) {
  const isMobile = useMobileView();
  const [isHovered, setIsHovered] = useState(false);

  const transition = "transition-all duration-300 ease-in-out";

  const description =
    techStacksDescriptionMapping[project.name.trim().toLowerCase()] || "";
  const techStacks = techStacksMapping[project.name.trim().toLowerCase()] || [];
  const projectImage =
    projectImagesMapping[project.name.trim().toLowerCase()] ||
    "https://placehold.co/600x400";
  const limitedText = description.split(" ").slice(0, 7).join(" ") + "...";

  const projectName = isMobile ? project.name.split(" ")[0] : project.name;

  return (
    <div
      className={`${transition} archives-container group relative h-[15vh] w-[30vw] hover:w-[40vw] hover:cursor-pointer xl:h-[20vh] xl:w-full xl:hover:h-[35vh] xl:hover:w-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <img
        src={projectImage}
        alt=""
        className="h-full w-full rounded-3xl object-cover opacity-50 transition-all duration-300"
      />

      <div
        className={`${transition} absolute left-3 ${isHovered ? "top-2" : "top-2/3 lg:top-[65%] xl:top-[70%]"}`}
      >
        <h1 className="px-2 py-1 font-montserrat text-lg font-bold md:text-xl xl:text-2xl">
          {projectName}
        </h1>
      </div>

      <LogoStack
        position="top-2 xl:top-4 right-4 xl:right-8"
        isHovered={isHovered}
        reverse={true}
        techStacks={techStacks}
        onScroller={true}
      />

      {!isMobile && (
        <div
          className={`${transition} absolute left-3  ${isHovered ? "bottom-2" : "bottom-[55%] xl:bottom-[65%]"}  text-xs leading-4`}
        >
          <p
            className="w-3/4 px-2 py-1"
            style={{
              textShadow: "2px 2px 4px rgba(255, 255, 255, 255.5)",
              // mixBlendMode: "difference",
              color: "black",
            }}
          >
            {limitedText}
          </p>
        </div>
      )}

      <div
        className={`archives ${transition} absolute bottom-0 right-0 size-9 rounded-full bg-white group-hover:size-12`}
      >
        <div
          className={`${transition} absolute bottom-0 right-0 z-10 flex size-8 rotate-180 items-center justify-center rounded-full bg-black group-hover:size-11`}
        >
          <Icons
            name="arrow"
            size={isHovered ? "20" : "14"}
            className={`${transition} group-hover:-rotate-45`}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Archives);
