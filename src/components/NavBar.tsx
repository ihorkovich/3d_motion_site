import "../styles/animations.css";
import { NavLink } from "react-router-dom";
import { pageConfig } from "../config/page.config";

const NavBar = () => {
  const navItems = [
    { label: "ABOUT", path: pageConfig.about },
    { label: "PROJECTS", path: pageConfig.projects },
    { label: "CONTACTS", path: pageConfig.contacts },
  ];

  return (
    <nav className="fixed z-50 h-navbar_mob w-full px-5 lg:h-navbar_desk lg:px-10">
      <div className="flex h-full w-full items-center justify-between font-host text-base">
        <div className="font-gothic text-white">
          <p>THEM</p>
        </div>

        <ul className="hidden text-white md:flex md:items-center md:justify-between md:gap-4">
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

        <div className="text-yellow md:hidden">
          <button aria-label="Open menu">MENU</button>
        </div>

        <div className="hidden text-base text-white duration-300 hover:cursor-pointer hover:text-yellow md:block">
          <p>{import.meta.env.VITE_THEM_EMAIL.toUpperCase()}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
