import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="min-h-screen bg-[#f7f8fc]"><Navbar onMenuClick={() => setMobileOpen((v) => !v)} /><div className="flex min-h-[calc(100vh-72px)]"><Sidebar />{mobileOpen && <div className="fixed inset-0 top-[72px] z-20 bg-slate-950/30 lg:hidden" onClick={() => setMobileOpen(false)}><div className="h-full w-[280px] bg-white shadow-xl" onClick={(e) => e.stopPropagation()}><Sidebar mobile onNavigate={() => setMobileOpen(false)} /></div></div>}<main className="min-w-0 flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-9 lg:py-9"><Outlet /></main></div></div>;
}
 