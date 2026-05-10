"use client";
import MobileNav from "@/components/shared/mobileNav";
import Navbar from "@/components/shared/navbar"; 
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideNavbarRoutes = [
    "/discover",
    "/login",
    "/categories",
    "/profile",
    "/admin/dashboard",
    "/admin/menage-quotes",
    "/admin/add-new-quote",
    "/view-all",
    "/admin/login",
    "/quotes",
  ];
  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    pathname?.startsWith(route),
  );

  return (
    
      <div className="min-h-screen flex flex-col w-full">
        {!shouldHideNavbar && <Navbar />}
        <main className="flex-1">{children}</main>
        <div className="hidden max-lg:block">
          {!shouldHideNavbar && <MobileNav />}
        </div>
      </div> 
  );
}
