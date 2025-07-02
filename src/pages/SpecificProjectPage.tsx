import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import HeaderMainImage from "../components/SpecificProjectPage/HeaderMainImg";
import NavBarMobileMenu from "../components/NavBar/NavBarMobileMenu";
import {
  contactsPageAnimation,
  contactsPageLineAnimation,
} from "../lib/animations";
import ImageGrid from "../components/SpecificProjectPage/ImageGrid";
import AboutProject from "../components/SpecificProjectPage/AboutProject";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Project } from "../types/project";
import FooterPeople from "../components/SpecificProjectPage/FooterPeople";
import MainVideo from "../components/SpecificProjectPage/MainVideo";
import ProcessVideo from "../components/SpecificProjectPage/ProcessVideo";

const SpecificProjectPage = () => {
  const { projectId } = useParams();

  const { data } = useFetch<Project>(
    `http://localhost:3000/api/v1/projects/${projectId}`,
  );

  const previewImage = data?.images.filter(
    (img) => img.id == data?.previewImageId,
  )[0]?.url;

  const additionalImages = data?.images.filter(
    (img) => img.id != data?.previewImageId,
  );

  return (
    data && (
      <>
        <div className="mx-auto max-w-[1440px]">
          <NavBar />
        </div>
        <div className="h-20 w-full"></div>
        <motion.div
          className="mx-auto max-w-[1440px] px-5 font-host uppercase lg:px-10"
          {...contactsPageAnimation}
        >
          <h2 className="text-xs">Creative project</h2>
          <h1 className="text-5xl font-bold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            {data.title}
          </h1>
        </motion.div>

        <HeaderMainImage
          categories={data.category}
          year={data.year}
          imgUrl={import.meta.env.VITE_THEM_API_HOST.concat(previewImage)}
        />

        <MainVideo
          videolink={import.meta.env.VITE_THEM_API_HOST.concat(data.mainVideo)}
        />

        <AboutProject projectDescription={data.about} />
        {data && (
          <ImageGrid images={additionalImages?.map((img) => img.url) ?? []} />
        )}
        <motion.div className="mx-auto mb-6 mt-20 max-w-[1440px] px-5 font-host uppercase lg:px-10">
          <h2 className="text-xs">Making Process</h2>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
            Process
          </h1>

          <motion.hr
            className="h-[0.0625rem] bg-white"
            {...contactsPageLineAnimation}
          />
        </motion.div>
        <ProcessVideo
          videolink={import.meta.env.VITE_THEM_API_HOST.concat(
            data.previewVideo,
          )}
        />

        <FooterPeople peopleList={data.projectPeople} />

        <Footer />
        <NavBarMobileMenu />
      </>
    )
  );
};

export default SpecificProjectPage;
