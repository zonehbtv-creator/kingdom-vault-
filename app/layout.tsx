import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kingdom Vault",
  description: "Your personal treasury of dreams, prophetic words, Kingdom quests, and spiritual impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f0520] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
