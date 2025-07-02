import { motion } from "framer-motion";
import { pageTitleAnimation } from "../../lib/animations";

const AboutProject = ({
  projectDescription,
}: {
  projectDescription: string;
}) => {
  return (
    <motion.div
      className="mx-auto my-24 flex max-w-[1440px] flex-col gap-6 px-5 sm:flex-row sm:items-start sm:justify-between lg:px-10"
      {...pageTitleAnimation}
    >
      <h3 className="text-xs uppercase">About project</h3>
      <hr className="h-[0.0625rem] bg-white sm:hidden" />
      <p className="sm:w-8/12">{projectDescription}</p>
    </motion.div>
  );
};

export default AboutProject;
