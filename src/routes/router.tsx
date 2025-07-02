import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactsPage from "../pages/ContactsPage";
import SpecificProjectPage from "../pages/SpecificProjectPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "projects/:projectId", element: <SpecificProjectPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
