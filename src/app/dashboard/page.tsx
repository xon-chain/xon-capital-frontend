"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Loading your dashboard...
      </div>
    );
  }

  const userName = session?.user?.name ?? "Investor";

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
          Welcome, <span className="text-blue-300 font-semibold">{userName}</span> — your secure investor portal.
        </p>

        {/* ================== METRIC CARDS ================== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Fund AUM", value: "$128.5M" },
            { label: "YTD Return", value: "+12.4%" },
            { label: "Since Inception", value: "+89.2%" },
            { label: "Sharpe Ratio", value: "1.72" },
            { label: "Active Strategies", value: "4" },
            { label: "Last NAV Update", value: "Nov 15, 2025" },
          ].map((metric, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-white/10 rounded-xl shadow-md hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(0,150,255,0.15)] transition-all"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                {metric.label}
              </p>
              <p className="text-2xl font-semibold text-blue-300">
                {metric.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ================== ALLOCATION SECTION ================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto text-left bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-white/10 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-xl font-semibold text-blue-300 mb-4">
            Strategy Allocation
          </h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              • <span className="text-white">Systematic Long/Short</span> — 35%
            </li>
            <li>
              • <span className="text-white">Delta-Neutral Yield</span> — 25%
            </li>
            <li>
              • <span className="text-white">Perpetual Derivatives</span> — 20%
            </li>
            <li>
              • <span className="text-white">Cross-Exchange Arbitrage</span> — 20%
            </li>
          </ul>
        </motion.div>

        {/* ================== COMMENTARY ================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto text-gray-400 mb-16"
        >
          <h2 className="text-xl font-semibold text-blue-300 mb-3">
            Fund Commentary
          </h2>
          <p className="leading-relaxed">
            November marked continued strength in systematic long/short and
            derivatives arbitrage strategies, with risk exposures managed within
            target volatility bands. The fund maintained neutral beta and
            increased cash buffers amid macro uncertainty. Upcoming months will
            focus on model rebalancing and volatility harvesting opportunities.
          </p>
        </motion.div>

        {/* ================== LOGOUT BUTTON ================== */}
        <LogoutButton />
      </div>
    </main>
  );
}

