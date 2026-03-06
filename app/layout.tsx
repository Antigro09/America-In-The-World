import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "America in the World | 1898–1945",
  description:
    "Is the United States a better version of itself in 1945 than it was in 1898? Explore the history of American leadership from 1890 to 1945.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
