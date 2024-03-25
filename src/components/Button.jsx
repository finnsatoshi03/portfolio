import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, onClick, disabled, type, to }) {
  const base =
    "inline-block rounded-full transition-colors duration-300 hover:bg-white hover:bg-opacity-20 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block rounded-full transition-colors duration-300 bg-black hover:bg-black hover:bg-opacity-20",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    active: base + "border border-black px-4 py-3 md:px-6 md:py-4",
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
