export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-black to-gray-950 border-t border-gray-900 py-8 mt-16 text-center text-sm text-gray-400 space-y-2">
      <p>
        © {new Date().getFullYear()} Xon Capital — Institutional Crypto Hedge
        Fund
      </p>
      <p>
        For investor inquiries:&nbsp;
        <a
          href="mailto:investorrelations@xon.capital"
          className="text-blue-400 hover:text-cyan-300 transition-colors"
        >
          investorrelations@xon.capital
        </a>
      </p>
    </footer>
  );
}
