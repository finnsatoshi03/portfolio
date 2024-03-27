import { useEffect } from "react";
import Hero from "../components/Hero";
import useVisibilityChange from "../hooks/useVisibilityChange";

function Home() {
  useEffect(() => {
    useVisibilityChange();
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
