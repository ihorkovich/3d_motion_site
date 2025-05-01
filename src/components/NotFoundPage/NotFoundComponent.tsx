import {
  contactsPageAnimation,
  contactsPageLineAnimation,
  notFoundPageAppearance,
} from "../../lib/animations";
import NavBar from "../NavBar";
import { motion } from "framer-motion";

const NotFoundComponent = () => {
  return (
    <>
      <NavBar />

      <div className="absolute bottom-10 top-20 flex w-full flex-col items-center justify-center px-5 lg:px-10">
        <motion.h1
          {...contactsPageAnimation}
          className="text-center font-host text-4xl font-bold leading-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          {"(404)"}
          <br />
          PAGE NOT FOUND
        </motion.h1>
        <div className="flex w-full justify-start">
          <motion.hr
            className="mt-6 h-[0.0625rem] bg-white"
            {...contactsPageLineAnimation}
          />
        </div>
        <motion.h3
          {...notFoundPageAppearance}
          className="mt-6 text-center font-host text-xs lg:text-sm"
        >
          LOST IN THEM CREATIVE VOID. THE PAGE YOU’RE LOOKING FOR
        </motion.h3>
        <motion.h3
          {...notFoundPageAppearance}
          className="text-justify font-host text-xs lg:text-sm"
        >
          SADLY COULD NOT BE FOUND.
        </motion.h3>
      </div>
      <motion.div
        {...notFoundPageAppearance}
        className="absolute bottom-5 w-full px-5 sm:right-0 sm:w-48 lg:px-10"
      >
        <a href="/">
          <button className="text-xsm h-10 w-full rounded-md bg-white text-black duration-300 hover:bg-slate-300">
            BACK HOME
          </button>
        </a>
      </motion.div>
    </>
  );
};

export default NotFoundComponent;
