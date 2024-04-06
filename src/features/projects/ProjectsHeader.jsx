function ProjectsHeader({ collaborators }) {
  // const images = [
  //   "https://placehold.co/400",
  //   "https://placehold.co/400",
  //   "https://placehold.co/400",
  //   "https://placehold.co/400",
  //   "https://placehold.co/400",
  //   "https://placehold.co/400",
  // ];

  // console.log(collaborators);

  return (
    <div className="project-logo-inverted-border-top-right absolute left-0 top-0 rounded-br-[2.5rem] bg-white px-6 py-4 text-xl text-black">
      {/* project logo */}
      <h1 className="relative z-10">Project Logo</h1>
      {/* developers */}
      <div className="absolute -right-[170px] top-4 flex w-[150px]">
        {collaborators.slice(0, 4).map((collaborator, index) => (
          <img
            key={index}
            src={collaborator.avatar_url}
            alt={collaborator.login}
            className="absolute left-[20px] size-8 rounded-full border border-red-500"
            style={{ left: `${index * 20}px` }}
          />
        ))}
        {collaborators.length > 4 && (
          <div
            className="absolute left-[80px] flex size-8 items-center justify-center rounded-full border border-red-500 bg-red-500 text-xs text-white"
            style={{ left: "80px" }}
          >
            +{collaborators.length - 4}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsHeader;
