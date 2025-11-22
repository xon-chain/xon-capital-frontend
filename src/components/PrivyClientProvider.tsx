"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { useEffect } from "react";

export default function PrivyClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Filter out Privy’s internal HTML warnings
  useEffect(() => {
    const original = console.error;
    console.error = (...args) => {
      const msg = args[0];
      if (
        typeof msg === "string" &&
        (msg.includes("<div> cannot be a descendant of <p>") ||
          msg.includes("<p> cannot contain a nested <div>"))
      ) {
        return; // ignore Privy UI hydration warnings
      }
      original(...args);
    };
    return () => {
      console.error = original;
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
