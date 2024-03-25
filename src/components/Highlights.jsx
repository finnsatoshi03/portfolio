import { useState } from "react";

function Highlights({ title, left = "", top = "", right = "", bottom = "" }) {
  const base = "inline-block rounded-full bg-white px-3 py-2 md:px-4 md:py-2";

  const positionClasses = [
    left && `left-${left}`,
    top && `top-${top}`,
    right && `right-${right}`,
    bottom && `bottom-${bottom}`,
  ]
    .filter(Boolean)
    .join(" ");

  const [isSubtitleOpen, setSubtitleOpen] = useState(false);
  const [subtitlePosition, setSubtitlePosition] = useState("");

  const handleMouseEnter = (position) => {
    setSubtitleOpen(true);
    setSubtitlePosition(position);
  };

  return (
    <div
      className={`absolute ${positionClasses} z-10 flex cursor-pointer gap-4`}
      onMouseLeave={() => setSubtitleOpen(false)}
    >
      <div
        className={`${base} inverted-border-radius-button flex items-center justify-center`}
        onMouseEnter={() => handleMouseEnter("top-14")}
      >
        <p className="text-sm">{title}</p>
      </div>
      <div
        className="rounded-full bg-white px-1.5 py-1"
        onMouseEnter={() => handleMouseEnter("-right-6 top-14")}
      >
        <p className="rounded-full bg-blue-200 px-2.5 py-1">&#10003;</p>
      </div>
      {isSubtitleOpen && (
        <div
          className={`absolute ${subtitlePosition} flex w-full items-center justify-center rounded-xl bg-black bg-opacity-80 px-6 py-1.5 text-xs text-white`}
        >
          {title === "Clean Code*"
            ? "I highlight efficient coding practices."
            : title === "Eco UX*"
              ? "I combine user experience with sustainability"
              : "I bring your visions to life."}
        </div>
      )}
    </div>
  );
}

export default Highlights;
