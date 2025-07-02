import { motion } from "framer-motion";
import {
  contactsPageLineAnimation,
  projectPageAnimation,
} from "../../lib/animations";

const HeaderMainImage = ({
  categories,
  year,
  imgUrl,
}: {
  categories: string;
  year: number;
  imgUrl: string;
}) => {
  return (
    <div className="mx-auto mb-6 max-w-[1440px] px-5 sm:mb-10 md:mb-16 lg:mb-28 lg:px-10 xl:mb-48">
      <motion.hr
        className="mt-4 h-[0.0625rem] bg-white"
        {...contactsPageLineAnimation}
      />

      <motion.div
        className="mt-11 flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-16 md:gap-32 lg:gap-48 xl:gap-60"
        {...projectPageAnimation}
      >
        <ul className="flex flex-col text-xs sm:gap-6 md:text-sm">
          <li>
            <p className="hidden font-semibold sm:inline sm:text-base">
              CATEGORIES
            </p>
            <p>{categories.toUpperCase()}</p>
          </li>
          <li>
            <p className="hidden font-semibold sm:inline sm:text-base">YEAR</p>
            <p>{year}</p>
          </li>
        </ul>

        <div className="relative">
          <img src={imgUrl} className="object-contain" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderMainImage;
