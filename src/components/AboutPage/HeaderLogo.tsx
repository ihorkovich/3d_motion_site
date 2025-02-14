import { motion } from "framer-motion";
import { aboutHeaderLogo } from "../../lib/animations";

const HeaderLogo = () => {
  return (
    <motion.h1
      {...aboutHeaderLogo}
      className="flex w-full select-none items-center justify-between px-5 pt-20 font-gothic leading-none text-white [font-size:_clamp(18vw,19vw,21vw)] xsm:[font-size:_clamp(10vw,20vw,40vw)] sm:[font-size:_clamp(10vw,20.5vw,40vw)] lg:px-10"
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
