import useMobileView from "../../hooks/useMobileView";
import TechStack from "./TechStack";
import Title from "./Title";

/* eslint-disable react/prop-types */
function TitleContainer({ title, techStacks }) {
  const isMobile = useMobileView();
  const splitTitle = (title) => {
    let firstPart = "";
    let secondPart = title;

    title.split(" ").some((word) => {
      let tempFirstPart = firstPart + ` ${word}`;
      let tempSecondPart = secondPart.substr(word.length).trim();

      if (tempFirstPart.length < tempSecondPart.length) {
        firstPart = tempFirstPart;
        secondPart = tempSecondPart;
      } else {
        return true; // break the loop
      }
    });

    return [firstPart.trim(), secondPart.trim()];
  };

  // const projectName = isMobile ? title.split(" ")[0] : title;

  const [firstPart, secondPart] = splitTitle(title);

  return (
    <>
      {firstPart && (
        <div className="title-h1-p1 relative w-fit rounded-tr-[1.5rem] bg-white px-6 pt-2 text-black sm:rounded-tr-[2.5rem]">
          <Title text={firstPart} />
        </div>
      )}
      {secondPart && (
        <div
          className={`title-h1-p2 ${firstPart ? "" : "pt-2"} relative w-fit rounded-tr-[1.5rem] bg-white px-6 text-black sm:rounded-tr-[2.5rem]`}
        >
          <Title text={secondPart} />
          {!isMobile && (
            <div className="absolute -right-[11rem] bottom-6 flex w-[150px] flex-wrap-reverse gap-2 md:-right-[17rem] md:w-[250px]">
              {techStacks.map((tech, index) => (
                <TechStack key={index} techs={tech} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TitleContainer;
