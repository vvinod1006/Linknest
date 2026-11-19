import { Link } from "react-router-dom";
export default function EmptyState({ title = "Nothing here yet", description = "Save your first resource and it will appear here.", action = true }) {
  return <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center"><div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-2xl">✦</div><h3 className="text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{description}</p>{action && <Link to="/bookmarks/new" className="mt-5 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">Add a bookmark</Link>}</div>;
}
