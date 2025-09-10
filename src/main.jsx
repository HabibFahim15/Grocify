import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HelmetProvider>
);
