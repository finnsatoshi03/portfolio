import Icons from "../assets/icons";
import Button from "./Button";
import HeroHighlights from "./HeroHighlights";
import Skills from "./Skills";

const skills = [
  {
    highlight: true,
    title: "React",
    icon: (
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/dotty/80/react.png"
        alt="react"
      />
    ),
  },
  {
    title: "Flutter",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/ios/50/flutter.png"
        alt="flutter"
      />
    ),
  },
  {
    title: "React Native",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/dotty/80/react.png"
        alt="react"
      />
    ),
  },
  {
    title: "HTML/CSS/JS",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/ios/50/html-5--v2.png"
        alt="html-5--v2"
      />
    ),
  },
  {
    title: "Electron",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/dotty/80/react.png"
        alt="react"
      />
    ),
  },
  {
    title: "Photoshop & Illustrator",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/material-outlined/48/adobe-photoshop.png"
        alt="adobe-photoshop"
      />
    ),
  },
  {
    title: "Figma",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/material-outlined/48/figma.png"
        alt="figma"
      />
    ),
  },
  {
    title: "Git & Github",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/ios/50/github--v1.png"
        alt="github--v1"
      />
    ),
  },
  {
    title: "Firebase & Supabase",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/material-outlined/48/firebase.png"
        alt="firebase"
      />
    ),
  },
  {
    title: "Bootstrap & Tailwind",
    icon: (
      <img
        width="19"
        src="https://img.icons8.com/ios/50/bootstrap.png"
        alt="bootstrap"
      />
    ),
  },
];

const positions = [
  {
    x: "left-2/3",
    y: "top-1.5",
    translate: "-translate-x-1/2",
  },
  {
    x: "right-[2.5rem]",
    y: "top-24",
    translate: "-translate-y-1/2",
  },
  {
    x: "-right-2",
    y: "top-1/2",
    translate: "-translate-y-1/2",
  },
  {
    x: "right-[2.5rem]",
    y: "top-[80%]",
    translate: "-translate-y-1/2",
  },
  {
    x: "left-2/3",
    y: "bottom-1.5",
    translate: "-translate-x-1/2",
  },
  {
    x: "left-[31%]",
    y: "bottom-1.5",
    translate: "translate-x-1/2",
  },
  {
    x: "left-[3.1rem]",
    y: "top-[80%]",
    translate: "translate-y-1/2",
  },
  {
    x: "-left-2",
    y: "top-1/2",
    translate: "-translate-y-1/2",
  },
  {
    x: "left-[2.5rem]",
    y: "top-24",
    translate: "-translate-y-1/2",
  },
  {
    x: "right-2/3",
    y: "top-3",
    translate: "-translate-x-1/2",
  },
];

function Hero() {
  const radius = 15;

  return (
    <div className="relative my-12">
      <h1 className="relative text-right font-roboto font-bold tracking-tighter lg:text-[4.5rem] lg:leading-[4rem] xl:text-[6.5rem] xl:leading-[5rem]">
        Let's Build Something Together
        <svg
          width="500"
          height="200"
          viewBox="0 0 500 120"
          className="absolute -top-[3.5rem] right-[2rem] -rotate-[18deg] xl:-top-[2rem] xl:right-[10rem]"
        >
          <text
            className="text-stroke fill-white stroke-green-700 font-cursive text-[4.5rem] tracking-normal xl:text-[6.5rem]"
            x="250"
            y="100"
          >
            Amazing
          </text>
        </svg>
        <span className="absolute left-[4rem] top-[4.5rem] xl:left-0 xl:top-[6rem]">
          <img
            className="h-[50px] w-[200px] object-cover xl:w-[300px]"
            src="https://img.icons8.com/sf-ultralight/300/long-arrow-right.png"
            alt="long-arrow-right"
          />
        </span>
      </h1>

      <div className="relative">
        <HeroHighlights />
        <div className="absolute top-28 flex items-center justify-center gap-2 xl:top-36">
          <Button
            type="primary"
            to="/contact"
            className="text-sm text-white xl:text-base"
          >
            Contact Me &rarr;
          </Button>
          <Button
            type="secondary"
            to="/about"
            className="text-sm text-black underline xl:text-base"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-[47rem] -left-56">
        <div
          className="spin relative h-[30rem] w-[30rem] rounded-full border border-gray-400"
          data-spin="true"
        >
          {skills.map((skill, index) => {
            const position = positions[index];

            return (
              <div
                key={index}
                className={`absolute ${position.x} ${position.y} ${position.translate} size-3 transform rounded-full bg-black`}
              >
                <div className={`spin-reverse relative`} data-spin="true">
                  <div className={`absolute -top-4 left-6`}>
                    <Skills
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;