const HeaderSubtitle = () => {
  return (
    <div className="absolute bottom-16 left-1/2 mx-auto flex w-full max-w-[30rem] -translate-x-1/2 flex-col items-center gap-6 font-host text-yellow">
      <h2 className="text-nowrap text-center leading-5.5 xsm:text-xl xsm:leading-6 sm:text-2xl md:text-3xl lg:text-wrap lg:text-4xl lg:leading-12">
        THAT’S HOW EXCELLENCE MAKES
      </h2>
      <div className="flex flex-col items-center gap-2 leading-3 md:leading-4">
        <div className="flex items-center justify-between gap-2 text-2xs xsm:gap-5 sm:gap-6 md:gap-9 md:text-xs lg:gap-10">
          <p>EXPLAINER VIDEOS</p>
          <p>BRANDING VIDEOS</p>
          <p>SHORT FILMS</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-2xs xsm:gap-6 sm:gap-9 md:gap-14 md:text-xs lg:gap-20">
          <p>PRODUCT DESIGN VISUAL</p>
          <p>MUSIC VIDEOS</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSubtitle;
