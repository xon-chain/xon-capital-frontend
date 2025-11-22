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
          </span>
          — your secure investor portal.
        </p>

        {/* Example metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { label: "Fund AUM", value: "$128.5M" },
            { label: "YTD Return", value: "+12.4%" },
            { label: "Since Inception", value: "+89.2%" },
          ].map((metric, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-white/10 rounded-xl shadow-md"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                {metric.label}
              </p>
              <p className="text-2xl font-semibold text-blue-300">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
