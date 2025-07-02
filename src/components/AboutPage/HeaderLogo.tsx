import { motion } from "framer-motion";
import { aboutHeaderLogo } from "../../lib/animations";

const HeaderLogo = () => {
  return (
    <motion.h1
      {...aboutHeaderLogo}
      className="mx-auto flex max-w-[1440px] select-none items-center justify-between px-5 pt-20 font-gothic leading-none [font-size:_clamp(32px,19.5vw,290px)] lg:px-10"
    >
      <span className="block">S</span>
      <span className="block">T</span>
      <span className="block">U</span>
      <span className="block">D</span>
      <span className="block">I</span>
      <span className="clock">O</span>
    </motion.h1>
  );
};

export default HeaderLogo;
