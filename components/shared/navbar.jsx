"use client";
import { useState } from "react"; 
import Logo from "@/components/ui/logo";
import NavLink from "@/components/ui/navLink"; 
import Link from "next/link";
import { Bookmark } from "lucide-react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/discover", label: "Discover" },
    { path: "/categories", label: "Categories" },
  ];

  return (
    <nav className="sticky w-full z-20 top-0 inset-0 bg-white dark:bg-background    ">
      <div className="max-w-screen-7xl flex items-center justify-between mx-auto p-4 relative">
        <div className={`${isSearchOpen ? "hidden sm:block" : "block"}`}>
          <Logo />
        </div>

        {/* Desktop Menu - Hidden when search is open */}
        {!isSearchOpen && (
          <div className="hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-row space-x-8 font-medium">
              {navLinks.map((item, index) => (
                <NavLink key={index} path={item.path} label={item.label} />
              ))}
            </ul>
          </div>
        )}

        <div
          className={`flex items-center gap-0.5 md:order-2`}
        >
          <Link href={'/profile'}  className="block max-lg:hidden">
          <Bookmark size={25}  />
         </Link>
        </div>
      </div>
    </nav>
  );
}
