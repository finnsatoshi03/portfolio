import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, onClick, disabled, type, to }) {
  const base =
    "inline-block rounded-full transition-colors duration-300 hover:bg-white hover:bg-opacity-50";

  const styles = {
    primary: base + "px-3 py-1 md:px-4 md:py-1",
    secondary:
      "inline-block rounded-full transition-colors duration-300 bg-black hover:bg-black hover:bg-opacity-20 px-3 py-1 md:px-4 md:py-1",
    small: base + " px-2 py-0.5 md:px-3 md:py-0.5 text-xs",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
