import useFetch from "../../hooks/useFetch";
import {
  ProjectImageClasses,
  ProjectTitleClasses,
} from "../../config/projectStylesHomePage.config";
import Loader from "../Loader";
import { motion } from "framer-motion";
import {
  projectDescriptionAnimation,
  projectLineAnimation,
} from "../../lib/animations";
import SectionTitle from "../SectionTitle";
import { Project } from "../../types/project";
import { Link } from "react-router-dom";

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
      <section className="flex flex-col items-center justify-center gap-4 px-5 text-sm lg:px-10">
        <p className="text-center font-semibold">
          AN UNKNOWN ERROR OCCURRED DURING FETCHING PROJECTS
        </p>
        <button onClick={reloadPageHandler}>RELOAD PAGE</button>
      </section>
    );

  return (
    <section className="px-5 text-xs lg:px-10 lg:text-sm">
      <SectionTitle title={"FEATURED PROJECTS"} />
      <div className="mt-6 flex flex-col gap-4 md:gap-10 lg:gap-17">
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
                <img
                  src={import.meta.env.VITE_THEM_API_HOST.concat(previewImage)}
                  alt={project.title}
                  loading="lazy"
                />
              </Link>
              <div
                className={`${ProjectTitleClasses[i]} flex flex-col gap-4 md:justify-end md:gap-6 lg:gap-12 xl:gap-18`}
              >
                <motion.hr
                  className="h-[0.0625rem] bg-white"
                  {...projectLineAnimation(i)}
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
      </div>
    </section>
  );
};

export default SectionProjectsList;
