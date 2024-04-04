import Archives from "./Archives";

function Scroller() {
  const projects = [1, 2, 3, 4].map((_, index) => <Archives key={index} />);

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden">
      <h1 className="rounded-full border border-black py-2 text-center">
        Project Archives
      </h1>
      <div className="projects-container max-h-full">
        <div
          className="inner-scroller flex flex-col gap-3"
          style={{ paddingBlock: "1em" }}
        >
          {projects}
          {projects}
        </div>
      </div>
    </div>
  );
}

export default Scroller;
