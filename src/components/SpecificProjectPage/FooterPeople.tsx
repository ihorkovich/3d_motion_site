import { motion } from "framer-motion";
import {
  contactsPageLineAnimation,
  pageTitleAnimation,
} from "../../lib/animations";

type People = {
  name: string;
  role: string;
};

const FooterPeople = ({ peopleList }: { peopleList: People[] }) => {
  return (
    <div className="mx-auto my-24 w-full max-w-[1440px] px-5 text-xs md:text-sm lg:px-10">
      <motion.hr
        className="h-[0.0625rem] bg-white"
        {...contactsPageLineAnimation}
      />
      <motion.div {...pageTitleAnimation}>
        <div className="my-6 uppercase">CREDITS</div>
        {peopleList.map((person) => {
          return (
            <div className="text-xs uppercase">
              {person.role} — {person.name}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FooterPeople;
