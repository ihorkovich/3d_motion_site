import HeaderBackgroundVideo from "./HeaderBackgroundVideo";
import NavBar from "../NavBar";
import HeaderLogo from "./HeaderLogo";
import HeaderSubtitle from "./HeaderSubtitle";

const HeaderHomePage = () => {
  return (
    <header className="relative z-0 mx-auto min-h-screen w-full">
      <HeaderBackgroundVideo />
      <NavBar />
      <HeaderLogo />
      <HeaderSubtitle />
    </header>
  );
};

export default HeaderHomePage;
