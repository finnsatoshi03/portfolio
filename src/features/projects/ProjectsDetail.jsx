import TitleContainer from "./TitleContainer";

function ProjectsDetail({ techStacks }) {
  const title = "Sample Long Long";

  return (
    <div className="title-container absolute bottom-0 left-0 flex flex-col justify-between">
      {/* description */}
      <div className="title-tag relative w-fit rounded-tr-3xl bg-white px-6 pt-4 text-black">
        <p className="relative z-10 text-xs md:text-base">
          Sample Tititietie titietietei
        </p>
      </div>
      <TitleContainer title={title} techStacks={techStacks} />
    </div>
  );
}

export default ProjectsDetail;
