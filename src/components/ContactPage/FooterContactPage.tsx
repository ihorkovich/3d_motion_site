import { motion } from "framer-motion";
import { contactsPageAnimation } from "../../lib/animations";

const FooterContactPage = () => {
  return (
    <motion.footer
      {...contactsPageAnimation}
      className="items-left fixed bottom-0 mb-11 flex w-full max-w-[1440px] flex-col justify-between gap-6 px-5 sm:flex sm:flex-row sm:items-center sm:justify-end lg:px-10"
    >
      <div className="md:max-w-[32rem]">
        <p className="text-right indent-24 text-sm">
          {import.meta.env.VITE_THEM_CONTACTS_FOOTER}
        </p>
      </div>
    </motion.footer>
  );
};

export default FooterContactPage;
