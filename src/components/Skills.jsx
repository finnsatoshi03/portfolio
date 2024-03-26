function Skills({ highlight = false, title, description, icon }) {
  return (
    <>
      <p
        className={`inline-flex items-center gap-2 ${highlight ? "text-lg" : "text-base"} font-semibold`}
      >
        {icon}
        {title}
      </p>
      <p
        className={`w-[350px] ${highlight ? "text-base" : "text-sm"} leading-[.25rem] text-gray-400`}
      >
        {description}
      </p>
    </>
  );
}

export default Skills;
