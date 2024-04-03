function Projects() {
  const elementsBase = "px-6 bg-white text-black";

  return (
    <div className="grid h-full grid-cols-[1fr_0.3fr]">
      <div className="relative h-[82.5vh]">
        {/* bg */}
        <img
          src="/profile.jpg"
          alt="My Profile"
          className="left-6 h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-right-top"
        />
        {/* elements */}

        {/* project logo */}
        <div
          className={`${elementsBase} project-logo-inverted-border-top-right absolute left-0 top-0 rounded-br-[2.5rem] py-4 text-xl`}
        >
          <h1 className="relative z-10">Project Logo</h1>
        </div>

        {/* project title */}
        <div className="project-title-container-inverted-border-bottom-left absolute bottom-0 left-0">
          <h1 className={`${elementsBase} relative rounded-tr-[2.5rem]`}>
            Sample
          </h1>
        </div>
      </div>
      <div className="bg-blue-600">Scroller</div>
    </div>
  );
}

export default Projects;
