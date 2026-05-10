"use client";
import Sidebar from "@/components/shared/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");

    if (isAuthenticated !== "true") {
      // if not admin , redirect to login page
      router.push("login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  // Prevent flickering: Show nothing or a loader until checked
  if (!authorized) return null;
  return (
    <div className="min-h-screen bg-background ">
      <Sidebar />
      {/* 2. The Main Content Area */}
      <main className="flex-1 ml-64 max-lg:ml-0 p-4 ">{children}</main>
    </div>
  );
}
