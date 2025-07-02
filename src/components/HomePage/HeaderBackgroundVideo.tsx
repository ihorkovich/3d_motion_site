import "../../styles/index.css";

const HeaderBackgroundVideo = () => {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover brightness-50"
      autoPlay
      muted
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    ></video>
  );
};

export default HeaderBackgroundVideo;
