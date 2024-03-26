function Home() {
  return (
    <div className="my-12">
      <h1 className="font-roboto relative text-right font-bold tracking-tighter lg:text-[4.5rem] lg:leading-[4rem] xl:text-[6.5rem] xl:leading-[5rem]">
        Let's Build Something Together
        <svg
          width="500"
          height="200"
          viewBox="0 0 500 120"
          className="absolute -top-[2rem] right-[10rem] -rotate-[18deg]"
        >
          <text
            className="text-stroke font-cursive fill-white stroke-green-700 text-[6.5rem] tracking-normal"
            x="250"
            y="100"
          >
            Amazing
          </text>
        </svg>
        <span className="absolute left-0 top-[6rem]">
          <img
            className="h-[50px] w-[300px] object-cover"
            src="https://img.icons8.com/sf-ultralight/300/long-arrow-right.png"
            alt="long-arrow-right"
          />
        </span>
      </h1>
    </div>
  );
}

export default Home;
