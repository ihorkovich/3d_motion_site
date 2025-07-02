const MainVideo = ({ videolink }: { videolink: string }) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
      <video autoPlay muted className="mx-auto w-full" src={videolink}></video>
    </div>
  );
};

export default MainVideo;
