import "../styles/animations.css";
import { NavLink } from "react-router-dom";
import { pageConfig } from "../config/page.config";

const NavBar = () => {
  return (
    <nav className="fixed z-50 h-navbar_mob w-full px-5 lg:h-navbar_desk lg:px-10">
      <div className="flex h-full w-full items-center justify-between font-host text-base">
        <div className="font-gothic text-white">
          <p>THEM</p>
        </div>
        <div>
          <ul className="hidden text-white md:flex md:items-center md:justify-between md:gap-4">
            <NavLink
              to={pageConfig.about}
              className={({ isActive }) =>
                `nav-link relative overflow-hidden ${isActive ? "selected-nav-link" : ""}`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to={pageConfig.projects}
              className={({ isActive }) =>
                `nav-link relative overflow-hidden ${isActive ? "selected-nav-link" : ""}`
              }
            >
              PROJECTS
            </NavLink>
            <NavLink
              to={pageConfig.contacts}
              className={({ isActive }) =>
                `nav-link relative overflow-hidden ${isActive ? "selected-nav-link" : ""}`
              }
            >
              CONTACTS
            </NavLink>
          </ul>
        </div>
        <div className="text-yellow md:hidden">
          <button>MENU</button>
        </div>
        <div className="hidden text-base text-white md:block">
          <p>THEMSTUDIO2024@GMAIL.COM</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
