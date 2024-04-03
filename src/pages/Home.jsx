import Hero from "../components/Hero";
import useVisibilityChange from "../hooks/useVisibilityChange";

function Home() {
  useVisibilityChange();
  // useEffect(() => {
  // }, []);

  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
