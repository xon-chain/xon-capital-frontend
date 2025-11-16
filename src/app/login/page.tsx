"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.15),transparent_70%)]" />

      {/* Frosted glass login card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 p-10 w-full max-w-md text-center rounded-2xl backdrop-blur-xl bg-gradient-to-b from-gray-900/60 to-gray-800/40 border border-white/10 shadow-[0_0_40px_rgba(0,150,255,0.1)]"
      >
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Investor Login
        </h1>

        <p className="text-gray-400 mb-8 text-sm tracking-wide">
          Secure access for accredited investors only.
        </p>

        {/* Sign In Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })}
          className="w-full py-3 rounded-lg font-semibold tracking-wide text-black bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)] transition-all duration-200"
        >
          Sign In
        </motion.button>

        {/* Divider Line */}
        <div className="mt-10 border-t border-white/10"></div>

        {/* Compliance Note */}
        <p className="mt-6 text-xs text-gray-500 leading-relaxed">
          By signing in, you acknowledge that you are an accredited investor and
          agree to the terms of access to Xon Capital's investor portal.
        </p>
      </motion.div>

      {/* Soft lighting gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </main>
  );
}
