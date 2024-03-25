import { Link } from "react-router-dom";

function Logo({ size = "size-14" }) {
  return (
    <Link to="home">
      <img src="/logo-sm.png" alt="Brand Logo" className={size} />
    </Link>
  );
}

export default Logo;
