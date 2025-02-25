import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";
import HeaderAboutPage from "../components/AboutPage/HeaderAboutPage";
import SectionServices from "../components/AboutPage/SectionServices";
import Footer from "../components/Footer";
import { AdditionalInfoSection } from "../components/AboutPage/AdditionalInfoSection";

const AboutPage = () => {
  return (
    <>
      <HeaderAboutPage />
      <SectionServices />
      <AdditionalInfoSection/>
      <Footer />
      <NavBarMobileMenu />
    </>
  );
};

export default AboutPage;
