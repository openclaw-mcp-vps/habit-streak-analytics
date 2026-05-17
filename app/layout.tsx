import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Streak Analytics — Deep Analytics for Habit Tracking",
  description: "Import your habit data, uncover streak patterns, predict failures, and get ML-powered insights to build lasting habits."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="09e1bded-6af2-48e3-aad7-31af493238c7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
