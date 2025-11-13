import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

export const metadata = {
  title: "Xon Capital",
  description: "Investor portal for Xon Capital hedge fund",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Providers>
          <Navbar />
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
