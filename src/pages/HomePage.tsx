import HeaderHomePage from "../components/HomePage/HeaderHomePage";
import SectionDescription from "../components/HomePage/SectionDescription";
import SectionLinkToAllProjects from "../components/HomePage/SectionLinkToAllProjects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <HeaderHomePage />
      <SectionDescription />
      <SectionLinkToAllProjects />
      <Footer />
    </>
  );
};

export default HomePage;
