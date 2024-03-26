function HeroHighlights() {
  const bold = "font-bold text-black";

  return (
    <div className="absolute my-6 max-w-[65%] overflow-hidden whitespace-nowrap border-y border-gray-400 py-2 text-sm uppercase text-gray-400 xl:my-10 xl:text-base">
      <p className="animate-slide-toLeft">
        Front-end <span className={bold}>Developer</span>. Web/Graphic{" "}
        <span className={bold}>Designer</span>. Layout{" "}
        <span className={bold}>Artist</span>. Front-end{" "}
        <span className={bold}>Developer</span>. Web/Graphic{" "}
        <span className={bold}>Designer</span>. Layout{" "}
        <span className={bold}>Artist</span>
      </p>
      <div className="my-2 h-[1px] w-full bg-gray-400"></div>
      <p className="animate-slide-toRight">
        <span className={bold}>Click Magnet</span>. Crafting{" "}
        <span className={bold}>Websites</span> that Wow. I Paint{" "}
        <span className={bold}>Pixels. Click Magnet</span>. Crafting{" "}
        <span className={bold}>Websites</span> that Wow. I Paint{" "}
        <span className={bold}>Pixels.</span>
      </p>
    </div>
  );
}

export default HeroHighlights;
