"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { useEffect } from "react";

export default function PrivyClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      const msg = args?.[0];
      // Silently swallow known benign hydration warnings from Privy
      if (
        typeof msg === "string" &&
        (msg.includes("<div> cannot be a descendant of <p>") ||
          msg.includes("<p> cannot contain a nested <div>") ||
          msg.includes("Hydration failed") ||
          msg.includes("hydration"))
      ) {
        return; // completely skip these
      }

      try {
        originalError(...args);
      } catch {
        // ignore
      }
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        appearance: {
          theme: "dark",
          accentColor: "#00bcd4",
          logo: "/xoncapital_logo_transparent.png",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
