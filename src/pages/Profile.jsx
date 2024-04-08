import Socials from "../components/Socials";
import Highlight from "../components/Highlights";
import Card from "../components/Card";
import CardsSlide from "../components/CardsSlide";
import useMobileView from "../hooks/useMobileView";
import { useProjects } from "../contexts/ProjectContext";
import { projectImagesMapping } from "../data/projects";

const highlights = [
  { title: "Clean Code*", pos: "pos-1" },
  { title: "Eco UX*", pos: "pos-2" },
  { title: "Eye Artistry*", pos: "pos-3" },
];

function Profile() {
  const isMobile = useMobileView();
  const { projects } = useProjects();

  const latestProject = projects.reduce((latest, project) => {
    return new Date(project.updated_at) > new Date(latest.updated_at)
      ? project
      : latest;
  }, projects[0]);
  const projectImage =
    projectImagesMapping[latestProject?.name?.trim().toLowerCase()] ||
    "https://placehold.co/600x400";
  // console.log(projectImagesMapping[latestProject.name?.trim().toLowerCase()]);

  // console.log(latestProject);

  return (
    <div
      className="relative"
      style={{
        height: isMobile ? "calc(70vh - 6rem)" : "calc(100vh - 3rem)",
      }}
    >
      <img
        src="/profile.jpg"
        alt="My Profile"
        className="left-6 h-full w-full rounded-l-[2.5rem] rounded-tr-[2.5rem] object-cover object-right-top"
      />
      <Card
        inProfile={true}
        label="Recent Project"
        title={latestProject?.name}
        url={latestProject?.url}
        image={projectImage}
        buttonText="View"
        pos="topRight"
        type="primary"
      />
      {highlights.map((highlight, index) => (
        <Highlight key={index} title={highlight.title} pos={highlight.pos} />
      ))}
      <Socials />
      <CardsSlide projects={projects} />
    </div>
  );
}

export default Profile;
