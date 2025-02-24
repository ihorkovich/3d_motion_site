import SectionTitle from "../SectionTitle";
import SectionServicesDeep from "./SectionServicesExt";

const SectionServices = () => {
  return (
    <section className="my-24 px-5 font-host text-white md:my-32 lg:my-48 lg:px-10">
      <SectionTitle title={"OUR SERVICES"} />
      <SectionServicesDeep />
    </section>
  );
};

export default SectionServices;
