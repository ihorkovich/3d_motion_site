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
      <SectionDescription />
      <SectionProjectsList />
      <SectionLinkToAllProjects />
      <Footer />

      <NavBarMobileMenu />
    </>
  );
};

export default HomePage;
