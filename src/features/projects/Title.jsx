function Title({ text }) {
  return (
    <h1 className="relative z-10 font-montserrat text-[3rem] font-semibold leading-[3rem] tracking-tighter sm:text-[4rem] sm:leading-[4rem] md:text-[4.5rem] md:leading-[4.5rem] xl:text-[5.5rem] xl:leading-[5rem]">
      {text}
    </h1>
  );
}

export default Title;
