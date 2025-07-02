import HeaderHomePage from "../components/HomePage/HeaderHomePage";
import SectionDescription from "../components/HomePage/SectionDescription";
import SectionProjectsList from "../components/HomePage/SectionProjectsList";
import SectionLinkToAllProjects from "../components/HomePage/SectionLinkToAllProjects";
import Footer from "../components/Footer";
import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";

const HomePage = () => {
  return (
    <>
      <HeaderHomePage />
      <div className="mx-auto max-w-[1440px]">
        <SectionDescription />
        <SectionProjectsList />
        <SectionLinkToAllProjects />
        <Footer />
      </div>

      <NavBarMobileMenu />
    </>
  );
};

export default HomePage;
