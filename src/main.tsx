import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuProvider } from "./contexts/mobileMenuContext";
import App from "./App";

import "./styles/reset.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>,
);
