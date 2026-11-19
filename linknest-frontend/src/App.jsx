import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AllBookmarks from "./pages/AllBookmarks";
import BookmarkFormPage from "./pages/BookmarkFormPage";
import BookmarkDetails from "./pages/BookmarkDetails";
import Collections from "./pages/Collections";
import CollectionDetails from "./pages/CollectionDetails";
import Favorites from "./pages/Favorites";
import ReadingList from "./pages/ReadingList";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";

function PrivatePage({ children }) { return <ProtectedRoute>{children}</ProtectedRoute>; }

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/", element: <PrivatePage><Layout /></PrivatePage>, children: [
    { index: true, element: <Dashboard /> },
    { path: "bookmarks", element: <AllBookmarks /> },
    { path: "bookmarks/new", element: <BookmarkFormPage mode="create" /> },
    { path: "bookmarks/:id", element: <BookmarkDetails /> },
    { path: "bookmarks/:id/edit", element: <BookmarkFormPage mode="edit" /> },
    { path: "collections", element: <Collections /> },
    { path: "collections/:id", element: <CollectionDetails /> },
    { path: "favorites", element: <Favorites /> },
    { path: "reading-list", element: <ReadingList /> },
    { path: "completed", element: <Completed /> },
    { path: "not-found", element: <NotFound /> },
  ]},
  { path: "*", element: <Navigate to="/not-found" replace /> },
]);
