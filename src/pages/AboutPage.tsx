import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";
import HeaderAboutPage from "../components/AboutPage/HeaderAboutPage";
import SectionServices from "../components/AboutPage/SectionServices";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <HeaderAboutPage />
      <SectionServices />
      <Footer />

      <NavBarMobileMenu />
    </>
  );
};

export default AboutPage;
