import PageHeader from "../components/common/PageHeader";
import BookmarkGrid from "../components/bookmarks/BookmarkGrid";
import { useBookmarks } from "../context/BookmarkContext";
export default function Favorites() { const { bookmarks, loading, error } = useBookmarks(); const items = bookmarks.filter((item) => item.favorite); return <><PageHeader eyebrow="Keep them close" title="Favorites" description="The resources you want to find again quickly."/><BookmarkGrid bookmarks={items} loading={loading} error={error} emptyTitle="No favorites yet" emptyDescription="Tap the heart on any bookmark to save it here."/></>; }
