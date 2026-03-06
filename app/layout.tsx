import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "America In The World | 1898 vs 1945",
  description: "Is the United States a better version of itself in 1945 than it was in 1898? A historical analysis by Anthony, Arnav, and Martin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
