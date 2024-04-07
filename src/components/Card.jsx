/* eslint-disable react/prop-types */
import Button from "./Button";

function Card({
  inProfile = false,
  pos,
  title,
  label,
  buttonText,
  type,
  icon,
  onMouseEnter,
  onMouseLeave,
  url,
  image,
}) {
  const base = `${pos} absolute inline-flex items-center rounded-3xl xl:rounded-[2rem]`;

  const styles = {
    primary: `${base} bg-white bg-opacity-20 p-2 gap-4 w-[15rem]`,
    secondary: `${base} bg-white bg-opacity-25 backdrop-blur-sm gap-2 shadow-md border border-white border-opacity-25 w-[11rem] sm:w-[18rem] `,
  };

  return (
    <div
      className={`${inProfile ? styles[type] : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={image || "https://placehold.co/400"}
        alt="Recent Project"
        className={`${type === "secondary" ? "size-[6rem] sm:size-[8rem]" : "size-[5rem]"} rounded-2xl object-cover xl:rounded-3xl`}
      />
      <div className={type === "secondary" ? "flex flex-col py-2 pr-3" : ""}>
        <p className="text-sm">{label}</p>
        <h2 className="mb-1.5 text-sm font-bold leading-4 sm:text-base">
          {title}
        </h2>
        <Button
          type={type === "secondary" ? "" : "small"}
          to={url}
          className="absolute bottom-4 right-4 rounded-full bg-white p-1 hover:bg-green-300"
        >
          {!icon ? buttonText : icon}
        </Button>
      </div>
    </div>
  );
}

export default Card;
