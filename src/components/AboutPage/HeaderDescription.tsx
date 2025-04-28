import { motion } from "framer-motion";
import {
  aboutHeaderDescription1,
  aboutHeaderDescription2,
  aboutHeaderLogo,
} from "../../lib/animations";

const HeaderDescription = () => {
  return (
    <div className="flex flex-col justify-center gap-18 px-5 font-host text-lg md:[word-spacing:0.125rem] lg:px-10 lg:text-3xl lg:leading-[3.125rem] xl:text-4xl">
      <div className="flex flex-col gap-18 md:flex-row md:justify-between">
        <motion.h2 {...aboutHeaderLogo} className="text-xs md:text-sm">
          ABOUT OUR STUDIO
        </motion.h2>
        <motion.p
          {...aboutHeaderDescription1}
          className="max-w-[50rem] md:w-7/12 md:pt-12 md:indent-6 lg:pt-32 lg:indent-16"
        >
          {import.meta.env.VITE_THEM_ABOUT_1.toUpperCase()}
        </motion.p>
      </div>
      <motion.div
        {...aboutHeaderDescription2}
        className="flex max-w-[56.25rem] flex-col gap-6 md:w-8/12 md:gap-10"
      >
        <p className="md:indent-8 lg:indent-24">
          {import.meta.env.VITE_THEM_ABOUT_2.toUpperCase()}
        </p>
        <p className="md:indent-4 lg:indent-8">
          {import.meta.env.VITE_THEM_ABOUT_3.toUpperCase()}
        </p>
      </motion.div>
    </div>
  );
};

export default HeaderDescription;
