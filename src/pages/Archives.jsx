import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PlaceholdersAndVanishInput } from "../components/ui/VanishInput";

const archives = [
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    image: "https://via.placeholder.com/150",
  },
];

const placeholders = [
  "Graphic Design",
  "Web Development",
  "Mobile Development",
  "System Development",
  "School Projects",
  // "Randoms",
];

function Archives() {
  const [selectedArchive, setSelectedArchive] = useState(null);

  const handleClick = (index) => {
    if (selectedArchive === index) {
      setSelectedArchive(null);
    } else {
      setSelectedArchive(index);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <motion.div
      className="scrollbar-hide relative overflow-auto pb-40"
      style={{ height: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <PlaceholdersAndVanishInput
        className="mb-4 md:mb-6"
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {archives.map((archive, index) => (
        <>
          <div
            key={index}
            className="group mx-auto mb-4 flex w-full justify-between gap-2 md:w-3/4 md:gap-6"
            onClick={(e) => {
              e.stopPropagation();
              handleClick(index);
            }}
          >
            <div className="flex items-start gap-4">
              <motion.h1
                className={`font-roboto text-5xl font-black uppercase leading-[2.2rem] tracking-tighter transition-colors duration-700 ease-in-out ${selectedArchive === index ? "text-[#00a69b]" : "opacity-40"} hover:cursor-pointer md:text-9xl md:leading-[6rem]`}
                whileHover={{ x: 10 }}
                // transition={{ type: "spring", stiffness: 500 }}
              >
                {archive.title}
              </motion.h1>
              <p className="font-serif font-black opacity-40">
                <span className="text-[#00a69b]">
                  {index < 10 ? `0${index + 1}` : index + 1}
                </span>{" "}
                / {index.length < 10 ? `0${index.length}` : archives.length}
              </p>
            </div>
            {selectedArchive !== index && (
              <motion.div
                className="self-end rounded-full bg-black p-2 transition-all duration-700 ease-in-out group-hover:-rotate-45 group-hover:cursor-pointer group-hover:bg-slate-700 md:p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ArrowRight
                  // size={isMobile ? 24 : 48}
                  className="size-[24px] md:size-[48px]"
                  strokeWidth={1}
                  color="white"
                />
              </motion.div>
            )}
            {selectedArchive === index && (
              <motion.p
                className="text-sans w-1/4 self-end leading-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {archive.description}
              </motion.p>
            )}
          </div>
          <motion.img
            src={archive.image}
            alt={archive.title}
            className={`overflow-hidden transition-all duration-700 ${selectedArchive === index ? "h-[40vh]" : "h-0"} mb-4 w-full rounded-3xl object-cover`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </>
      ))}
    </motion.div>
  );
}

export default Archives;
