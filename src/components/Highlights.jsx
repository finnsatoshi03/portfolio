function Highlights({ title }) {
  const base = "inline-block rounded-full bg-white px-3 py-2 md:px-4 md:py-2";

  return (
    <div className="absolute left-12 top-1/2 z-10 flex gap-4">
      <span
        className={`${base} inverted-border-radius-button flex items-center justify-center`}
      >
        <p className="text-sm">{title}</p>
      </span>
      <p className={base}>+</p>
    </div>
  );
}

export default Highlights;
