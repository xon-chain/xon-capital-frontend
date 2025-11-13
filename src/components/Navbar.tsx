import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-xl font-bold text-blue-700">
          Xon Capital
        </Link>

        <div className="space-x-6">
          {session ? (
            <Link
              href="/dashboard"
              className="text-gray-800 hover:text-blue-700 transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-gray-800 hover:text-blue-700 transition-colors"
            >
              Investor Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
