export type Project = {
  id: number;
  title: string;
  category: string;
  video: string;
  images: { id: string; url: string }[];
  year: number;
  projectPeople: { name: string; role: string }[];
  about: string;
  previewImageId: string;
  mainVideo: string;
  previewVideo: string;
};
