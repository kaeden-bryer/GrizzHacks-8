import type { Metadata } from "next";
import Head from "next/head"; // Import the Head component
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
      <body className={`antialiased`}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
        </Head>
        {children}
      </body>
    </html>
  );
}
