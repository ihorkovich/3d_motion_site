import { motion } from "framer-motion";
import { descriptionAnimation } from "../../lib/animations";
const SectionDescription = () => {
  return (
    <motion.section
      {...descriptionAnimation}
      className="items-top flex justify-center px-5 py-24 text-white sm:justify-between sm:py-32 md:py-40 lg:px-10 lg:py-48"
    >
      <p className="hidden h-full text-xs sm:block sm:w-5/12">THEM STUDIO</p>
      <p className="sm:before:content-[' '] text-left text-lg leading-6 xsm:px-10 sm:w-7/12 sm:p-0 sm:text-xl sm:leading-7 sm:before:inline-block sm:before:w-10 md:text-2xl md:leading-8 lg:text-4xl lg:leading-9">
        WE ARE A PASSIONATE AND AMBITIOUS CG STUDIO DEDICATED TO BRINGING YOUR
        VISIONS TO LIFE.
      </p>
    </motion.section>
  );
};

export default SectionDescription;
