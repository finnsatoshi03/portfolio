import Button from "./Button";
import HeroHighlights from "./HeroHighlights";

function Hero() {
  return (
    <div className="relative my-12">
      <h1 className="font-roboto relative text-right font-bold tracking-tighter lg:text-[4.5rem] lg:leading-[4rem] xl:text-[6.5rem] xl:leading-[5rem]">
        Let's Build Something Together
        <svg
          width="500"
          height="200"
          viewBox="0 0 500 120"
          className="absolute -top-[3.5rem] right-[2rem] -rotate-[18deg] xl:-top-[2rem] xl:right-[10rem]"
        >
          <text
            className="text-stroke font-cursive fill-white stroke-green-700 text-[4.5rem] tracking-normal xl:text-[6.5rem]"
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
    </div>
  );
}

export default Hero;
