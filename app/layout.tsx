import type React from "react";
import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible,
  Atkinson_Hyperlegible_Next,
  Geist,
} from "next/font/google";
import "./globals.css";

const inter = Geist({
  subsets: ["latin"],
  // weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "M&A Intelligence Dashboard",
  description: "Real-time M&A deal flow intelligence and monitoring platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
