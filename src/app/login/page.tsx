"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-3xl font-semibold mb-6">Investor Login</h1>
      <button
        onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign in with Microsoft
      </button>
    </div>
  );
}
