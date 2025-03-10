import { pageTitleAnimation } from "../lib/animations";
import { motion } from "framer-motion";
type PageTitleProps = {
  title: string;
  subtitle: string;
};

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <motion.div
      className="px-5 pt-20 text-left text-white lg:px-10"
      {...pageTitleAnimation}
    >
      <h3 className="font-host text-xs md:text-sm">{subtitle.toUpperCase()}</h3>
      <h1 className="font-gothic text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
        {title.toUpperCase()}
      </h1>
    </motion.div>
  );
};

export default PageTitle;
