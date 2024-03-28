import useMobileView from "../hooks/useMobileView";

function Subtitle({ title = "Clean Code*", subtitlePosition }) {
  const isMobile = useMobileView();

  return (
    <div
      className={`absolute ${subtitlePosition} flex items-center justify-center rounded-xl bg-black bg-opacity-80 px-6 py-1.5 text-xs text-white`}
      style={{
        width: isMobile ? title === "Eco UX*" && "calc(100% + 2rem)" : "100%",
      }}
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
