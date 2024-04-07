function TechStack({ techs, logo, onScroller }) {
  const hasMultipleLogos = logo?.length > 1;

  return (
    <div
      className={`rounded-full ${hasMultipleLogos ? `${onScroller ? "size-4 xl:size-8" : "size-8"}flex items-center justify-center bg-white p-1` : "bg-white px-2.5 py-1 text-sm"}`}
    >
      {logo ? <img src={logo} alt="" /> : techs}
    </div>
  );
}

export default TechStack;
