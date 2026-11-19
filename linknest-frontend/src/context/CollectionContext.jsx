import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";
import { useBookmarks } from "./BookmarkContext";

const CollectionContext = createContext(null);

export function CollectionProvider({ children }) {
  const { user } = useAuth();
  const { bookmarks, updateBookmark } = useBookmarks();
  const [collections, setCollections] = useState([]);
  const [loadingCollections, setLoadingCollections] = useState(false);

  const fetchCollections = useCallback(async () => {
    if (!user) { setCollections([]); return; }
    setLoadingCollections(true);
    try {
      const response = await api.get("/collections", { params: { ownerId: user.id } });
      setCollections(response.data);
    } catch { setCollections([]); }
    finally { setLoadingCollections(false); }
  }, [user]);

  useEffect(() => { fetchCollections(); }, [fetchCollections]);

  async function addCollection(data) {
    const response = await api.post("/collections", { ...data, ownerId: user.id, createdAt: new Date().toISOString() });
    setCollections((current) => [...current, response.data]);
    return response.data;
  }

  async function updateCollection(id, data) {
    const response = await api.patch(`/collections/${id}`, data);
    setCollections((current) => current.map((item) => String(item.id) === String(id) ? response.data : item));
    return response.data;
  }

  async function deleteCollection(id) {
    const related = bookmarks.filter((item) => String(item.collectionId || "") === String(id));
    for (const item of related) await updateBookmark(item.id, { collectionId: "" });
    await api.delete(`/collections/${id}`);
    setCollections((current) => current.filter((item) => String(item.id) !== String(id)));
  }

  return <CollectionContext.Provider value={{ collections, loadingCollections, fetchCollections, addCollection, updateCollection, deleteCollection }}>
    {children}
  </CollectionContext.Provider>;
}

export function useCollections() {
  const value = useContext(CollectionContext);
  if (!value) throw new Error("useCollections must be used within CollectionProvider");
  return value;
}
