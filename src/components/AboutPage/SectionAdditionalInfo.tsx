import { motion } from "framer-motion";
import { sectionAdditionalInfo } from "../../lib/animations";

const SectionAdditionalInfo = () => {
  return (
    <section className="pb-20 font-host text-lg md:[word-spacing:0.125rem] lg:px-10 lg:text-3xl xl:text-4xl">
      <motion.p
        {...sectionAdditionalInfo}
        className="px-6 md:px-6 md:indent-6 lg:px-0 lg:pb-32 lg:indent-14 lg:leading-[3.125rem]"
      >
        {import.meta.env.VITE_THEM_ABOUT_ADDITIONAL.toUpperCase()}
      </motion.p>
    </section>
  );
};

export default SectionAdditionalInfo;
