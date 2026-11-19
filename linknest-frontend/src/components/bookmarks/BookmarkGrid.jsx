import BookmarkCard from "./BookmarkCard";
import EmptyState from "../common/EmptyState";
import Loading from "../common/Loading";
export default function BookmarkGrid({ bookmarks, loading, error, emptyTitle, emptyDescription }) {
  if (loading) return <Loading />;
  if (error) return <div className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">{error}</div>;
  if (!bookmarks.length) return <EmptyState title={emptyTitle || "No bookmarks found"} description={emptyDescription || "Try a different search or save your first resource."} />;
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">{bookmarks.map((bookmark) => <BookmarkCard key={bookmark.id} bookmark={bookmark} />)}</div>;
}
