import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { CollectionProvider } from "./context/CollectionContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BookmarkProvider>
        <CollectionProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" toastOptions={{ duration: 2800 }} />
        </CollectionProvider>
      </BookmarkProvider>
    </AuthProvider>
  </React.StrictMode>
);
