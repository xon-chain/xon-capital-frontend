"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="text-center mt-20 text-gray-500">Loading session...</div>
    );
  }

  const userEmail = session?.user?.email ?? "";
  const userName = session?.user?.name ?? "";
  const userOrg = (session?.user as any)?.org ?? "";

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Investor Dashboard</h1>

      {session ? (
        <>
          <p className="text-lg mb-4">
            Welcome,{" "}
            <strong>
              {userName ? userName : userEmail ? userEmail : "Investor"}
            </strong>
            {userOrg && ` from ${userOrg}`}!
          </p>
          <p className="text-gray-500 mb-6">
            This is your secure investor portal. Real data coming soon.
          </p>
          <LogoutButton />
        </>
      ) : (
        <p className="text-gray-500">You are not signed in.</p>
      )}
    </div>
  );
}
