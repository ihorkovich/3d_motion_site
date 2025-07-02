import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";
import HeaderAboutPage from "../components/AboutPage/HeaderAboutPage";
import SectionServices from "../components/AboutPage/SectionServices";
import Footer from "../components/Footer";
import SectionAdditionalInfo from "../components/AboutPage/SectionAdditionalInfo";

const AboutPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[1440px]">
        <HeaderAboutPage />
        <SectionServices />
        <SectionAdditionalInfo />
        <Footer />
      </div>
      <NavBarMobileMenu />
    </>
  );
};

export default AboutPage;
