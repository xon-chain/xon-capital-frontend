import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "../components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xon Capital",
  description:
    "Quantitative crypto hedge fund generating systematic alpha across digital asset markets.",
  icons: {
    icon: "/xoncapital.ico", // Use the renamed icon
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
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
