"use client";
import {
  LayoutDashboard,
  Quote,
  X,
  Settings,
  PlusCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import Logo from "../ui/logo";
import { ChartArea } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monitor } from "lucide-react";
export default function Sidebar() {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      id: "quotes",
      label: "Menage Quotes",
      icon: <Quote size={20} />,
      path: "/admin/menage-quotes",
    },
    {
      id: "add-quote",
      label: "Add New Quote",
      icon: <PlusCircle size={20} />,
      path: "/admin/add-new-quote",
    },
  ];
  const [activePage, setActivePage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-2 left-0 z-60 p-1 bg-emerald-200 text-black rounded-xl shadow-lg  "
        >
          {isOpen ? null : <ChevronRight />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-55 lg:hidden" />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-64 max-lg:w-full bg-background text-slate-300 border-r border-gray-200/5 flex flex-col z-58 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >
        {/* close button for only mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-slate-500 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Logo Section */}
        <LogoSection />

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-4 px-2">
            Main Menu
          </p>

          <div className="space-y-4">
            {menuItems.map((item) => (
              <DashLink
                key={item.id}
                item={item}
                activePage={activePage}
                setActivePage={setActivePage}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </nav>
 
      </aside>
    </div>
  );
}

function DashLink({ item }) {
  const pathname = usePathname();

  const isActive =
    pathname === item.path ||
    (item.path !== "/" && pathname?.startsWith(item.path));
  return (
    <Link
      href={item.path || "/"}
      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group border ${
        isActive
          ? "bg-emerald-500 font-semibold text-black border-emerald-500/20 shadow-sm max-lg:rounded-2xl"
          : "hover:bg-white/5 text-slate-400 hover:text-white border-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`transition-colors duration-200 ${
            isActive
              ? "text-black"
              : "text-slate-400 group-hover:text-emerald-400"
          }`}
        >
          {item.icon}
        </span>
        <span className="font-medium text-sm">{item.label}</span>
      </div>

      {/* Show Chevron always on active, or fade it in on hover for inactive items */}
      <div className="flex items-center">
        <ChevronRight
          size={14}
          className={`transition-all duration-200 ${
            isActive
              ? "opacity-100 translate-x-0 text-emerald-400"
              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-600"
          }`}
        />
      </div>
    </Link>
  );
}
 
function LogoSection() {
  return (
    <div className="p-6 flex items-center gap-3">
      <div className="w-8 h-8 bg-emerald-200 rounded-lg flex items-center justify-center">
        <ChartArea className="text-black" strokeWidth={2.3} />
      </div>
      <Logo />
    </div>
  );
}
