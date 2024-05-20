import { useState } from "react";
import { motion } from "framer-motion";

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

function Archives() {
  const [selectedArchive, setSelectedArchive] = useState(null);

  const handleClick = (index) => {
    if (selectedArchive === index) {
      setSelectedArchive(null);
    } else {
      setSelectedArchive(index);
    }
  };

  return (
    <motion.div
      className="scrollbar-hide relative overflow-auto pb-40"
      style={{ height: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="archive-h1 absolute top-1/3 w-screen overflow-hidden whitespace-nowrap text-[9rem] font-bold tracking-tighter">
        Explore My Work History Explore My Work History Explore My Work History
      </h1>
      {archives.map((archive, index) => (
        <>
          <div
            key={index}
            className="mx-auto mb-4 flex w-3/4 justify-between opacity-40 md:gap-6"
            onClick={(e) => {
              e.stopPropagation();
              handleClick(index);
            }}
          >
            <div className="flex items-start gap-4">
              <h1
                className={`font-roboto text-7xl font-black uppercase leading-[4rem] tracking-tighter transition-colors duration-700 ease-in-out ${selectedArchive === index && "text-green-700"} hover:cursor-pointer md:text-9xl md:leading-[6rem]`}
              >
                {archive.title}
              </h1>
              <p className="font-serif font-black">
                <span className="text-green-600">
                  {index < 10 ? `0${index + 1}` : index + 1}
                </span>{" "}
                / {index.length < 10 ? `0${index.length}` : archives.length}
              </p>
            </div>
            <p
              className={`text-sans w-1/4 self-end leading-4 transition-all duration-700 ${selectedArchive === index ? "opacity-100" : "opacity-0"}`}
            >
              {archive.description}
            </p>
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
