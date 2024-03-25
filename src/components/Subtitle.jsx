function Subtitle({ title = "Clean Code*", subtitlePosition }) {
  return (
    <div
      className={`absolute ${subtitlePosition} flex w-full items-center justify-center rounded-xl bg-black bg-opacity-80 px-6 py-1.5 text-xs text-white`}
    >
      {title === "Clean Code*"
        ? "I highlight efficient coding practices."
        : title === "Eco UX*"
          ? "I combine user experience with sustainability"
          : "I bring your visions to life."}
    </div>
  );
}

export default Subtitle;
