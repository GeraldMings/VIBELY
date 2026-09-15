import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibely — Meet. Chat. Connect.",
  description:
    "Vibely is a global social platform to make friends, chat, connect, discover communities, and share interests.",
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
