"use client";

import { motion } from "framer-motion";

export default function StrategyPage() {
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
          Multi-Strategy Alpha Framework
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Xon Capital applies a diversified systematic approach across global
          digital asset markets — combining directional, market-neutral, and
          arbitrage strategies to achieve persistent alpha with low correlation
          to broader crypto benchmarks.
        </motion.p>
      </section>

      {/* ===================== STRATEGIES GRID ===================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            title: "Systematic Long/Short",
            desc: "Momentum-driven and volatility-adjusted exposure across major digital assets. Models dynamically allocate capital across long and short positions to capture asymmetric moves in market structure.",
          },
          {
            title: "Perpetual Derivatives",
            desc: "Quantitative trading of perpetual swaps and futures capturing funding inefficiencies, skew differentials, and term-structure mispricings with risk-balanced leverage.",
          },
          {
            title: "Market-Neutral Yield",
            desc: "Delta-hedged basis trading and volatility harvesting strategies generating stable yield independent of market direction, using both centralized and on-chain venues.",
          },
          {
            title: "Cross-Exchange Arbitrage",
            desc: "Latency-optimized infrastructure capturing cross-venue price discrepancies, including triangular arbitrage and spread compression opportunities.",
          },
          {
            title: "Volatility & Options Strategies",
            desc: "Automated options frameworks leveraging volatility mean reversion, skew arbitrage, and short gamma exposure within controlled VaR limits.",
          },
          {
            title: "Liquidity Provision & Execution",
            desc: "Proprietary execution algorithms providing depth, minimizing slippage, and capturing maker rebates across major spot and derivatives exchanges.",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/30 border border-white/10 rounded-2xl hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(0,150,255,0.15)] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">
              {s.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="py-24 text-center px-6 border-t border-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          Engineered for Performance. Built for Scale.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Xon Capital’s research architecture is fully systematic — combining
          machine learning, high-frequency execution, and rigorous portfolio
          risk controls to continuously evolve with the crypto market.
        </p>
      </section>
    </main>
  );
}
