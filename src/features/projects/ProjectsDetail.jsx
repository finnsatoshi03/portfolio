import TitleContainer from "./TitleContainer";

function ProjectsDetail() {
  const title = "Sample Long Long";
  const techStacks = ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"];

  return (
    <div className="title-container absolute bottom-0 left-0 flex flex-col justify-between">
      {/* description */}
      <div className="title-tag relative w-fit rounded-tr-3xl bg-white px-6 pt-4 text-black">
        <p className="relative z-10">Sample Tititietie titietietei</p>
      </div>
      <TitleContainer title={title} techStacks={techStacks} />
    </div>
  );
}

export default ProjectsDetail;
