export default function PageHeader({ eyebrow, title, description, action }) {
  return <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">{eyebrow || "Your library"}</p><h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>{description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>}</div>{action}</div>;
}
