import PageHeader from "../components/common/PageHeader";
import BookmarkGrid from "../components/bookmarks/BookmarkGrid";
import { useBookmarks } from "../context/BookmarkContext";
export default function Completed() { const { bookmarks, loading, error } = useBookmarks(); const items = bookmarks.filter((item) => item.status === "completed"); return <><PageHeader eyebrow="Look how far you've come" title="Completed resources" description="Your finished tutorials, articles, and learning resources."/><BookmarkGrid bookmarks={items} loading={loading} error={error} emptyTitle="Your next completed resource starts here" emptyDescription="Change a bookmark's reading status to Completed when you finish it."/></>; }
