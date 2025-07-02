import "../../styles/animations.css";
import { useMenu } from "../../contexts/mobileMenuContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { navItems, socialLinks } from "../../config/link.config";
import EmailButton from "../EmailButton";
import {
  menuVariants,
  menuNavLinks,
  menuSocialLinks,
} from "../../lib/animations";
import { pageConfig } from "../../config/page.config";
import logo from "/logo/them_logo.png";

const NavBarMobileMenu = () => {
  const { isOpen, closeMenu } = useMenu();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    closeMenu();

    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed left-0 top-0 z-[100] h-screen w-full bg-yellow px-5 md:hidden"
        >
          <div className="flex h-navbar_mob items-center justify-between text-black">
            <Link to={pageConfig.home}>
              <img src={logo} alt="THEM" className="w-14" />
            </Link>

            <button
              aria-label="Close menu"
              className="font-host"
              onClick={closeMenu}
            >
              CLOSE
            </button>
          </div>

          <div className="font-host">
            <motion.ul
              className="flex flex-col gap-2 font-bold"
              {...menuNavLinks}
            >
              {navItems.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavigate(path)}
                    className={`mobile-nav-link relative overflow-hidden text-[2.75rem] leading-[3.25rem] text-black after:bg-black sm:text-5xl sm:leading-[3.5rem]`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            {...menuSocialLinks}
            className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-between px-5 text-sm text-black"
          >
            <EmailButton />
            <ul className="flex flex-col items-end gap-1 font-host text-sm">
              {socialLinks.slice(0, 2).map(({ label, link }) => (
                <li key={label} className="text-black">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit our ${label}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBarMobileMenu;
