function Archives() {
  return (
    <div className="archives-container group relative h-[15vh] w-[30vw] transition-all duration-300 ease-in-out hover:w-[40vw] hover:cursor-pointer xl:h-[20vh] xl:w-full xl:hover:h-[35vh] xl:hover:w-full">
      <img
        src="https://placehold.co/600x400"
        alt=""
        className="h-full w-full rounded-3xl object-cover transition-all duration-300"
      />
      <div className="archives absolute bottom-0 right-0 size-9 rounded-full bg-white transition-all duration-300 group-hover:size-12">
        <div className="absolute bottom-0 right-0 z-10 size-8 rounded-full bg-black transition-all duration-300 group-hover:size-11"></div>
      </div>
    </div>
  );
}

export default Archives;
