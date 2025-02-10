import { NavLink } from "react-router-dom";
import { pageConfig } from "../../config/page.config";
import { motion } from "framer-motion";
import { sectionLinkToAllProjectsAnimation } from "../../lib/animations";
const SectionLinkToAllProjects = () => {
  return (
    <motion.section
      {...sectionLinkToAllProjectsAnimation}
      className="flex flex-col items-center gap-6 px-5 py-24 text-center text-white sm:py-32 md:py-40 lg:px-10 lg:py-48"
    >
      <p className="max-w-[37rem] text-xs md:text-left md:text-base 2xl:text-lg">
        DISCOVER THE FULL SPECTRUM OF OUR CREATIVE PORTFOLIO AND EXPLORE THE
        UNIQUE PROJECTS WE'VE BROUGHT TO LIFE.
      </p>

      <button>
        <NavLink
          to={pageConfig.projects}
          className={({ isActive }) =>
            `nav-link overflow-hidden text-lg 2xl:text-xl ${isActive ? "selected-nav-link" : ""}`
          }
        >
          VIEW ALL PROJECTS
        </NavLink>
      </button>
    </motion.section>
  );
};

export default SectionLinkToAllProjects;
