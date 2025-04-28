import "../styles/animations.css";
import { Link } from "react-router-dom";
import { pageConfig } from "../config/page.config";
import FooterAppeal from "./Footer/FooterAppeal";
import FooterSocialLinks from "./Footer/FooterSocialLinks";
import EmailButton from "./EmailButton";
import { motion } from "framer-motion";
import {
  footerAppearanceAnimation,
  footerLineAnimation,
} from "../lib/animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationLinks = [
    { label: "ABOUT", path: pageConfig.about },
    { label: "PROJECTS", path: pageConfig.projects },
    { label: "CONTACTS", path: pageConfig.contacts },
  ];

  return (
    <footer className="mb-11 px-5 lg:px-10">
      <motion.hr
        className="mb-11 h-[0.0625rem] bg-white md:hidden"
        {...footerLineAnimation}
      />
      <motion.div {...footerAppearanceAnimation}>
        <ul className="flex flex-col gap-4 text-sm md:hidden">
          {navigationLinks.map(({ path, label }) => (
            <li key={label}>
              <Link to={path} className="nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="my-11 md:hidden">
          <p className="text-xs">CONTACT</p>
          <FooterAppeal />
        </div>

        <div className="md:hidden">
          <FooterSocialLinks />
        </div>

        <div className="mb-8 hidden items-center justify-between md:flex">
          <FooterAppeal />
          <EmailButton />
        </div>

        <hr className="hidden border-t border-white md:block" />

        <div className="mt-11 flex items-center justify-between text-sm md:mt-8">
          <p>© {currentYear} DESIGN AND TECHNOLOGY THEM</p>
          <div className="flex items-center gap-16">
            <div className="hidden md:block">
              <FooterSocialLinks />
            </div>
            <div className="md:flex md:items-center md:justify-between md:gap-4">
              <p className="hidden md:block">TOP</p>
              <button
                className="flex aspect-square w-5 items-center justify-center rounded-full bg-white"
                onClick={handleScrollToTop}
                aria-label="Scroll to top"
              >
                <img src="/icons/arrowUp.svg" alt="Scroll to top" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
