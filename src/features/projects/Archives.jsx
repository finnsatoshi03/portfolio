import { useState } from "react";
import useMobileView from "../../hooks/useMobileView";
import Icons from "../../assets/icons";
import LogoStack from "./LogoStack";

function Archives() {
  const isMobile = useMobileView();
  const [isHovered, setIsHovered] = useState(false);

  const transition = "transition-all duration-300 ease-in-out";
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui doloribus et reiciendis";
  const limitedText = text.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <div
      className={`${transition} archives-container group relative h-[15vh] w-[30vw] hover:w-[40vw] hover:cursor-pointer xl:h-[20vh] xl:w-full xl:hover:h-[35vh] xl:hover:w-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://placehold.co/600x400"
        alt=""
        className="h-full w-full rounded-3xl object-cover transition-all duration-300"
      />

      <div
        className={`${transition} absolute left-3 ${isHovered ? "top-2" : "top-2/3 lg:top-[65%] xl:top-[70%]"}`}
      >
        <h1 className="w-3/4 px-2 py-1 font-montserrat text-lg font-bold md:text-xl xl:text-2xl">
          Title
        </h1>
      </div>

      <LogoStack
        position="top-4 right-4"
        isHovered={isHovered}
        reverse={true}
      />

      {!isMobile && (
        <div
          className={`${transition} absolute left-3  ${isHovered ? "bottom-2" : "bottom-1/3 md:bottom-1/2 xl:bottom-[60%]"}  text-xs leading-4`}
        >
          <p
            className="w-3/4 px-2 py-1"
            style={{ mixBlendMode: "difference", color: "white" }}
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

export default Archives;
