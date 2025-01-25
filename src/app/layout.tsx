import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrizzHacks 7",
  description: "Oakland University's Goated Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
