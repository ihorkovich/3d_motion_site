import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SectionMobileServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const services: string[] = [
    "Short Films",
    "Product Design",
    "3D Graphics",
    "Branding Videos",
    "Music Videos",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
        setIsFadingOut(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="sm:flex sm:gap-3">
      <div className="hidden sm:flex sm:w-1/2 sm:items-end sm:justify-start">
        <div className="aspect-square sm:max-w-[260px] md:max-w-[340px] lg:max-w-[410px] xl:max-w-[430px]">
          <img
            src="/images/about_services.png"
            alt="Services"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="sm:flex sm:w-1/2 sm:flex-col sm:justify-between sm:gap-12 md:gap-20 lg:gap-32">
        <div className="my-11 flex items-center justify-between text-[2.5rem] font-bold md:text-[4rem] lg:text-[5rem] xl:text-[6.5rem]">
          <h2>SERVICES</h2>
          <p className="md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">{`(05)`}</p>
        </div>
        <ul className="flex flex-col gap-2 text-2xl sm:gap-0">
          {services.map((service, i) => {
            return (
              <motion.li
                animate={{
                  color:
                    activeIndex === i
                      ? isFadingOut
                        ? "#676767"
                        : "#FFFC40"
                      : "#676767",
                }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
                key={service}
              >
                <motion.p
                  animate={{
                    opacity: activeIndex === i ? (isFadingOut ? 0 : 1) : 0,
                  }}
                  className="w-3/12 select-none sm:hidden"
                >
                  0{i + 1}
                </motion.p>
                <p>{service.toUpperCase()}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SectionMobileServices;
