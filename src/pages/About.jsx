function About() {
  return (
    <div
      className="inline-grid grid-cols-[auto_auto] font-montserrat font-black uppercase "
      style={{ width: "calc(100vw - 5rem)" }}
    >
      <h2 className="col-span-2 justify-self-end text-[6.5rem] leading-[6rem]">
        I <span className="font-serif tracking-tighter">inject</span>
      </h2>
      <h1 className="col-span-2 justify-self-end text-[10.5rem] leading-[10rem]">
        Creativity
      </h1>
      <h2 className="col-span-2 justify-self-end text-[5.5rem] leading-[5rem]">
        <span className="font-roboto tracking-tighter">
          for{" "}
          <span
            style={{
              WebkitTextStroke: "0.1rem #000",
              color: "transparent",
            }}
          >
            your
          </span>
        </span>{" "}
        Vision
      </h2>
    </div>
  );
}

export default About;
