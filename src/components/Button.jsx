import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, onClick, disabled, type, to, className }) {
  const base =
    "inline-block rounded-full transition-colors duration-300 bg-black hover:bg-black hover:bg-opacity-50";

  const styles = {
    primary: base + "px-3 py-2 md:px-4 md:py-2",
    secondary:
      "inline-block rounded-full transition-colors duration-300 bg-white hover:bg-black hover:bg-opacity-20 px-3 py-2 md:px-4 md:py-2",
    rounded: `${base} p-1 md:p-2`,
    small: `${base} px-2 py-0.5 md:px-3 md:py-0.5 text-xs`,
  };

  const combinedClassName = `${styles[type]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}

export default Button;
