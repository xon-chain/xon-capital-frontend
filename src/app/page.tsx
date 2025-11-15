"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Darker Gradient Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90" />

        {/* Subtle Ambient Light Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,150,255,0.15),transparent_70%)]" />

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Institutional Crypto Alpha
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Xon Capital is a quantitative hedge fund applying long/short,
            delta-neutral, and arbitrage strategies across global digital asset
            markets. Built for performance, precision, and stability in a
            volatile landscape.
          </motion.p>

          {/* Strategy Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              "Systematic Long/Short",
              "Perpetual Derivatives",
              "Market-Neutral Yield",
              "Cross-Exchange Arbitrage",
            ].map((strategy, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 border border-white/10 px-5 py-2 rounded-full hover:bg-white/10 transition"
              >
                {strategy}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 text-gray-500 text-xs uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          ↓ Explore
        </motion.div>
      </section>

      {/* ===================== STRATEGY GRID ===================== */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          Multi-Strategy Digital Asset Fund
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Directional Alpha",
              desc: "Quantitative long/short exposure across BTC, ETH, and majors, driven by momentum, volatility, and liquidity models.",
            },
            {
              title: "Perpetual Futures",
              desc: "Systematic funding rate and basis arbitrage across global derivatives markets with dynamic delta hedging.",
            },
            {
              title: "Cross-Venue Arbitrage",
              desc: "Low-latency execution capturing inefficiencies across centralized and on-chain venues via co-located systems.",
            },
            {
              title: "Market-Neutral Yield",
              desc: "Volatility harvesting and delta-neutral portfolios targeting consistent monthly returns with controlled drawdowns.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-white/10 rounded-2xl hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(0,150,255,0.15)] transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-300">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== PERFORMANCE ===================== */}
      <section className="py-28 bg-black border-t border-gray-900 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Consistent Alpha. Controlled Risk.
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our portfolio architecture emphasizes capital preservation and
          risk-adjusted performance. Through volatility scaling, liquidity
          weighting, and cross-venue diversification, we aim to deliver superior
          Sharpe ratios independent of market direction.
        </p>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-white/10 rounded-2xl h-72 flex items-center justify-center text-gray-500">
          [ Performance Chart Placeholder ]
        </div>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="py-28 bg-gradient-to-b from-gray-950 to-black text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          Our Philosophy
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          Xon Capital operates at the intersection of quantitative research and
          crypto-native execution. Our strategies are engineered to perform
          across market cycles — extracting inefficiencies through data,
          automation, and risk discipline.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Data-Driven Research",
              desc: "Strategies originate from rigorous quantitative modeling, backtesting, and statistical validation across multi-cycle datasets.",
            },
            {
              title: "Execution Infrastructure",
              desc: "Our proprietary execution engine integrates centralized and decentralized venues with latency-sensitive routing and smart order flow.",
            },
            {
              title: "Institutional Risk Framework",
              desc: "Dynamic position sizing, drawdown management, and VaR-based allocation ensure consistent capital efficiency and downside protection.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
