import { createBrowserRouter } from "react-router-dom";

import { pageConfig } from "../config/page.config";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactsPage from "../pages/ContactsPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: pageConfig.home,
    element: <HomePage />,
  },
  {
    path: pageConfig.about,
    element: <AboutPage />,
  },
  {
    path: pageConfig.projects,
    element: <ProjectsPage />,
  },
  {
    path: pageConfig.contacts,
    element: <ContactsPage />,
  },
  {
    path: `${pageConfig.project}/:projectId`,
    element: <ProjectDetailsPage />,
  },
  {
    path: pageConfig.notFound,
    element: <NotFoundPage />,
  },
]);

export default router;
