import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rssllssn.com — Portfolio",
  description:
    "Russell's portfolio — a developer portfolio styled as a VS Code editor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
