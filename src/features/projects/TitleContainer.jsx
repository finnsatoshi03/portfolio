import TechStack from "./TechStack";
import Title from "./Title";

/* eslint-disable react/prop-types */
function TitleContainer({ title, techStacks }) {
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

  const [firstPart, secondPart] = splitTitle(title);

  return (
    <>
      <div className="title-h1-p1 relative w-fit rounded-tr-[2.5rem] bg-white px-6 text-black">
        <Title text={firstPart} />
      </div>
      {secondPart && (
        <div className="title-h1-p2 relative w-fit rounded-tr-[2.5rem] bg-white px-6 text-black">
          <Title text={secondPart} />
          <div className="absolute -right-[17rem] bottom-6 flex w-[250px] flex-wrap-reverse gap-2">
            {techStacks.map((tech, index) => (
              <TechStack key={index} techs={tech} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TitleContainer;
