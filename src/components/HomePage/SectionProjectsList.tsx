import useFetch from "../../hooks/useFetch";
import {
  ProjectImageClasses,
  ProjectTitleClasses,
} from "../../config/projectStylesHomePage.config";
import Loader from "../Loader";

type Project = {
  id: number;
  title: string;
  category: string;
  video: string;
  images: { id: string; url: string; isPreviewImage: boolean }[];
};

const SectionProjectsList = () => {
  const { data, isLoading, error } = useFetch<Project[]>(
    `http://localhost:3000/api/v1/projects?limit=6&offset=1`,
  );

  const reloadPageHandler = () => {
    window.location.reload();
  };

  if (isLoading) return <Loader />;

  if (error)
    return (
      <section className="flex flex-col items-center justify-center gap-4 px-5 text-sm text-white lg:px-10">
        <p className="text-center font-semibold">
          AN UNKNOWN ERROR OCCURRED DURING FETCHING PROJECTS
        </p>
        <button onClick={reloadPageHandler}>RELOAD PAGE</button>
      </section>
    );

  return (
    <section className="px-5 text-xs text-white lg:px-10 lg:text-sm">
      <div className="border-b border-white pb-3">
        <p>FEATURED PROJECTS</p>
      </div>
      <div className="lg:gap-17 mt-6 flex flex-col gap-4 md:gap-10">
        {data?.map((project, i) => (
          <div
            className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-5"
            key={project.id}
          >
            <img
              src={project.video}
              alt={project.title}
              className={`${ProjectImageClasses[i]}`}
              loading="lazy"
            />
            <div
              className={`${ProjectTitleClasses[i]} xl:gap-18 flex flex-col gap-4 md:justify-end md:gap-6 lg:gap-12`}
            >
              <hr className="border-t border-white" />
              <div>
                <div>
                  <p className="hidden md:block md:font-semibold">PROJECT</p>
                  <p>{project.title.toUpperCase()}</p>
                </div>
                <div>
                  <p className="hidden md:block md:font-semibold">CATEGORY</p>
                  <p>{project.category.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionProjectsList;
