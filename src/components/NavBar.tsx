import "../styles/animations.css";
import { Link, NavLink } from "react-router-dom";
import { pageConfig } from "../config/page.config";
import { useMenu } from "../contexts/mobileMenuContext";
import logo from "/logo/them_logo.png";

const NavBar = () => {
  const { toggleMenu } = useMenu();

  const navItems = [
    { label: "ABOUT", path: pageConfig.about },
    { label: "PROJECTS", path: pageConfig.projects },
    { label: "CONTACTS", path: pageConfig.contacts },
  ];

  return (
    <nav className="fixed z-50 h-navbar_mob w-full max-w-[1440px] px-5 lg:h-navbar_desk lg:px-10">
      <div className="relative h-full w-full font-host text-base">
        <Link
          to={pageConfig.home}
          className="laft-0 absolute top-1/2 -translate-y-1/2 font-gothic"
        >
          <img src={logo} alt="THEM" className="w-14" />
        </Link>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:justify-between md:gap-4">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link relative overflow-hidden ${
                    isActive ? "selected-nav-link" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow md:hidden">
          <button aria-label="Open menu" onClick={toggleMenu}>
            MENU
          </button>
        </div>

        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-base duration-300 hover:cursor-pointer hover:text-yellow md:block">
          <a
            href={import.meta.env.VITE_THEM_EMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {import.meta.env.VITE_THEM_EMAIL.toUpperCase()}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
