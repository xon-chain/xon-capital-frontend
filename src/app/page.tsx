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
        {/* Gradient + Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85" />

        {/* Ambient Light Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,150,255,0.25),transparent_70%)]" />

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Institutional Crypto Strategies
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Xon Capital delivers uncorrelated returns through systematic
            strategies spanning long/short crypto, perpetual derivatives,
            arbitrage, and delta-neutral yield. Designed for institutions.
          </motion.p>

          {/* Strategy Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              "Systematic Alpha",
              "Delta-Neutral Yield",
              "Perpetual Futures",
              "Cross-Venue Arbitrage",
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
          Multi-Strategy Alpha Engine
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Directional Alpha",
              desc: "Dynamic exposure across BTC, ETH, and majors driven by predictive volatility and liquidity-adjusted models.",
            },
            {
              title: "Perpetual Derivatives",
              desc: "Delta-hedged positions capturing funding inefficiencies and term-structure mispricings across perps.",
            },
            {
              title: "Cross-Venue Arbitrage",
              desc: "Multi-exchange execution capturing basis spreads and latency arbitrage via co-located systems.",
            },
            {
              title: "Market-Neutral Yield",
              desc: "Volatility harvesting strategies providing consistent monthly returns with controlled tail exposure.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-white/10 rounded-2xl hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(0,150,255,0.15)] transition"
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
          Consistent Alpha, Controlled Risk
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Risk-managed portfolio architecture targeting superior Sharpe ratios
          through disciplined volatility scaling and cross-asset
          diversification.
        </p>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900/70 to-gray-800/40 border border-white/10 rounded-2xl h-72 flex items-center justify-center text-gray-500">
          [ Performance Chart Placeholder ]
        </div>
      </section>

      {/* ===================== PHILOSOPHY / ABOUT ===================== */}
      <section className="py-28 bg-gradient-to-b from-gray-950 to-black text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          Our Philosophy
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          Xon Capital operates at the intersection of quantitative rigor and
          crypto-native execution. We integrate systematic research, low-latency
          infrastructure, and disciplined risk management to compound asymmetric
          returns — independent of market direction.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Data-Driven",
              desc: "All strategies originate from empirical research and validated backtests over multi-cycle datasets.",
            },
            {
              title: "Execution Precision",
              desc: "Our proprietary infrastructure optimizes fill quality and latency-sensitive order routing across venues.",
            },
            {
              title: "Risk Discipline",
              desc: "Position sizing, VaR control, and tail-risk modeling ensure consistent return distribution integrity.",
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

      {/* ===================== FOOTER ===================== */}
      <footer className="py-10 border-t border-gray-900 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Xon Capital — Institutional Crypto Hedge
        Fund
      </footer>
    </main>
  );
}
