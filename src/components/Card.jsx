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
}) {
  const base = `${pos} absolute inline-flex items-center rounded-3xl xl:rounded-[2rem]`;

  const styles = {
    primary: `${base} bg-white bg-opacity-20 p-2 gap-4`,
    secondary: `${base} bg-white bg-opacity-25 backdrop-blur-xs gap-2 shadow-md border border-white border-opacity-25`,
  };

  return (
    <div className={`${inProfile ? styles[type] : ""}`}>
      <img
        src="https://placehold.co/400"
        alt="Recent Project"
        className="w-[6vw] rounded-2xl xl:rounded-3xl"
      />
      <div className={type === "secondary" ? "flex flex-col pr-2" : ""}>
        <p className="text-sm">{label}</p>
        <h2 className="mb-1.5 w-3/4 font-bold leading-4">{title}</h2>
        <Button
          type={type === "secondary" ? "" : "small"}
          className="self-end rounded-full bg-white p-1 hover:bg-blue-200"
        >
          {!icon ? buttonText : icon}
        </Button>
      </div>
    </div>
  );
}

export default Card;
