import ContactPage from "../components/ContactPage/ContactPage";
import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";

const ContactsPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[1440px]">
        <ContactPage />
      </div>

      <NavBarMobileMenu />
    </>
  );
};

export default ContactsPage;
