import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBookmarks = useCallback(async () => {
    if (!user) { setBookmarks([]); setLoading(false); setError(""); return; }
    setLoading(true); setError("");
    try {
      const response = await api.get("/bookmarks", { params: { ownerId: user.id } });
      setBookmarks(response.data);
    } catch (err) {
      setError("Could not load bookmarks. Check that JSON Server is running on port 5000.");
    } finally { setLoading(false); }
  }, [user]);

  useEffect(() => { fetchBookmarks(); }, [fetchBookmarks]);

  async function addBookmark(data) {
    const response = await api.post("/bookmarks", { ...data, ownerId: user.id, createdAt: new Date().toISOString() });
    setBookmarks((current) => [response.data, ...current]);
    return response.data;
  }

  async function updateBookmark(id, data) {
    const response = await api.patch(`/bookmarks/${id}`, data);
    setBookmarks((current) => current.map((item) => String(item.id) === String(id) ? response.data : item));
    return response.data;
  }

  async function deleteBookmark(id) {
    await api.delete(`/bookmarks/${id}`);
    setBookmarks((current) => current.filter((item) => String(item.id) !== String(id)));
  }

  async function toggleFavorite(bookmark) {
    return updateBookmark(bookmark.id, { favorite: !bookmark.favorite });
  }

  async function updateStatus(id, status) { return updateBookmark(id, { status }); }

  return <BookmarkContext.Provider value={{ bookmarks, loading, error, fetchBookmarks, addBookmark, updateBookmark, deleteBookmark, toggleFavorite, updateStatus }}>
    {children}
  </BookmarkContext.Provider>;
}

export function useBookmarks() {
  const value = useContext(BookmarkContext);
  if (!value) throw new Error("useBookmarks must be used within BookmarkProvider");
  return value;
}
