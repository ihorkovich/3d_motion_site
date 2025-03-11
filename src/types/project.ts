export type Project = {
  id: number;
  title: string;
  category: string;
  video: string;
  images: { id: string; url: string; isPreviewImage: boolean }[];
};
