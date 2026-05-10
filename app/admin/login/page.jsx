"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, LockKeyhole, Home } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// static credentials
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "password123";
export default function Login() {
  const router = useRouter();
  // setup state for inputs and errors
  const [formData, setFormData] = useState({ email: "name", password: "" });
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle login logic
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (
      formData.email === ADMIN_EMAIL &&
      formData.password === ADMIN_PASSWORD
    ) {
      //  save the status
      localStorage.setItem("isAdminAuthenticated", "true"); 
      // then redirect to dashboard
      router.push("/admin/dashboard");
    } else {
      // failed error message
      setError("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="min-w-screen min-h-screen max-lg:min-h-fit max-lg:mt-14 bg-[#111112] flex items-center justify-center px-5 py-5">
      <div className="bg-[#1a1a1b] border border-white/5 rounded-3xl shadow-2xl w-full overflow-hidden max-w-250">
        <div className="md:flex w-full">
          {/* left side ilustration */}
          <div className="hidden md:flex bg-black/20 w-1/2 py-10 px-10 items-center justify-center">
            <Image
              src={"/assets/login_illustration.svg"}
              alt="login image was not found!"
              className="w-[80%] opacity-80"
              width={400}
              height={300}
            />
          </div>

          {/* right side  : Form */}
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-left mb-10 flex items-center justify-between">
              <h1 className="font-bold text-[2.2rem] font-oswald text-gray-100 tracking-tight">
                Admin Portal
              </h1>
              <Link href={"/"}>
                <Home
                  size={24}
                  className="text-slate-500 hover:text-emerald-400 transition-colors"
                />
              </Link>
            </div>

            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <Input
                  icon={<Mail size={18} />}
                  placeholder="Enter email..."
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  icon={<LockKeyhole size={18} />}
                  placeholder="••••••••"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* error message Display */}
              {error && (
                <p className="mt-4 text-red-400 text-sm font-medium animate-shake">
                  {error}
                </p>
              )}

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full py-3.5 font-extrabold rounded-2xl  bg-emerald-500 text-black hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/20"
                >
                  Confirm Login
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-slate-500 text-xs uppercase tracking-widest">
              Secure Access Only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
