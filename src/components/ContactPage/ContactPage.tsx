import NavBar from "../NavBar";
import TitleContactPage from "./TitleContactPage";
import FooterContactPage from "./FooterContactPage";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex h-screen flex-col">
        <TitleContactPage />
        <FooterContactPage />
      </div>
    </>
  );
};

export default ContactPage;
