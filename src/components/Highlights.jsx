import { useState } from "react";
import Subtitle from "./Subtitle";

function Highlights({ title, pos }) {
  const base = "inline-block rounded-full bg-white px-3 py-2 md:px-4 md:py-2";

  const [isSubtitleOpen, setSubtitleOpen] = useState(false);
  const [subtitlePosition, setSubtitlePosition] = useState("");

  const handleMouseEnter = (position) => {
    setSubtitleOpen(true);
    setSubtitlePosition(position);
  };

  return (
    <div
      className={`sample absolute ${pos} z-10 flex cursor-pointer gap-4`}
      onMouseLeave={() => setSubtitleOpen(false)}
    >
      <div
        className={`${base} inverted-border-radius-button flex items-center justify-center`}
        onMouseEnter={() => handleMouseEnter("top-14")}
      >
        <p className="text-xs md:text-sm">{title}</p>
      </div>
      <div
        className="rounded-full bg-white px-1.5 py-1 text-xs md:text-base"
        onMouseEnter={() => handleMouseEnter("-right-6 top-14")}
      >
        <p className="rounded-full bg-green-300 px-2.5 py-1">&#10003;</p>
      </div>
      {isSubtitleOpen && (
        <Subtitle title={title} subtitlePosition={subtitlePosition} />
      )}
    </div>
  );
}

export default Highlights;
