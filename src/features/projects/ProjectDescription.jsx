function ProjectDescription({ description }) {
  return (
    <div className="absolute left-8 top-[6rem] max-h-[25vh] w-[45vw] rounded-3xl bg-white bg-opacity-20 px-4 py-6 shadow-md backdrop-blur-md md:max-w-[300px]">
      {/* <h1 className="mb-2 text-xl md:text-2xl">Description</h1> */}
      <p className="text-xs leading-3 md:text-sm md:leading-4">{description}</p>
    </div>
  );
}

export default ProjectDescription;
