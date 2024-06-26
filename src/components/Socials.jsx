import Icons from "../assets/icons";
import Button from "./Button";

function Socials() {
  return (
    <>
      <div className="inverted-border-radius absolute bottom-0 right-0 z-10 rounded-tl-3xl bg-white px-2 py-1.5">
        <div className="relative z-20 flex gap-1 sm:gap-2">
          <Button type="rounded" to="https://github.com/finnsatoshi03">
            <Icons name="github" fill="white" size="24" />
          </Button>
          <Button type="rounded" to="https://m.me/FabulousEggPie/">
            <Icons name="messenger" fill="white" size="24" />
          </Button>
          <Button type="rounded" to="mailto:finnsatoshi03@gmail.com">
            <Icons name="gmail" fill="white" size="24" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Socials;
