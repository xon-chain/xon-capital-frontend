"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleSignOut = async () => {
    const tenantId = process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID;
    const postLogoutRedirectUri = window.location.origin;

    // Microsoft logout URL (clears Entra session)
    const logoutUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(
      postLogoutRedirectUri,
    )}`;

    // Sign out from NextAuth first (clears session cookie)
    await signOut({
      redirect: false,
    });

    // Then redirect to Microsoft logout
    window.location.href = logoutUrl;
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
    >
      Sign out
    </button>
  );
}
