import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MenuProvider } from "./contexts/mobileMenuContext";
import router from "./routes/router";

import "./styles/reset.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </StrictMode>,
);
