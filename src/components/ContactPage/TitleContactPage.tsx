import { motion } from "framer-motion";
import {
  contactsPageAnimation,
  contactsPageLineAnimation,
} from "../../lib/animations";
import EmailButton from "../EmailButton";

const TitleContactPage = () => {
  return (
    <div className="flex-1 px-5 lg:px-10">
      <motion.h3
        {...contactsPageAnimation}
        className="hidden text-sm lg:block lg:pt-20"
      >
        CONTACT <br />
        INFORMATION
      </motion.h3>
      <motion.h1
        {...contactsPageAnimation}
        className="pt-20 font-host text-4xl font-bold sm:text-5xl md:text-6xl lg:pt-4 lg:text-7xl xl:text-[5.5rem]"
      >
        ANY PROJECT IN MIND? <br /> GET IN TOUCH
      </motion.h1>
      <motion.hr
        className="mt-6 h-[0.0625rem] bg-white"
        {...contactsPageLineAnimation}
      />
      <motion.p {...contactsPageAnimation} className="py-11 text-xs lg:py-6">
        CONTACT
      </motion.p>
      <motion.ul
        {...contactsPageAnimation}
        className="flex flex-col gap-2 text-sm"
      >
        <li>{import.meta.env.VITE_THEM_MOBILEPHONE_1}</li>
        <li>{import.meta.env.VITE_THEM_MOBILEPHONE_2}</li>
        <li className="text-sm">
          <a
            href={`${import.meta.env.VITE_THEM_TELEGRAM}`}
            target="_blank"
            aria-label="Visit our TELEGRAM"
          >
            TELEGRAM
          </a>
          ,{" "}
          <a
            href={`${import.meta.env.VITE_THEM_WHATSAPP}`}
            target="_blank"
            aria-label="Visit our TELEGRAM"
          >
            WHATSAPP
          </a>
        </li>

        <li className="text-sm">
          <EmailButton />
        </li>
      </motion.ul>
    </div>
  );
};

export default TitleContactPage;
