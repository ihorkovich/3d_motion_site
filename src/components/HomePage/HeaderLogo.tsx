const HeaderLogo = () => {
  return (
    <h1 className="absolute top-20 flex w-full select-none items-center justify-between px-5 font-gothic leading-none [font-size:_clamp(7vw,15vw,30vw)] lg:px-10">
      <span>A</span>
      <span>T</span>
      <span>{"\u00A0"}</span>
      <span>T</span>
      <span>H</span>
      <span>E</span>
      <span>M</span>
      <span className="hidden md:inline-block">.</span>
    </h1>
  );
};

export default HeaderLogo;
