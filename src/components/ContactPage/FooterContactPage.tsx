import { motion } from "framer-motion";
import { contactsPageAnimation } from "../../lib/animations";

const FooterContactPage = () => {
  return (
    <motion.footer
      {...contactsPageAnimation}
      className="items-left fixed bottom-0 mb-11 flex w-full flex-col justify-between gap-6 px-5 sm:flex sm:flex-row sm:items-center sm:justify-between lg:px-10"
    >
      <div>
        <ul className="flex flex-col gap-4 text-sm duration-300">
          <li className="hover:text-yellow">
            <a href={import.meta.env.VITE_THEM_INSTAGRAM}>INSTAGRAM</a>{" "}
          </li>
          <li className="hover:text-yellow">
            <a href={import.meta.env.VITE_THEM_BEHANCE}>BEHANCE</a>
          </li>
        </ul>
      </div>
      <div className="md:max-w-[32rem]">
        <p className="text-right indent-24 text-sm">
          WE INVITE YOU TO JOIN US ON THIS EXCITING ADVENTURE. LET{`’`}S
          COLLABORATE AND CREATE SOMETHING EXTRAORDINARY TOGETHER!
        </p>
      </div>
    </motion.footer>
  );
};

export default FooterContactPage;
