"use client";

import { motion } from "framer-motion";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginPage() {
  const { ready, authenticated, login } = usePrivy();

  if (!ready) return null;
  if (authenticated) window.location.href = "/dashboard";

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden px-4">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.15),transparent_70%)]" />

      {/* Watermark */}
      <div className="absolute text-[20vw] font-extrabold text-white/5 select-none tracking-tighter leading-none top-1/2 -translate-y-1/2">
        XON
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md rounded-2xl backdrop-blur-xl bg-gradient-to-b from-gray-900/70 to-gray-800/40 border border-white/10 shadow-[0_0_40px_rgba(0,150,255,0.1)] px-6 sm:px-10 py-10 sm:py-12 text-center"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Investor Login
        </h1>

        <p className="text-gray-400 mb-8 text-sm sm:text-base tracking-wide leading-relaxed">
          Secure access for accredited investors only.
        </p>

        {/* Privy Sign In */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={login}
          className="w-full py-3.5 sm:py-4 rounded-lg font-semibold tracking-wide text-black bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)] transition-all duration-200"
        >
          Sign In
        </motion.button>

        <div className="mt-10 border-t border-white/10" />

        <p className="mt-6 text-xs sm:text-sm text-gray-500 leading-relaxed px-2">
          Access to this portal is restricted to accredited investors. By
          signing in, you agree to maintain confidentiality and accept Xon
          Capital’s access terms.
        </p>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </main>
  );
}
