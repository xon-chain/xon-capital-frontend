import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import PrivyClientProvider from "../components/PrivyClientProvider";

export const metadata: Metadata = {
  title: "Xon Capital",
  description:
    "Quantitative crypto hedge fund generating systematic alpha across digital asset markets.",
  icons: {
    icon: "/xoncapital.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black text-white">
        <PrivyClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PrivyClientProvider>
      </body>
    </html>
  );
}
