"use client";

import { motion } from "framer-motion";

export default function RiskPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white font-sans">
      {/* ===================== HERO ===================== */}
      <section className="relative py-32 text-center px-6 border-b border-gray-900">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Institutional Risk Management
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Risk management is central to Xon Capital’s DNA. Every trade,
          position, and system is governed by quantitative risk metrics,
          real-time exposure controls, and strict drawdown limits.
        </motion.p>
      </section>

      {/* ===================== RISK FRAMEWORK ===================== */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "Dynamic Position Sizing",
            desc: "Capital allocation is adjusted continuously based on volatility, liquidity, and correlation matrices — optimizing exposure while minimizing tail risk.",
          },
          {
            title: "VaR and Drawdown Control",
            desc: "All strategies operate within predefined Value-at-Risk and maximum drawdown thresholds, with automatic de-leveraging triggers.",
          },
          {
            title: "Diversification Framework",
            desc: "Exposure is diversified across assets, instruments, and venues to mitigate idiosyncratic and counterparty risks.",
          },
          {
            title: "Execution & Counterparty Risk",
            desc: "Our routing systems manage slippage, exchange downtime, and liquidity fragmentation while monitoring real-time counterparty solvency.",
          },
          {
            title: "Stress Testing & Backtesting",
            desc: "Continuous scenario analysis using historical and synthetic data ensures portfolio resilience under extreme volatility conditions.",
          },
          {
            title: "Operational Risk Controls",
            desc: "Multi-signature cold storage, segregated environments, and automated monitoring protect assets and execution systems.",
          },
        ].map((r, i) => (
          <motion.div
            key={i}
            className="p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/30 border border-white/10 rounded-2xl hover:border-red-400/40 hover:shadow-[0_0_35px_rgba(255,0,0,0.15)] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-red-300">
              {r.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="py-24 text-center px-6 border-t border-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          Discipline. Control. Consistency.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Xon Capital’s risk architecture is designed to protect investor
          capital and ensure longevity across all market regimes — balancing
          systematic growth with institutional-grade risk discipline.
        </p>
      </section>
    </main>
  );
}
