import "../../styles/animations.css";
import { useMenu } from "../../contexts/mobileMenuContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { navItems, socialLinks } from "../../config/link.config";
import EmailButton from "../EmailButton";
import {
  menuVariants,
  menuNavLinks,
  menuSocialLinks,
} from "../../lib/animations";

const NavBarMobileMenu = () => {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className={`fixed left-0 top-0 z-[100] h-screen w-full bg-yellow px-5 md:hidden`}
        >
          <div className="just flex h-navbar_mob items-center justify-between text-black">
            <Link to="/" onClick={toggleMenu}>
              <p className="font-gothic">THEM</p>
            </Link>

            <button
              aria-label="Close menu"
              className="font-host"
              onClick={toggleMenu}
            >
              CLOSE
            </button>
          </div>

          <div className="font-host">
            <motion.ul
              className="items-left flex flex-col gap-2 font-host font-bold"
              {...menuNavLinks}
            >
              {navItems.map(({ label, path }) => (
                <li key={label} onClick={toggleMenu}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-link relative overflow-hidden text-[2.75rem] leading-[3.25rem] text-black after:bg-black sm:text-5xl sm:leading-[3.5rem] ${
                        isActive ? "selected-nav-link" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
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
                    aria-label={`Visit our ${label}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBarMobileMenu;
