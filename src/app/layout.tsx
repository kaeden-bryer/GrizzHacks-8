import type { Metadata } from "next";
import localFont from "next/font/local";
import '../styles/globals.css';


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
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
