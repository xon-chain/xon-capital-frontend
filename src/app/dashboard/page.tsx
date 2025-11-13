"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Investor Dashboard</h1>
      {session ? (
        <>
          <p className="text-lg mb-4">
            Welcome, <strong>{session.user?.email}</strong>!
          </p>
          <p className="text-gray-500 mb-6">
            This is your secure investor portal. Real data coming soon.
          </p>
          <LogoutButton />
        </>
      ) : (
        <p>Loading session...</p>
      )}
    </div>
  );
}
