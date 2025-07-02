import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";
import { Project } from "../../types/project";
import { Link } from "react-router-dom";
import {
  ProjectImageClasses,
  ProjectTitleClasses,
} from "../../config/projectsStylesProjectsPage.config";
import {
  aboutSectionProjectLineAnimation,
  projectAppearance,
  projectDescriptionAnimation,
} from "../../lib/animations";
import { motion } from "framer-motion";

const SectionProjectsList = () => {
  const { data, isLoading, error } = useFetch<Project[]>(
    `http://localhost:3000/api/v1/projects?limit=${import.meta.env.VITE_THEM_MAIN_PAGE_PROJECTS_QT}`,
  );

  const reloadPageHandler = () => {
    window.location.reload();
  };

  if (isLoading) return <Loader />;

  if (error)
    return (
      <section className="flex flex-col items-center justify-center gap-4 px-5 text-sm text-white lg:px-10">
        <p className="text-center font-semibold">
          ERROR OCCURRED DURING FETCHING PROJECTS
        </p>
        <button onClick={reloadPageHandler}>RELOAD PAGE</button>
      </section>
    );

  return (
    <section className="mx-auto mb-24 mt-10 flex max-w-[1440px] flex-col gap-4 px-5 text-white md:mb-40 md:mt-20 md:gap-10 lg:gap-17 lg:px-10">
      {data?.map((project, i) => {
        const previewImage = project.images.find(
          (img) => img.id === project.previewImageId,
        )?.url;
        return (
          <div
            className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-5"
            key={project.id}
          >
            <Link
              to={`/projects/${project.id}`}
              className={`${ProjectImageClasses[i]}`}
            >
              <motion.img
                src={import.meta.env.VITE_THEM_API_HOST.concat(previewImage)}
                alt={project.title}
                loading="lazy"
                {...projectAppearance}
              />
            </Link>
            <div
              className={`${ProjectTitleClasses[i]} flex flex-col gap-4 md:justify-end md:gap-6 lg:gap-12 xl:gap-18`}
            >
              <motion.hr
                className="h-[0.0625rem] bg-white"
                {...aboutSectionProjectLineAnimation(i)}
              />
              <motion.div {...projectDescriptionAnimation}>
                <div>
                  <p className="hidden md:block md:font-semibold">PROJECT</p>
                  <p>{project.title.toUpperCase()}</p>
                </div>
                <div>
                  <p className="hidden md:block md:font-semibold">CATEGORY</p>
                  <p>{project.category.toUpperCase()}</p>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SectionProjectsList;
