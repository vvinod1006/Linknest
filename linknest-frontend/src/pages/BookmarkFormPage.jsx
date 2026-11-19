import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import PageHeader from "../components/common/PageHeader";
import BookmarkForm from "../components/bookmarks/BookmarkForm";
import Loading from "../components/common/Loading";
import api from "../services/api";
import { useBookmarks } from "../context/BookmarkContext";
export default function BookmarkFormPage({ mode }) { const editing = mode === "edit"; const { id } = useParams(); const navigate = useNavigate(); const { bookmarks, addBookmark, updateBookmark } = useBookmarks(); const [initialData, setInitialData] = useState(null); const [loading, setLoading] = useState(editing); const [busy, setBusy] = useState(false); const [loadError, setLoadError] = useState("");
 useEffect(() => { let active = true; async function load() { if (!editing) { setInitialData(null); setLoading(false); return; } const found = bookmarks.find((item) => String(item.id) === String(id)); if (found) { setInitialData(found); setLoading(false); return; } try { const response = await api.get(`/bookmarks/${id}`); if (active) { setInitialData(response.data); setLoading(false); } } catch { if (active) { setLoadError("Bookmark not found or could not be loaded."); setLoading(false); } } } load(); return () => { active = false; }; }, [editing,id,bookmarks]);
 async function submit(data) { setBusy(true); try { if (editing) { await updateBookmark(id, data); toast.success("Bookmark updated"); navigate(`/bookmarks/${id}`); } else { const created = await addBookmark(data); toast.success("Bookmark saved"); navigate(`/bookmarks/${created.id}`); } } finally { setBusy(false); } }
 if (loading) return <Loading label="Loading bookmark..."/>; if (loadError) return <div className="rounded-xl bg-rose-50 p-5 text-rose-700">{loadError} <Link to="/bookmarks" className="font-bold underline">Back to bookmarks</Link></div>;
 return <div className="mx-auto max-w-3xl"><PageHeader eyebrow={editing ? "Refine your library" : "Save something useful"} title={editing ? "Edit bookmark" : "Add a bookmark"} description={editing ? "Update the details and keep your resource organized." : "Capture a useful article, tutorial, tool, or website."}/><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><BookmarkForm initialData={initialData} onSubmit={submit} submitLabel={editing ? "Save changes" : "Save bookmark"} busy={busy}/></div></div>;
}
