import HeaderBackgroundVideo from "./HeaderBackgroundVideo";
import NavBar from "../NavBar";
import HeaderLogo from "./HeaderLogo";
import HeaderSubtitle from "./HeaderSubtitle";

const HeaderHomePage = () => {
  return (
    <header className="relative z-0 mx-auto min-h-screen w-full">
      <HeaderBackgroundVideo />
      <div className="mx-auto max-w-[1440px]">
        <NavBar />
        <HeaderLogo />
        <HeaderSubtitle />
      </div>
    </header>
  );
};

export default HeaderHomePage;
