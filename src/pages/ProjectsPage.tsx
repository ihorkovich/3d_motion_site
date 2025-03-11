import HeaderProjectsPage from "../components/ProjectsPage/HeaderProjectsPage";
import SectionProjectsList from "../components/ProjectsPage/SectionProjectsList";
import Footer from "../components/Footer";
import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";

const ProjectsPage = () => {
  return (
    <>
      <HeaderProjectsPage />
      <SectionProjectsList />
      <Footer />

      <NavBarMobileMenu />
    </>
  );
};

export default ProjectsPage;
