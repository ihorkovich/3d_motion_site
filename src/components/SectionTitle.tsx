import { motion } from "framer-motion";
import {
  sectionTitleAnimation,
  sectionTitleLineAnimation,
} from "../lib/animations";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <motion.p {...sectionTitleAnimation} className="pb-3 text-xs md:text-sm">
        {title.toUpperCase()}
      </motion.p>
      <motion.hr
        className="h-[0.0625rem] bg-white"
        {...sectionTitleLineAnimation}
      />
    </div>
  );
};

export default SectionTitle;
