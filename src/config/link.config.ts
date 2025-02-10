import { pageConfig } from "./page.config";

//Navigation links
export const navItems = [
  { label: "ABOUT", path: pageConfig.about },
  { label: "PROJECTS", path: pageConfig.projects },
  { label: "CONTACTS", path: pageConfig.contacts },
];

//Social links
export const socialLinks = [
  { label: "INSTAGRAM", link: import.meta.env.VITE_THEM_INSTAGRAM },
  { label: "BEHANCE", link: import.meta.env.VITE_THEM_BEHANCE },
  { label: "TELEGRAM", link: import.meta.env.VITE_THEM_TELEGRAM },
  { label: "WHATSAPP", link: import.meta.env.VITE_THEM_WHATSAPP },
];
