"use client";

import { useState } from "react";
import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";
import { Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { authenticated, logout } = usePrivy();

  const navLinks = [
    { name: "Strategy", href: "/strategy" },
    { name: "Risk", href: "/risk" },
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-black/40 backdrop-blur-xl fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/xoncapital_logo_transparent.png"
            alt="Xon Capital Logo"
            className="h-6 w-auto opacity-90 hover:opacity-100 transition"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition tracking-wide"
            >
              {link.name}
            </Link>
          ))}

          {authenticated ? (
            <>
              <Link
                href="/dashboard"
                className="px-5 py-2 rounded-md bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 text-black font-semibold shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  logout();
                  setTimeout(() => (window.location.href = "/"), 400);
                }}
                className="relative group flex items-center gap-2 px-4 py-2 rounded-md 
                border border-white/10 text-gray-300 font-medium tracking-wide 
                hover:text-white hover:border-cyan-400/40 hover:bg-gradient-to-r 
                from-gray-900/80 via-gray-800/70 to-gray-900/80 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] 
                transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-purple-400/0 group-hover:from-blue-500/10 group-hover:via-cyan-400/10 group-hover:to-purple-400/10 blur-sm transition-all duration-300" />
                <LogOut
                  size={16}
                  className="relative text-gray-400 group-hover:text-cyan-300 transition-transform duration-300 group-hover:-translate-x-0.5"
                />
                <span className="relative">Sign out</span>
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-[#0a0f1a]/60 via-[#0a0f1a]/40 to-[#1a1f2a]/60 border border-white/10 backdrop-blur-md text-gray-200 font-medium tracking-wide hover:border-blue-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] hover:scale-[1.03] transition-all duration-300"
            >
              Investor Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 hover:text-white transition"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black/95 via-gray-950/95 to-black/95 backdrop-blur-lg border-t border-white/10 flex flex-col justify-center items-center text-center px-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>

            {/* Navigation Links */}
            <div className="space-y-8 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-2xl tracking-wide text-gray-200 hover:text-white transition-all duration-150"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="w-16 h-px bg-white/10 my-8" />

            {authenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setOpen(false);
                    logout();
                    setTimeout(() => (window.location.href = "/"), 400);
                  }}
                  className="relative group mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-md 
                  border border-white/10 text-gray-300 font-medium tracking-wide 
                  hover:text-white hover:border-cyan-400/40 hover:bg-gradient-to-r 
                  from-gray-900/80 via-gray-800/70 to-gray-900/80 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] 
                  transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-purple-400/0 group-hover:from-blue-500/10 group-hover:via-cyan-400/10 group-hover:to-purple-400/10 blur-sm transition-all duration-300" />
                  <LogOut
                    size={16}
                    className="relative text-gray-400 group-hover:text-cyan-300 transition-transform duration-300 group-hover:-translate-x-0.5"
                  />
                  <span className="relative">Sign out</span>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-[#0a0f1a]/60 via-[#0a0f1a]/40 to-[#1a1f2a]/60 border border-white/10 backdrop-blur-md text-gray-200 font-medium tracking-wide hover:border-blue-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] hover:scale-[1.03] transition-all duration-300"
              >
                Investor Login
              </Link>
            )}

            {/* Footer */}
            <div className="absolute bottom-8 text-xs text-gray-500 text-center space-y-1">
              <p>© {new Date().getFullYear()} Xon Capital</p>
              <p>
                <a
                  href="mailto:investorrelations@xon.capital"
                  className="text-blue-400 hover:text-cyan-300 transition"
                >
                  investorrelations@xon.capital
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
