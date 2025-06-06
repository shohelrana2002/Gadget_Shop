import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
