"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Strategy", href: "/strategy" },
    { name: "Risk", href: "/risk" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
        >
          Xon Capital
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}

          {session ? (
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border border-white/20 rounded-md text-gray-200 hover:bg-white hover:text-black transition"
            >
              Investor Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 hover:text-white transition"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 border-t border-white/10 text-center py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}

            {session ? (
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 mx-auto bg-white text-black rounded-md w-40 font-semibold hover:bg-gray-200 transition"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 mx-auto border border-white/20 rounded-md text-gray-200 hover:bg-white hover:text-black w-40 transition"
              >
                Investor Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
