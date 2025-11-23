"use client";

import { motion } from "framer-motion";
import { usePrivy } from "@privy-io/react-auth";

export default function DashboardPage() {
  const { ready, authenticated, user } = usePrivy();

  if (!ready) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Loading your dashboard...
      </div>
    );
  }

  if (!authenticated) {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }

  // Extract wallet or email safely
  const walletAccount = user?.linkedAccounts?.find((a) => a.type === "wallet");
  const walletAddress =
    walletAccount && "address" in walletAccount
      ? walletAccount.address
      : undefined;

  const emailAccount = user?.linkedAccounts?.find((a) => a.type === "email");
  const email =
    emailAccount && "email" in emailAccount ? emailAccount.email : undefined;

  const displayName = email || walletAddress || "Investor";

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Investor Dashboard
        </motion.h1>

        <p className="text-lg text-gray-400 mb-12">
          Welcome,{" "}
          <span className="text-blue-300 font-semibold">
            {String(displayName ?? "")}
          </span>{" "}
          — your secure investor portal.
        </p>

        {/* Placeholder for live data feed */}
        <motion.div
          className="p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/40 text-gray-400 max-w-3xl mx-auto shadow-[0_0_30px_rgba(0,150,255,0.05)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-base sm:text-lg">
            Your portfolio metrics and fund performance data will appear here
            once synced with Xon Capital’s systems.
          </p>
          <p className="text-sm mt-3 text-gray-500">
            Please check back later or contact investor relations for details.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
