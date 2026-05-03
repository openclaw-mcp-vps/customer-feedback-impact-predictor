import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackROI — Predict Revenue Impact of Customer Feedback",
  description: "Analyze customer feedback and predict potential revenue impact of addressing each issue. Built for product managers and customer success teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8ef26065-1675-4934-ad7b-6df8a77ffe83"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
