import { additionalPlacement } from "../../lib/specificProjectImageClasses";

const ImageGrid = ({ images }: { images: string[] }) => {
  return (
    <div
      className={`mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 md:grid-cols-4 lg:px-10`}
    >
      {images.map((img, i) => {
        return (
          <img
            src={import.meta.env.VITE_THEM_API_HOST.concat(img)}
            key={img}
            className={`h-full w-full ${additionalPlacement.img[i]}`}
            loading="lazy"
          />
        );
      })}
    </div>
  );
};

export default ImageGrid;
