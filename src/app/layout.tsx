"use client";

import { NeynarContextProvider, Theme } from "@neynar/react";
import "@neynar/react/dist/style.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <NeynarContextProvider
        settings={{
          clientId: "5ade282f-43ed-48f9-a55f-49e33808d918",
          defaultTheme: Theme.Light,
          eventsCallbacks: {
            onAuthSuccess: () => {},
            onSignout() {},
          },
        }}
      >
        <body>{children}</body>
      </NeynarContextProvider>
    </html>
  );
}
