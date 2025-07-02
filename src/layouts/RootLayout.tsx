import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";

const RootLayout = () => {
  return (
    <>
      <NavBarMobileMenu />

      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default RootLayout;
