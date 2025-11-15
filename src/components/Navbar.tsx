"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "STRATEGY", href: "/strategy" },
    { name: "RISK", href: "/risk" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/xoncapital_logo_transparent.png"
            alt="Xon Capital Logo"
            width={160}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Links */}
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

          {session ? (
            <Link
              href="/dashboard"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 text-black font-semibold shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-[#0a0f1a]/60 via-[#0a0f1a]/40 to-[#1a1f2a]/60 border border-white/10 backdrop-blur-md text-gray-200 font-medium tracking-wide hover:border-blue-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] hover:scale-[1.03] transition-all duration-300"
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
                className="block px-4 py-2 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 text-black rounded-md w-40 font-semibold hover:opacity-90 transition"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 mx-auto rounded-md bg-gradient-to-r from-[#0a0f1a]/60 via-[#0a0f1a]/40 to-[#1a1f2a]/60 border border-white/10 backdrop-blur-md text-gray-200 hover:border-blue-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] w-40 transition-all duration-300"
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
