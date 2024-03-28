function HeroHeader() {
  return (
    <div className="clamp relative mr-2 font-roboto font-bold tracking-tighter text-black">
      <div className="flex w-full flex-col">
        <h1 className="self-end whitespace-nowrap">
          Let's Build{" "}
          <span className="font-serif font-thin italic">Something</span>
        </h1>
        <div className="together relative self-end">
          <h1>Together</h1>
          <svg
            width="25vw"
            height="25vh"
            viewBox="0 0 500 120"
            className="absolute -left-[19vw] -top-[12vh] -rotate-[18deg]"
          >
            <text
              className="text-stroke fill-white stroke-black font-cursive text-[8.5rem] tracking-normal"
              x="250"
              y="100"
            >
              Amazing
            </text>
          </svg>
          <span className="absolute -left-[25vw] -top-2 md:-top-[4vh]">
            <img
              className="size-[10vw] rotate-[140deg] object-cover"
              src="https://img.icons8.com/laces/300/252525/curly-arrow.png"
              alt="curly-arrow"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
